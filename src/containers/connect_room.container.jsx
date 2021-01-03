import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslate } from 'react-polyglot';
import PropTypes from 'prop-types';

import { Redirect, Link } from 'react-router-dom';
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
  const t = useTranslate();
  return (
    <>
      {connectedToRoom && (
      <Redirect to={`/room/${room}`} />
      )}
      <div className="connect-room-layout">
        <h1 className="title">{t('create-join')}</h1>
        <div className="selectRoom">
          {rooms.map((element) => (
            <Link to={`/room/${element}`} className="room-element nav-link" key={element} onClick={() => connectToRoom(element)}>
              <b>
                {element}
              </b>
            </Link>
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
