const Mongoose = require('mongoose');

const ConversationSchema = new Mongoose.Schema(
	{
		members: {
			type: Array
		}
	},
	{ timestamps: true }
);

const ConversationsModel = Mongoose.model('conversation', ConversationSchema);

module.exports = ConversationsModel;
