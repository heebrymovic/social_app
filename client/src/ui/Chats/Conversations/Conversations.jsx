import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

import ChatTop from './ChatTop';
import ChatBottom from './ChatBottom';
import { useAuth } from '../../../context/AuthContext';
import { useEvent } from './useEvent';

const ConversationWrapper = styled.div`
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	flex: 4.5;
	border: 1px solid var(--color-gray--1);

	@media (max-width: 768px) {
		padding: 0 0 0 5px;
	}
`;

const StyledMessage = styled.h3`
	margin: 50px auto;
	color: var(--color-gray--1);
	font-size: 4rem;
`;

const Conversations = () => {
	const { conversationId } = useParams();

	const [chats, setChats] = useState([]);

	const [receiverId, setReceiverId] = useState(null);

	const [conversationMessage, setConversationMessage] = useState(null);

	const { user, socket } = useAuth();

	const { setMessageAreaFocus, messageRef, formRef } = useEvent();

	const [typingId, setTypingId] = useState();

	const topChatRef = useRef();

	useEffect(() => {
		if (topChatRef.current) topChatRef.current.scrollTop = topChatRef.current.scrollHeight;
	}, [chats, typingId]);

	useEffect(() => {
		socket.current?.on('getMessage', (message) => {
			console.log(message);
			setConversationMessage({ ...message, _id: Date.now() });
		});

		socket.current?.on('typingUser', (typingUserId) => {
			setTypingId(typingUserId);
		});

		socket.current?.on('endTyping', (typingUserId) => {
			typingUserId === user._id && setTypingId('');
		});
	}, [setConversationMessage, socket]);

	useEffect(() => {
		conversationMessage &&
			conversationMessage.receiverId === user._id &&
			setChats((oldchats) => [...oldchats, conversationMessage]);
	}, [conversationMessage, user]);

	useEffect(() => {
		const getActiveFriendConversation = async () => {
			const res = await axios.get(`/api/conversations/getConversation/${conversationId}`);

			setReceiverId(res.data.conversation.members.find((memberId) => memberId !== user._id));
		};

		conversationId && getActiveFriendConversation();
	}, [conversationId, user]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const message = messageRef.current.value;

		if (!message) return;

		try {
			const newMessage = {
				conversationId,
				message,
				senderId: user._id
			};

			socket.current.emit('sendMessage', { message, senderId: user._id, receiverId, createAt: new Date() });

			const res = await axios.post(`/api/messages/create`, newMessage);

			setChats((oldchats) => [...oldchats, res.data.data]);

			messageRef.current.value = '';
		} catch (err) {
			toast.error(err.response.data.error || err.message);
		}
	};

	const handleKeyDown = (e) => {
		socket.current.emit('typing', { receiverId, senderId: user._id });
	};

	let timer;

	const handleKeyUp = (e) => {
		clearTimeout(timer);

		timer = setTimeout(() => {
			socket.current.emit('stopTyping', receiverId);
		}, 500);
	};

	return (
		<ConversationWrapper>
			{!conversationId ? (
				<StyledMessage>No Conversations yet</StyledMessage>
			) : (
				<>
					<ChatTop ref={topChatRef} chats={chats} typing={typingId} setChats={setChats} />
					<ChatBottom
						setMessageAreaFocus={setMessageAreaFocus}
						onKeyDown={handleKeyDown}
						onKeyUp={handleKeyUp}
						formRef={formRef}
						messageRef={messageRef}
						onSubmit={handleSubmit}
					/>
				</>
			)}
		</ConversationWrapper>
	);
};

export default Conversations;
