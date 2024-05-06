import styled from 'styled-components';
import UserInfo from './UserInfo';
import FriendLists from './FriendLists';

const StyledWrapper = styled.div`
	padding-inline: 16px;

	@media (max-width: 768px) {
		padding-inline: 0px;
		grid-column: span 2;
		grid-row-start: 1;
	}
`;

const ProfileRightbar = ({ className }) => {
	return (
		<StyledWrapper>
			<UserInfo />
			<FriendLists />
		</StyledWrapper>
	);
};

export default ProfileRightbar;
