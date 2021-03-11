import {PropTypes} from 'prop-types';
import {formatPrice} from '../utils/utils';
import {ProductModalContainer, ProductModalOverlay, ProductModalBody, ProductModalContent, ProductModalImage, ProductModalTitle, ProductModalDescription, ProductModalPrice, Button} from '../styles';

const ProductModal = ({product, close, isOpen, inCart, addToCart, removeFromCart}) => {
	const productId = product && product.id;

	const toggleCart = () => {
		if (inCart) {
			removeFromCart(productId);
		} else {
			addToCart(productId);
		}
	};

	return (
		<ProductModalContainer isOpen={isOpen}>
			<ProductModalOverlay onClick={close} isOpen={isOpen} />
			<ProductModalBody isOpen={isOpen}>
				<Button onClick={close}>
					<i className='fas fa-window-close'></i>
				</Button>
				{!!product ? (
					<ProductModalContent>
						<ProductModalImage src={product.image} alt={product.title} />
						<ProductModalTitle>{product.title}</ProductModalTitle>
						<ProductModalDescription>{product.description}</ProductModalDescription>
						<hr />
						<ProductModalPrice>
							<Button className='detailsBtn' onClick={toggleCart}>
								{!inCart ? (
									<span>
										<i class='fas fa-cart-plus'></i> Add to Cart
									</span>
								) : (
									<span>
										<i class='fas fa-cart-arrow-down'></i> Remove To Cart
									</span>
								)}
							</Button>
							<small>Price: </small>
							{formatPrice(product.price)}
						</ProductModalPrice>
					</ProductModalContent>
				) : null}
			</ProductModalBody>
		</ProductModalContainer>
	);
};

ProductModal.propTypes = {
	product: PropTypes.object,
	close: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	setCart: PropTypes.func,
};

export default ProductModal;
