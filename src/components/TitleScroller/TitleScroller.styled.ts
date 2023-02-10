import styled from 'styled-components';
import { StyledBackgroundTitleProps } from './TitleScroller.types';

export const StyledBackgroundTitle = styled.div<StyledBackgroundTitleProps>`
	position: absolute;
	font-size: 20rem;
	font-family: 'MontserratRegular';
	color: ${({ theme }) => theme.colorText};
	opacity: 0.1;
	transition: transform 0.5s ease-out;
	display: flex;
`;

export const StyleTitleToRight = styled(StyledBackgroundTitle)`
	left: -${({ multiplier }) => multiplier / 3}%;
	transform: translateX(${({ scroll, multiplier }) => scroll / multiplier}%);
`;
export const StyleTitleToLeft = styled(StyledBackgroundTitle)`
	right: -${({ multiplier }) => multiplier}%;
	transform: translateX(-${({ scroll, multiplier }) => scroll / multiplier}%);
`;
