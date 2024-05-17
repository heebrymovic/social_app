import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { format, register } from 'timeago.js';

const UserTopWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledImg = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	object-fit: cover;
`;

const UserTopLeft = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Title = styled.h4`
	font-weight: 500;
`;

const Time = styled.span`
	font-size: 0.8rem;
	font-weight: 400;
`;

const localeFunc = (number, index, totalSec) => {
	return [
		['just now', 'right now'],
		['just now', 'right now'],
		['1 minute ago', 'in 1 minute'],
		['%s minutes ago', 'in %s minutes'],
		['1 hour ago', 'in 1 hour'],
		['%s hours ago', 'in %s hours'],
		['1 day ago', 'in 1 day'],
		['%s days ago', 'in %s days'],
		['1 week ago', 'in 1 week'],
		['%s weeks ago', 'in %s weeks'],
		['1 month ago', 'in 1 month'],
		['%s months ago', 'in %s months'],
		['1 year ago', 'in 1 year'],
		['%s years ago', 'in %s years']
	][index];
};

register('my-locale', localeFunc);

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const PostTop = ({ user: { profilePicture, username }, createdAt }) => {
	return (
		<UserTopWrapper>
			<UserTopLeft>
				<Link to={`/profile/${username}`}>
					<StyledImg src={`${PUBLIC_URL}${profilePicture || '/person/noAvatar.png'}`} />
				</Link>
				<Title>{username}</Title>
				<Time>{format(createdAt, 'my-locale')}</Time>
			</UserTopLeft>
			<MoreVertIcon />
		</UserTopWrapper>
	);
};

export default PostTop;
