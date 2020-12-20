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
    console.log(socket);
    socket.emit('join', { room: idRoom, pseudo, idUser });
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

function sendMessage(room, message) {
  function success() {
    return { type: socketConstants.SEND_MESSAGE_SUCCESS };
  }
  return (dispatch) => {
    socket.emit('message', { room, pseudo, message });
    dispatch(success());
  };
}

export default {
  connectToRoom,
  sendMessage,
  getMessage,
};
