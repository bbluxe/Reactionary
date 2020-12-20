import socketConstants from '../constants/socket.constants';

const initialState = {
  rooms: [],
};

function getRooms(state = initialState, action) {
  switch (action.type) {
    case socketConstants.GET_ALL_ROOM_SUCCESS:
      return {
        ...state,
        rooms: action.data,
      };
    default:
      return state;
  }
}

export default getRooms;
