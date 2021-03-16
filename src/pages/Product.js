import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Alert from '../components/Alert';
import Loader from '../components/Loader';
import {fetchProduct} from '../services/api';
import {ProductContainer, ProductImageWrap, ProductImage, ProductContent, ProductContentText, ProductContentTitle, ProductContentCategory, ProductContentDescription, ProductContentPrice, Button} from '../styles';
import {formatPrice} from '../utils/utils';

const Product = ({addToCart, removeFromCart, isInCart}) => {
	let {productId} = useParams();

	const [product, setProduct] = useState({});
	const {category, description, image, price, title} = product;
	const [isLoading, setIsLoading] = useState(false);
	const [apiError, setApiError] = useState('');
	const [retry, setRetry] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setApiError('');
		fetchProduct(productId)
			.then((product) => {
				setProduct(product);
			})
			.catch((err) => setApiError(err.message))
			.finally(() => setIsLoading(false));
	}, [productId, retry]);

	const toggleCart = () => {
		if (isInCart(product)) {
			removeFromCart(product.id);
		} else {
			addToCart(product);
		}
	};

	const resetError = () => setApiError('');

	const toogleRetry = () => setRetry(!retry);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : apiError ? (
				<Alert msg={apiError} close={resetError} retry={toogleRetry} />
			) : (
				<ProductContainer>
					<ProductImageWrap>
						<ProductImage src={image} alt='' />
					</ProductImageWrap>
					<ProductContent>
						<ProductContentText>
							<ProductContentTitle>{title}</ProductContentTitle>
							<ProductContentCategory>{category}</ProductContentCategory>
							<ProductContentDescription>{description}</ProductContentDescription>
						</ProductContentText>
						<Button type='button' className='handleCartBtn' onClick={toggleCart}>
							{isInCart(product) ? (
								<span>
									<i className='fas fa-cart-plus'></i> Add to Cart
								</span>
							) : (
								<span>
									<i className='fas fa-cart-arrow-down'></i> Remove To Cart
								</span>
							)}
						</Button>
						<ProductContentPrice>Price : {formatPrice(price)}</ProductContentPrice>
					</ProductContent>
				</ProductContainer>
			)}
		</>
	);
};

Product.propTypes = {
	product: PropTypes.object.isRequired,
	openProductModal: PropTypes.func.isRequired,
};

export default Product;
