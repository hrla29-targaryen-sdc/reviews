const express = require('express')
const parser = require('body-parser')
const app = express()
const port = 3004
const db = require('../database')
// const ReviewPG = require('../database/indexPostgres.js')
const path = require('path')
const seed = require('../database/seed.js')

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use('/items/reviews', express.static(path.join(__dirname, '../client/dist')));

//////////////////////////////////Mongo Requests//////////////////////////////////////

app.get('/reviews_mongo/:itemID', (req, res) => {

  const {itemID} = req.params;

  db.review.find({itemID: itemID})
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
})

app.post('/reviews_mongo', (req, res) => {

  const { itemID, reviews } = req.body

  db.review.create({
    itemID, reviews
  })
    .then(() => res.status(201).send("Post successful!"))
    .catch(err => res.status(404).send(err))
})

app.delete('/reviews_mongo', (req, res) => {

  const {itemID} = req.body

  db.review.deleteMany({itemID:itemID})
    .then(() => {
      res.status(200).send("Successfully deleted!");
    })
    .catch(err => res.status(404).send(err))
})

app.patch('/reviews_mongo', (req, res) => {

  const {itemID, reviews} = req.body;

  db.review.findOneAndUpdate({itemID: itemID}, {itemID, reviews})
    .then(() => {
      res.status(200).send("Successfully updated!");
    })
    .catch(err => res.status(404).send(err))
})


/////////////////////////////////////////Postgres Requests//////////////////////////////////////////

// app.get('/reviews_postgres/:itemID', (req, res) => {
//   const {itemID} = req.params;

//   ReviewPG.findAll({
//     where : {itemid: itemID},
//     attributes: ['itemid', 'reviews']
//   })
//     .then((data) => res.status(200).send(data))
//     .catch(err => res.status(404).send(err))
// })

// app.post('/reviews_postgres', (req, res) => {``
//   const { itemID, reviews } = req.body

//   ReviewPG.create({
//     itemid: itemID, reviews:reviews
//   })
//     .then(() => res.status(201).send("post successful"))
//     .catch(err => res.status(404).send(err))
// })

// app.delete('/reviews_postgres', (req, res) => {
//   const {itemID} = req.query;
//
//   ReviewPG.destroy({where : {itemid : itemID}})
//     .then(() => {
//       res.status(200).send("Deleted one");
//     })
//     .catch(err => res.status(404).send(err))
// })

// app.patch('/reviews_postgres', (req, res) => {
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