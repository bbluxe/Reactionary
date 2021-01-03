import { io } from 'socket.io-client';

import socketConstants from '../constants/socket.constants';

const pseudo = localStorage.getItem('pseudo');
const idUser = localStorage.getItem('idUser');
const socket = io('ws://reactionnary-back.herokuapp.com');

function getRooms() {
  function success(data) {
    return { type: socketConstants.GET_ALL_ROOM_SUCCESS, data };
  }

  return (dispatch) => {
    socket.emit('getRooms', '');
    socket.on('rooms', (data) => {
      dispatch(success(data));
    });
  };
}

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
    socket.on('joined', () => {
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
    socket.on('users', (data) => {
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

function leaveLobby(room) {
  function success() {
    return { type: socketConstants.LEAVE_LOBBY_SUCCESS };
  }

  return (dispatch) => {
    socket.emit('leave', {
      idUser, room, pseudo,
    });
    dispatch(success());
  };
}

function sendDraw(data) {
  function success() {
    return { type: socketConstants.SEND_DRAW_SUCCESS };
  }

  return (dispatch) => {
    socket.emit('drawing', data);
    dispatch(success());
  };
}

function getDraw() {
  function success(data) {
    return { type: socketConstants.GET_DRAW_SUCCESS, data };
  }

  return (dispatch) => {
    socket.on('drawing', (data) => {
      dispatch(success(data));
    });
  };
}

export default {
  getRooms,
  connectToRoom,
  getMessage,
  getUsersInRoom,
  sendMessage,
  leaveLobby,
  sendDraw,
  getDraw,
};
