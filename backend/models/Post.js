const Mongoose = require('mongoose');

const PostSchema = new Mongoose.Schema(
	{
		userId: {
			type: String,
			required: true
		},
		description: {
			type: String,
			default: '',
			max: 1000
		},
		image: {
			type: String
		},
		likes: {
			type: Array,
			default: []
		}
	},
	{ timestamps: true }
);

const Post = Mongoose.model('Post', PostSchema);

module.exports = Post;
