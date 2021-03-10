import './Header.scss';
import HeaderCart from './HeaderCart';
import PropTypes from 'prop-types';
function Header({logo, openCartModal, totalPrice, cartSize}) {
	return (
		<header className='Header'>
			<img src={logo} alt='headerLogo' className='logo' />
			{!!cartSize && <HeaderCart openCartModal={openCartModal} totalPrice={totalPrice} cartSize={cartSize} />}
		</header>
	);
}

Header.propTypes = {
	logo: PropTypes.string.isRequired,
	totalPrice: PropTypes.number.isRequired,
	cardSize: PropTypes.number.isRequired,
};

export default Header;
