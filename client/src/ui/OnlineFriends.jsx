import { useAuth } from '../context/AuthContext';
import OnlineFriend from './OnlineFriend';

const OnlineFriends = () => {
	const { onlineUsers, user } = useAuth();

	const onlineFriends = onlineUsers.filter((onlineUser) => user.followings.includes(onlineUser.userId));

	return onlineFriends.length === 0 ? (
		<p>No Active friends</p>
	) : (
		onlineFriends.map((onlineFriend) => <OnlineFriend onlineFriend={onlineFriend} key={onlineFriend.userId} />)
	);
};

export default OnlineFriends;
