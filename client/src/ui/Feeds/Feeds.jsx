import styled from 'styled-components';

import Posts from './Posts';
import Share from './Share';

const StyledFeeds = styled.div.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !['extras'].includes(prop)
})`
	padding: 20px 30px;
	display: flex;
	flex-direction: column;
	gap: 40px;

	@media (max-width: 768px) {
		padding-inline: 15px;
		grid-column: span 3;
	}

	${(props) => props.extras}
`;

const Feeds = ({ extras }) => {
	return (
		<StyledFeeds extras={extras}>
			<Share />
			<Posts />
		</StyledFeeds>
	);
};

export default Feeds;
