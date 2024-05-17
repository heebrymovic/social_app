import styled from 'styled-components';

import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const StyledWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 768px) {
		gap: 20px;
		flex-direction: column;
		align-items: flex-end;
	}
`;

const StyledShareList = styled.div`
	display: flex;
	gap: 15px;
	flex-wrap: wrap;
`;

const ShareIconWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`;

const StyledButton = styled.button`
	background: var(--color-green);
	color: white;
	padding: 8px 10px;
	cursor: pointer;
	border-radius: 4px;
	font-size: 0.95rem;
`;
const StyledFile = styled.input`
	display: none;
`;

const ShareBottom = ({ setUploadFile, isSubmitting }) => {
	return (
		<StyledWrapper>
			<StyledShareList>
				<label htmlFor="upload">
					<ShareIconWrapper>
						<PhotoLibraryIcon color="secondary" />
						<span>Photo or Video</span>
						<StyledFile
							type="file"
							id="upload"
							onChange={(e) => setUploadFile(e.target.files[0])}
							accept=".png, .jpg, .jpeg"
						/>
					</ShareIconWrapper>
				</label>

				<ShareIconWrapper>
					<LabelIcon color="error" />
					<span>Tag</span>
				</ShareIconWrapper>

				<ShareIconWrapper>
					<LocationOnIcon color="success" />
					<span>Location</span>
				</ShareIconWrapper>

				<ShareIconWrapper>
					<EmojiEmotionsIcon color="warning" />
					<span>Feelings</span>
				</ShareIconWrapper>
			</StyledShareList>

			<StyledButton disabled={isSubmitting}>Share</StyledButton>
		</StyledWrapper>
	);
};

export default ShareBottom;
