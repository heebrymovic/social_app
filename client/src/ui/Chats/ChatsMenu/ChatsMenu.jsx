import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';

import UserChatList from './UserChatList';
import { useAuth } from '../../../context/AuthContext';

const Wrapper = styled.div`
	padding: 25px 15px;
	overflow-y: auto;
	flex: 2;

	@media (max-width: 768px) {
		display: none;
	}
`;

const Search = styled.input`
	width: 100%;
	padding: 12px 5px;
	border-bottom: 1px solid var(--color-gray--1);
	font-size: 0.9rem;
	margin-bottom: 20px;
`;

const FriendsWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;

	& li {
		transition: 0.5s ease;
	}

	& li:hover {
		background: var(--color-gray--1);
	}
`;

const user = {
	id: 5,
	profilePicture: 'person/5.jpeg',
	username: 'Thomas Holden'
};

const ChatsMenu = () => {
	const [conversations, setConversations] = useState([]);

	const [chats, setChats] = useState([]);

	const { user } = useAuth();

	useEffect(() => {
		const getConversations = async () => {
			const res = await axios.get(`/api/conversations/${user._id}`);

			setConversations(res.data.conversations);
		};

		getConversations();
	}, [user]);

	return (
		<Wrapper>
			<Search type="text" placeholder="Search for friends" />
			<FriendsWrapper>
				{conversations.length === 0 ? (
					<p>No Chats Yet</p>
				) : (
					conversations.map((c) => <UserChatList conversation={c} key={c._id} />)
				)}
			</FriendsWrapper>
		</Wrapper>
	);
};

export default ChatsMenu;
