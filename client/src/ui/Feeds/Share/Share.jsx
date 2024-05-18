import styled from 'styled-components';
import axios from 'axios';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import CancelIcon from '@mui/icons-material/Cancel';

import { useAuth } from '../../../context/AuthContext';
import { usePost } from '../../../context/PostContext';

import ShareTop from './ShareTop';
import ShareBottom from './ShareBottom';
import Divider from '../../Divider';

const StyledShare = styled.div`
	padding: 15px 12px 25px;
	border-radius: 10px;
	box-shadow: 0px 0px 4px var(--color-gray--1);
	display: flex;
	flex-direction: column;
	gap: 18px;
`;

const StyledPreview = styled.img`
	max-height: 300px;
	object-fit: contain;
	width: 100%;
`;

const StyledCancel = styled(CancelIcon)`
	top: 0%;
	position: absolute;
	right: 0%;
	cursor: pointer;
`;

const UploadWrapper = styled.div`
	position: relative;
	align-self: center;
`;

const Share = () => {
	const { user } = useAuth();
	const { posts, postDispatch } = usePost();
	const postDesc = useRef();
	const [uploadFile, setUploadFile] = useState(null);
	const [isPosting, setIsPosting] = useState(false);

	const formRef = useRef();

	const cancelUpload = () => {
		const oldInput = postDesc.current.value;

		formRef.current.reset();

		setUploadFile(null);

		postDesc.current.value = oldInput;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!postDesc.current.value) {
			return toast.error('You cannot share an empty post.');
		}

		try {
			const formData = new FormData();

			formData.append('userId', user._id);
			formData.append('description', postDesc.current.value);

			if (uploadFile) {
				formData.append('file', uploadFile);
			}

			setIsPosting(true);

			const res = await axios.post('api/posts/create', formData, {
				headers: { 'Content-Type': 'multipart/form-data' }
			});

			toast.success('Post successfully submitted');

			postDispatch({ type: 'POST_SUCCESS', payload: [res.data.post, ...posts] });

			formRef.current.reset();
			setUploadFile(null);
		} catch (err) {
			toast.error(err.response.data.error || err.message);
		} finally {
			setIsPosting(false);
		}
	};

	return (
		<form ref={formRef} onSubmit={handleSubmit}>
			<StyledShare>
				<ShareTop postDesc={postDesc} />
				<Divider />
				{uploadFile && (
					<UploadWrapper>
						<StyledPreview src={URL.createObjectURL(uploadFile)} />
						<StyledCancel onClick={cancelUpload} />
					</UploadWrapper>
				)}
				<ShareBottom isSubmitting={isPosting} setUploadFile={setUploadFile} />
			</StyledShare>
		</form>
	);
};

export default Share;
