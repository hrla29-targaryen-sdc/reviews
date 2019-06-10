const express = require('express')
const parser = require('body-parser')
const app = express()
const port = 3004
const db = require('../database')
const ReviewPG = require('../database/indexPostgres.js')
const path = require('path')
const seed = require('../database/seed.js')

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(express.static(path.join(__dirname, '../client/dist')));

////////////////Mongo////////////////////

app.get('/reviews_mongo', (req, res) => {
  // console.log("in get")

  const {itemID} = req.query;

  db.review.find({itemID: itemID})
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(404).send("error getAll: ", err))
})

app.post('/reviews_mongo', (req, res) => {``
  // console.log("in post")
  const { itemID, nickName, title, body, rating, fit } = req.body
  db.review.create({
    itemID, nickName, title, body, rating, fit
  })
    .then(() => res.status(201).send("post ok"))
    .catch(err => res.status(404).send("error posting: ", err))
})

app.delete('/reviews_mongo', (req, res) => {
  // console.log("in deleteAll")
  db.review.deleteMany({})
    .then(() => {
      res.status(200).send("all deleted");
      seed.insertSampleReviews();
    })
    .catch(err => res.status(404).send("error deleting all: ", err))
})

app.patch('/reviews_mongo', (req, res) => {
  const {_id, itemID, nickName, title, body, rating, fit} = req.body;
  db.review.findOneAndUpdate({_id}, {itemID, nickName, title, body, rating, fit})
    .then(() => {
      res.status(200).send("Updated!");
    })
    .catch(err => res.status(404).send("error updating: ", err))
})


/////////////////Postgres/////////////////////////////

app.get('/reviews_postgres', (req, res) => {
  // console.log("in get")

  const {itemID} = req.query;

  ReviewPG.findAll({
    where : {itemid: itemID},
    attributes: ['itemid', 'reviews']
  })
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
})

// app.post('/reviews_postgres', (req, res) => {``
//   // console.log("in post")
//   const { itemID, reviews } = req.body

//   ReviewPG.create({
//     itemid: itemID, reviews:reviews
//   })
//     .then(() => res.status(201).send("post successful"))
//     .catch(err => res.status(404).send(err))
// })

// app.delete('/reviews_postgres', (req, res) => {
//   // console.log("in deleteAll")
//
//   const {itemID} = req.query;
//
//   ReviewPG.destroy({where : {itemid : itemID}})
//     .then(() => {
//       res.status(200).send("Deleted one");
//     })
//     .catch(err => res.status(404).send(err))
// })

// app.patch('/reviews_postgres', (req, res) => {
//
//   const {itemID, reviews} = req.query;
//
//   ReviewPG.update({ itemid:itemID, reviews:reviews}, {
//   where: {
//     itemid: itemID
//   }
// })
//     .then(() => {
//       res.status(200).send("Updated!");
//     })
//     .catch(err => res.status(404).send(err))
// })

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
})