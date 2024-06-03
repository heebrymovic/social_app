import axios from 'axios';
import { useState, useEffect } from 'react';

export const useConversations = (user) => {
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			const res = await axios.get(`/api/conversations/${user._id}`);

			setConversations(res.data.conversations);
		};

		getConversations();
	}, [user]);

	return [conversations];
};
