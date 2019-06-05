const seed = require ('./seed.js');
const db = require ('./index.js');

// let myData = seed.insertSampleReviews();

// const seeder = () => {
  //   db.review.insertMany(myData)
  //     .then(() => console.log('Success adding data to database!'))
  //     .catch(err => console.log(err))
  // }
  
  // seeder();



  //insertSampleReviews already does db.review.create inside it to add one instance's reviews to the database
  for (let i = 0; i < 5; i++) {
    seed.insertSampleReviews();
  };