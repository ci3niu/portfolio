import { createGlobalStyle } from 'styled-components';
import WideScreenHero from './Slides/Widescreen/HeroSlide/Hero';
import './Assets/index.css';
import { useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

const App = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<WideScreenHero />
			<GlobalStyle />
		</>
	);
};

export default App;
