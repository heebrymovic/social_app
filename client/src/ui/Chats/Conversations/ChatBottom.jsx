import styled from 'styled-components';

const StyledBox = styled.div`
	height: 20%;
	display: flex;
	gap: 10px;
	align-items: center;
	padding: 0 0px 10px;

	@media (max-width: 768px) {
		padding: 0 5px 0 0;
	}
`;

const TextArea = styled.textarea`
	flex: 1;
	height: 100%;
	padding: 10px 8px;
	border-radius: 5px;
	font-size: 1rem;
	border: 1px solid var(--color-gray--1);
`;

const Button = styled.button`
	padding: 12px 20px;
	cursor: pointer;
	font-size: 1rem;
	background: var(--color-green);
	color: var(--color-white);
	border-radius: 5px;
`;

const ChatBottom = () => {
	return (
		<StyledBox>
			<TextArea placeholder="Enter a message"></TextArea>
			<Button>Send</Button>
		</StyledBox>
	);
};

export default ChatBottom;
