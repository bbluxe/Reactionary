import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import socketAction from '../actions/socket.action';
import FormMessage from '../components/form_message.component';
import NavBarRoom from '../components/navbar_room.component';

const mapStateToProps = (state) => {
  const { messages } = state.getMessage;
  const { users } = state.getUsers;
  return { messages, users };
};

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (values) => dispatch(socketAction.sendMessage(values)),
  getMessage: () => dispatch(socketAction.getMessage()),
  getUsersInRoom: () => dispatch(socketAction.getUsersInRoom()),
  leaveLobby: (id) => dispatch(socketAction.leaveLobby(id)),
});

const Room = ({
  sendMessage, getMessage, getUsersInRoom, leaveLobby, messages, users,
}) => {
  useEffect(() => {
    getMessage();
  }, [messages.length]);

  useEffect(() => {
    getUsersInRoom();
  }, [users.length]);

  return (
    <>
      <NavBarRoom leaveLobby={(values) => leaveLobby(values)} />
      <div className="room-layout">
        <div className="room-layout-left">
          <div className="room-container">
            <h4>Utilisateurs connectés: </h4>
            {users.map((element) => (
              <p key={element.idUser}>
                <b>
                  {element.pseudo}
                </b>
              </p>
            ))}
          </div>
        </div>
        <div className="room-layout-mid">
          <div className="draw-container">
            <p>Draw</p>
          </div>
        </div>
        <div className="room-layout-right">
          <div className="room-container">
            {messages.map((element) => (
              <p key={element.date}>
                {element.pseudo}
                {' '}
                :
                {' '}
                {element.message}
              </p>
            ))}
          </div>
          <FormMessage handleSubmit={(values) => sendMessage(values)} />
        </div>
      </div>
    </>

  );
};

Room.propTypes = {
  sendMessage: PropTypes.func,
  getMessage: PropTypes.func,
  getUsersInRoom: PropTypes.func,
  leaveLobby: PropTypes.func,
  messages: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
};

Room.defaultProps = {
  sendMessage: () => {},
  getMessage: () => {},
  getUsersInRoom: () => {},
  leaveLobby: () => {},
  messages: [],
  users: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
