const express = require('express');

const bcrypt = require('bcrypt');

const AuthRouter = express.Router();

const User = require('../models/User');

AuthRouter.post('/register', async (req, res) => {
	const { username, email, password } = req.body;

	try {
		const salt = await bcrypt.genSalt(10);

		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = await new User({ username, email, password: hashedPassword });

		const user = await newUser.save();

		res.status(200).json({
			message: 'User successfully created',
			user
		});
	} catch (err) {
		res.status(400).json({
			message: 'User not created',
			error: err.message
		});
	}
});

AuthRouter.post('/login', async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		res.status(400).json({
			message: 'An error occured',
			error: 'Both email and password are required'
		});
	}

	try {
		const confirmUser = await User.findOne({ email });

		if (confirmUser) {
			const verifyPassword = await bcrypt.compare(password, confirmUser.password);

			if (verifyPassword) {
				res.status(200).json({
					message: 'Login Successful',
					user: confirmUser
				});
			} else {
				res.status(401).json({
					message: 'Login not successfull',
					error: 'Invalid password'
				});
			}
		} else {
			res.status(404).json({
				message: 'Login not successfull',
				error: 'User not found'
			});
		}
	} catch (err) {
		res.status(400).json({
			message: 'Login not successfull',
			error: err.message
		});
	}
});

module.exports = AuthRouter;
