import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useGetUser } from '../../hooks/useGetUser';
import { useAuth } from '../../context/AuthContext';

const Img = styled.img`
	width: 100%;
	height: 110px;
	object-fit: cover;
	border-radius: 5px;
	border: 1px solid var(--color-gray--1);
`;

const StyledDesc = styled.p`
	text-align: center;
`;

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const Friend = ({ friendId }) => {
	const [generalUser] = useGetUser(friendId);

	const { user } = useAuth();

	return (
		<Link to={`/profile/${generalUser.username}`}>
			<Img src={`${PUBLIC_URL}${generalUser.profilePicture || 'person/noAvatar.png'}`} />
			<StyledDesc>{user.username === generalUser.username ? 'You' : generalUser.username}</StyledDesc>
		</Link>
	);
};

export default Friend;
