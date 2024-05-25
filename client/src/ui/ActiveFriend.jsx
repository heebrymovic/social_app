import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Img = styled.img`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	object-fit: cover;
`;

const UserWrapper = styled(Link)`
	display: flex;
	align-items: center;
	gap: 12px;
`;

const Active = styled.span`
	width: 12px;
	height: 12px;
	background: green;
	border-radius: 50%;
	position: absolute;
	right: 5%;
	top: 3%;
	border: 1px solid var(--color-white);
`;

const ActiveWrapper = styled.div`
	position: relative;
`;

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const ActiveFriend = ({ user, to }) => {
	const { profilePicture, username } = user;

	return (
		<UserWrapper to={to}>
			<ActiveWrapper>
				<Img src={`${PUBLIC_URL}${profilePicture}`} />
				<Active />
			</ActiveWrapper>
			<h4>{username}</h4>
		</UserWrapper>
	);
};

export default ActiveFriend;
