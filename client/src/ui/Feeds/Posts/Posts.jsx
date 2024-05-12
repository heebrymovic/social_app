import styled from 'styled-components';
import Post from './Post';

import { usePost } from '../../../context/PostContext';
import Spinner from '../../Spinner';

const StyledMessage = styled.div`
	color: var(--color-error);
	font-weight: 600;
`;

const Posts = ({ userPosts }) => {
	const { posts, isLoading } = usePost();

	const feedPosts = userPosts.length > 0 ? userPosts : posts;

	if (isLoading) return <Spinner />;

	return (
		<>
			{!isLoading && feedPosts.length === 0 ? (
				<StyledMessage>You do not have any post yet.</StyledMessage>
			) : (
				feedPosts.map((post) => <Post post={post} key={post._id} />)
			)}
		</>
	);
};

export default Posts;
