import './RightSideBar.scss';
import {PropTypes} from 'prop-types';
// import CartProduct from './CartProduct';
// import Cart from './Cart';

const RightSideBar = ({isOpen, close, children}) => (
	<div className={`RightSideBar ${isOpen ? `is-open` : ''}`}>
		<div className='RightSideBar__overlay' onClick={close}></div>
		<div className='RightSideBar__body'>
			<header>
				<button className='RightSideBar__close' onClick={close}>
					X
				</button>
			</header>
			{children}
		</div>
	</div>
);

RightSideBar.propTypes = {
	products: PropTypes.array.isRequired,
	totalPrice: PropTypes.number.isRequired,
	isOpen: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired,
	setProductQuantity: PropTypes.func.isRequired,
};

export default RightSideBar;
