import styled from 'styled-components';

import Header from '../ui/Header';
import Sidebar from '../ui/Sidebar';
import Feeds from '../ui/Feeds';
import Rightbar from '../ui/Rightbar';

const StyledMain = styled.main`
	display: grid;
	grid-template-columns: 0.6fr 1.6fr 1fr;
	width: 100%;
`;

const Home = () => {
	return (
		<>
			<Header />
			<StyledMain>
				<Sidebar />
				<Feeds />
				<Rightbar />
			</StyledMain>
		</>
	);
};

export default Home;
