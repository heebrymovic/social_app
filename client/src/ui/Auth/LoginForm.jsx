import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useAuth } from '../../context/AuthContext';
import { AuthLoginApi } from '../../api/AuthApi';
import { useRefreshToken } from '../../hooks/useRefreshToken';

import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';

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
	const navigate = useNavigate();

	const email = useRef(null);

	const password = useRef(null);

	const [authenticate, setAuthenticate] = useState(() => localStorage.getItem('authenticate') === 'true');

	const { dispatchAuth, isFetching, isError } = useAuth();

	const refresh = useRefreshToken();

	useEffect(() => {
		const verify = async () => {
			try {
				await refresh();
				toast.success('You have successfully logged in.');
				navigate('/');
			} catch (err) {
				console.log(err);
			}
		};

		authenticate && verify();
	}, [navigate, authenticate, refresh]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const loginUser = { email: email.current.value, password: password.current.value };
		await AuthLoginApi(loginUser, dispatchAuth, setAuthenticate);
	};

	return (
		<StyledWrapper>
			<h2>Login to your account</h2>

			{!isFetching && isError && <ErrorMessage>{isError}</ErrorMessage>}

			<Form onSubmit={handleSubmit}>
				<Input type="email" disabled={isFetching} required ref={email} placeholder="Enter Your Email" />

				<Input
					type="password"
					disabled={isFetching}
					required
					minLength="6"
					ref={password}
					placeholder="Enter Your Password"
				/>

				<Button disabled={isFetching}>{isFetching ? <Spinner /> : 'Login'}</Button>
			</Form>

			<StyledLink to="/forget-password">Forget Password?</StyledLink>

			<Button onClick={() => navigate('/register')} bg="green">
				Create a New Account
			</Button>
		</StyledWrapper>
	);
};

export default LoginForm;
