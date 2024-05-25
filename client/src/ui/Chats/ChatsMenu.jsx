import styled from 'styled-components';

import Friend from '../Friend';

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
	return (
		<Wrapper>
			<Search type="text" placeholder="Search for friends" />
			<FriendsWrapper>
				<Friend user={user} />
				<Friend user={user} />
				<Friend user={user} />
				<Friend user={user} />
			</FriendsWrapper>
		</Wrapper>
	);
};

export default ChatsMenu;
