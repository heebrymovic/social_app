import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledImg = styled.img`
	width: 38px;
	height: 38px;
	object-fit: cover;
	border-radius: 50%;
	cursor: pointer;
`;

const NavProfile = () => {
	const navigate = useNavigate();

	const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

	return (
		<div>
			<StyledImg onClick={() => navigate('/profile')} src={`${PUBLIC_URL}person/1.jpeg`} />
		</div>
	);
};

export default NavProfile;
