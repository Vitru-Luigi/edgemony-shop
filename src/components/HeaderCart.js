import PropTypes from 'prop-types';

import {formatPrice} from '../utils/utils';
import './HeaderCart.scss';

const HeaderCart = ({totalPrice, cartSize, onCartClick}) => (
	<div className='HeaderCart'>
		{!!cartSize && <span className='price'>{formatPrice(totalPrice)}</span>}
		<span className='icon' onClick={onCartClick}>
			<i className='fas fa-shopping-cart'></i>
			{!!cartSize && <span className='qty'>{cartSize}</span>}
		</span>
	</div>
);

HeaderCart.propTypes = {
	products: PropTypes.array.isRequired,
	totalPrice: PropTypes.number.isRequired,
	cartSize: PropTypes.number.isRequired,
	onCartClick: PropTypes.func.isRequired,
};

export default HeaderCart;
