import styled from 'styled-components';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import TitleScroller from '../../components/TitleScroller/TitleScroller';
import { StyledContainer } from '../../utils/Container.styled';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

const projectsData = [
	{
		name: 'photoBuff',
		linkGH: 'https://github.com/ci3niu/react-photobuff',
		linkDemo: 'https://ci3niu.github.io/react-photobuff/',
		image: '',
		tools: ['React', 'TypeScript', 'styled-components', 'react-responsive-carousel', 'react-typed'],
	},
	{
		name: 'shopSPA',
		linkGH: 'https://github.com/ci3niu/react-shop-spa',
		linkDemo: 'https://ci3niu.github.io/react-shop-spa/',
		image: '',
		tools: ['React', 'REST API', 'useReducer', 'ChakraUI'],
	},
	{
		name: 'recipeApp',
		linkGH: 'https://github.com/ci3niu/vanillaJs-recipe-app',
		linkDemo: 'https://ci3niu.github.io/vanillaJs-recipe-app/',
		image: '',
		tools: ['JavaScript', 'REST API', 'SASS'],
	},
];

const StyledProjectsContainer = styled(StyledContainer)`
	height: 180vh;
`;

const Asd = styled.div`
	position: absolute;
	top: 33%;
	display: flex;
	justify-content: space-around;
	width: 100%;
`;

const SingleProjectContainer = styled.div`
	font-family: 'MontserratRegular';
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	max-width: 20%;
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colorText};
	}
`;

const Projects = () => {
	return (
		<StyledProjectsContainer>
			<TitleScroller text='Projects' multiplier={76} />
			<SectionDescription text={`Recent projects that I've worked on.`} />
			<Asd>
				{projectsData.map((project) => {
					const { name, linkGH, linkDemo, image, tools } = project;
					return (
						<SingleProjectContainer>
							<p style={{ marginLeft: '2rem', fontSize: '2rem' }}>{name}</p>

							<p style={{ alignSelf: 'center', fontSize: '3rem', marginBottom: '0' }}>[...]</p>
							<p style={{ alignSelf: 'center', fontSize: '3rem' }}>[IMAGE HERE]</p>

							<div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
								<AiOutlineGithub fill='#94d0ff' size={20} opacity='0.75' />
								<a href={linkGH} target='_blank'>
									{linkGH}
								</a>
							</div>

							<div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
								<AiOutlineLink fill='#94d0ff' size={20} opacity='0.75' />
								<a href={linkDemo} target='_blank'>
									{linkDemo}
								</a>
							</div>
							<div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
								<p style={{ fontSize: '2rem' }}>Tools used:</p>
								<div>
									{tools.map((tool) => (
										<p
											style={{
												margin: '0.5rem',
												backgroundColor: '#94d0ffBF',
												padding: '0.6rem 0',
												borderRadius: '10%',
												textAlign: 'center',
											}}
										>
											{tool}
										</p>
									))}
								</div>
							</div>
						</SingleProjectContainer>
					);
				})}
			</Asd>
		</StyledProjectsContainer>
	);
};

export default Projects;
