import styled from 'styled-components';

const StyledWrapper = styled.div`
	background-color: ${({ theme }) => theme.colorBackground};
	color: ${({ theme }) => theme.colorText};
	transition: background-color 0.5s;
	overflow-x: hidden;
`;

export default StyledWrapper;
