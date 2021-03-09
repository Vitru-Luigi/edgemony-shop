import PropTypes from 'prop-types';

const HeaderCart = ({inCart}) => {
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
		<div className='HeaderCart'>
			<span>
				<small className='productsQty'>
					<i class='fa fa-shopping-cart' aria-hidden='true'></i>
					{inCart.length}
				</small>
				<small className='totalPrize'>€ {totalOfCart()}</small>
			</span>
		</div>
	);
};

HeaderCart.propTypes = {
	inCart: PropTypes.array.isRequired,
};

export default HeaderCart;
