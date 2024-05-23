const Post = require('../models/Post');

const User = require('../models/User');

const fs = require('fs');

exports.createPost = async (req, res) => {
	if (req.file && req.file.filename) {
		req.body.image = 'post/' + req.file.filename;
	}

	const newPost = await new Post(req.body);

	try {
		const savedPost = await newPost.save();

		res.status(200).json({
			message: 'Post submitted succesfully',
			post: savedPost
		});
	} catch (err) {
		req.file && fs.unlinkSync(req.file.path);

		res.status(400).json({
			message: 'Unable to save post',
			error: err.message
		});
	}
};

exports.updatePost = async (req, res) => {
	const postId = req.params.postId;

	const { userId } = req.body;

	try {
		const post = await Post.findById(postId);

		if (post.userId === userId) {
			const updatedPost = await post.updateOne({ $set: req.body });

			res.status(200).json({
				message: 'Post succesfully updated',
				post: updatedPost
			});
		} else {
			res.status(401).json({
				message: 'Unable to update post',
				error: 'You can only update your post'
			});
		}
	} catch (err) {
		res.status(400).json({
			message: 'Unable to update post',
			error: err.message
		});
	}
};

exports.deletePost = async (req, res) => {
	const postId = req.params.postId;

	const { userId } = req.body;

	try {
		const post = await Post.findById(postId);

		if (!post) {
			return res.status(404).json({
				message: 'Unable to delete post',
				post: "Post doesn't exist"
			});
		}

		if (post.userId === userId) {
			const deletedPost = await post.deleteOne();

			res.status(200).json({
				message: 'Post succesfully deleted',
				post: deletedPost
			});
		} else {
			res.status(401).json({
				message: 'Unable to delete post',
				error: 'You can only delete your post'
			});
		}
	} catch (err) {
		res.status(400).json({
			message: 'Unable to delete post',
			error: err.message
		});
	}
};

exports.likePost = async (req, res) => {
	const postId = req.params.postId;

	const { userId } = req.body;

	try {
		const post = await Post.findById(postId);

		if (post.likes.includes(userId)) {
			await post.updateOne({ $pull: { likes: userId } });

			const newPost = await Post.findById(postId);

			res.status(200).json({
				message: 'Post succesfully unliked',
				post: newPost
			});
		} else {
			await post.updateOne({ $push: { likes: userId } });

			const newPost = await Post.findById(postId);
			res.status(200).json({
				message: 'Post succesfully liked',
				post: newPost
			});
		}
	} catch (err) {
		res.status(400).json({
			message: 'Failed to like post',
			err: err.message
		});
	}
};

exports.getPost = async (req, res) => {
	const postId = req.params.postId;

	try {
		const post = await Post.findById(postId);

		if (!post) {
			return res.status(404).json({
				message: 'Failed to query post',
				error: 'Post does not exist'
			});
		}

		res.status(200).json({
			message: 'Post succesfully queried',
			post
		});
	} catch (err) {
		res.status(400).json({
			message: 'Failed to get post',
			error: err.message
		});
	}
};

exports.getUserTimeline = async (req, res) => {
	const userId = req.params.userId;

	try {
		const user = await User.findById(userId);
		const userPost = await Post.find({ userId });
		const friendsPosts = await Promise.all(
			user.followings.map(async (friendsId) => await Post.find({ userId: friendsId }))
		);

		const posts = [...userPost, ...friendsPosts.flat()].sort(
			(postA, postB) => new Date(postB.createdAt) - new Date(postA.createdAt)
		);

		const message = posts.length === 0 ? 'No Post yet' : 'Timeline succesfully queried';

		res.status(200).json({
			message,
			posts
		});
	} catch (err) {
		res.status(400).json({
			message: 'Failed to get timeline posts',
			error: err.message
		});
	}
};

exports.getPosts = async (req, res) => {
	const username = req.params.username;

	try {
		const user = await User.findOne({ username });

		const posts = await Post.find({ userId: user._id });

		const sortedPost = posts.sort((postA, postB) => new Date(postB.createdAt) - new Date(postA.createdAt));

		const message = posts.length === 0 ? 'No Post yet' : 'Post succesfully queried';

		res.status(200).json({
			message,
			posts: sortedPost
		});
	} catch (err) {
		res.status(400).json({
			message: 'Failed to get all user posts',
			error: err.message
		});
	}
};
