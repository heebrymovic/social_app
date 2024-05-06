import styled from 'styled-components';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import MessageIcon from '@mui/icons-material/Message';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import HelpIcon from '@mui/icons-material/Help';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SchoolIcon from '@mui/icons-material/School';

import SidebarList from './SidebarList';

const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const SidebarLists = ({ className }) => {
	return (
		<StyledUl>
			<SidebarList Icon={RssFeedIcon} text="Feeds" to="" />

			<SidebarList Icon={MessageIcon} text="Chats" to="" />

			<SidebarList Icon={PlayCircleIcon} text="Videos" to="" />

			<SidebarList Icon={GroupIcon} text="Groups" to="" />

			<SidebarList Icon={TurnedInIcon} text="Bookmarks" to="" />

			<SidebarList Icon={HelpIcon} text="Questions" to="" />

			<SidebarList Icon={WorkOutlineIcon} text="Jobs" to="" />

			<SidebarList Icon={EventNoteIcon} text="Events" to="" />

			<SidebarList Icon={SchoolIcon} text="Courses" to="" />
		</StyledUl>
	);
};

export default SidebarLists;
