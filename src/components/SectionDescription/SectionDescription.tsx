import { FC } from 'react';
import { StyledDescOnLeft, StyledDescOnRight } from './SectionDescription.styled';
import { SectionDescriptionProps } from './SectionDescription.types';

const SectionDescription: FC<SectionDescriptionProps> = ({ text, onLeft }) => {
	if (onLeft) return <StyledDescOnLeft>{text}</StyledDescOnLeft>;

	return <StyledDescOnRight>{text}</StyledDescOnRight>;
};

export default SectionDescription;
