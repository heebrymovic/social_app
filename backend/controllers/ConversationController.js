const Conversation = require('../models/Conversations');

const User = require('../models/User');

exports.createConversation = async (req, res) => {
	const { senderId, receiverId } = req.body;

	if (!senderId || !receiverId) {
		return res.status(400).json({
			message: 'Cannot create conversations',
			error: 'Both senderId and receiverId is needed in the request body'
		});
	}

	try {
		const checkSender = await User.findById(senderId);

		const checkReceiver = await User.findById(receiverId);

		if (!checkSender || !checkReceiver) {
			return res.status(400).json({
				message: 'Cannot create conversations',
				error: 'Both senderId and receiverId must be a valid User'
			});
		}

		const memberExist = await Conversation.findOne({ members: { $eq: [senderId, receiverId] } });

		if (memberExist) {
			return res.status(400).json({
				message: 'Cannot create conversations',
				error: 'Both senderId and receiverId Already started a conversation'
			});
		}

		const newConversation = await new Conversation({ members: [senderId, receiverId] });

		const savedConversation = await newConversation.save();

		res.status(200).json({
			message: 'Conversations successfully created',
			conversation: savedConversation
		});
	} catch (err) {
		res.status(401).json({
			message: 'Cannot create conversations',
			error: err.message
		});
	}
};

exports.getConversation = async (req, res) => {
	const userId = req.params.userId;

	try {
		const conversations = await Conversation.find({ members: { $in: [userId] } });

		if (conversations.length == 0) {
			return res.status(400).json({
				message: 'Cannot get conversations',
				error: 'Users does not exists'
			});
		}

		res.status(200).json({
			message: 'Conversation successfully queried',
			conversations
		});
	} catch (err) {
		res.status(401).json({
			message: 'Cannot get conversations',
			error: err.message
		});
	}
};
