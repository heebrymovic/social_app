import axios from 'axios';

export const AuthLoginApi = async (user, dispatch, setAuthenticate) => {
	try {
		dispatch({ type: 'LOGIN_FETCHING' });

		const res = await axios.post('/api/auth/login', user);

		dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.user });

		localStorage.setItem("authenticate", "true")
		setAuthenticate("true")
		 
	} catch (err) {
		dispatch({ type: 'LOGIN_ERROR', payload: err.response.data.error || err.message });
	}
};
