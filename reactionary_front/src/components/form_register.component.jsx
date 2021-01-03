import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useTranslate } from 'react-polyglot';

const FormRegister = (props) => {
  const t = useTranslate();
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
      toast.error(t('diff-pwd'));
    } else {
      props.handleSubmit({ pseudo, password });
    }
  }

  return (
    <form className="container-form" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder={t('pseudo')} value={pseudo} onChange={handlePseudoChange} />
      <input type="password" placeholder={t('password')} value={password} onChange={handlePasswordChange} />
      <input type="password" placeholder={t('repeat')} value={checkPassword} onChange={handleCheckPasswordChange} />
      <input type="submit" value={t('register')} className="mainButton" />
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
