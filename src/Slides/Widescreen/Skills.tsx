import TitleScroller from '../../components/TitleScroller/TitleScroller';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import { StyledContainer } from '../../utils/Container.styled';
import { toolsData } from '../../utils/toolsData';
import styled from 'styled-components';

const StyledToolContainer = styled(StyledContainer)`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: 'MontserratRegular';
	font-size: 1.2rem;
	img {
		width: 100px;
		opacity: 0.75;
	}
`;

const Skills = () => {
	return (
		<StyledContainer>
			<TitleScroller text='Skills' multiplier={28} toLeft />
			<SectionDescription text='Tools that I use on a daily basis.' onLeft />

			{toolsData.map((tool) => {
				const { name, icon } = tool;
				return (
					<StyledToolContainer key={name}>
						<img src={icon} alt={name} />
						<p>{name}</p>
					</StyledToolContainer>
				);
			})}
		</StyledContainer>
	);
};

export default Skills;
