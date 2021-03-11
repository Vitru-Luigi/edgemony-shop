import PropTypes from 'prop-types';
import {ProductContainer, ProductImageWrap, ProductImage, ProductContent, ProductContentText, ProductContentTitle, ProductContentCategory, ProductContentDescription, ProductContentPrice, Button} from '../styles';
import {formatPrice} from '../utils/utils';

const Product = ({product, openProductModal}) => {
	const {category, description, image, price, title} = product;
	return (
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
				<ProductContentPrice>Price : {formatPrice(price)}</ProductContentPrice>
				<Button onClick={openProductModal}>View details</Button>
			</ProductContent>
		</ProductContainer>
	);
};

Product.propTypes = {
	product: PropTypes.object.isRequired,
	openProductModal: PropTypes.func.isRequired,
};

export default Product;
