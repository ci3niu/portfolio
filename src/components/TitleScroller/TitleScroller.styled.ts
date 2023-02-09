import styled from 'styled-components';
import { StyledBackgroundTitleProps } from './TitleScroller.types';

export const StyledBackgroundTitle = styled.div<StyledBackgroundTitleProps>`
	position: absolute;
	font-size: 20rem;
	font-family: 'MontserratRegular';
	color: ${({ theme }) => theme.colorText};
	opacity: 0.1;
	left: -15%;
	transform: translateX(${({ scroll, multiplier }) => scroll / multiplier}%);
	transition: transform 0.5s ease-out;
`;
