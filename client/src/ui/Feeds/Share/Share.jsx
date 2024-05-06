import styled from 'styled-components';

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

const Share = () => {
	return (
		<StyledShare>
			<ShareTop />
			<Divider />
			<ShareBottom />
		</StyledShare>
	);
};

export default Share;
