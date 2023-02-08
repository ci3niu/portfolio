import { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './utils/GlobalStyle';
import { themeDefault, themeLight, themeDark } from './utils/Themes';
import './Assets/index.css';

import WideScreenHero from './Slides/Widescreen/HeroSlide/Hero';
import StyledWrapper from './components/Wrapper.styled';

const App = () => {
	const [theme, setTheme] = useState(themeDefault);

	const handleThemeToggle = () => {
		theme.id === 'dark' ? setTheme({ ...themeDefault, ...themeLight }) : setTheme({ ...themeDefault, ...themeDark });
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<StyledWrapper>
				<GlobalStyle />
				<button onClick={handleThemeToggle}>^</button>
				<WideScreenHero />
			</StyledWrapper>
		</ThemeProvider>
	);
};

export default App;
