import axios from 'axios';
import { useEffect } from 'react';

import { useRefreshToken } from './useRefreshToken';

import { useAuth } from '../context/AuthContext';

export const usePrivateAxios = () => {
	const refresh = useRefreshToken();

	const { accessToken } = useAuth();

	useEffect(() => {
		const requestIntercept = axios.interceptors.request.use(
			(config) => {
				if (!config.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${accessToken}`;
				}

				return config;
			},
			(err) => Promise.reject(err)
		);

		const responseIntercept = axios.interceptors.response.use(
			(response) => response,
			async (err) => {
				const prevReq = err?.config;
				
				if (err.response.status === 401 && err.response.data.error === 'jwt expired' && !prevReq.sent) {
					prevReq.sent = true;

					const refreshToken = await refresh();

					prevReq.headers['Authorization'] = `Bearer ${refreshToken}`;

					return axios(prevReq);
				}

				return Promise.reject(err);
			}
		);

		return () => {
			axios.interceptors.request.eject(requestIntercept);

			axios.interceptors.response.eject(responseIntercept);
		};
	}, [accessToken, refresh]);

	return axios;
};
