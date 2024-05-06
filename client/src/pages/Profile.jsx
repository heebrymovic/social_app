import styled from 'styled-components';

import ProfileCover from '../ui/ProfileCover';
import ProfileMain from '../ui/ProfileMain';

const StyledWrapper = styled.div`
	grid-column: 2 / span 2;
	padding: 10px 15px 20px;
	display: flex;
	flex-direction: column;
	gap: 50px;

	@media (max-width: 768px) {
		grid-column: span 3;
	}
`;

const Profile = ({ className }) => {
	return (
		<StyledWrapper>
			<ProfileCover />
			<ProfileMain />
		</StyledWrapper>
	);
};

export default Profile;
