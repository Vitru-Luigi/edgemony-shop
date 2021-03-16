import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {ProductContainer, ProductImageWrap, ProductImage, ProductContent, ProductContentText, ProductContentTitle, ProductContentCategory, ProductContentDescription, ProductContentPrice, Button} from '../styles';
import {formatPrice} from '../utils/utils';

const ProductItem = ({product}) => {
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
				<Link to={`/product/${product.id}`}>
					<Button>View details</Button>
				</Link>
			</ProductContent>
		</ProductContainer>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
	openProductModal: PropTypes.func.isRequired,
};

export default ProductItem;
