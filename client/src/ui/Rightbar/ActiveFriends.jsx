import styled from 'styled-components';

import ActiveFriend from '../ActiveFriend';
import { Users as UsersData } from '../../data';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const ActiveFriends = () => {
	return (
		<Wrapper>
			<h4>Online Friends</h4>

			{UsersData.map((user) => (
				<ActiveFriend user={user} key={user.id} />
			))}
		</Wrapper>
	);
};

export default ActiveFriends;
