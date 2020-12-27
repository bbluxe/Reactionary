import userConstants from '../constants/user.constants';

function register(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_SUCCESS:
      return {
        isRegister: true,
      };
    case userConstants.REGISTER_FAILURE:
      return {
        isRegister: false,
      };
    default:
      return state;
  }
}

export default register;
