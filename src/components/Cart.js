import './Cart.scss';
import CartProduct from './CartProduct';

const Cart = ({products, setProductQuantity, removeFromCart}) => {
	return (
		<div className='CartModal__content'>
			{products.length > 0 ? products.map((product) => <CartProduct key={product.id} product={product} removeFromCart={removeFromCart} setProductQuantity={setProductQuantity} />) : <p className='CartModal__content__empty'>The cart is empty</p>}
		</div>
	);
};

export default Cart;
