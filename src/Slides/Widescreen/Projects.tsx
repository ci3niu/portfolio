import SectionDescription from '../../components/SectionDescription/SectionDescription';
import TitleScroller from '../../components/TitleScroller/TitleScroller';
import { StyledContainer } from '../../utils/Container.styled';

const Projects = () => {
	return (
		<StyledContainer>
			<TitleScroller text='Projects' multiplier={76} />
			<SectionDescription text={`Recent projects that I've worked on.`} />
		</StyledContainer>
	);
};

export default Projects;
