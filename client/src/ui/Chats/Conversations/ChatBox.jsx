import styled, { css } from 'styled-components';

const StyledChat = styled.div.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !['own'].includes(prop)
})`
	display: flex;
	gap: 10px;
	${(props) =>
		props.own &&
		css`
			margin-right: 10px;
			flex-direction: row-reverse;
		`}

	& > div {
		background: var(${(props) => (props.own ? '--color-green' : '--color-main')});
	}
`;

const Img = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50px;
	object-fit: cover;
`;

const ChatContainer = styled.div`
	padding: 10px;
	border-radius: 10px;
	max-width: 60%;
	gap: 5px;
	flex-wrap: wrap;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;

	@media (max-width: 768px) {
		max-width: 65%;
	}
`;

const Text = styled.p`
	color: var(--color-white);
	text-align: justify;
	line-height: 1.5rem;
	font-size: 1rem;
`;

const Time = styled.p`
	font-size: 0.8rem;
	color: var(--color-gray--2);
`;

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const ChatBox = ({ chat, own }) => {
	return (
		<StyledChat own={own}>
			<Img src={`${PUBLIC_URL}person/5.jpeg`} />
			<ChatContainer>
				<Text>{chat.text}</Text>
				<Time>{chat.time}</Time>
			</ChatContainer>
		</StyledChat>
	);
};

export default ChatBox;
