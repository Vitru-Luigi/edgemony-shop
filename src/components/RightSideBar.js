import './RightSideBar.scss';
import {PropTypes} from 'prop-types';
import {Button} from '../styles';

const RightSideBar = ({isOpen, close, children}) => (
	<div className={`RightSideBar ${isOpen ? `is-open` : ''}`}>
		<div className='RightSideBar__overlay' onClick={close}></div>
		<div className='RightSideBar__body'>
			<header>
				<Button onClick={close}>
					<i className='fas fa-window-close'></i>
				</Button>
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
