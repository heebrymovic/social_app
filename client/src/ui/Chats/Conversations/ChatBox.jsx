import styled, { css } from 'styled-components';
import { format } from 'timeago.js';

import { useAuth } from '../../../context/AuthContext';
import { useGetUser } from '../../../hooks/useGetUser';

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

const Itext = styled(Text)`
	overflow: hidden;
	font-size: 0.75rem;
	font-style: italic;
	display: inline-block;
	white-space: nowrap;
	animation: typing 1.5s infinite;

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}
`;

const Time = styled.span`
	font-size: 0.8rem;
	white-space: nowrap;
	color: var(--color-gray--2);
	float: right;
	margin: 0.5rem 0 0 5px;
`;

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const ChatBox = ({ chat, own, typing }) => {
	const { message, createdAt, senderId } = chat;

	const [user] = useGetUser(senderId);

	return (
		<StyledChat own={own}>
			<Img src={`${PUBLIC_URL}${user.profilePicture || '/person/noAvatar.png'}`} />
			<ChatContainer>
				{!typing && <Text>{message}</Text>}
				{typing && <Itext>{message}</Itext>}
				{createdAt && <Time>{format(createdAt)}</Time>}
			</ChatContainer>
		</StyledChat>
	);
};

export default ChatBox;
