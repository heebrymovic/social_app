import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

import ChatTop from './ChatTop';
import ChatBottom from './ChatBottom';
import { useAuth } from '../../../context/AuthContext';

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

	const { user } = useAuth();

	const messageRef = useRef();

	const topChatRef = useRef();

	const formRef = useRef();

	useEffect(() => {
		if (topChatRef.current) topChatRef.current.scrollTop = topChatRef.current.scrollHeight;
	}, [chats]);

	useEffect(() => {
		let keysPressed = {};

		const ev = (e) => {
			keysPressed[e.key] = true;

			console.log(keysPressed);

			if (!keysPressed['Shift'] && e.key === 'Enter') {
				messageRef.current.value && formRef.current.click();
			}
		};

		document.addEventListener('keyup', (e) => {
			delete keysPressed[e.key];
		});

		document.addEventListener('keydown', ev);

		return () => {
			document.removeEventListener('keydown', ev);
		};
	}, []);

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

			const res = await axios.post(`/api/messages/create`, newMessage);

			setChats((oldchats) => [...oldchats, res.data.data]);

			messageRef.current.value = '';
		} catch (err) {
			toast.error(err.response.data.error || err.message);
		}
	};

	return (
		<ConversationWrapper>
			{!conversationId ? (
				<StyledMessage>No Conversations yet</StyledMessage>
			) : (
				<>
					<ChatTop ref={topChatRef} chats={chats} setChats={setChats} />
					<ChatBottom formRef={formRef} messageRef={messageRef} onSubmit={handleSubmit} />
				</>
			)}
		</ConversationWrapper>
	);
};

export default Conversations;
