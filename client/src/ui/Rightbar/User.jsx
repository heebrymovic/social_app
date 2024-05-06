import styled from 'styled-components';

const Img = styled.img`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	object-fit: cover;
`;

const UserWrapper = styled.div`
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

const User = ({ user }) => {
	const { profilePicture, username } = user;

	return (
		<UserWrapper>
			<ActiveWrapper>
				<Img src={`/assets/${profilePicture}`} />
				<Active />
			</ActiveWrapper>
			<h4>{username}</h4>
		</UserWrapper>
	);
};

export default User;
