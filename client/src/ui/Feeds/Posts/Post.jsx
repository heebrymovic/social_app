import styled from 'styled-components';

import PostTop from './PostTop';
import PostBottom from './PostBottom';

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
	const { desc, photo, ...rest } = post;

	return (
		<StyledPost>
			<PostTop post={rest} />
			<UserPost>{desc}</UserPost>
			<UserPostImg src={`${PUBLIC_URL}${photo}`} />
			<PostBottom data={rest} />
		</StyledPost>
	);
};

export default Post;
