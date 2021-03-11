import PropTypes from 'prop-types';
import HeaderCart from './HeaderCart';
import {HeaderContainer, HeaderImage} from '../styles';

const Header = ({logo, title, totalPrice, cartSize, onCartClick}) => (
	<HeaderContainer>
		<HeaderImage src={logo} alt={title} />
		<HeaderCart totalPrice={totalPrice} cartSize={cartSize} onCartClick={onCartClick} />
	</HeaderContainer>
);

Header.propTypes = {
	logo: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	totalPrice: PropTypes.number.isRequired,
	cartSize: PropTypes.number.isRequired,
	onCartClick: PropTypes.func.isRequired,
};

export default Header;
