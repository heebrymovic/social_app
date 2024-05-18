import styled from 'styled-components';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useGetUser } from '../../hooks/useGetUser';
import { useAuth } from '../../context/AuthContext';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const StyledButton = styled.button.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !['isfollowing'].includes(prop)
})`
	padding: 12px 20px;
	cursor: pointer;
	font-size: 1rem;
	border-radius: 10px;
	background: var(${(props) => (props.isfollowing ? '--color-error' : '--color-green')});
	color: var(--color-white);
`;

const UserInfo = () => {
	const { username } = useParams();
	const [user, isLoading] = useGetUser(username);

	const { user: mainUser, dispatchAuth } = useAuth();

	const [isFollowing, setIsFollowing] = useState(mainUser.followings.includes(user._id));

	const ApiPath = `${isFollowing ? 'un' : ''}follow`;

	useEffect(() => {
		!isLoading && setIsFollowing(mainUser.followings.includes(user._id));
	}, [isLoading]);

	const handleFollowAction = async () => {
		try {
			const res = await axios.put(`/api/users/${ApiPath}/${user._id}`, { followerId: mainUser._id });

			setIsFollowing(!isFollowing);

			dispatchAuth({
				type: ApiPath === 'unfollow' ? 'UNFOLLOW' : 'FOLLOW',
				payload: user._id
			});

			toast(res.data.message);
		} catch (err) {
			toast.error(err.response.data.message || err.message);
		}
	};

	return (
		<Wrapper>
			{mainUser.username !== user.username && (
				<div>
					<StyledButton onClick={handleFollowAction} isfollowing={isFollowing}>
						{isFollowing ? 'Unfollow' : 'Follow'}
					</StyledButton>
				</div>
			)}

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
