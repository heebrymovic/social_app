import { createContext, useReducer, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

export const AuthContext = createContext();

const INITIAL_STATE = {
	user: {},
	isFetching: false,
	isError: false,
	accessToken: ''
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN_FETCHING':
			return { ...state, isFetching: true };

		case 'LOGIN_ERROR':
			return { ...state, isFetching: false, isError: action.payload };

		case 'LOGIN_SUCCESS':
			return {
				isError: false,
				user: action.payload,
				accessToken: action.payload.token,
				isFetching: false,
				isAuthenticated: true
			};

		case 'LOGOUT':
			return { ...state, user: {}, isAuthenticated: false };

		case 'FOLLOW':
			return {
				...state,
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
				...state,
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

	const [onlineUsers, setOnlineUsers] = useState([]);

	const socket = useRef();

	const { user, isFetching, isError, isAuthenticated, accessToken } = auth;

	useEffect(() => {
		if (user._id) socket.current = io('ws://localhost:8900');
	}, [user]);

	useEffect(() => {
		if (user._id && socket) {
			socket.current.emit('addUser', user._id);

			socket.current.on('onlineUser', (onlineUsers) => {
				setOnlineUsers(onlineUsers);
			});
		}
	}, [socket, user]);

	return (
		<AuthContext.Provider
			value={{ dispatchAuth, onlineUsers, socket, user, isFetching, isError, isAuthenticated, accessToken }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
