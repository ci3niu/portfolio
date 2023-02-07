import { FC, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { hideWhiteBlocks, moveUp, Stage, WhiteBlock } from './styles/NameAndTitle.styles';

interface NameRevealProps {
	text: string;
	fontFam: string;
	timeDelay: number;
}

const NameReveal: FC<NameRevealProps> = ({ text, fontFam, timeDelay }) => {
	const [reveal, setReveal] = useState(false);

	const TextToReveal = styled.div`
		font-family: ${fontFam};
		text-align: center;
		font-size: 100px;
		transform: translateY(${100 * 1.4}px);
		animation: ${reveal ? moveUp(100) : 'none'} 1s cubic-bezier(0, 0.1, 0.12, 0.99) forwards;
	`;

	const revealText = (timeout: number) => {
		setTimeout(() => {
			setReveal(true);
		}, timeout);
	};

	useEffect(() => {
		revealText(timeDelay);
	}, []);

	return (
		<Stage>
			<TextToReveal>{text}</TextToReveal>
			<WhiteBlock />
		</Stage>
	);
};

export default NameReveal;
