import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	gap: 15px;
	text-transform: capitalize;
	padding: 8px 5px;
`;

const StyledImg = styled.img`
	width: 38px;
	height: 38px;
	border-radius: 50%;
	object-fit: cover;
`;

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const FriendList = ({ user, to }) => {
	const { profilePicture, username } = user;

	return (
		<li>
			<StyledLink to={to}>
				<StyledImg src={`${PUBLIC_URL}${profilePicture}`} /> <span>{username || 'John Doe'} </span>
			</StyledLink>
		</li>
	);
};

export default FriendList;
