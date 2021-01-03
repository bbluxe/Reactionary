import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import { I18n } from 'react-polyglot';

import Register from './containers/register.container';
import Login from './containers/login.container';
import ConnectRoom from './containers/connect_room.container';
import Room from './containers/room.container';
import Forbidden from './containers/forbidden.container';
import NotFound from './containers/not_found.container';
import fr from './translations/fr.json';
import en from './translations/en.json';

import './assets/main.css';
import 'react-toastify/dist/ReactToastify.css';

const user = localStorage.getItem('idUser');

const App = () => {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState({});
  useEffect(
    () => {
      localStorage.setItem('lang', locale);
      const result = locale === 'fr' ? fr : en;
      setMessages(result);
    },
    [locale],
  );
  useEffect(
    () => {
      setLocale(localStorage.getItem('lang'));
    },
    [localStorage.getItem('lang')],
  );
  return (
    <I18n locale={locale} messages={messages}>
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Register} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/connectRoom" component={user !== null ? ConnectRoom : Forbidden} />
            <Route exact path="/room/:id" component={user !== null ? Room : Forbidden} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
        {locale !== 'fr'
          ? <button type="button" className="footer" onClick={() => setLocale('fr')}>French</button>
          : <button type="button" className="footer" onClick={() => setLocale('en')}>Anglais</button>}
      </>
    </I18n>
  );
};

export default App;
