import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useTranslate } from 'react-polyglot';

const FormConnectRoom = (props) => {
  const [room, setRoom] = useState('');
  const t = useTranslate();

  function handleChange(e) {
    setRoom(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!room) {
      toast.error(t('enter-room'));
    } else {
      props.handleSubmit(room);
    }
  }

  return (
    <form className="container-connect-form" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder={t('room')} value={room} onChange={handleChange} />
      <input type="submit" value={t('validate')} className="mainButton" />
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
