import { FC, useEffect, useState } from 'react';
import { StyledBackgroundTitle, StyleTitleToLeft, StyleTitleToRight } from './TitleScroller.styled';
import { TitleScrollerProps } from './TitleScroller.types';

const TitleScroller: FC<TitleScrollerProps> = ({ text, multiplier, toLeft }) => {
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

	if (toLeft) {
		return (
			<>
				<StyleTitleToLeft scroll={scrollY} multiplier={multiplier}>
					{text}
				</StyleTitleToLeft>
			</>
		);
	}

	return (
		<>
			<StyleTitleToRight scroll={scrollY} multiplier={multiplier}>
				{text}
			</StyleTitleToRight>
		</>
	);
};

export default TitleScroller;
