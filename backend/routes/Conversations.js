const express = require('express');

const ConversationsRouter = express.Router();

const { createConversation, getConversation } = require('../controllers/ConversationController');

ConversationsRouter.post('/create', createConversation);

ConversationsRouter.get('/:userId', getConversation);

module.exports = ConversationsRouter;
