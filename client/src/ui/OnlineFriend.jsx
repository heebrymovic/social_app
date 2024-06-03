import ActiveFriend from './ActiveFriend';
import { useGetUser } from '../hooks/useGetUser';

const OnlineFriends = ({ onlineFriend }) => {
	const [user] = useGetUser(onlineFriend.userId);

	return <ActiveFriend user={user} />;
};

export default OnlineFriends;
