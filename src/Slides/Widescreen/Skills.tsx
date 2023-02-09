import TitleScroller from '../../components/TitleScroller/TitleScroller';
import { StyledContainer } from '../../utils/Container.styled';
import ReactLogo from '../../Assets/Imgs/ReactLogo.svg';

const Skills = () => {
	return (
		<StyledContainer>
			<TitleScroller text='Skills' multiplier={30} />
			<img src={ReactLogo} alt='' style={{ width: '100px' }} />
		</StyledContainer>
	);
};

export default Skills;
