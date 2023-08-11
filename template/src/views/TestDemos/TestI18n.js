import React from 'react';
import i18n from '../../lang';
import ViewTest from '../ViewTest/ViewTest';
function TextI18n() {
  return (
    <div>
      <div>{i18n.t('home.title')}</div>
      <h3>{i18n.t('home.content')}</h3>
      <ViewTest />
    </div>
  );
}

export default TextI18n;
