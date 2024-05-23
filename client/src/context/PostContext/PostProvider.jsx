/*import axios from 'axios';*/
import { usePrivateAxios } from '../../hooks/usePrivateAxios';
import { createContext, useReducer, useEffect } from 'react';
import { useAuth } from '../AuthContext';

export const PostContext = createContext();

const INITIAL_POST = {
	isLoading: false,
	isError: false,
	posts: []
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'POST_FETCHING':
			return { ...state, isLoading: true };
		case 'POST_SUCCESS':
			return { ...state, posts: action.payload, isLoading: false };
		case 'POST_ERROR':
			return { ...state, posts: [], isLoading: false, isError: action.payload };
		default:
			return state;
	}
};

const PostProvider = ({ children }) => {
	const [postData, dispatch] = useReducer(reducer, INITIAL_POST);
	const { user } = useAuth();
	const axios = usePrivateAxios();

	const { isLoading: isLoadingPost, isError: isPostError, posts } = postData;

	useEffect(() => {
		const fetchPost = async () => {
			try {
				dispatch({ type: 'POST_FETCHING' });

				const res = await axios.get(`api/posts/timeline/all/${user._id}`);

				dispatch({ type: 'POST_SUCCESS', payload: res.data.posts });
			} catch (err) {

				dispatch({ type: 'POST_ERROR', isError: err.response.data.message || err.message });
			}
		};

		fetchPost();
	}, [user]);

	return (
		<PostContext.Provider value={{ posts, isLoadingPost, isPostError, postDispatch: dispatch }}>
			{children}
		</PostContext.Provider>
	);
};

export default PostProvider;
