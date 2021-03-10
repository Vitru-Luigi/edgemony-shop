import PropTypes from 'prop-types';

import HeaderCart from './HeaderCart';
import './Header.scss';

const Header = ({logo, title, totalPrice, cartSize, products, onCartClick}) => (
	<header className='Header'>
		<img src={logo} alt={title} />
		<HeaderCart totalPrice={totalPrice} cartSize={cartSize} products={products} onCartClick={onCartClick} />
	</header>
);

Header.propTypes = {
	logo: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	totalPrice: PropTypes.number.isRequired,
	cartSize: PropTypes.number.isRequired,
	products: PropTypes.array.isRequired,
	onCartClick: PropTypes.func.isRequired,
};

export default Header;
