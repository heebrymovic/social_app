import axios from 'axios';
import { useState, useEffect } from 'react';

export const useGetUser = (userId) => {
	const [user, setUser] = useState({});

	const [isLoading, setIsloading] = useState(false);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				setIsloading(true);

				const res = await axios.get(`/api/users/getuser/${userId}`);

				setUser(res.data.user);
			} catch (err) {
				console.log(err);
			} finally {
				setIsloading(false);
			}
		};

		fetchUser();
	}, [userId]);

	return [user, isLoading];
};
