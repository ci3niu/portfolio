import NameReveal from './NameReveal';
import { Container } from './styles/NameAndTitle.styles';
import TitleReveal from './TitleReveal';

const NameAndTitle = () => {
	return (
		<Container>
			<NameReveal text='Michał Cieniek' fontFam='SouthGreat' timeDelay={500} />
			{/* <TitleReveal /> */}
		</Container>
	);
};

export default NameAndTitle;
