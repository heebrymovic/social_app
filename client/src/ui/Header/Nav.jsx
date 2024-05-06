import styled from 'styled-components';

import NavIcons from './NavIcons';
import NavList from './NavList';
import NavProfile from './NavProfile';

const StyledNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--color-white);
	gap: 40px;

	@media (max-width: 768px) {
		gap: 20px;
	}
`;

const Nav = () => {
	return (
		<StyledNav>
			<NavList />
			<NavIcons />
			<NavProfile />
		</StyledNav>
	);
};

export default Nav;
