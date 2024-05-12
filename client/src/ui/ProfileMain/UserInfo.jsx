import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { useGetUser } from '../../hooks/useGetUser';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const UserInfo = () => {
	const { username } = useParams();
	const [user] = useGetUser(username);

	return (
		<Wrapper>
			<h3>User Information</h3>

			<Wrapper>
				<p>
					<b>State:</b> {user.state || 'Not added yet'}
				</p>

				<p>
					<b>From:</b> {user.from || 'Not added yet'}
				</p>

				<p>
					<b>Relationship:</b> {user.relationship || 'Not added yet'}
				</p>
			</Wrapper>
		</Wrapper>
	);
};

export default UserInfo;
