import { Outlet } from 'react-router-dom';

import Header from './Header';

const AppLayoutFull = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default AppLayoutFull;
