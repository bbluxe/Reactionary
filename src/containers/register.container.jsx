import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import userAction from '../actions/user.action';

import NavBarNotLogged from '../components/navbar_not_logged.component';
import FormRegister from '../components/form_register.component';

const mapStateToProps = (state) => {
  const { isRegister } = state.register;
  return { isRegister };
};

const mapDispatchToProps = (dispatch) => ({
  register: (values) => dispatch(userAction.register(values)),
});

const Register = ({ register, isRegister }) => (
  isRegister
    ? <Redirect to="/login" />
    : (
      <>
        <NavBarNotLogged />
        <div className="container">
          <h1 className="title">Inscription</h1>
          <FormRegister handleSubmit={(values) => register(values)} />
        </div>
      </>
    )
);

Register.propTypes = {
  register: PropTypes.func,
  isRegister: PropTypes.bool,
};

Register.defaultProps = {
  register: () => {},
  isRegister: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
