import userConstants from '../constants/user.constants';

function login(state = {}, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggingIn: true,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggingIn: false,
      };
    default:
      return state;
  }
}

export default login;
