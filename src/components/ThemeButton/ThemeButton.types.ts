export interface ThemeButtonProps {
	themeId: string | undefined;
	handleThemeToggle: React.MouseEventHandler<HTMLButtonElement>;
}

export interface StyledThemeButtonProps {
	reveal: boolean;
}
