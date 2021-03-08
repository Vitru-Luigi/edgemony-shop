import './Product.scss';
import PropTypes from 'prop-types';
// import ProductModal from './ProductModal';
// import {useState} from 'react';

const Product = ({product, openProductModal}) => {
	const {category, description, image, price, title} = product;
	return (
		<fieldset className='Product'>
			<legend className='product-img'>
				<img src={image} alt='' />
			</legend>

			<article className='product-info'>
				<div className='product-text'>
					<h1>{title}</h1>
					<h2>{category}</h2>
					<p>{description}</p>
				</div>
				<div className='product-price-btn'>
					<p>
						<span>Price € {price}</span>
					</p>
					<button onClick={openProductModal}>View details</button>
				</div>
			</article>
		</fieldset>
	);
};

Product.propTypes = {
	product: PropTypes.object.isRequired,
};

export default Product;
