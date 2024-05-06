import styled from 'styled-components';

import SidebarLists from './SidebarLists';
import FriendLists from './FriendLists';
import Divider from '../Divider';

const StyledSidebar = styled.div`
	height: calc(100vh - 65px);
	padding: 20px 20px 10px;
	display: flex;
	gap: 20px;
	flex-direction: column;
	overflow-y: auto;
	position: sticky;
	top: 65px;

	@media (max-width: 768px) {
		display: none;
		position: fixed;
	}
`;

const StyledButton = styled.button`
	padding: 10px 20px;
	font-size: 1rem;
	cursor: pointer;
	align-self: flex-start;
`;

const Sidebar = ({ className }) => {
	return (
		<StyledSidebar>
			<SidebarLists />

			<StyledButton>Show More</StyledButton>

			<Divider />

			<FriendLists />
		</StyledSidebar>
	);
};

export default Sidebar;
