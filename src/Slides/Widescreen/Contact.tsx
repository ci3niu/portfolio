import TitleScroller from '../../components/TitleScroller/TitleScroller';
import { StyledContainer } from '../../utils/Container.styled';

const Contact = () => {
	return (
		<StyledContainer>
			<TitleScroller text='Contact' multiplier={50} toLeft />
		</StyledContainer>
	);
};

export default Contact;
