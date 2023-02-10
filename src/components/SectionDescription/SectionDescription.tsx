import { FC } from 'react';
import styled from 'styled-components';

interface SectionDescriptionProps {
	text: string;
	onLeft?: boolean;
}

const StyledDescription = styled.div`
	position: absolute;
	top: 17%;
	font-family: 'MontserratRegular';
	font-size: 3rem;
	width: 60%;
`;

const StyledDescOnLeft = styled(StyledDescription)`
	left: 10%;
	text-align: start;
`;

const StyledDescOnRight = styled(StyledDescription)`
	right: 10%;
	text-align: end;
`;

const SectionDescription: FC<SectionDescriptionProps> = ({ text, onLeft }) => {
	if (onLeft)
		return (
			<>
				<StyledDescOnLeft>{text}</StyledDescOnLeft>
			</>
		);

	return <StyledDescOnRight>{text}</StyledDescOnRight>;
};

export default SectionDescription;
