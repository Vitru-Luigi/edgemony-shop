import PropTypes from 'prop-types';

const HeaderCart = ({openCartModal, totalPrice, cartSize}) => {
	return (
		<div className='HeaderCart'>
			<span>
				<small className='productsQty'>
					<i className='fas fa-shopping-cart' aria-hidden='true' onClick={openCartModal}></i>
					{cartSize}
				</small>
				<small className='totalPrize'>€ {totalPrice}</small>
			</span>
		</div>
	);
};

HeaderCart.propTypes = {
	totalPrice: PropTypes.number.isRequired,
	cardSize: PropTypes.number.isRequired,
};

export default HeaderCart;
