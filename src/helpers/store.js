import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import login from '../reducers/login.reducer';
import register from '../reducers/register.reducer';
import connectRoom from '../reducers/connect_room.reducer';
import sendMessage from '../reducers/send_message.reducer';
import getMessage from '../reducers/get_message.reducer';
import getUsers from '../reducers/get_users.reducer';
import getRooms from '../reducers/get_rooms.reducer';
import sendDraw from '../reducers/send_draw.reducer';
import getDraw from '../reducers/get_draw.reducer';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  login,
  register,
  connectRoom,
  sendMessage,
  getMessage,
  getUsers,
  getRooms,
  sendDraw,
  getDraw,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

export default store;
