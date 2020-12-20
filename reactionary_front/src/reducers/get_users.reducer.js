import socketConstants from '../constants/socket.constants';

const initialState = {
  users: [],
};

function getUsers(state = initialState, action) {
  switch (action.type) {
    case socketConstants.GET_USERS_IN_ROOM_SUCCESS:
      return {
        ...state,
        users: action.data,
      };
    default:
      return state;
  }
}

export default getUsers;
