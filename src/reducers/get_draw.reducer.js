import socketConstants from '../constants/socket.constants';

function getDraw(state = {}, action) {
  switch (action.type) {
    case socketConstants.GET_DRAW_SUCCESS:
      return {
        drawing: action.data,
      };
    default:
      return state;
  }
}

export default getDraw;
