const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			min: 3,
			max: 20,
			unique: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true,
			min: 6
		},
		profilePicture: {
			type: String,
			default: ''
		},
		coverPicture: {
			type: String,
			default: ''
		},
		followers: {
			type: Array,
			default: []
		},
		followings: {
			type: Array,
			default: []
		},
		isAdmin: {
			type: Boolean,
			default: false
		},
		desc: {
			type: String,
			default: '',
			max: 500
		},
		state: {
			type: String,
			default: ''
		},
		from: {
			type: String,
			default: ''
		},
		relationship: {
			type: String,
			enum: ['single', 'married', 'divorced']
		}
	},
	{ timestamps: true }
);

const User = Mongoose.model('User', UserSchema);

module.exports = User;
