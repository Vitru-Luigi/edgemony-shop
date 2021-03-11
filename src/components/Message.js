import PropTypes from 'prop-types';
import {MessageContainer} from '../styles';

const Message = ({msg}) => <MessageContainer>{msg}</MessageContainer>;

Message.propTypes = {
	msg: PropTypes.string,
};

export default Message;
