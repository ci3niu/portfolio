import TitleScroller from '../../components/TitleScroller/TitleScroller';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import { StyledContainer } from '../../utils/Container.styled';
import { toolsData } from '../../utils/toolsData';

const Skills = () => {
	return (
		<StyledContainer>
			<TitleScroller text='Skills' multiplier={30} />
			<SectionDescription text='Tools that I use on a daily basis.' onLeft />

			{toolsData.map((tool) => {
				const { name, icon } = tool;
				return (
					<div key={name} style={{ display: 'flex', flexDirection: 'column' }}>
						<img src={icon} alt={name} style={{ width: '100px', opacity: '0.8' }} />
						<p>{name}</p>
					</div>
				);
			})}
		</StyledContainer>
	);
};

export default Skills;
