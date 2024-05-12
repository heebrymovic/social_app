import styled from 'styled-components';

import PostTop from './PostTop';
import PostBottom from './PostBottom';
import { useGetUser } from '../../../hooks/useGetUser';

const StyledPost = styled.div`
	padding: 10px;
	border-radius: 8px;
	box-shadow: 0px 0px 4px var(--color-gray--1);
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const UserPost = styled.div`
	text-align: justify;
	line-height: 1.5rem;
`;

const UserPostImg = styled.img`
	max-height: 500px;
	object-fit: contain;
	width: 100%;
`;

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const Post = ({ post }) => {
	const { description, image, createdAt, ...rest } = post;

	const [user] = useGetUser(post.userId);

	return (
		<StyledPost>
			<PostTop user={user} createdAt={createdAt} />
			<UserPost>{description}</UserPost>
			{image && <UserPostImg src={`${PUBLIC_URL}${image}`} />}
			<PostBottom data={rest} />
		</StyledPost>
	);
};

export default Post;
