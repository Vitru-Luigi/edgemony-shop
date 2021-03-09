import {PropTypes} from 'prop-types';
// import {useEffect, useState} from 'react';

import './ProductModal.scss';

function ProductModal({product, closeProductModal, isOpen, cart, setCart}) {
	const isAlreadyInCart = () => cart.find((p) => p.id === product.id);

	const toggleCart = () => {
		if (isAlreadyInCart()) {
			const newCart = cart.filter((p) => p.id !== product.id);
			setCart(newCart);
		} else {
			setCart([...cart, {quantity: 1, ...product}]);
		}
	};

	return (
		<div className={`ProductModal ${isOpen ? `isOpen` : ''}`}>
			<div className='overlay' onClick={closeProductModal} />
			<div className='body'>
				<button type='button' onClick={closeProductModal} title='close product modal' className='closeBtn'>
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
								{!isAlreadyInCart() ? (
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
	closeProductModal: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	setCart: PropTypes.func,
	cart: PropTypes.array.isRequired,
};

export default ProductModal;
