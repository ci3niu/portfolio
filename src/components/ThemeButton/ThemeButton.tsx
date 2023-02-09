import { StyledThemeButton } from './ThemeButton.styled';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FC, useEffect, useState } from 'react';
import { ThemeButtonProps } from './ThemeButton.types';

const ThemeButton: FC<ThemeButtonProps> = ({ themeId, handleThemeToggle }) => {
	const [reveal, setReveal] = useState(false);

	const revealText = (timeout: number) => {
		setTimeout(() => {
			setReveal(true);
		}, timeout);
	};

	useEffect(() => {
		revealText(4000);
	}, []);

	return (
		<StyledThemeButton onClick={handleThemeToggle} reveal={reveal}>
			{themeId === 'dark' ? <FaMoon /> : <FaSun />}{' '}
		</StyledThemeButton>
	);
};

export default ThemeButton;
