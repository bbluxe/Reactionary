import socketConstants from '../constants/socket.constants';

const initialState = {
  messages: [],
};

function getMessage(state = initialState, action) {
  switch (action.type) {
    case socketConstants.GET_ALL_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.data],
      };
    default:
      return state;
  }
}

export default getMessage;
