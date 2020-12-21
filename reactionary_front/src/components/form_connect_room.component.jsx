import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const FormConnectRoom = (props) => {
  const [room, setRoom] = useState('');

  function handleChange(e) {
    setRoom(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!room) {
      toast.error('Veuillez entrer une salle');
    } else {
      props.handleSubmit(room);
    }
  }

  return (
    <form className="container-connect-form" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Salle" value={room} onChange={handleChange} />
      <input type="submit" value="Valider" className="mainButton" />
    </form>
  );
};

FormConnectRoom.propTypes = {
  handleSubmit: PropTypes.func,
};

FormConnectRoom.defaultProps = {
  handleSubmit: () => {},
};

export default FormConnectRoom;
