import styled, { keyframes, css } from 'styled-components';
import NameReveal from './NameReveal';
import { Container } from './styles/NameAndTitle.styles';
import TitleReveal from './TitleReveal';
import { AiOutlineDown } from 'react-icons/ai';
import { useEffect, useState } from 'react';

interface Props {
	reveal: boolean;
}

const opacity = keyframes`
0%{
    opacity: 0;
}
100%{
	opacity: 1;
}
`;

const hop = keyframes`
0%{
    transform: translateY(-25px);
}
100%{
    transform: translateY(0);
}
`;

const ScrollDown = styled.div<Props>`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	bottom: 0;
	color: blue;
	font-size: 1rem;
	padding: 1rem;
	opacity: 0;
	${({ reveal }) =>
		reveal &&
		css`
			animation: ${opacity} 1s linear forwards, ${hop} 2s alternate infinite;
		`};
`;

const NameAndTitle = () => {
	const [reveal, setReveal] = useState(false);

	const revealText = (timeout: number) => {
		setTimeout(() => {
			setReveal(true);
		}, timeout);
	};

	useEffect(() => {
		revealText(5000);
	}, []);

	return (
		<Container>
			<NameReveal text='Michał Cieniek' fontFam='SouthGreat' timeDelay={1000} />
			<TitleReveal text='Front-end Developer & Design Enthusiast' fontFam='BergenSans' timeDelay={1500} />
			<ScrollDown reveal={reveal}>
				SCROLL
				<AiOutlineDown />
			</ScrollDown>
		</Container>
	);
};

export default NameAndTitle;
