import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const FormRegister = (props) => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  function handlePseudoChange(e) {
    setPseudo(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleCheckPasswordChange(e) {
    setCheckPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (checkPassword !== password) {
      toast.error('Mot de passe diff');
    } else {
      props.handleSubmit({ pseudo, password });
    }
  }

  return (
    <form className="container-form" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Pseudo" value={pseudo} onChange={handlePseudoChange} />
      <input type="password" placeholder="Mot de passe" value={password} onChange={handlePasswordChange} />
      <input type="password" placeholder="Répéter le mot de passe" value={checkPassword} onChange={handleCheckPasswordChange} />
      <input type="submit" value="S'inscrire" className="mainButton" />
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
