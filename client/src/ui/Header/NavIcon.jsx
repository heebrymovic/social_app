import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledIconWrapper = styled(Link)`
	position: relative;
	cursor: pointer;
	display: grid;
	place-items: center;
`;

const StyledBadge = styled.span`
	width: 18px;
	height: 18px;
	background: red;
	border-radius: 50%;
	display: grid;
	place-items: center;
	position: absolute;
	top: -10px;
	left: 10px;
	font-weight: 600;
	font-size: 0.7rem;
`;

const NavIcon = ({ Icon, number, to = '' }) => {
	return (
		<StyledIconWrapper to={to}>
			<Icon />
			<StyledBadge>{number}</StyledBadge>
		</StyledIconWrapper>
	);
};

export default NavIcon;
