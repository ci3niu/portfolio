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
    height: 50vh;
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
	height: 50vh;
	animation: ${hideWhiteBlocks} 0.5s linear forwards;
	animation-delay: 2s;
`;