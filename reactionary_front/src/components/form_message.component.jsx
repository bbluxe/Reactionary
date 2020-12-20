import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const FormMessage = (props) => {
  const [message, setMessage] = useState('');

  const { id } = useParams();
  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (message) {
      props.handleSubmit({ id, message });
    }
  }

  return (
    <form className="container-form" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Message" value={message} onChange={handleChange} />
      <input type="submit" value="Valider" className="mainButton" />
    </form>
  );
};

FormMessage.propTypes = {
  handleSubmit: PropTypes.func,
};

FormMessage.defaultProps = {
  handleSubmit: () => {},
};

export default FormMessage;
