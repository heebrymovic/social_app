import styled from 'styled-components';

const StyledLink = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 15px;
	text-transform: capitalize;
`;

const StyledImg = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	object-fit: cover;
`;

const FriendList = ({ user }) => {
	const { profilePicture, username } = user;

	const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

	return (
		<li>
			<StyledLink href="">
				<StyledImg src={`${PUBLIC_URL}${profilePicture}`} /> <span>{username} </span>
			</StyledLink>
		</li>
	);
};

export default FriendList;
