const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.refreshAuth = async (req, res) => {
	const refreshToken = req.cookies?.jwt;

	if (!refreshToken) {
		return res.status(401).json({
			message: 'Access Denied',
			error: 'Unauthorized'
		});
	}

	try {
		const decodedToken = await jwt.verify(refreshToken, process.env.REFRESH_TOKEN);

		const foundUser = await User.findById({ _id: decodedToken.userId });

		if (!foundUser) {
			return res.status(401).json({
				message: 'Access Denied',
				error: 'Unauthorized'
			});
		}

		const { password, ...user } = foundUser._doc;

		const accessToken = jwt.sign({ userId: foundUser._id }, process.env.ACCESS_TOKEN);

		res.status(200).json({
			message: 'Authorized',
			user: { ...user, token: accessToken }
		});
	} catch (err) {
		return res.status(401).json({
			message: 'Access Denied',
			error: err.message
		});
	}
};

exports.loginUser = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({
			message: 'An error occured',
			error: 'Both email and password are required'
		});
	}

	try {
		const confirmUser = await User.findOne({ email });

		if (confirmUser) {
			const verifyPassword = await bcrypt.compare(password, confirmUser.password);

			if (verifyPassword) {
				const accessToken = jwt.sign({ userId: confirmUser._id }, process.env.ACCESS_TOKEN, {
					expiresIn: '1m'
				});

				const refreshToken = jwt.sign({ userId: confirmUser._id }, process.env.REFRESH_TOKEN, {
					expiresIn: '1d'
				});

				res.cookie('jwt', refreshToken, {
					httpOnly: true,
					secure: true,
					maxAge: 1000 * 60 * 60 * 24
				});

				const { password: confirmPassword, ...user } = confirmUser._doc;

				res.status(200).json({
					message: 'Login Successful',
					user: { ...user, token: accessToken }
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
};

exports.logout = async (req, res) => {
	const refreshToken = req.cookies?.jwt;

	if (!refreshToken) return res.status(204).json({ message: 'Unauthorized' });

	try {
		res.clearCookie('jwt', refreshToken, {
			httpOnly: true,
			secure: true,
			maxAge: 1000 * 60 * 60 * 24
		});

		res.status(200).json({
			message: 'Logout Successful'
		});
	} catch (err) {
		res.status(401).json({
			message: 'Logout Not Successful',
			error: err.message
		});
	}
};

exports.registerUser = async (req, res) => {
	const { username, email, password } = req.body;

	try {
		const checkUser = await User.findOne({ $or: [{ username }, { email }] });

		if (checkUser) {
			const error = username === checkUser.username ? 'Username already Exist' : 'Email already exist';

			return res.status(400).json({
				message: 'Failed to create user',
				error
			});
		}

		const salt = await bcrypt.genSalt(10);

		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = await new User({ username, email, password: hashedPassword });

		const creatUser = await newUser.save();

		const { password: userPassword, ...user } = creatUser._doc;

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
};
