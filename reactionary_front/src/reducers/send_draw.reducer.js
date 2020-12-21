import socketConstants from '../constants/socket.constants';

function sendDraw(state = {}, action) {
  switch (action.type) {
    case socketConstants.SEND_DRAW_SUCCESS:
      return {
        drawSent: true,
      };
    default:
      return state;
  }
}

export default sendDraw;
