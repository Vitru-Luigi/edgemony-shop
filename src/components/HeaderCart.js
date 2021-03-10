import PropTypes from 'prop-types';

const HeaderCart = ({cart, openCartModal, totalPrice}) => {
	console.log(cart);

	return (
		<div className='HeaderCart'>
			<span>
				<small className='productsQty'>
					<i className='fas fa-shopping-cart' aria-hidden='true' onClick={openCartModal}></i>
					{cart.length}
				</small>
				<small className='totalPrize'>€ {totalPrice}</small>
			</span>
		</div>
	);
};

HeaderCart.propTypes = {
	cart: PropTypes.array.isRequired,
};

export default HeaderCart;
