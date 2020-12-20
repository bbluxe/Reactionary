import { io } from 'socket.io-client';

import socketConstants from '../constants/socket.constants';

const pseudo = localStorage.getItem('pseudo');
const idUser = localStorage.getItem('idUser');
const socket = io('ws://localhost:3000');

function connectToRoom(idRoom) {
  function request(id) {
    return { type: socketConstants.CONNECT_TO_ROOM_REQUEST, id };
  }
  function success(id) {
    return { type: socketConstants.CONNECT_TO_ROOM_SUCCESS, id };
  }

  return (dispatch) => {
    dispatch(request({ idRoom }));
    socket.emit('join', {
      room: idRoom, pseudo, idUser, date: new Date().toISOString(),
    });
    socket.once('joined', () => {
      dispatch(success(idRoom));
    });
  };
}

function getMessage() {
  function success(data) {
    return { type: socketConstants.GET_ALL_MESSAGE_SUCCESS, data };
  }
  return (dispatch) => {
    socket.once('message', (data) => {
      dispatch(success(data));
    });
  };
}

function getUsersInRoom() {
  function success(data) {
    return { type: socketConstants.GET_USERS_IN_ROOM_SUCCESS, data };
  }

  return (dispatch) => {
    socket.once('users', (data) => {
      dispatch(success(data));
    });
  };
}

function sendMessage(values) {
  function success() {
    return { type: socketConstants.SEND_MESSAGE_SUCCESS };
  }
  return (dispatch) => {
    socket.emit('message', {
      room: values.id, pseudo, message: values.message, date: values.date,
    });
    dispatch(success());
  };
}

export default {
  connectToRoom,
  getMessage,
  getUsersInRoom,
  sendMessage,
};
