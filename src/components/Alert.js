import {PropTypes} from 'prop-types';

import './Alert.scss';

const Alert = ({msg, retry, close}) => (
	<div className='Alert'>
		<span className='Alert__message'>{msg}</span>
		<button type='button' className='Alert__retry' onClick={() => retry()}>
			Retry
		</button>
		<button type='button' className='Alert__close' onClick={() => close()}>
			X
		</button>
	</div>
);

Alert.propTypes = {
	msg: PropTypes.string.isRequired,
	retry: PropTypes.func.isRequired,
	close: PropTypes.func.isRequired,
};

export default Alert;
