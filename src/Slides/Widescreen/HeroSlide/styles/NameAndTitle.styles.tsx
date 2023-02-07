import styled, { keyframes } from 'styled-components';

// Animations
export const moveUp = (init: number) => keyframes`
0%{
    transform: translateY(${init}px);
}
100%{
    transform: translateY(0px);
}
`;

export const hideWhiteBlocks = () => keyframes`
0%{
    opacity: 1;
    height: 100vh;
}
100%{
    opacity: 0;
    height: 0vh;
}
`;

export const Container = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
`;

export const Stage = styled.div`
	position: relative;
	z-index: 1;
	width: 100%;
`;

export const WhiteBlock = styled.div`
	position: absolute;
	background-color: #fff;
	width: 100%;
	height: 25vh;
	animation: ${hideWhiteBlocks} 0.5s linear forwards;
	animation-delay: 2s;
`;

interface TextToRevealProps {
	fontFam: string;
	fontSize: number;
	reveal: boolean;
}

export const TextToReveal = styled.div<TextToRevealProps>`
	font-family: ${({ fontFam }) => fontFam};
	text-align: center;
	font-size: ${({ fontSize }) => fontSize}px;
	transform: translateY(${({ fontSize }) => fontSize * 1.4}px);
	animation: ${({ reveal }) => (reveal ? moveUp(100) : 'none')} 1s cubic-bezier(0, 0.1, 0.12, 0.99) forwards;
`;
