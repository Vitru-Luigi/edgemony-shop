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
	isOpen: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
};

export default RightSideBar;
