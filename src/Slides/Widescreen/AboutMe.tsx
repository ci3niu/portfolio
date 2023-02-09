import SectionDescription from '../../components/SectionDescription/SectionDescription';
import TitleScroller from '../../components/TitleScroller/TitleScroller';
import { StyledContainer } from '../../utils/Container.styled';

const AboutMe = () => {
	return (
		<StyledContainer>
			<TitleScroller text='About Me' />
			<SectionDescription text='Some text about me. Probably nothing important here.' />
		</StyledContainer>
	);
};

export default AboutMe;
