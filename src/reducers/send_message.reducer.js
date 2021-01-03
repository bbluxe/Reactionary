import socketConstants from '../constants/socket.constants';

function sendMessage(state = {}, action) {
  switch (action.type) {
    case socketConstants.SEND_MESSAGE_SUCCESS:
      return {
        messageSent: true,
      };
    default:
      return state;
  }
}

export default sendMessage;
