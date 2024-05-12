import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { format } from 'timeago.js';

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

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const PostTop = ({ user: { profilePicture, username }, createdAt }) => {
	return (
		<UserTopWrapper>
			<UserTopLeft>
				<Link to={`/profile/${username}`}>
					<StyledImg src={`${PUBLIC_URL}${profilePicture || '/person/noAvatar.png'}`} />
				</Link>
				<Title>{username}</Title>
				<Time>{format(createdAt)}</Time>
			</UserTopLeft>
			<MoreVertIcon />
		</UserTopWrapper>
	);
};

export default PostTop;
