import { createGlobalStyle } from 'styled-components';
import Hero from './Slides/Widescreen/HeroSlide/Hero';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0%;
		box-sizing: border-box;
	}
`;

const App = () => {
	return (
		<>
			<Hero />
			<GlobalStyle />
		</>
	);
};

export default App;
