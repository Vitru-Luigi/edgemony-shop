import PropTypes from 'prop-types';

import {formatPrice} from '../utils/utils';
import {HeaderCartContainer, HeaderCartPrice, HeaderCartIcon} from '../styles';

const HeaderCart = ({totalPrice, cartSize, onCartClick}) => (
	<HeaderCartContainer>
		{!!cartSize && <HeaderCartPrice>{formatPrice(totalPrice)}</HeaderCartPrice>}
		<HeaderCartIcon onClick={onCartClick}>
			<i className='fas fa-shopping-cart'></i>
			{!!cartSize && <span className='qty'>{cartSize}</span>}
		</HeaderCartIcon>
	</HeaderCartContainer>
);

HeaderCart.propTypes = {
	totalPrice: PropTypes.number.isRequired,
	cartSize: PropTypes.number.isRequired,
	onCartClick: PropTypes.func.isRequired,
};

export default HeaderCart;
