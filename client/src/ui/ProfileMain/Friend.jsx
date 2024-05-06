import styled from 'styled-components';

const Img = styled.img`
	width: 100%;
	height: 110px;
	object-fit: cover;
	border-radius: 5px;
`;

const Friend = () => {
	return (
		<div>
			<Img src="/assets/person/1.jpeg" />
			<span>Heditus Noni</span>
		</div>
	);
};

export default Friend;
