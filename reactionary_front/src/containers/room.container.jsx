import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import socketAction from '../actions/socket.action';
import FormMessage from '../components/form_message.component';

const mapStateToProps = (state) => {
  const { messages } = state.getMessage;
  return { messages };
};

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (values) => dispatch(socketAction.sendMessage(values.id, values.message)),
  getMessage: () => dispatch(socketAction.getMessage()),
});

const Room = ({ sendMessage, getMessage, messages }) => {
  useEffect(() => {
    getMessage();
  });

  return (
    <>
      {messages.map((element) => (
        <p>
          {element.pseudo}
          {' '}
          -
          {' '}
          {element.message}
        </p>
      ))}
      <FormMessage handleSubmit={(values) => sendMessage(values)} />
    </>
  );
};

Room.propTypes = {
  sendMessage: PropTypes.func,
  getMessage: PropTypes.func,
  messages: PropTypes.arrayOf(PropTypes.object),
};

Room.defaultProps = {
  sendMessage: () => {},
  getMessage: () => {},
  messages: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
