import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import socketAction from '../actions/socket.action';
import FormConnectRoom from '../components/form_connect_room.component';

const mapStateToProps = (state) => {
  const { connectedToRoom, room } = state.connectRoom;
  return { connectedToRoom, room };
};

const mapDispatchToProps = (dispatch) => ({
  connectToRoom: (values) => dispatch(socketAction.connectToRoom(values)),
});

const ConnectRoom = ({ connectedToRoom, room, connectToRoom }) => (
  <>
    {connectedToRoom && (
    <Redirect to={`/room/${room}`} />
    )}
    <div className="container">
      <h1 className="title">Créer / Rejoindre une salle</h1>
      <FormConnectRoom handleSubmit={(values) => connectToRoom(values)} />
    </div>
  </>
);

ConnectRoom.propTypes = {
  connectedToRoom: PropTypes.bool,
  room: PropTypes.string,
  connectToRoom: PropTypes.func,
};

ConnectRoom.defaultProps = {
  connectedToRoom: false,
  room: '',
  connectToRoom: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectRoom);
