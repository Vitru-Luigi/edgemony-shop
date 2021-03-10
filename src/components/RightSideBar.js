import './RightSideBar.scss';
import {PropTypes} from 'prop-types';
// import CartProduct from './CartProduct';
// import Cart from './Cart';
import {formatPrice} from '../utils/utils';

function RightSideBar({isOpen, close, totalPrice, children}) {
	return (
		<div className={`RightSideBar ${isOpen ? `is-open` : ''}`}>
			<div className='RightSideBar__overlay' onClick={close}></div>
			<div className='RightSideBar__body'>
				<header>
					<button className='RightSideBar__close' onClick={close}>
						X
					</button>
					<h2 className='RightSideBar__title'>Cart</h2>
				</header>
				{children}
				{/* <div className='RightSideBar__content'>
					{products.length > 0 ? products.map((product) => <CartProduct key={product.id} product={product} removeFromCart={removeFromCart} setProductQuantity={setProductQuantity} />) : <p className='RightSideBar__content__empty'>The cart is empty</p>}
				</div> */}
				<footer>Total: {formatPrice(totalPrice)}</footer>
			</div>
		</div>
	);
}

RightSideBar.propTypes = {
	products: PropTypes.array.isRequired,
	totalPrice: PropTypes.number.isRequired,
	isOpen: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired,
	setProductQuantity: PropTypes.func.isRequired,
};

export default RightSideBar;
