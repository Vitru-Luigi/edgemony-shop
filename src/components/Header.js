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
			{inCart.length > 0 && (
				<span>
					<small className='productsQty'>
						<i class='fa fa-shopping-cart' aria-hidden='true'></i>
						{inCart.length}
					</small>
					<small className='totalPrize'>€ {totalOfCart()}</small>
				</span>
			)}
		</header>
	);
}

Header.propTypes = {
	logo: PropTypes.string.isRequired,
};

export default Header;
