import { FC, useEffect, useState } from 'react';
import { Stage, TextToReveal, WhiteBlock } from './styles/NameAndTitle.styles';

interface NameRevealProps {
	text: string;
	fontFam: string;
	timeDelay: number;
}

const TitleReveal: FC<NameRevealProps> = ({ text, fontFam, timeDelay }) => {
	const [reveal, setReveal] = useState(false);

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
			<TextToReveal fontFam={fontFam} reveal={reveal} fontSize={40}>
				{text}
			</TextToReveal>
			<WhiteBlock />
		</Stage>
	);
};

export default TitleReveal;
