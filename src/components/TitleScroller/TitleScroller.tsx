import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface TitleScrollerProps {
	text: string;
}

interface StyledBackgroundTitle {
	scroll: number;
}

const StyledBackgroundTitle = styled.div<StyledBackgroundTitle>`
	position: absolute;
	font-size: 20rem;
	font-family: 'MontserratRegular';
	color: ${({ theme }) => theme.colorText};
	opacity: 0.1;
	left: -35%;
	transform: translateX(${({ scroll }) => scroll}%);
	transition: transform 0.5s ease-out;
`;

const TitleScroller: FC<TitleScrollerProps> = ({ text }) => {
	const [scrollY, setScrollY] = useState(0);
	const [screenHeight, setScreenHeight] = useState(0);
	const [scrollHeight, setScrollHeight] = useState(0);

	const handleScroll = (e: any) => {
		const { body, documentElement } = e.srcElement;
		const sd = Math.max(body.scrollTop, documentElement.scrollTop);
		let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight)) * 100;
		const limit = (documentElement.clientHeight * 100) / documentElement.scrollHeight;
		if (sp >= 0 && sp <= limit) {
			setScrollY(sp);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		setScrollHeight(Math.round(window.document.documentElement.scrollHeight));
		setScreenHeight(Math.round(window.document.documentElement.clientHeight));

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
