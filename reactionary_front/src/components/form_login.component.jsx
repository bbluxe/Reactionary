import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormRegister = (props) => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');

  function handlePseudoChange(e) {
    setPseudo(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit({ pseudo, password });
  }

  return (
    <form className="container-form" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Pseudo" value={pseudo} onChange={handlePseudoChange} />
      <input type="password" placeholder="Mot de passe" value={password} onChange={handlePasswordChange} />
      <input type="submit" value="Se connecter" className="mainButton" />
    </form>
  );
};

FormRegister.propTypes = {
  handleSubmit: PropTypes.func,
};

FormRegister.defaultProps = {
  handleSubmit: () => {},
};

export default FormRegister;
