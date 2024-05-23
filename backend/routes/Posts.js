const express = require('express');

const PostRouter = express.Router();

const {
	createPost,
	updatePost,
	deletePost,
	likePost,
	getPost,
	getUserTimeline,
	getPosts
} = require('../controllers/PostsController');

const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/uploads/post');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + file.originalname);
	}
});

const upload = multer({ storage });

/*CREATE A POST*/
PostRouter.post('/create', upload.single('file'), createPost);

/*UPDATE A POST*/
PostRouter.put('/update/:postId', updatePost);

/*DELETE A POST*/
PostRouter.delete('/delete/:postId', deletePost);

/*LIKE/DISLIKE POST*/

PostRouter.put('/like/:postId', likePost);

/*GET A POST*/
PostRouter.get('/getpost/:postId', getPost);

/*Get all timeline post*/
PostRouter.get('/timeline/all/:userId', getUserTimeline);

/*GET ALL USERS POST*/

PostRouter.get('/allposts/:username', getPosts);

module.exports = PostRouter;
