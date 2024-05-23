import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export const useRefreshToken = (update=true) => {
	const { dispatchAuth } = useAuth();

	const refresh = async () => {
		const res = await axios.get('/api/auth/refresh', {
			withCredentials: true
		});

		update && dispatchAuth({ type: 'LOGIN_SUCCESS', payload: res.data.user });

		return res.data.user.token;
	};

	return refresh;
};
