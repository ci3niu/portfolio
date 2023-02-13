import styled from 'styled-components';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import TitleScroller from '../../components/TitleScroller/TitleScroller';
import { StyledContainer } from '../../utils/Container.styled';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import photobuffImage from '../../Assets/Img/projects/photobuff.jpg';
import recipeappImage from '../../Assets/Img/projects/recipeapp.jpg';
import shopspaImage from '../../Assets/Img/projects/shopspa.jpg';

const projectsData = [
	{
		name: 'photoBuff',
		linkGH: 'https://github.com/ci3niu/react-photobuff',
		linkDemo: 'https://ci3niu.github.io/react-photobuff/',
		image: photobuffImage,
		tools: ['React', 'TypeScript', 'styled-components', 'responsive-carousel', 'react-typed'],
	},
	{
		name: 'shopSPA',
		linkGH: 'https://github.com/ci3niu/react-shop-spa',
		linkDemo: 'https://ci3niu.github.io/react-shop-spa/',
		image: shopspaImage,
		tools: ['React', 'REST API', 'useReducer', 'ChakraUI'],
	},
	{
		name: 'recipeApp',
		linkGH: 'https://github.com/ci3niu/vanillaJs-recipe-app',
		linkDemo: 'https://ci3niu.github.io/vanillaJs-recipe-app/',
		image: recipeappImage,
		tools: ['JavaScript', 'REST API', 'SASS'],
	},
];

const StyledProjectsContainer = styled(StyledContainer)`
	height: 180vh;
`;

const StyledProjectsStructure = styled.div`
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
	align-items: center;
	max-width: 25%;
	padding: 0 1rem;
	border: 1px solid ${({ theme }) => theme.colorPrimary};
	border-radius: 1rem;
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colorText};
	}
`;

const StyledProjectTitle = styled.h2`
	font-size: 2.4rem;
`;

const StyledImageContainer = styled.div`
	max-width: 80%;
	border-radius: 1rem;
	overflow: hidden;
`;

const StyledLinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	margin-top: 1rem;
	gap: 2rem;
`;

const StyledLinkContainer = styled.div`
	display: flex;
`;

const Projects = () => {
	return (
		<StyledProjectsContainer>
			<TitleScroller text='Projects' multiplier={76} />
			<SectionDescription text={`Recent projects that I've worked on.`} />
			<StyledProjectsStructure>
				{projectsData.map((project) => {
					const { name, linkGH, linkDemo, image, tools } = project;
					return (
						<SingleProjectContainer>
							<StyledProjectTitle>{name}</StyledProjectTitle>

							<StyledImageContainer>
								<img src={image} alt={name} style={{ width: '100%', objectFit: 'cover', opacity: '0.9' }} />
							</StyledImageContainer>

							<StyledLinksContainer>
								<StyledLinkContainer>
									<AiOutlineGithub fill='#94d0ff' size={20} opacity='0.75' />
									<a href={linkGH} target='_blank'>
										{linkGH}
									</a>
								</StyledLinkContainer>
								<StyledLinkContainer>
									<AiOutlineLink fill='#94d0ff' size={20} opacity='0.75' />
									<a href={linkDemo} target='_blank'>
										{linkDemo}
									</a>
								</StyledLinkContainer>
							</StyledLinksContainer>

							<div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
								<p style={{ fontSize: '2rem' }}>Tools used:</p>
								<div>
									{tools.map((tool) => (
										<p
											style={{
												margin: '0.5rem',
												backgroundColor: '#94d0ffBF',
												padding: '1rem',
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
			</StyledProjectsStructure>
		</StyledProjectsContainer>
	);
};

export default Projects;
