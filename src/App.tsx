import { createGlobalStyle } from 'styled-components';
import WideScreenHero from './Slides/Widescreen/HeroSlide/Hero';
import './Assets/index.css';

const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

const App = () => {
	return (
		<>
			<WideScreenHero />
			<GlobalStyle />
		</>
	);
};

export default App;
