import { toast } from 'react-toastify';

import userService from '../services/user.service';
import userConstants from '../constants/user.constants';

toast.configure();

function login(params) {
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }

  return (dispatch) => {
    dispatch(request({ pseudo: params.pseudo }));
    userService.login(params.pseudo, params.password).then(
      (user) => {
        dispatch(success(user));
        localStorage.setItem('idUser', user.id);
        toast.info('Connexion réussie');
      },
      (error) => {
        dispatch(failure(error.toString()));
        toast.error(error.toString());
      },
    );
  };
}

function register(params) {
  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }

  return (dispatch) => {
    dispatch(request({ pseudo: params.pseudo }));
    userService.register(params.pseudo, params.password).then(
      (user) => {
        dispatch(success(user));
        toast.info('Inscription réussie');
      },
      (error) => {
        dispatch(failure(error.toString()));
        toast.error(error.toString());
      },
    );
  };
}

export default {
  login,
  register,
};
