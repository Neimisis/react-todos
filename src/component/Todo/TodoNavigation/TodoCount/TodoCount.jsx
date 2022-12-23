import React, { useContext } from 'react';

import config from '../../../../config.js';
import { TodoContext } from '../../../../context/TodoContext.js';

import cl from './TodoCount.module.css';


const TodoCount = () => {

  if (config.showRenderComponents) console.info('TodoCount');

  const { countTodo } = useContext(TodoContext);

  return (
    <div className={cl['todo-count']}>{countTodo}</div>
  );
};


export default TodoCount;