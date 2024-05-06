import styled from 'styled-components';

import Logo from './Logo';
import Search from './Search';
import Nav from './Nav';

const StyledHeader = styled.header`
	height: 65px;
	background: var(--color-main);
	display: grid;
	grid-template-columns: 20% 1.2fr 1fr;
	align-items: center;
	padding-inline: 20px;
	gap: 20px;
	position: sticky;
	top: 0%;
	width: 100%;
	z-index: 99;
`;

const Header = () => {
	return (
		<StyledHeader>
			<Logo />
			<Search />
			<Nav />
		</StyledHeader>
	);
};

export default Header;
