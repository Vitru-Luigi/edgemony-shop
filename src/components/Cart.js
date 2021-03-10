import './Cart.scss';
import CartProduct from './CartProduct';
import {PropTypes} from 'prop-types';

const Cart = ({products, setProductQuantity, removeFromCart}) => {
	return (
		<div className='Cart'>
			<h2 className='Cart__title'>Cart</h2>
			{products.length > 0 ? products.map((product) => <CartProduct key={product.id} product={product} removeFromCart={removeFromCart} setProductQuantity={setProductQuantity} />) : <p className='CartModal__content__empty'>The cart is empty</p>}
		</div>
	);
};

Cart.propTypes = {
	products: PropTypes.array.isRequired,
	setProductQuantity: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
