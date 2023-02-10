interface ITheme {
	id?: string;
	colorPrimary?: string;
	colorBackground: string;
	colorText: string;
}

export const themeDefault: ITheme = {
	colorPrimary: '#94d0ff',
	colorBackground: '#fff',
	colorText: '#000',
};

export const themeDark: ITheme = {
	id: 'dark',
	colorBackground: '#121212',
	colorText: '#fff',
};

export const themeLight: ITheme = {
	id: 'light',
	colorBackground: '#fff',
	colorText: '#000',
};
