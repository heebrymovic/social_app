import axios from 'axios';
import { useState, useEffect } from 'react';

export const useGetUser = (userId) => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await axios.get(`/api/users/getuser/${userId}`);

				setUser(res.data.user);
			} catch (err) {
				console.log(err);
			}
		};

		fetchUser();
	}, [userId]);

	return [user];
};
