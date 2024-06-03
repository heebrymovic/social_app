import styled from 'styled-components';

import OnlineFriends from '../OnlineFriends';

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

const ChatOnline = () => {
	return (
		<StyledFriends>
			<OnlineFriends to="chats" />
		</StyledFriends>
	);
};

export default ChatOnline;
