const express = require('express')
const parser = require('body-parser')
const app = express()
const port = 3004
const db = require('../database')
const path = require('path')
const seed = require('../database/seed.js')

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/reviews', (req, res) => {
  // console.log("in get")

  //TODO: change this to get reviews based on unique itemID
  // const {itemID} = req.params;

  // db.review.find({itemID: itemID})
  db.review.find({})
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(404).send("error getAll: ", err))
})

app.post('/reviews', (req, res) => {``
  // console.log("in post")
  const { itemID, nickName, title, body, rating, fit } = req.body
  db.review.create({
    itemID, nickName, title, body, rating, fit
  })
    .then(() => res.status(201).send("post ok"))
    .catch(err => res.status(404).send("error posting: ", err))
})

app.delete('/reviews/delete', (req, res) => {
  // console.log("in deleteAll")
  db.review.deleteMany({})
    .then(() => {
      res.status(200).send("all deleted");
      seed.insertSampleReviews();
    })
    .catch(err => res.status(404).send("error deleting all: ", err))
})

app.patch('/reviews', (req, res) => {
  const {itemID, nickName, title, body, rating, fit} = req.body;
  db.review.findOneAndUpdate({itemID}, {itemID, nickName, title, body, rating, fit})
    .then(() => {
      res.status(200).send("Updated!");
    })
    .catch(err => res.status(404).send("error updating: ", err))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
})