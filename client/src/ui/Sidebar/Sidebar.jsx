import styled from 'styled-components';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import SidebarLists from './SidebarLists';
import FriendLists from './FriendLists';
import Divider from '../Divider';
import { useAuth } from '../../context/AuthContext';

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

const Sidebar = () => {
	const navigate = useNavigate();

	const { dispatchAuth } = useAuth();

	const logout = async () => {
		await axios.post('/api/auth/logout');

		toast.success('You have successfully logged out.');

		localStorage.removeItem("authenticate")

		dispatchAuth({ type: 'LOGOUT' });
		navigate('/login', { replace: true });
	};

	return (
		<StyledSidebar>
			<SidebarLists />

			<StyledButton onClick={logout}>Logout</StyledButton>

			<Divider />

			<FriendLists />
		</StyledSidebar>
	);
};

export default Sidebar;
