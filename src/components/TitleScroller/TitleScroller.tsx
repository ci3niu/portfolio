import { FC, useEffect, useState } from 'react';
import { StyledBackgroundTitle } from './TitleScroller.styled';
import { TitleScrollerProps } from './TitleScroller.types';

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
