import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const StyledSearchWrapper = styled.div`
	position: relative;

	@media (max-width: 768px) {
		display: none;
	}
`;

const StyledInput = styled.input`
	padding: 8px 10px 8px 30px;
	width: 85%;
	border-radius: 15px;
	font-size: 1rem;
`;

const StyledSearch = styled(SearchIcon)`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 5px;
	cursor: pointer;
	font-weight: 700;
`;

const Search = () => {
	return (
		<StyledSearchWrapper>
			<div>
				<StyledSearch />
				<StyledInput placeholder="Search for friends, post or video" type="text" />
			</div>
		</StyledSearchWrapper>
	);
};

export default Search;
