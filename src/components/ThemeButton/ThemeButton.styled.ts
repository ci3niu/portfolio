import styled, { css, keyframes } from 'styled-components';

interface StyledThemeButtonProps {
	reveal: boolean;
}

const showThemeButton = () => keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}
`;

export const StyledThemeButton = styled.button<StyledThemeButtonProps>`
	position: sticky;
	z-index: 2;
	top: 1rem;
	left: 1rem;
	width: 2rem;
	height: 2rem;
	font-size: 1rem;
	border-radius: 50%;
	opacity: 0;
	border: 3px solid ${({ theme }) => theme.colorPrimary};
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: ${({ theme }) => theme.colorText};
	${({ reveal }) =>
		reveal &&
		css`
			animation: ${showThemeButton} 1s linear forwards;
		`};
	&:hover {
		box-shadow: 0px 0px 20px ${({ theme }) => theme.colorPrimary};
		transition: all 0.24s ease;
		scale: 1.1;
	}
`;
