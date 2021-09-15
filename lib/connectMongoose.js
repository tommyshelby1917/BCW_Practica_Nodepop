'use strict';

const mongoose = require('mongoose');

// We subscribe to an event with .on();
mongoose.connection.on('error', err => {
  console.log('Database connection error', err);
  process.exit(1);
});

mongoose.connection.once('open', () => {
  console.log('The application', mongoose.connection.name.toUpperCase(), 'it\'s now connected to a DATABASE (MongoDB)!');
});

mongoose.connect('mongodb://localhost/nodeapi', {});

module.exports = mongoose.connection;