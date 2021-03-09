import {PropTypes} from 'prop-types';
import {useEffect} from 'react';

import './CartModal.scss';

function CartModal({cartModalIsOpen, closeCartModal, cart, setCart, totalPrice}) {
	console.log(cart);

	const onClickRemoveCart = (product) => {
		const newCart = cart.filter((p) => p.id !== product.id);
		setCart(newCart);
	};

	useEffect(() => {
		if (cart.length === 0) {
			closeCartModal();
		}
	}, [cart, closeCartModal]);

	return (
		<div className={`CartModal ${cartModalIsOpen ? `isOpen` : ''}`}>
			<div className='overlay' onClick={closeCartModal} />
			<div className='body'>
				<button type='button' onClick={closeCartModal} title='close product modal' className='closeBtn'>
					<i className='fas fa-window-close'></i>
				</button>
				<ul>
					{cart &&
						cart.map((product) => {
							console.log(product);
							return (
								<li>
									<img src={product.image} alt='' />
									<small className='title'>{product.title}</small>
									<span className='quantity'>qty: {product.quantity}</span>
									<span className='price'>€ {product.price}</span>
									<button type='button' className='removeBtn' onClick={() => onClickRemoveCart(product)}>
										<i className='fas fa-trash-alt'></i>
									</button>
								</li>
							);
						})}
				</ul>
				<span className='totalPrice'>Totalprice: € {totalPrice.toFixed(2)}</span>
			</div>
		</div>
	);
}

CartModal.propTypes = {
	cart: PropTypes.object,
	closeCartModal: PropTypes.func.isRequired,
	cartModalIsOpen: PropTypes.bool.isRequired,
};

export default CartModal;
