import './Header.scss';
import HeaderCart from './HeaderCart';
import PropTypes from 'prop-types';
function Header({logo, inCart}) {
	return (
		<header className='Header'>
			<img src={logo} alt='headerLogo' className='logo' />
			{inCart.length > 0 && <HeaderCart inCart={inCart} />}
		</header>
	);
}

Header.propTypes = {
	logo: PropTypes.string.isRequired,
	inCart: PropTypes.array.isRequired,
};

export default Header;
