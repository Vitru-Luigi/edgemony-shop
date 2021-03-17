import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {ProductItemContainer, ProductItemImageWrap, ProductItemImage, ProductItemContent, ProductItemContentText, ProductItemContentTitle, ProductItemContentCategory, ProductItemContentDescription, ProductItemContentPrice, Button} from '../styles';
import {formatPrice} from '../utils/utils';

const ProductItem = ({product}) => {
	const {category, description, image, price, title} = product;
	return (
		<ProductItemContainer>
			<ProductItemImageWrap>
				<ProductItemImage src={image} alt='' />
			</ProductItemImageWrap>
			<ProductItemContent>
				<ProductItemContentText>
					<ProductItemContentTitle>{title}</ProductItemContentTitle>
					<ProductItemContentCategory>{category}</ProductItemContentCategory>
					<ProductItemContentDescription>{description}</ProductItemContentDescription>
				</ProductItemContentText>
				<ProductItemContentPrice>Price : {formatPrice(price)}</ProductItemContentPrice>
				<Link to={`/product/${product.id}`}>
					<Button>View details</Button>
				</Link>
			</ProductItemContent>
		</ProductItemContainer>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
};

export default ProductItem;
