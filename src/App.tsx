import { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { themeDefault, themeLight, themeDark } from './utils/Themes';
import GlobalStyle from './utils/GlobalStyle';
import './Assets/index.css';

import StyledWrapper from './components/Wrapper.styled';
import ThemeButton from './components/ThemeButton/ThemeButton';
import { NameAndTitle, AboutMe, Skills, Projects, Contact } from './Slides/Widescreen/_index';

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
				<ThemeButton handleThemeToggle={handleThemeToggle} themeId={theme.id} />
				<NameAndTitle />
				<AboutMe />
				<Skills />
				<Projects />
				<Contact />
			</StyledWrapper>
		</ThemeProvider>
	);
};

export default App;
