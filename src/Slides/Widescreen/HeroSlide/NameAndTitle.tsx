import { StyledContainer } from './styles/Container.styled';
import TextToReveal from '../../../components/TextToReveal/TextToReveal';
import styled from 'styled-components';

const StyledHeroContainer = styled(StyledContainer)`
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const NameAndTitle = () => {
	return (
		<StyledHeroContainer>
			<TextToReveal text='Michał Cieniek' fontFam='SouthGreat' delay={800} fontSize={200} />
			<TextToReveal
				text='Front-End Developer & Design Enthusiast'
				fontFam='MontserratRegular'
				delay={1600}
				fontSize={40}
			/>
		</StyledHeroContainer>
	);
};

export default NameAndTitle;
