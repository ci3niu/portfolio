import { FC } from 'react';
import styled from 'styled-components';

interface SectionDescriptionProps {
	text: string;
}

const StyledDescription = styled.div`
	position: absolute;
	right: 10%;
	top: 17%;
	font-family: 'MontserratRegular';
	font-size: 3rem;
	width: 50%;
	text-align: end;
`;

const SectionDescription: FC<SectionDescriptionProps> = ({ text }) => {
	return <StyledDescription>{text}</StyledDescription>;
};

export default SectionDescription;
