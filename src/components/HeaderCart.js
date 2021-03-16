import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {formatPrice} from '../utils/utils';
import {HeaderCartContainer, HeaderCartPrice, HeaderCartIcon} from '../styles';

const HeaderCart = ({totalPrice, cartSize, onCartClick}) => (
	<HeaderCartContainer>
		{!!cartSize && <HeaderCartPrice>{formatPrice(totalPrice)}</HeaderCartPrice>}
		<Link to='/cart'>
			<HeaderCartIcon>
				<i className='fas fa-shopping-cart'></i>
				{!!cartSize && <span className='qty'>{cartSize}</span>}
			</HeaderCartIcon>
		</Link>
	</HeaderCartContainer>
);

HeaderCart.propTypes = {
	totalPrice: PropTypes.number.isRequired,
	cartSize: PropTypes.number.isRequired,
	onCartClick: PropTypes.func.isRequired,
};

export default HeaderCart;
