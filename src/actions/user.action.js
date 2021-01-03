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
        localStorage.setItem('pseudo', user.pseudo);
        window.location.reload();
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
        if (params.lang === 'en') {
          toast.info('Register success');
        } else {
          toast.info('Inscription réussie');
        }
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
