import React from 'react';
import { useTranslate } from 'react-polyglot';

const Forbidden = () => {
  const t = useTranslate();
  return (
    <p>{t('access')}</p>
  );
};

export default Forbidden;
