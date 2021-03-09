import './Header.scss';
import HeaderCart from './HeaderCart';
import PropTypes from 'prop-types';
function Header({logo, cart, products}) {
	return (
		<header className='Header'>
			<img src={logo} alt='headerLogo' className='logo' />
			{!!cart.length && <HeaderCart cart={cart} products={products} />}
		</header>
	);
}

Header.propTypes = {
	logo: PropTypes.string.isRequired,
	cart: PropTypes.array.isRequired,
};

export default Header;
