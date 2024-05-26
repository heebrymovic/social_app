const Messages = require('../models/Messages');

exports.createMessage = async (req, res) => {
	const { message, conversationId, senderId } = req.body;

	if (!message || !conversationId || !senderId) {
		return res.status(400).json({
			message: 'Cannot create message',
			error: 'message, conversationId and senderId is required in the request body'
		});
	}

	try {
		const newMessages = await new Messages(req.body);

		const savedMessages = await newMessages.save();

		res.status(200).json({
			messsage: 'Message successsfully created',
			data: savedMessages
		});
	} catch (err) {
		res.status(401).json({
			messsage: 'Failed to create message',
			data: err.message
		});
	}
};

exports.getMessages = async (req, res) => {
	const conversationId = req.params.conversationId;

	try {
		const messages = await Messages.find({ conversationId });

		res.status(200).json({
			message: 'Messages successsfully Queried',
			data: messages
		});
	} catch (err) {
		res.status(401).json({
			message: 'Cannot query messages',
			error: err.message
		});
	}
};
