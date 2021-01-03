import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { useTranslate } from 'react-polyglot';
import PropTypes from 'prop-types';
import userAction from '../actions/user.action';

import NavBarNotLogged from '../components/navbar_not_logged.component';
import FormLogin from '../components/form_login.component';

const mapStateToProps = (state) => {
  const { isLogged } = state.login;
  return { isLogged };
};

const mapDispatchToProps = (dispatch) => ({
  login: (values) => dispatch(userAction.login(values)),
});

const Login = ({ login, isLogged }) => {
  const t = useTranslate();
  return (
    isLogged
      ? <Redirect to="/connectRoom" />
      : (
        <>
          <NavBarNotLogged />
          <div className="container">
            <h1 className="title">{t('login')}</h1>
            <FormLogin handleSubmit={(values) => login(values)} />
          </div>
        </>
      )
  );
};

Login.propTypes = {
  login: PropTypes.func,
  isLogged: PropTypes.bool,
};

Login.defaultProps = {
  login: () => {},
  isLogged: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
