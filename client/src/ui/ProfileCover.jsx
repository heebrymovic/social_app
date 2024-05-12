import styled from 'styled-components';
import { useGetUser } from '../hooks/useGetUser';
import { useParams } from 'react-router-dom';

const StyledCoverPhoto = styled.div`
	width: 100%;
	height: 350px;
	position: relative;
	background:
		linear-gradient(rgba(36, 42, 46, 0.1), rgba(36, 42, 46, 0.1)),
		url(${(props) => props.src}) center/cover no-repeat;
`;

const StyledPhoto = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	top: calc(100% - 75px);
	object-fit: cover;
	border: 2px solid var(--color-white);
`;

const Description = styled.div`
	margin-top: 90px;
	text-align: center;
`;

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const ProfileCover = () => {
	const { username } = useParams();
	const [user] = useGetUser(username);

	return (
		<div>
			<StyledCoverPhoto src={`${PUBLIC_URL}${user.coverPhoto || '/person/noCover.png'}`}>
				<StyledPhoto src={`${PUBLIC_URL}${user.profilePicture || '/person/noAvatar.png'}`} />
			</StyledCoverPhoto>

			<Description>
				<h2>{user.username}</h2>
				<p>Hello My friends</p>
			</Description>
		</div>
	);
};

export default ProfileCover;
