import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const StyledList = styled.div`
	display: flex;
	gap: 15px;

	@media (max-width: 768px) {
		display: none;
	}
`;

const NavList = () => {
	const { user } = useAuth();

	return (
		<StyledList>
			<Link to="/">Homepage</Link>
			<Link to={`/profile/${user.username}`}>Timeline</Link>
		</StyledList>
	);
};

export default NavList;
