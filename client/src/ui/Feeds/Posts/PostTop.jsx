import styled from 'styled-components';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users as UsersData } from '../../../data';

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

const PostTop = ({ post }) => {
	const { profilePicture, username } = UsersData.find((user) => user.id === post.userId);

	return (
		<UserTopWrapper>
			<UserTopLeft>
				<StyledImg src={`assets/${profilePicture}`} />
				<Title>{username}</Title>
				<Time>{post.date}</Time>
			</UserTopLeft>
			<MoreVertIcon />
		</UserTopWrapper>
	);
};

export default PostTop;
