import {PropTypes} from 'prop-types';
import {AlertContainer, AlertMsg, Button} from '../styles';

const Alert = ({msg, retry, close}) => (
	<AlertContainer>
		<AlertMsg>{msg}</AlertMsg>
		<Button onClick={() => retry()}>Retry</Button>
		<Button onClick={() => close()}>X</Button>
	</AlertContainer>
);

Alert.propTypes = {
	msg: PropTypes.string.isRequired,
	retry: PropTypes.func.isRequired,
	close: PropTypes.func.isRequired,
};

export default Alert;
