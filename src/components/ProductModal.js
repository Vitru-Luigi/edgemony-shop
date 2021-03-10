import {PropTypes} from 'prop-types';
// import {useEffect, useState} from 'react';

import './ProductModal.scss';
// {product, closeModal, isOpen, addToCart, removeFromCart, inCart}
function ProductModal({product, closeModal, isOpen, inCart, addToCart, removeFromCart}) {
	// const inCart = () => cart.find((p) => p.id === product.id);
	const productId = product && product.id;

	const toggleCart = () => {
		if (inCart) {
			removeFromCart(productId);
		} else {
			addToCart(productId);
		}
	};

	return (
		<div className={`ProductModal ${isOpen ? `isOpen` : ''}`}>
			<div className='overlay' onClick={closeModal} />
			<div className='body'>
				<button type='button' onClick={closeModal} title='close product modal' className='closeBtn'>
					<i className='fas fa-window-close'></i>
				</button>
				{!!product ? (
					<div className='content'>
						<img src={product.image} alt={product.title} />
						<h2>{product.title}</h2>
						<p>{product.description}</p>
						<hr />
						<span className='price'>
							<button className='detailsBtn' onClick={toggleCart}>
								{!inCart ? (
									<span>
										<i class='fas fa-cart-plus'></i> Add to Cart
									</span>
								) : (
									<span>
										<i class='fas fa-cart-arrow-down'></i> Remove To Cart
									</span>
								)}
							</button>
							<small>Price: </small>€ {product.price}
						</span>
					</div>
				) : null}
			</div>
		</div>
	);
}

ProductModal.propTypes = {
	product: PropTypes.object,
	closeModal: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	setCart: PropTypes.func,
	cart: PropTypes.array.isRequired,
};

export default ProductModal;
