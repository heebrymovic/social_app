import styled from 'styled-components';

const StyledWrapper = styled.div`
	padding-inline: 40px;

	@media (max-width: 768px) {
		padding-inline: 0px;
	}
`;

const Title = styled.h1`
	font-size: 3rem;
	color: var(--color-main);
`;

const Description = styled.p`
	font-size: 1.3rem;
	margin-top: 10px;
`;

const AuthLeft = () => {
	return (
		<StyledWrapper>
			<Title>Social App</Title>
			<Description>Connect With Friends and the World Around you on Social App</Description>
		</StyledWrapper>
	);
};

export default AuthLeft;
