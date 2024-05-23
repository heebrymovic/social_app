import {usePrivateAxios} from "./usePrivateAxios"
import { useState, useEffect } from 'react';

export const useGetUser = (userId) => {
	const axios = usePrivateAxios()

	const [user, setUser] = useState({});
	const [isLoading, setIsloading] = useState(false);

	const [error, setError] = useState(false);

	useEffect(() => {

		const fetchUser = async () => {
			try {
				setIsloading(true);

				const res = await axios.get(`/api/users/getuser/${userId}`);

				setUser(res.data.user);
			} catch (err) {
				setError(err?.response?.data?.message || err.message);
			} finally {
				setIsloading(false);
			}
		};

		fetchUser();
	}, [userId]);

	return [user, isLoading, error];
};
