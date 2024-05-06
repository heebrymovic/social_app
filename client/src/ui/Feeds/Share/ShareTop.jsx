import styled from 'styled-components';

const StyledWrapper = styled.div`
	display: flex;
	gap: 10px;
`;

const StyledImg = styled.img`
	width: 55px;
	height: 55px;
	border-radius: 50%;
	object-fit: cover;
`;

const StyledTextarea = styled.textarea`
	flex: 1;
	padding: 10px;
	font-size: 0.95rem;
	&::-webkit-scrollbar {
		width: 2px;
	}
`;

const ShareTop = () => {
	const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

	return (
		<StyledWrapper>
			<StyledImg src={`${PUBLIC_URL}person/4.jpeg`} />
			<StyledTextarea rows="3" placeholder="What's On your mind Safak?"></StyledTextarea>
		</StyledWrapper>
	);
};

export default ShareTop;
