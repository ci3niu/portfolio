import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		scrollbar-width: none;
	}
	body {
		margin: 0;
		padding: 0;
		scroll-behavior: smooth;
	}
`;

export default GlobalStyle;
