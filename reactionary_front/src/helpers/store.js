import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import login from '../reducers/login.reducer';
import register from '../reducers/register.reducer';
import connectRoom from '../reducers/connect_room.reducer';
import sendMessage from '../reducers/send_message.reducer';
import getMessage from '../reducers/get_message.reducer';
import getUsers from '../reducers/get_users.reducer';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  login,
  register,
  connectRoom,
  sendMessage,
  getMessage,
  getUsers,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

export default store;
