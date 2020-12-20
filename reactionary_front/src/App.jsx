import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import Register from './containers/register.container';
import Login from './containers/login.container';
import ConnectRoom from './containers/connect_room.container';
import Room from './containers/room.container';
import Forbidden from './containers/forbidden.container';
import NotFound from './containers/not_found.container';
import './assets/main.css';
import 'react-toastify/dist/ReactToastify.css';

const mapStateToProps = (state) => {
  const { isLogged } = state.login;
  return { isLogged };
};

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/connectRoom" component={isLogged ? ConnectRoom : Forbidden} />
      <Route exact path="/room/:id" component={isLogged ? Room : Forbidden} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  isLogged: PropTypes.bool,
};

App.defaultProps = {
  isLogged: false,
};

export default connect(mapStateToProps)(App);
