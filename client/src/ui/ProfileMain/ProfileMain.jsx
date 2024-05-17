import styled, { css } from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Feeds from '../Feeds';
import ProfileRightbar from './ProfileRightbar';

const Main = styled.main`
	display: grid;
	grid-template-columns: 1.6fr 1fr;

	@media (max-width: 768px) {
		grid-row-gap: 40px;
	}
`;

const extrasStyles = css`
	padding: 0px !important;
`;

const ProfileMain = () => {
	const [userPost, setUserPost] = useState([]);

	const { username } = useParams();

	useEffect(() => {
		const fetchAllPost = async () => {
			try {
				const res = await axios.get(`/api/posts/allposts/${username}`);

				setUserPost(res.data.posts);
			} catch (err) {
				console.log(err);
			}
		};

		fetchAllPost();
	}, [username]);

	return (
		<Main>
			<Feeds extras={extrasStyles} userPosts={userPost} username={username} />
			<ProfileRightbar />
		</Main>
	);
};

export default ProfileMain;
