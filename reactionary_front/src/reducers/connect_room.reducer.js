import socketConstants from '../constants/socket.constants';

function connectRoom(state = {}, action) {
  switch (action.type) {
    case socketConstants.CONNECT_TO_ROOM_SUCCESS:
      return {
        connectedToRoom: true,
        room: action.id,
      };
    case socketConstants.CONNECT_TO_ROOM_FAILURE:
      return {
        connectedToRoom: false,
      };
    case socketConstants.LEAVE_LOBBY_SUCCESS:
      return {
        state,
      };
    default:
      return state;
  }
}

export default connectRoom;
