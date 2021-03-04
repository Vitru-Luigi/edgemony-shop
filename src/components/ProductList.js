import Product from './Product';
import './ProductList.scss';
import PropTypes from 'prop-types';

const ProductList = ({ products }) => <section className='ProductList'>{products && products.map((product, key) => <Product key={key} product={product} />)}</section>;

ProductList.propTypes = {
	products: PropTypes.array.isRequired,
};

export default ProductList;
