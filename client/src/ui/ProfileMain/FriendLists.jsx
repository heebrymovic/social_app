import styled from 'styled-components';

import { useAuth } from '../../context/AuthContext';
import Friend from './Friend';

const StyledFriendLists = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;
	margin-top: 10px;
`;

const Wrapper = styled.div`
	margin-top: 35px;
`;

const FriendLists = () => {
	const { user } = useAuth();

	return (
		<Wrapper>
			<h3>User Friends</h3>

			{user.followings.length == 0 ? (
				<p>You are not following any body yet</p>
			) : (
				<StyledFriendLists>
					{user.followings.map((friendId) => (
						<Friend key={friendId} friendId={friendId} />
					))}
				</StyledFriendLists>
			)}
		</Wrapper>
	);
};

export default FriendLists;
