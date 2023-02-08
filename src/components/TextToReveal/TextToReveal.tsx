import { FC, useEffect, useState } from 'react';
import { StyledCoverBlock, StyledStage, StyledTextReveal } from './TextToReveal.styled';
import { TextToRevealProps } from './TextToReveal.types';

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
		<StyledStage>
			<StyledTextReveal fontFam={fontFam} fontSize={fontSize} reveal={reveal}>
				{text}
			</StyledTextReveal>
			<StyledCoverBlock fontSize={fontSize} />
		</StyledStage>
	);
};

export default TextToReveal;
