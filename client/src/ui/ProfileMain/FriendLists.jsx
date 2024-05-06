import styled from 'styled-components';

import Friend from './Friend';

const StyledFriendLists = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;
	margin-top: 10px;
`;

const Wrapper = styled.div`
	margin-top: 35px;
`;

const FriendLists = () => {
	return (
		<Wrapper>
			<h3>User Friends</h3>

			<StyledFriendLists>
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
			</StyledFriendLists>
		</Wrapper>
	);
};

export default FriendLists;
