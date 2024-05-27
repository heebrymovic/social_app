import styled from 'styled-components';
import { useEffect, forwardRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ChatBox from './ChatBox';
import { useAuth } from '../../../context/AuthContext';

const StyledBox = styled.div`
	height: 80%;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px 0;
`;

const ChatTop = forwardRef(function ChatTop({ chats, setChats }, ref) {
	const { user } = useAuth();

	const { conversationId } = useParams();

	useEffect(() => {
		const getChats = async () => {
			const res = await axios.get(`/api/messages/${conversationId}`);

			setChats(res.data.data);
		};

		getChats();
	}, [conversationId, setChats]);

	return (
		<StyledBox ref={ref}>
			{chats.map((chat) => (
				<ChatBox key={chat._id} own={chat.senderId === user._id} chat={chat} />
			))}
		</StyledBox>
	);
});

export default ChatTop;
