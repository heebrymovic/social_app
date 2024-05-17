import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useGetUser } from '../../hooks/useGetUser';

const Img = styled.img`
	width: 100%;
	height: 110px;
	object-fit: cover;
	border-radius: 5px;
	border: 1px solid var(--color-gray--1);
`;

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const Friend = ({ friendId }) => {
	const [user] = useGetUser(friendId);

	return (
		<Link to={`/profile/${user.username}`}>
			<Img src={`${PUBLIC_URL}${user.profilePicture || 'person/noAvatar.png'}`} />
			<span>{user.username}</span>
		</Link>
	);
};

export default Friend;
