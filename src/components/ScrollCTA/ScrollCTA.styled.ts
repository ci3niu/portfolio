import styled, { css, keyframes } from 'styled-components';
import { StyledScrollCTAProps } from './ScrollCTA.types';

const showScrollCTA = () => keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}
`;

export const StyledScrollCTA = styled.div<StyledScrollCTAProps>`
	position: absolute;
	bottom: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	opacity: 0;
	color: ${({ theme }) => theme.colorPrimary};
	font-family: 'MontserratRegular';
	${({ reveal }) =>
		reveal &&
		css`
			animation: ${showScrollCTA} 1.5s alternate infinite;
		`};
`;
