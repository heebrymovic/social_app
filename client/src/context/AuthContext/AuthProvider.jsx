import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const INITIAL_STATE = {
	user: {},
	isFetching: false,
	isError: false,
	isAuthenticated: false
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN_FETCHING':
			return { ...state, isFetching: true };
		case 'LOGIN_ERROR':
			return { ...state, isFetching: false, isError: action.payload };
		case 'LOGIN_SUCCESS':
			return { isError: false, user: action.payload, isFetching: false, isAuthenticated: true };
		case 'FOLLOW':
			return {
				isError: false,
				user: {
					...state.user,
					followings: [...state.user.followings, action.payload]
				},
				isFetching: false,
				isAuthenticated: true
			};
		case 'UNFOLLOW':
			return {
				isError: false,
				user: {
					...state.user,
					followings: state.user.followings.filter((followingId) => followingId !== action.payload)
				},
				isFetching: false,
				isAuthenticated: true
			};
		default:
			return state;
	}
};

const AuthProvider = ({ children }) => {
	const [auth, dispatchAuth] = useReducer(reducer, INITIAL_STATE);

	const { user, isFetching, isError, isAuthenticated } = auth;

	return (
		<AuthContext.Provider value={{ dispatchAuth, user, isFetching, isError, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
