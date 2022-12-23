import React from 'react';

import config from '../../../config.js';

import TodoCount from './TodoCount/TodoCount.jsx';
import TodoPagination from './TodoPagination/TodoPagination.jsx';
import cl from './TodoNavigation.module.css';

function TodoNavigation(props) {

  if (config.showRenderComponents) console.info('TodoNavigation');

  return (
    <div className={cl['todo-navigation']}>
      <TodoPagination />
      <TodoCount />
    </div>
  );
}

export default TodoNavigation;