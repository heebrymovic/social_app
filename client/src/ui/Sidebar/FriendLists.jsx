import styled from 'styled-components';

import Friend from '../Friend';
import { Users as UsersData } from '../../data';

const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const FriendLists = () => {
	return (
		<StyledList>
			{UsersData.map((user) => (
				<Friend user={user} key={user.id} />
			))}
		</StyledList>
	);
};

export default FriendLists;
