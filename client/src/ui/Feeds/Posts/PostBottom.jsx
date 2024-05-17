import axios from 'axios';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useState } from 'react';

import { usePost } from '../../../context/PostContext';
import { useAuth } from '../../../context/AuthContext';

const Icon = styled.img`
	width: 25px;
	cursor: pointer;
	transition: 0.2s ease;

	&.active {
		transform: rotate(180deg);
	}
`;

const Display = styled.div`
	display: flex;
	align-items: center;
`;

const Wrapper = styled(Display)`
	justify-content: space-between;
`;

const IconWrapper = styled(Display)`
	gap: 10px;
`;

const IconText = styled(Display)`
	gap: 5px;
	font-size: 0.95rem;
`;

const CLIENT_URL = process.env.REACT_APP_CLIENT_URL;

const PostBottom = ({ data: { likes, comment, _id: id } }) => {
	const {
		user: { _id: userId }
	} = useAuth();

	const { posts, postDispatch } = usePost();

	const [totalLikes, setTotalLike] = useState(likes.length);

	const [isLiked, setIsLiked] = useState(likes.includes(userId));

	const handleLikes = async () => {
		try {
			const res = await axios.put(`/api/posts/like/${id}`, { userId });

			const likedPost = res.data.post;

			const updatedPosts = posts.map((myPost) => (myPost._id === likedPost._id ? likedPost : myPost));

			postDispatch({
				type: 'POST_SUCCESS',
				payload: updatedPosts
			});

			setIsLiked((like) => !like);
			setTotalLike((likes) => (isLiked ? likes - 1 : likes + 1));
		} catch (err) {
			toast.error(err.response.data.error || err.message);
		}
	};

	return (
		<Wrapper>
			<IconWrapper>
				<Icon className={isLiked ? 'active' : ''} onClick={handleLikes} src={`${CLIENT_URL}like.png`} />

				<IconText>
					<Icon onClick={handleLikes} src={`${CLIENT_URL}heart.png`} />
					<span>{totalLikes} people like it</span>
				</IconText>
			</IconWrapper>

			<span>
				{comment} Comment{comment > 1 && 's'}
			</span>
		</Wrapper>
	);
};

export default PostBottom;
