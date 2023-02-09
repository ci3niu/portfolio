import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface TitleScrollerProps {
	text: string;
}

interface StyledBackgroundTitle {
	scroll: number;
	multiplier: number;
}
const StyledBackgroundTitle = styled.div<StyledBackgroundTitle>`
	position: absolute;
	font-size: 20rem;
	font-family: 'MontserratRegular';
	color: ${({ theme }) => theme.colorText};
	opacity: 0.1;
	left: -15%;
	transform: translateX(${({ scroll, multiplier }) => scroll / multiplier}%);
	transition: transform 0.5s ease-out;
`;

const TitleScroller: FC<TitleScrollerProps> = ({ text }) => {
	const [scrollY, setScrollY] = useState(0);

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<StyledBackgroundTitle scroll={scrollY} multiplier={50}>
				{text}
			</StyledBackgroundTitle>
		</>
	);
};

export default TitleScroller;
