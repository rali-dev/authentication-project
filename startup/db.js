const mongoose = require('mongoose');
const debug = require('debug')('app:main');
const config = require('config');

module.exports = function (){
  mongoose
    .connect(config.get('db.address'))
    .then(() => debug('Connected to MongoDB...'))
    .catch((err) => debug('Could not connect to MongoDB...', err)); 
};