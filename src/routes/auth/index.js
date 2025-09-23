const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post(
  '/register',
  controller.register
);

router.post(
  '/login',
  controller.login
);
// stand alone function
// controller.register.bind(controller)
// using auto-bind package to avoid binding each method manually

module.exports = router; 
