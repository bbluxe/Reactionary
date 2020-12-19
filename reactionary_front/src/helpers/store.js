import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import login from '../reducers/login.reducer';
import register from '../reducers/register.reducer';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  login,
  register,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

export default store;
