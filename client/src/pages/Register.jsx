import styled from 'styled-components';
import { RegisterForm, AuthLeft } from '../ui/Auth';

const StyledAuthWrapper = styled.div`
	background: #f0f2f5;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		min-height: auto;
	}
`;

const StyledAuthInner = styled.div`
	max-width: 1400px;
	height: 70%;
	display: flex;
	align-items: center;

	& > * {
		flex: 1;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 20px 15px;
		height: auto;
		gap: 40px;
	}
`;

const Register = () => {
	return (
		<StyledAuthWrapper>
			<StyledAuthInner>
				<AuthLeft />
				<RegisterForm />
			</StyledAuthInner>
		</StyledAuthWrapper>
	);
};

export default Register;
