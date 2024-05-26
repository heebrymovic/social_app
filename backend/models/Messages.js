const Mongoose = require('mongoose');

const type = {
	type: String
};

const MessageSchema = new Mongoose.Schema(
	{
		conversationId: type,
		senderId: type,
		message: type
	},
	{ timestamps: true }
);

const ConversationsModel = Mongoose.model('message', MessageSchema);

module.exports = ConversationsModel;
