import {PropTypes} from 'prop-types';
import {formatPrice} from '../utils/utils';
import {Button, Qty, CartProductContainer, CartProductImage, CartProductTitle, CartProductPrice, CartProductQty} from '../styles';

const CartProduct = ({product, removeFromCart, setProductQuantity}) => {
	const {image, title, price, quantity, id} = product;

	const increment = () => setProductQuantity(id, quantity + 1);
	const decrement = () => setProductQuantity(id, quantity - 1);
	const remove = () => removeFromCart(id);

	return (
		<CartProductContainer>
			<CartProductImage src={image} alt={title} />
			<CartProductTitle>{title}</CartProductTitle>
			<CartProductQty>
				<Button onClick={decrement} disabled={quantity === 1}>
					-
				</Button>
				<Qty>{quantity}</Qty>
				<Button onClick={increment}>+</Button>
			</CartProductQty>
			<CartProductPrice>{formatPrice(price)}</CartProductPrice>
			<Button onClick={remove}>Remove</Button>
		</CartProductContainer>
	);
};

CartProduct.propTypes = {
	product: PropTypes.object.isRequired,
	removeFromCart: PropTypes.func.isRequired,
	setProductQuantity: PropTypes.func.isRequired,
};

export default CartProduct;
