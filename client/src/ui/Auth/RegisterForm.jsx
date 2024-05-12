import { useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../Input';
import ErrorMessage from '../ErrorMessage';

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
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const confirmPassword = useRef();
	const navigate = useNavigate();

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newUser = {
			username: username.current.value,
			email: email.current.value,
			password: password.current.value
		};

		if (password.current.value !== confirmPassword.current.value) return setIsError("Password Doesn't Match");

		try {
			setIsSubmitting(true);

			const res = await axios.post('/api/auth/register', newUser);

			setIsSubmitting(false);
			setIsError(false);
			if (res.data.user) {
				alert('Registration Successful. You can process to login');
				navigate('/login');
			}
		} catch (err) {
			setIsError(err.response.data.error || err.message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<StyledWrapper>
			<h2>Create an account</h2>

			{!isSubmitting && isError && <ErrorMessage>{isError}</ErrorMessage>}

			<Form onSubmit={handleSubmit}>
				<Input type="text" ref={username} required placeholder="Enter Your Username" />

				<Input type="email" ref={email} required placeholder="Enter Your Email" />

				<Input type="password" minLength="6" ref={password} required placeholder="Enter Your Password" />

				<Input type="password" minLength="6" ref={confirmPassword} required placeholder="Confirm Password" />

				<Button>Register</Button>
			</Form>

			<p>
				Already have an account? <StyledLink to="/login">Login</StyledLink>
			</p>
		</StyledWrapper>
	);
};

export default LoginForm;
