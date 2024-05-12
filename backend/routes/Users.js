const express = require('express');

const UserRouter = express.Router();

const bcrypt = require('bcrypt');

const User = require('../models/User');

const mongoose = require('mongoose');

/*
	update user
	delete user
	get user
	follow user
	unfollow user

*/

UserRouter.put('/update/:id', async (req, res) => {
	const { oldPassword, password, isAdmin, userId } = req.body;

	const id = req.params.id;

	if (!userId) {
		res.status(400).json({
			message: 'Cannot update account',
			error: 'userId needed in the request body'
		});
	}

	if (id !== userId) {
		res.status(500).json({
			message: 'Cannot update account',
			error: 'You can update your own account'
		});
	}

	try {
		if (oldPassword || password) {
			const getUser = await User.findById({ _id: id });

			const verifyPassword = await bcrypt.compare(oldPassword, getUser.password);

			if (verifyPassword || isAdmin) {
				const salt = await bcrypt.genSalt(10);

				const hashedPassword = await bcrypt.hash(password, salt);

				req.body.password = hashedPassword;
			} else {
				res.status(403).json({
					message: 'Failed to update user',
					error: "Password doesn't Match"
				});
			}
		}

		const user = await User.findByIdAndUpdate(id, { $set: req.body });

		res.status(200).json({
			message: 'User account successfully updated',
			user
		});
	} catch (err) {
		res.status(400).json({
			message: 'Update failed',
			error: err.message
		});
	}
});

/*Delete User*/
UserRouter.delete('/delete/:id', async (req, res) => {
	const id = req.params.id;

	if (!id) {
		res.status(400).json({
			message: 'Cannot delete account',
			error: 'id is required'
		});
	}

	try {
		const user = await User.deleteOne({ _id: id });

		res.status(200).json({
			message: 'User account successfully deleted',
			user
		});
	} catch (err) {
		res.status(400).json({
			message: 'Failed to delete user account',
			error: err.message
		});
	}
});

/*GET User*/
UserRouter.get('/getuser/:id', async (req, res) => {
	const userId = req.params.id;

	try {
		const isValidObjectId = mongoose.isObjectIdOrHexString(userId);

		const user = await User.findOne(isValidObjectId ? { _id: userId } : { username: userId });

		if (!user) {
			return res.status(404).json({
				message: 'Cannot get User data',
				error: 'Invalid User Id'
			});
		}

		const { password, updatedAt, ...others } = user._doc;

		res.status(200).json({
			message: 'Users Queried successfully',
			user: others
		});
	} catch (err) {
		res.status(400).json({
			message: 'Failed to get user data',
			error: err.message
		});
	}
});

/*Follow user*/
UserRouter.put('/follow/:id', async (req, res) => {
	const { followerId } = req.body;

	const userId = req.params.id;

	if (!userId || !followerId) {
		res.status(400).send({
			message: 'Failed to follow users',
			error: 'Both follower user id and following user id are required'
		});
	}

	if (userId === followerId) {
		res.status(403).json({
			message: 'Failed to follow users',
			error: 'You cannot follow yourself'
		});
	}

	try {
		const followingUser = await User.findById({ _id: userId });

		const followedUser = await User.findById({ _id: followerId });

		if (followedUser.followings.includes(followingUser.id)) {
			res.status(401).json({
				message: 'Failed to follow user',
				error: 'You have already followed this user'
			});
		} else {
			await followingUser.updateOne({ $push: { followers: followerId } });

			await followedUser.updateOne({ $push: { followings: userId } });

			res.status(200).json({
				message: 'You have succesfully followed this user',
				user: followingUser
			});
		}
	} catch (err) {
		res.status(400).json({
			message: 'Failed to follow user',
			error: err.message
		});
	}
});

/*UnFollow user*/
UserRouter.put('/unfollow/:id', async (req, res) => {
	const { followerId } = req.body;

	const followingId = req.params.id;

	if (!followingId || !followerId) {
		res.status(400).send({
			message: 'Failed to unfollow user',
			error: 'Both follower user id and following user id are required'
		});
	}

	if (followingId === followerId) {
		res.status(403).json({
			message: 'Failed to unfollow users',
			error: 'You cannot unfollow yourself'
		});
	}

	try {
		const followingUser = await User.findById(followerId);

		const followedUser = await User.findById(followingId);

		if (!followedUser.followers.includes(followerId)) {
			res.status(401).json({
				message: 'Failed to unfollow user',
				error: 'You are not a followers of this user'
			});
		} else {
			await followingUser.updateOne({
				$pull: { followings: followingId }
			});

			await followedUser.updateOne({
				$pull: { followers: followerId }
			});

			res.status(200).json({
				message: 'You have succesfully unfollowed this user'
			});
		}
	} catch (err) {
		res.status(400).json({
			message: 'Failed to unfollow user',
			error: err.message
		});
	}
});

module.exports = UserRouter;
