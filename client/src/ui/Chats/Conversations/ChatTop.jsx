import styled from 'styled-components';

import ChatBox from './ChatBox';

const StyledBox = styled.div`
	height: 80%;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px 0;
`;

const message = {
	text: `amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	time: '2 mins ago'
};

const ChatTop = () => {
	return (
		<StyledBox>
			<ChatBox chat={message} />

			<ChatBox own={true} chat={message} />

			<ChatBox chat={message} />

			<ChatBox own={true} chat={message} />

			<ChatBox chat={message} />

			<ChatBox chat={message} />
		</StyledBox>
	);
};

export default ChatTop;
