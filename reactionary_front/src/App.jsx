import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './containers/register.container';
import Login from './containers/login.container';
import './assets/main.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
