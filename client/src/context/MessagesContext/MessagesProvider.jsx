import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

import { useAuth } from '../AuthContext';

export const MessagesContext = createContext();

const initialState = {
	isLoading: false,
	error: false,
	mesages: []
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'MESSAGE_FETCHING':
			return { isLoading: true, error: false, messages: [] };
		case 'MESSAGE_SUCCESS':
			return { ...state, isLoading: false, messages: action.payload };
		case 'MESSAGE_ERROR':
			return { isLoading: false, error: action.payload, messages: [] };
		default:
			return state;
	}
};

const MessageProvider = ({ children }) => {
	const [messages, dispatchMessages] = useReducer(reducer, initialState);

	const { user } = useAuth();

	useEffect(() => {
		const getMessages = async () => {
			try {
				dispatchMessages({ type: 'MESSAGE_FETCHING' });
				const res = await axios.get(`/api/messages/${user._id}`);

				dispatchMessages({ type: 'MESSAGE_SUCCESS', payload: res.data.data });
			} catch (err) {
				dispatchMessages({ type: 'MESSAGE_ERROR', payload: err.message });
			}
		};

		getMessages();
	}, [user]);

	return <MessagesContext.Provider value={{ messages }}>{children}</MessagesContext.Provider>;
};

export default MessageProvider;
