import styled from 'styled-components';
import {memo} from "react"

import Post from './Post';
import { usePost } from '../../../context/PostContext';
import Spinner from '../../Spinner';

const StyledMessage = styled.div`
	color: var(--color-error);
	font-weight: 600;
`;

const Posts = ({ generalPosts }) => {
	const { posts, isLoadingPost } = usePost();

	const feedPosts = generalPosts.length > 0 ? generalPosts : posts;

	if (isLoadingPost || !feedPosts ) return <Spinner />;

	return (
		<>
			{!isLoadingPost  && feedPosts.length === 0 ? (
				<StyledMessage>You do not have any post yet.</StyledMessage>
			) : (
				feedPosts.map((post) => <Post post={post} key={post._id} />)
			)}
		</>
	);
};

export default memo(Posts);
