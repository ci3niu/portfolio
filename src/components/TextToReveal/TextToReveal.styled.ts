import styled, { keyframes } from 'styled-components';
import { StyledCoverBlockProps, StyledTextRevealProps } from './TextToReveal.types';

export const moveUp = (number: number) => keyframes`
0%{
    transform: translateY(${number}px);
}
100%{
    transform: translateY(0px);
}
`;

export const hideCoverBlock = () => keyframes`
0%{
    opacity: 1;
}
100%{
    opacity: 0;
}
`;

export const StyledStage = styled.div`
	position: relative;
	z-index: 1;
	width: 100%;
`;

export const StyledTextReveal = styled.div<StyledTextRevealProps>`
	text-align: center;
	font-family: ${({ fontFam }) => fontFam};
	font-size: ${({ fontSize }) => fontSize}px;
	transform: translateY(${({ fontSize }) => fontSize * 1.5}px);
	animation: ${({ reveal, fontSize }) => (reveal ? moveUp(fontSize) : 'none')} 1s cubic-bezier(0.25, 0.1, 0.25, 1)
		forwards;
`;

export const StyledCoverBlock = styled.div<StyledCoverBlockProps>`
	position: absolute;
	background-color: ${({ theme }) => theme.colorBackground};
	width: 100%;
	height: ${({ fontSize }) => fontSize * 1.5}px;
	animation: ${hideCoverBlock} 1s linear forwards;
	animation-delay: 2s;
`;
