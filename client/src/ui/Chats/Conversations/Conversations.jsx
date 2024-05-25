import styled from 'styled-components';

import ChatTop from './ChatTop';
import ChatBottom from './ChatBottom';

const ConversationWrapper = styled.div`
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	flex: 4.5;

	@media (max-width: 768px) {
		padding: 0 0 0 5px;
	}
`;

const Conversations = ({ className }) => {
	return (
		<ConversationWrapper>
			<ChatTop />
			<ChatBottom />
		</ConversationWrapper>
	);
};

export default Conversations;
