import styled from 'styled-components';
import { Chats } from '../ui/Chats';

const StyledWrapper = styled.div`
	height: calc(100vh - 65px);
	display: flex;
`;

const Messenger = () => {
	return (
		<StyledWrapper>
			<Chats />
		</StyledWrapper>
	);
};

export default Messenger;
