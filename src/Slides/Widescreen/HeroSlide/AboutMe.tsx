import { useEffect, useRef, useState } from 'react';
import TitleScroller from '../../../components/TitleScroller/TitleScroller';
import { StyledContainer } from './styles/Container.styled';

const AboutMe = () => {
	return (
		<StyledContainer>
			<TitleScroller text='About Me' />
		</StyledContainer>
	);
};

export default AboutMe;
