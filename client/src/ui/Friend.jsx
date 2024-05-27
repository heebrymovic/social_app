import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link).withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !['active'].includes(prop)
})`
	display: flex;
	align-items: center;
	gap: 15px;
	text-transform: capitalize;
	padding: 8px 5px;
	transition: 0.5s ease;

	background: ${(props) => (props.active ? 'var(--color-gray--1)' : '')};
`;

const StyledImg = styled.img`
	width: 38px;
	height: 38px;
	border-radius: 50%;
	object-fit: cover;
`;

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const FriendList = ({ user, to, active }) => {
	const { profilePicture, username } = user;

	return (
		<li>
			<StyledLink to={to} active={active}>
				<StyledImg src={`${PUBLIC_URL}${profilePicture || '/person/noAvatar.png'}`} />{' '}
				<span>{username || 'John Doe'} </span>
			</StyledLink>
		</li>
	);
};

export default FriendList;
