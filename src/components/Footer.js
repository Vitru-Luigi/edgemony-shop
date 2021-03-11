import PropTypes from 'prop-types';
import date from '../utils/getYear';
import {FooterContainer, FooterNav} from '../styles';

const Footer = ({title}) => (
	<FooterContainer>
		<FooterNav>
			{date} &copy; {title}
		</FooterNav>
	</FooterContainer>
);

Footer.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Footer;
