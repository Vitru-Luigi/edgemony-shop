import CartProduct from './CartProduct';
import {PropTypes} from 'prop-types';
import {formatPrice} from '../utils/utils';
import {CartContainer, CartTitle, CartMsg} from '../styles';

const Cart = ({products, setProductQuantity, removeFromCart, totalPrice}) => {
	return (
		<CartContainer>
			<CartTitle>Cart</CartTitle>
			{!!products.length ? (
				products.map((product) => (
					<>
						<CartProduct key={product.id} product={product} removeFromCart={removeFromCart} setProductQuantity={setProductQuantity} />
						<footer>Total: {formatPrice(totalPrice)}</footer>
					</>
				))
			) : (
				<CartMsg>The cart is empty</CartMsg>
			)}
		</CartContainer>
	);
};

Cart.propTypes = {
	products: PropTypes.array.isRequired,
	setProductQuantity: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
