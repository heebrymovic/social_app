import { useContext } from 'react';
import { PostContext } from './PostProvider';

export const usePost = () => {
	const context = useContext(PostContext);

	if (!context) throw new Error('You cannot use Post context out it Post Provider');

	return context;
};
