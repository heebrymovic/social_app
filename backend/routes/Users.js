const express = require('express');

const UserRouter = express.Router();

const { updateUser, deleteUser, getUser, followUser, unfollowUser } = require('../controllers/UsersController');
/*
	update user
	delete user
	get user
	follow user
	unfollow user

*/

UserRouter.put('/update/:id', updateUser);

/*Delete User*/
UserRouter.delete('/delete/:id', deleteUser);

/*GET User*/
UserRouter.get('/getuser/:id', getUser);

/*Follow user*/
UserRouter.put('/follow/:id', followUser);

/*UnFollow user*/
UserRouter.put('/unfollow/:id', unfollowUser);

module.exports = UserRouter;
