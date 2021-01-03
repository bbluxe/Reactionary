import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslate } from 'react-polyglot';
import PropTypes from 'prop-types';

import socketAction from '../actions/socket.action';
import FormMessage from '../components/form_message.component';
import NavBarRoom from '../components/navbar_room.component';
import Draw from '../components/draw.component';

const mapStateToProps = (state) => {
  const { messages } = state.getMessage;
  const { users } = state.getUsers;
  const { drawing } = state.getDraw;
  return { messages, users, drawing };
};

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (values) => dispatch(socketAction.sendMessage(values)),
  getMessage: () => dispatch(socketAction.getMessage()),
  getUsersInRoom: () => dispatch(socketAction.getUsersInRoom()),
  leaveLobby: (id) => dispatch(socketAction.leaveLobby(id)),
  sendDraw: (data) => dispatch(socketAction.sendDraw(data)),
  getDraw: () => dispatch(socketAction.getDraw()),
});

const Room = ({
  sendMessage, getMessage, getUsersInRoom, leaveLobby, sendDraw, getDraw, messages, users, drawing,
}) => {
  useEffect(() => {
    getMessage();
  }, [messages.length]);

  useEffect(() => {
    getUsersInRoom();
  }, [users.length]);

  useEffect(() => {
    getDraw();
  }, [drawing]);

  const t = useTranslate();

  return (
    <>
      <NavBarRoom leaveLobby={(values) => leaveLobby(values)} />
      <div className="room-layout">
        <div className="room-layout-left">
          <div className="room-container">
            <h4>{t('users')}</h4>
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
          <Draw handleChange={(values) => sendDraw(values)} getDraw={getDraw()} drawing={drawing} />
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
  sendDraw: PropTypes.func,
  getDraw: PropTypes.func,
  messages: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
  drawing: PropTypes.string,
};

Room.defaultProps = {
  sendMessage: () => {},
  getMessage: () => {},
  getUsersInRoom: () => {},
  leaveLobby: () => {},
  sendDraw: () => {},
  getDraw: () => {},
  messages: [],
  users: [],
  drawing: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
