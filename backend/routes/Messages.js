const express = require('express');

const MessageRouter = express.Router();

const { createMessage, getMessages } = require('../controllers/MessagesController');

MessageRouter.post('/create', createMessage);

MessageRouter.get('/:conversationId', getMessages);

module.exports = MessageRouter;
