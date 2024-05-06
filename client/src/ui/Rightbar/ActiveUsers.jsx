import styled from 'styled-components';

import User from './User';
import { Users as UsersData } from '../../data';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const ActiveUsers = () => {
	return (
		<Wrapper>
			<h4>Online Friends</h4>

			{UsersData.map((user) => (
				<User user={user} key={user.id} />
			))}
		</Wrapper>
	);
};

export default ActiveUsers;
