import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Friend from '../../Friend';
import { useAuth } from '../../../context/AuthContext';
import { useGetUser } from '../../../hooks/useGetUser';

const UserChatList = ({ conversation }) => {
	const { user } = useAuth();

	const { conversationId } = useParams();

	const friendId = conversation.members.find((member) => member !== user._id);

	const [friendData] = useGetUser(friendId);

	return <Friend to={`/chats/${conversation._id}`} active={conversationId === conversation._id} user={friendData} />;
};

export default UserChatList;
