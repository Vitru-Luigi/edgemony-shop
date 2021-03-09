import PropTypes from 'prop-types';

const HeaderCart = ({cart, products, openCartModal}) => {
	const totalPrice = cart.reduce((acc, cartItem) => {
		const product = products.find((p) => p.id === cartItem.id);
		return acc + product.price;
		// return acc + product.price * quantity;
	}, 0);

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
