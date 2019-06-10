const Sequelize = require('sequelize');
const pg = require('pg');

const connection = new Sequelize('postgres', 'postgres', 'hackreactortest', {
  host: 'localhost',
  dialect: 'postgres'
});

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const ReviewPG = connection.define('sdc_nordstrom_reviews', {
    itemID: Number,
    reviews: String
  });

  module.exports = ReviewPG;