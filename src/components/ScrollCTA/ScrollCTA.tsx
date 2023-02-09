import { useEffect, useState } from 'react';
import { StyledScrollCTA } from './ScrollCTA.styled';
import { BsChevronDown } from 'react-icons/bs';

const ScrollCTA = () => {
	const [reveal, setReveal] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	const revealText = (timeout: number) => {
		setReveal(false);
		setTimeout(() => {
			setReveal(true);
		}, timeout);
	};

	const handleScroll = () => {
		setScrollY(window.scrollY);
		console.log(scrollY);
	};

	useEffect(() => {
		scrollY !== 0 ? setReveal(false) : revealText(4000);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollY]);

	return (
		<StyledScrollCTA reveal={reveal}>
			SCROLL
			<BsChevronDown />
		</StyledScrollCTA>
	);
};

export default ScrollCTA;
