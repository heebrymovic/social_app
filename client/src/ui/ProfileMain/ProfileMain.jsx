import styled, { css } from 'styled-components';

import Feeds from '../Feeds';
import ProfileRightbar from './ProfileRightbar';

const Main = styled.main`
	display: grid;
	grid-template-columns: 1.6fr 1fr;

	@media (max-width: 768px) {
		grid-row-gap: 40px;
	}
`;

const extrasStyles = css`
	padding: 0px !important;
`;

const ProfileMain = () => {
	return (
		<Main>
			<Feeds extras={extrasStyles} />
			<ProfileRightbar />
		</Main>
	);
};

export default ProfileMain;
