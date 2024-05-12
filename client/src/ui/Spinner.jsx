import styled, { keyframes } from 'styled-components';
import { BiLoaderAlt } from 'react-icons/bi';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
	width: 1.2rem;
	height: 1.2rem;
	margin: 0px;
	animation: ${rotate} 1.5s infinite linear;
`;

export default SpinnerMini;
