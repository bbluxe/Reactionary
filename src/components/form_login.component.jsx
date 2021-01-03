import React, { useState } from 'react';
import { useTranslate } from 'react-polyglot';
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
    const lang = localStorage.getItem('lang');
    props.handleSubmit({ pseudo, password, lang });
  }
  const t = useTranslate();

  return (
    <form className="container-form" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Pseudo" value={pseudo} onChange={handlePseudoChange} />
      <input type="password" placeholder={t('password')} value={password} onChange={handlePasswordChange} />
      <input type="submit" value={t('log')} className="mainButton" />
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
