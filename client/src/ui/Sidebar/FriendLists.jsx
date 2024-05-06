import styled from 'styled-components';

import FriendList from './FriendList';
import { Users as UsersData } from '../../data';

const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const FriendLists = () => {
	return (
		<StyledList>
			{UsersData.map((user) => (
				<FriendList user={user} key={user.id} />
			))}
		</StyledList>
	);
};

export default FriendLists;
