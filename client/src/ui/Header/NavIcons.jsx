import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import NavIcon from './NavIcon';

const StyledWrapper = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
`;

const NavIcons = () => {
	return (
		<StyledWrapper>
			<NavIcon Icon={PersonIcon} number={1} />
			<NavIcon Icon={ChatIcon} number={2} to="chats" />
			<NavIcon Icon={NotificationsIcon} number={10} />
		</StyledWrapper>
	);
};

export default NavIcons;
