import Post from './Post';
import { Posts as PostsData } from '../../../data';

const Posts = () => {
	return (
		<>
			{PostsData.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</>
	);
};

export default Posts;
