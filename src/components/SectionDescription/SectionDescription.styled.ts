import styled from 'styled-components';

const StyledDescription = styled.div`
	position: absolute;
	top: 21%;
	font-family: 'MontserratRegular';
	font-size: 3rem;
	width: 60%;
`;

export const StyledDescOnLeft = styled(StyledDescription)`
	left: 10%;
	text-align: start;
`;

export const StyledDescOnRight = styled(StyledDescription)`
	right: 10%;
	text-align: end;
`;
