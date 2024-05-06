import styled from 'styled-components';

const StyledList = styled.li`
	display: flex;
	flex-direction: column;
	transition: 0.5s ease;

	&:hover {
		background: var(--color-gray--0);
	}
`;

const StyledLink = styled.a`
	padding: 8px 0;
	display: flex;
	gap: 20px;
	align-items: center;
`;

const SidebarList = ({ Icon, text, to }) => {
	return (
		<StyledList>
			<StyledLink href="">
				<Icon /> <span>{text}</span>
			</StyledLink>
		</StyledList>
	);
};

export default SidebarList;
