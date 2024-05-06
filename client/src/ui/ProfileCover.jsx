import styled from 'styled-components';

const StyledCoverPhoto = styled.div`
	width: 100%;
	height: 350px;
	position: relative;
	background:
		linear-gradient(rgba(36, 42, 46, 0.1), rgba(36, 42, 46, 0.1)),
		url(${(props) => props.src}) center/cover no-repeat;
`;

const StyledPhoto = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	top: calc(100% - 75px);
	object-fit: cover;
	border: 2px solid var(--color-white);
`;

const Description = styled.div`
	margin-top: 90px;
	text-align: center;
`;

const ProfileCover = ({ className }) => {
	return (
		<div>
			<StyledCoverPhoto src="/assets/post/2.jpeg">
				<StyledPhoto src="/assets/person/7.jpeg" />
			</StyledCoverPhoto>

			<Description>
				<h2>Safak Kogaulu</h2>
				<p>Hello My friends</p>
			</Description>
		</div>
	);
};

export default ProfileCover;
