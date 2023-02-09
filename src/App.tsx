import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './utils/GlobalStyle';
import { themeDefault, themeLight, themeDark } from './utils/Themes';
import './Assets/index.css';

import WideScreenHero from './Slides/Widescreen/HeroSlide/Hero';
import StyledWrapper from './components/Wrapper.styled';

import ThemeButton from './components/ThemeButton/ThemeButton';

const App = () => {
	const [theme, setTheme] = useState(themeDefault);

	const handleThemeToggle = () => {
		theme.id === 'dark' ? setTheme({ ...themeDefault, ...themeLight }) : setTheme({ ...themeDefault, ...themeDark });
	};

	return (
		<ThemeProvider theme={theme}>
			<StyledWrapper>
				<GlobalStyle />
				<ThemeButton handleThemeToggle={handleThemeToggle} themeId={theme.id} />
				<WideScreenHero />
			</StyledWrapper>
		</ThemeProvider>
	);
};

export default App;
