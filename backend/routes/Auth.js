const express = require('express');

const AuthRouter = express.Router();

const { registerUser, loginUser, refreshAuth, logout } = require('../controllers/AuthController');

const User = require('../models/User');

AuthRouter.post('/register', registerUser);

AuthRouter.get('/refresh', refreshAuth);

AuthRouter.post('/login', loginUser);

AuthRouter.post('/logout', logout);

module.exports = AuthRouter;
