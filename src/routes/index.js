const express = require('express');
const router = express.Router();
const authRouter = require('./auth/index');
const userRouter = require('./user/index');
const {isLoggedIn} = require('./../middlewares/auth');

router.use('/auth', authRouter);
router.use('/user', isLoggedIn, userRouter);

module.exports = router;
