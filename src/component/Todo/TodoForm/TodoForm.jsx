import React, { useContext, useState } from 'react';

import config from '../../../config';
import { TodoContext } from '../../../context/TodoContext';

import cl from './TodoForm.module.css';


function TodoForm() {

  if (config.showRenderComponents) console.info('TodoForm');

  const [description, setDescription] = useState('');
  const { addTodo } = useContext(TodoContext);

  const onAddTodo = () => {

    if (description === '') return;

    const date = Date.now();

    addTodo(date, description, date);

    setDescription('');
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) onAddTodo();
  };



  return (
    <div className={cl['todo-form']}>
      <input onKeyDown={e => onKeyDown(e)} className={cl['todo-form__input']} type="text" placeholder="Введите задачу" onChange={e => setDescription(e.target.value)} name="descriptio" value={description} />
      <button type="button" onClick={onAddTodo} className={cl['todo-form__button']}>Добавить</button>
    </div>
  );
}

export default TodoForm;