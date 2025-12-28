require('express-async-errors');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const debug = require('debug')('app:main');
const config = require('config');
const winston = require('winston');

const router = require('./src/routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose
  .connect(config.get('db.address'))
  .then(() => debug('Connected to MongoDB...'))
  .catch((err) => debug('Could not connect to MongoDB...', err));

// Handles unexpected errors thrown synchronously in the application
process.on('uncaughtException', (ex) => {
  console.log('Uncaught Exception');
  winston.error(ex.message, ex);
});

// Handles unhandled promise rejections (asynchronous errors)
process.on('unhandledRejection', (ex) => {
  console.log('Unhandled Rejection');
  winston.error(ex.message, ex);
});

winston.add(new winston.transports.File({ filename: 'logfile.log' }));


/* 
// Test unhandled rejection
const p = Promise.reject(new Error('Something failed outside'));
p.then(() => console.log('Done'));

// Test uncaught exception
throw new Error('Something failed outside'); 
*/
app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));