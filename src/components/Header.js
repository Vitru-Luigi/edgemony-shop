import './Header.scss';
import PropTypes from 'prop-types';
function Header({logo, inCart}) {
	function totalOfCart() {
		const total = inCart.map((obj) => {
			return obj.price;
		});

		if (total.length > 0) {
			const reducer = (accumulator, currentValue) => accumulator + currentValue;
			return total.reduce(reducer);
		}
	}

	return (
		<header className='Header'>
			<img src={logo} alt='headerLogo' className='logo' />
			<span style={{color: 'white'}}>
				{inCart.length > 0 && inCart.length}
				{inCart.length > 0 && <h6>€ {totalOfCart()}</h6>}
			</span>
		</header>
	);
}

Header.propTypes = {
	logo: PropTypes.string.isRequired,
};

export default Header;
