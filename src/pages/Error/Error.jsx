import React from 'react';

import config from '../../config.js';

import cl from './Error.module.css';

function Error404() {
  if (config.showRenderComponents) console.info('About');
  return (
    <div className="container">
      <h1 className={cl['error__title']}>Страница не найдена</h1>
      <p className={cl['error__code']}>404</p>
      <a className={cl['error__link']} href="/">На главную</a>
    </div>
  );
}

export default Error404;