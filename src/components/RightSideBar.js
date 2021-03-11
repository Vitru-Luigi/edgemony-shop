// import './RightSideBar.scss';
import {PropTypes} from 'prop-types';
import {RightSideBarContainer, RightSideBarOverlay, RightSideBarBody, Button, RightSideBarHeader} from '../styles';

const RightSideBar = ({isOpen, close, children}) => (
	<RightSideBarContainer isOpen={isOpen}>
		<RightSideBarOverlay isOpen={isOpen} onClick={close}></RightSideBarOverlay>
		<RightSideBarBody isOpen={isOpen}>
			<RightSideBarHeader>
				<Button onClick={close}>
					<i className='fas fa-window-close'></i>
				</Button>
			</RightSideBarHeader>
			{children}
		</RightSideBarBody>
	</RightSideBarContainer>
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
