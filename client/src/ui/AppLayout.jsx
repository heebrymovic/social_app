import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';

const StyledMain = styled.main`
	display: grid;
	grid-template-columns: 0.6fr 1.6fr 1fr;
	width: 100%;
`;

const AppLayout = () => {
	return (
		<>
			<Header />
			<StyledMain>
				<Sidebar />
				<Outlet />
			</StyledMain>
		</>
	);
};

export default AppLayout;
