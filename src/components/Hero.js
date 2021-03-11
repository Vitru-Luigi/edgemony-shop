import PropTypes from 'prop-types';
import {HeroContainer, HeroTitle, HeroImage, HeroDescription} from '../styles';

const Hero = ({cover, description, title}) => (
	<HeroContainer>
		<HeroTitle>{title}</HeroTitle>
		<HeroImage src={cover} alt='' />
		<HeroDescription>{description}</HeroDescription>
	</HeroContainer>
);

Hero.propTypes = {
	cover: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Hero;
