import PropTypes from 'prop-types';
import HeaderCart from './HeaderCart';
import {HeaderContainer, HeaderImage} from '../styles';
import {Link} from 'react-router-dom';

const Header = ({logo, title, totalPrice, cartSize}) => (
	<HeaderContainer>
		<Link to='/'>
			<HeaderImage src={logo} alt={title} />
		</Link>
		<HeaderCart totalPrice={totalPrice} cartSize={cartSize} />
	</HeaderContainer>
);

Header.propTypes = {
	logo: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	totalPrice: PropTypes.number.isRequired,
	cartSize: PropTypes.number.isRequired,
};

export default Header;
