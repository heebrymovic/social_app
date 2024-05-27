import { useContext } from 'react';
import { MessagesContext } from './MessagesProvider';

export const useMessages = () => {
	const context = useContext(MessagesContext);

	if (!context) throw new Error('You cannot use Messages context out it Provider');

	return context;
};
