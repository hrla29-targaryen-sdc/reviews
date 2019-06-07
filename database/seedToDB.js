const seed = require ('./seed.js');
const db = require ('./index.js');
const fs = require('fs');
const faker = require('faker');

//3-5 reviews per item ==> 30-50 million reviews
let numReviews = Math.floor((Math.random()*3) + 3);
//declare ID for each instance
let itemID = 1;

const insertSampleReviews = function() {
  let instance = {};
  instance.itemID = itemID;
  instance.reviews = getReviews();
  numReviews = Math.floor((Math.random()*3) + 3);
  itemID++;
  return instance;
};

const getReviews = function() {
  let array = [];
  for (var i = 0; i < numReviews; i++) {
    let singleReview = {};
    singleReview.reviewID = i+1;
    singleReview.createdAt = faker.date.recent();
    singleReview.nickName = faker.name.firstName();
    singleReview.title = faker.random.word();
    singleReview.body = faker.random.words();
    singleReview.rating = faker.random.number({
      'min': 1,
      'max': 5
  });
    singleReview.fit = faker.random.number({
      'min': 1,
      'max': 5
  });

    array.push(singleReview)
  }
  return array;
}

  
console.time('writeReviewsToFile')

let stream = fs.createWriteStream("./DONTOPENdataFile.json");

const populate = async() => {
  for(let i = 1; i <= 10000000; i++) {
    if(!stream.write(JSON.stringify(insertSampleReviews()) + (i === 10000000 ? ']' : ','))) {
      await new Promise(resolve => stream.once('drain', resolve));
    }
    if (i === 10000000) {
      console.timeEnd('writeReviewsToFile')
    }
  }
}

stream.write('[', populate);


//mongoimport --db SDC_Nordstrom_Reviews --collection reviews --file "/Users/admin/Desktop/SDC review-service/DONTOPENdataFile.json" --jsonArray