import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const StyledImg = styled.img`
	width: 38px;
	height: 38px;
	object-fit: cover;
	border-radius: 50%;
	cursor: pointer;
`;

const NavProfile = () => {
	const navigate = useNavigate();

	const { user } = useAuth();

	const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

	return (
		<div>
			<StyledImg
				onClick={() => navigate(`/profile/${user.username}`)}
				src={`${PUBLIC_URL}${user.profilePicture || '/person/noAvatar.png'}`}
			/>
		</div>
	);
};

export default NavProfile;
