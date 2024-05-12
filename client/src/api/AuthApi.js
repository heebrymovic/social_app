import axios from 'axios';

export const AuthLoginApi = async (user, dispatch) => {
	try {
		dispatch({ type: 'LOGIN_FETCHING' });

		const res = await axios.post('/api/auth/login', user);

		dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.user });
	} catch (err) {
		dispatch({ type: 'LOGIN_ERROR', payload: err.response.data.error || err.message });
	}
};
