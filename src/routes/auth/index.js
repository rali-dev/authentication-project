const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validator = require('./validator');

router.post(
  '/register',
  validator.registerValidator(),
  controller.validate,
  controller.register
);

router.post(
  '/login',
  validator.loginValidator(),
  controller.validate,
  controller.login
);
// stand alone function
// controller.register.bind(controller)
// using auto-bind package to avoid binding each method manually

module.exports = router; 
