import styled from 'styled-components';
import ActiveFriend from '../ActiveFriend';

const StyledFriends = styled.div`
	flex: 1.5;
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 12px;

	@media (max-width: 768px) {
		display: none;
	}
`;

const user = {
	id: 5,
	profilePicture: 'person/5.jpeg',
	username: 'Thomas Holden'
};

const ChatOnline = () => {
	return (
		<StyledFriends>
			<ActiveFriend user={user} />
			<ActiveFriend user={user} />
			<ActiveFriend user={user} />
			<ActiveFriend user={user} />
			<ActiveFriend user={user} />
		</StyledFriends>
	);
};

export default ChatOnline;
