import styled from 'styled-components';
import { useState } from 'react';

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

const PostBottom = ({ data: { like, comment } }) => {
	const [isLiked, setIsLiked] = useState(false);
	const [totalLikes, setTotalLike] = useState(like);

	const handleLikes = () => {
		setIsLiked((like) => !like);
		setTotalLike((likes) => (isLiked ? likes - 1 : likes + 1));
	};

	return (
		<Wrapper>
			<IconWrapper>
				<Icon className={isLiked ? 'active' : ''} onClick={handleLikes} src="/assets/like.png" />

				<IconText>
					<Icon onClick={handleLikes} src="/assets/heart.png" />
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
