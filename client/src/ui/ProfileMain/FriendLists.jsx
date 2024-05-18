import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { useGetUser } from '../../hooks/useGetUser';
import Friend from './Friend';
import Spinner from '../Spinner';

const StyledFriendLists = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;
	margin-top: 10px;
`;

const Wrapper = styled.div`
	margin-top: 35px;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const FriendLists = () => {
	const { username } = useParams();
	const [generalUser, isLoading] = useGetUser(username);

	const { user } = useAuth();

	return (
		<Wrapper>
			<h3>User Friends</h3>

			{isLoading ? (
				<Spinner />
			) : (
				<>
					{generalUser.followings && generalUser.followings.length === 0 ? (
						<p>{`${
							generalUser.username === user.username ? 'You are' : 'User'
						} not following anybody yet`}</p>
					) : (
						<StyledFriendLists>
							{generalUser.followings &&
								generalUser.followings.map((friendId) => <Friend key={friendId} friendId={friendId} />)}
						</StyledFriendLists>
					)}
				</>
			)}
		</Wrapper>
	);
};

export default FriendLists;
