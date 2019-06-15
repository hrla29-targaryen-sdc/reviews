const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/SDC_Nordstrom_Reviews', {useNewUrlParser: true});
mongoose.connect('mongodb://ec2-34-219-177-72.us-west-2.compute.amazonaws.com:27017/SDC_Nordstrom_Reviews', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected!')
});

// var reviewSchema = new mongoose.Schema({
//   itemID: {
//     type: Number,
//     required: true
//   },
//   nickName: {
//     type: String,
//     required: true
//   },

//   rating: {
//     type: Number,
//     required: true
//   },

//   title: {
//     type: String,
//     required: true
//   },

//   body: {
//     type: String,
//     required: true
//   },

//   fit: {
//     type: Number,
//     required: true
//   }  
// }, {timestamps: true});

var reviewSchema = new mongoose.Schema({
  itemID: {
    type: Number,
    required: true
  },
  reviews: {
    type: Array,
    required: true
  }
}, {timestamps: true});

const review = mongoose.model('Reviews', reviewSchema);

module.exports = {
  db,
  review
}