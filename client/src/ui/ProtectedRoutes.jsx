import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import { useRefreshToken } from '../hooks/useRefreshToken';
import {useAuthenticated} from "../hooks/useAuthenticated"

const ProtectedRoutes = ({ children }) => {
	const { isAuthenticated, isFetching } = useAuth();

	const navigate = useNavigate();

	const refresh = useRefreshToken();

	const authenticate = useAuthenticated()

	useEffect(() => {
		const verify = async () => {
			try {
				const refreshToken = await refresh();
				authenticate()
			} catch (err) {
				navigate('/login');
			}
		};

		verify()

	},[]);

	return isAuthenticated ? children : null;
};

export default ProtectedRoutes;
