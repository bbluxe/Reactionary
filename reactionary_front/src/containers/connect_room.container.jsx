import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import socketAction from '../actions/socket.action';
import FormConnectRoom from '../components/form_connect_room.component';

const mapStateToProps = (state) => {
  const { connectedToRoom, room } = state.connectRoom;
  const { rooms } = state.getRooms;
  return { connectedToRoom, room, rooms };
};

const mapDispatchToProps = (dispatch) => ({
  connectToRoom: (values) => dispatch(socketAction.connectToRoom(values)),
  getRooms: (values) => dispatch(socketAction.getRooms(values)),
});

const ConnectRoom = ({
  connectedToRoom, room, rooms, connectToRoom, getRooms,
}) => {
  useEffect(() => {
    getRooms();
  }, [rooms.length]);

  return (
    <>
      {connectedToRoom && (
      <Redirect to={`/room/${room}`} />
      )}
      <div className="connect-room-layout">
        <h1 className="title">Créer / Rejoindre une salle</h1>
        <div className="selectRoom">
          {rooms.map((element) => (
            <p className="room-element" key={element}>
              <b>
                {element}
              </b>
            </p>
          ))}
        </div>
        <FormConnectRoom className="inputRoom" handleSubmit={(values) => connectToRoom(values)} />
      </div>
    </>
  );
};

ConnectRoom.propTypes = {
  connectedToRoom: PropTypes.bool,
  room: PropTypes.string,
  rooms: PropTypes.arrayOf(PropTypes.string),
  connectToRoom: PropTypes.func,
  getRooms: PropTypes.func,
};

ConnectRoom.defaultProps = {
  connectedToRoom: false,
  room: '',
  rooms: [],
  connectToRoom: () => {},
  getRooms: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectRoom);
