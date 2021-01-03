import React from 'react';
import { useTranslate } from 'react-polyglot';

const NotFound = () => {
  const t = useTranslate();
  return (
    <p>{t('nopage')}</p>
  );
};

export default NotFound;
