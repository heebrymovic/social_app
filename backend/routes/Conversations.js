const express = require('express');

const ConversationsRouter = express.Router();

const { createConversation, getConversations, getConversation } = require('../controllers/ConversationController');

ConversationsRouter.post('/create', createConversation);

ConversationsRouter.get('/getConversation/:conversationId', getConversation);

ConversationsRouter.get('/:userId', getConversations);

module.exports = ConversationsRouter;
