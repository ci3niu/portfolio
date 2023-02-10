import styled from 'styled-components';
import TitleScroller from '../../components/TitleScroller/TitleScroller';
import { StyledContainer } from '../../utils/Container.styled';

import { AiOutlineMail, AiOutlinePhone, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const contactData = [
	{ type: 'email', value: 'em.cieniek@gmail', icon: <AiOutlineMail fill='#94d0ff' size={60} opacity='0.75' /> },
	{ type: 'phone', value: '516 505 696', icon: <AiOutlinePhone fill='#94d0ff' size={60} opacity='0.75' /> },
	{ type: 'github', value: '/ci3niu', icon: <AiOutlineGithub fill='#94d0ff' size={60} opacity='0.75' /> },
	{ type: 'linkedIn', value: '/m-cieniek', icon: <AiOutlineLinkedin fill='#94d0ff' size={60} opacity='0.75' /> },
];

const StyledContactContainer = styled.div`
	position: absolute;
	top: 30%;
	left: 10%;
	display: flex;
	flex-direction: column;
`;

const StyledContact = styled.div`
	display: flex;
	align-items: center;
	&:nth-child(2) {
		margin-left: 3rem;
	}
	&:nth-child(3) {
		margin-left: 6rem;
	}
	&:nth-child(4) {
		margin-left: 9rem;
	}
	p {
		font-family: 'MontserratRegular';
		font-size: 2rem;
		padding-left: 1rem;
	}
`;

const Contact = () => {
	return (
		<StyledContainer>
			<TitleScroller text='Contact' multiplier={50} toLeft />
			<StyledContactContainer>
				{contactData.map((contact) => {
					const { type, value, icon } = contact;
					return (
						<StyledContact key={type}>
							{icon}
							<p>{value}</p>
						</StyledContact>
					);
				})}
			</StyledContactContainer>
		</StyledContainer>
	);
};

export default Contact;
