import ChatsMenu from './ChatsMenu';
import { Conversations } from './Conversations';
import ChatOnline from './ChatOnline';

const Chats = ({ className }) => {
	return (
		<>
			<ChatsMenu />
			<Conversations />
			<ChatOnline>Online Friends</ChatOnline>
		</>
	);
};

export default Chats;
