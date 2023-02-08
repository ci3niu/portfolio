interface TextToRevealProps {
	text: string;
	fontFam: string;
	delay: number;
	fontSize: number;
}

interface StyledTextRevealProps {
	fontFam: string;
	fontSize: number;
	reveal: boolean;
}

import { FC, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const moveUp = () => keyframes`
0%{
    transform: translateY(100px);
}
100%{
    transform: translateY(0px);
}
`;

const hideWhiteBlocks = () => keyframes`
0%{
    opacity: 1;
    height: 100vh;
}
100%{
    opacity: 0;
    height: 0vh;
}
`;

const StyledTextReveal = styled.div<StyledTextRevealProps>`
	font-family: ${({ fontFam }) => fontFam};
	text-align: center;
	font-size: ${({ fontSize }) => fontSize}px;
	transform: translateY(${({ fontSize }) => fontSize * 1.4}px);
	animation: ${({ reveal }) => (reveal ? moveUp : 'none')} 1s cubic-bezier(0, 0.1, 0.12, 0.99) forwards;
`;

const Stage = styled.div`
	position: relative;
	z-index: 1;
	width: 100%;
`;

const WhiteBlock = styled.div`
	position: absolute;
	background-color: ${({ theme }) => theme.colorBackground};
	width: 100%;
	height: 25vh;
	animation: ${hideWhiteBlocks} 0.5s linear forwards;
	animation-delay: 2s;
`;

const TextToReveal: FC<TextToRevealProps> = ({ text, fontFam, delay, fontSize }) => {
	const [reveal, setReveal] = useState(false);

	const revealText = (timeout: number) => {
		setTimeout(() => {
			setReveal(true);
		}, timeout);
	};

	useEffect(() => {
		revealText(delay);
	}, []);

	return (
		<Stage>
			<StyledTextReveal fontFam={fontFam} fontSize={fontSize} reveal={reveal}>
				{text}
			</StyledTextReveal>
			<WhiteBlock />
		</Stage>
	);
};

export default TextToReveal;
