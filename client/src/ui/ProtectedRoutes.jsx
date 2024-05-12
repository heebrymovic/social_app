import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoutes = ({ children }) => {
	const { isAuthenticated, isFetching } = useAuth();

	const navigate = useNavigate();

	useEffect(() => {
		!isFetching && !isAuthenticated && navigate('/login');
	}, [isAuthenticated, isFetching]);

	return isAuthenticated ? children : null;
};

export default ProtectedRoutes;
