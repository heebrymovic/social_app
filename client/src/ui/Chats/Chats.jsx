import { ChatsMenu } from './ChatsMenu';
import { Conversations } from './Conversations';
import ChatOnline from './ChatOnline';

const Chats = () => {
	return (
		<>
			<ChatsMenu />
			<Conversations />
			<ChatOnline />
		</>
	);
};

export default Chats;
