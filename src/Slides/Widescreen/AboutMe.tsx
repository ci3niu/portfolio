import SectionDescription from '../../components/SectionDescription/SectionDescription';
import TitleScroller from '../../components/TitleScroller/TitleScroller';
import { StyledContainer } from '../../utils/Container.styled';

const AboutMe = () => {
	return (
		<StyledContainer>
			<TitleScroller text='About Me' multiplier={60} toLeft />
			<SectionDescription text='Over the last few years, I have allowed myself to enter the world of programming. I pride myself on willingness and ability to learn.' />
		</StyledContainer>
	);
};

export default AboutMe;
