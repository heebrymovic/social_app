import styled from 'styled-components';

import ActiveUsers from './ActiveUsers';

const Wrapper = styled.div`
	padding: 20px 20px 20px 10px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media (max-width: 768px) {
		grid-column: 1 / span 3;
	}
`;

const Notification = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
`;

const Img = styled.img`
	width: 50px;
`;

const StyledText = styled.p`
	font-weight: 300;
`;

const Ads = styled.img`
	border-radius: 10px;
`;

const CLIENT_URL = process.env.REACT_APP_CLIENT_URL;

const Rightbar = ({ className }) => {
	return (
		<Wrapper>
			<Notification>
				<Img src={`${CLIENT_URL}gift.png`} />
				<StyledText>
					<b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
				</StyledText>
			</Notification>

			<Ads src={`${CLIENT_URL}ad.png`} />

			<ActiveUsers />
		</Wrapper>
	);
};

export default Rightbar;
