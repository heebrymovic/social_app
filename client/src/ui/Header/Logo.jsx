import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogo = styled.h3`
	color: var(--color-white);

	@media (max-width: 768px) {
		grid-column: span 2;
	}
`;

const Logo = () => {
	return (
		<StyledLogo>
			<Link to="/">SOCIAL APP</Link>
		</StyledLogo>
	);
};

export default Logo;
