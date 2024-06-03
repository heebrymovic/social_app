import styled from 'styled-components';

import OnlineFriends from '../OnlineFriends';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const ActiveFriends = () => {
	return (
		<Wrapper>
			<h4>Online Friends</h4>

			<OnlineFriends />
		</Wrapper>
	);
};

export default ActiveFriends;
