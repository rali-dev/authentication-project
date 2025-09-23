const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class {
  registerValidator(){
     return [
      check('email').isEmail().withMessage('Invalid email format'),
      check('name').not().isEmpty().withMessage('Name is required'),
      check('password').notEmpty().isLength({ min: 6 }).withMessage('Password cant be empty and must be at least 6 characters long')
     ]
  }

  loginValidator(){
     return [
      check('email').isEmail().withMessage('Invalid email format'),
      check('password').notEmpty().isLength({ min: 6 }).withMessage('Password cant be empty and must be at least 6 characters long')
     ]
  }
}