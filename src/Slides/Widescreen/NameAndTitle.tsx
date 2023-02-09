import { StyledContainer } from '../../utils/Container.styled';
import TextToReveal from '../../components/TextToReveal/TextToReveal';
import styled from 'styled-components';
import ScrollCTA from '../../components/ScrollCTA/ScrollCTA';

const StyledNameAndTitleContainer = styled(StyledContainer)`
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	height: 100vh;
	position: relative;
	margin-top: -2rem;
`;

const NameAndTitle = () => {
	return (
		<StyledNameAndTitleContainer>
			<TextToReveal text='Michał Cieniek' fontFam='SouthGreat' delay={800} fontSize={200} />
			<TextToReveal
				text='Front-End Developer & Design Enthusiast'
				fontFam='MontserratBold'
				delay={1600}
				fontSize={40}
			/>
			<ScrollCTA />
		</StyledNameAndTitleContainer>
	);
};

export default NameAndTitle;
