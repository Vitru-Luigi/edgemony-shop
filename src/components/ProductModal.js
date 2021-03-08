import {PropTypes} from 'prop-types';
import {useEffect, useState} from 'react';

import './ProductModal.scss';

function ProductModal({product, closeModal, isOpen, inCart, addToCart}) {
	const [disabled, setDisabled] = useState(false);

	const addtoCart = () => {
		if (inCart && !inCart.includes(product)) {
			addToCart([...inCart, product]);
		}
	};

	useEffect(() => {
		if (inCart && inCart.includes(product)) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	}, [inCart, product]);

	return (
		<div className={`ProductModal ${isOpen ? `isOpen` : ''}`}>
			<div className='overlay' onClick={closeModal} />
			<div className='body'>
				<button onClick={closeModal} title='close product modal' className='closeBtn'>
					×
				</button>
				{!!product ? (
					<div className='content'>
						<img src={product.image} alt={product.title} />
						<h2>{product.title}</h2>
						<p>{product.description}</p>
						<hr />
						<span className='price'>
							<button disabled={disabled} id={product.id} className='detailsBtn' onClick={addtoCart}>
								Add to Cart
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
};

export default ProductModal;
