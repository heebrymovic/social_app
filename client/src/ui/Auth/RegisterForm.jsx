import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Input from '../Input';

const StyledWrapper = styled.div`
	background: var(--color-white);
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Button = styled.button.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !['bg'].includes(prop)
})`
	padding: 12px 15px;
	border-radius: 10px;
	cursor: pointer;
	background: var(${(props) => (props.bg ? `--color-${props.bg}` : '--color-main')});
	color: var(--color-white);
	font-weight: 600;
	font-size: 1rem;
`;

const StyledLink = styled(Link)`
	text-align: center;
	color: var(--color-main);
`;

const LoginForm = () => {
	return (
		<StyledWrapper>
			<h2>Create an account</h2>

			<Form>
				<Input type="text" placeholder="Enter Your Fullname" />

				<Input type="email" placeholder="Enter Your Email" />

				<Input type="password" placeholder="Enter Your Password" />

				<Input type="password" placeholder="Confirm Password" />

				<Button>Register</Button>
			</Form>

			<p>
				Already have an account? <StyledLink to="/login">Login</StyledLink>
			</p>
		</StyledWrapper>
	);
};

export default LoginForm;
