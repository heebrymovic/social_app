import styled, { css } from 'styled-components';
import { format } from 'timeago.js';

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
	padding: 8px 10px;
	border-radius: 10px;
	max-width: 60%;
	gap: 2px 5px;
	vertical-align: baseline;
	@media (max-width: 768px) {
		max-width: 65%;
	}
`;

const Text = styled.span`
	color: var(--color-white);
	text-align: justify;
	line-height: 1.5rem;
	font-size: 0.9rem;
`;

const Time = styled.span`
	font-size: 0.8rem;
	white-space: nowrap;
	color: var(--color-gray--2);
	float: right;
	margin: 0.5rem 0 0 5px;
`;

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const ChatBox = ({ chat, own }) => {
	const { message, createdAt } = chat;

	return (
		<StyledChat own={own}>
			<Img src={`${PUBLIC_URL}person/5.jpeg`} />
			<ChatContainer>
				<Text>{message}</Text>
				<Time>{format(createdAt)}</Time>
			</ChatContainer>
		</StyledChat>
	);
};

export default ChatBox;
