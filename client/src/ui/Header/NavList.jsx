import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledList = styled.div`
	display: flex;
	gap: 15px;

	@media (max-width: 768px) {
		display: none;
	}
`;

const NavList = () => {
	return (
		<StyledList>
			<Link to="/">Homepage</Link>
			<Link to="/profile">Timeline</Link>
		</StyledList>
	);
};

export default NavList;
