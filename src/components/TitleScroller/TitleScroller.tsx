import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface TitleScrollerProps {
	text: string;
}

interface StyledBackgroundTitle {
	scroll: number;
}

const StyledBackgroundTitle = styled.div<StyledBackgroundTitle>`
	font-size: 20rem;
	font-family: 'MontserratRegular';
	color: ${({ theme }) => theme.colorText};
	opacity: 0.1;
	left: -35%;
	transform: translateX(${({ scroll }) => scroll / 100}%);
	transition: transform 0.5s ease-out;
`;

const TitleScroller: FC<TitleScrollerProps> = ({ text }) => {
	const [scrollY, setScrollY] = useState(0);

	const handleScroll = (e: any) => {
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
			<StyledBackgroundTitle scroll={scrollY}>{text}</StyledBackgroundTitle>
		</>
	);
};

export default TitleScroller;
