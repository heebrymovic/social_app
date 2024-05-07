import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) throw new Error('Auth Context cannot be used outside its Provider');

	return context;
};
