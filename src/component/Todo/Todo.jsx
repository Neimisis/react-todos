import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { TodoContext } from '../../context/TodoContext.js';
import config from '../../config.js';
import Loader from '../Interface/Loader/Loader.jsx';

import TodoForm from './TodoForm/TodoForm.jsx';
import TodoList from './TodoList/TodoList.jsx';
import TodoFilterControl from './TodoFilterControl/TodoFilterControl.jsx';
import TodoNavigation from './TodoNavigation/TodoNavigation.jsx';
import cl from './Todo.module.css';



function Todo(props) {

  if (config.showRenderComponents) console.info('Todo');

  const optionsLimit = useMemo(() => [
    {
      value: '5',
      text: '5',
    },
    {
      value: '10',
      text: '10',
    },
    {
      value: '20',
      text: '20',
    },
    {
      value: '30',
      text: '30',
    },
    {
      value: '40',
      text: '40',
    },
    {
      value: '50',
      text: '50',
    },
  ], []);

  const optionsSort = useMemo(() => {
    return [
      {
        value: 'new',
        text: 'Сначала новые',
        disabled: false,
      },
      {
        value: 'old',
        text: 'Сначала старые',
        disabled: false,
      },
    ];
  }, []);

  const [todos, setTodos] = useState([]);
  const [limit, setLimit] = useState(optionsLimit[0].value);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [textSearch, setTextSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [typeSort, setTypeSort] = useState(optionsSort[0].value);
  const firstUpdate = useRef(true);

  const sortedTodos = useMemo(() => {
    if (typeSort === 'new') return [...todos].sort((a, b) => a['date'] > b['date'] ? -1 : 1);
    else if (typeSort === 'old') return [...todos].sort((a, b) => a['date'] > b['date'] ? 1 : -1);
    return todos;
  }, [typeSort, todos]);

  const getSearchTodos = useMemo(() => {
    return sortedTodos.filter(el => el.description.toLowerCase().includes(textSearch.toLowerCase()));
  }, [textSearch, sortedTodos]);

  const getLimitTodos = useMemo(() => {
    const limitTodos = getSearchTodos;
    setTotalPage(getTotalPage(limitTodos.length, limit));
    return limitTodos.slice((page - 1) * limit, page * limit);
  }, [limit, page, getSearchTodos]);

  useEffect(() => {
    if (!firstUpdate.current) {
      setPage(1);
      props.addAlert('Лимит изменен', 'warning');
    }
  }, [limit, props]);

  useEffect(() => {
    if (!firstUpdate.current) {
      setPage(1);
      props.addAlert('Сортировка изменена', 'warning');
    }
  }, [typeSort, props]);

  useEffect(() => {
    if (!firstUpdate.current) {
      setPage(1);
    }
  }, [getSearchTodos]);

  useEffect(() => {
    setIsLoading(true);
    loadTodo();
    firstUpdate.current = false;
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  function getTotalPage(totalCount, limit) {
    return Math.ceil(totalCount / limit);
  }

  const countTodo = 'Всего задач: ' + getSearchTodos.length;

  const saveTodo = useCallback(() => {
    localStorage['todos'] = JSON.stringify(todos);
  }, [todos]);


  useEffect(() => {
    saveTodo();
  }, [todos, saveTodo]);

  const loadTodo = () => {
    if (localStorage['todos'] && typeof JSON.parse(localStorage['todos']) === 'object') {
      setTodos(JSON.parse(localStorage['todos']));
    }
  };

  function editTodo(id, description, date, completed) {
    setTodos(todos.map(el => el.id === id ? { id, description, date, completed } : el));
    props.addAlert('Задача изменена', 'primary');
  }

  function compliteTodo(id, completed) {
    setTodos(todos.map(el => el.id === id ? { ...el, completed } : el));
    if (completed) props.addAlert('Задача выполнена', 'warning');
    else props.addAlert('Задача отменена', 'warning');
  }

  function deleteTodo(id) {
    setTodos(todos.filter(el => el.id !== id));
    props.addAlert('Задача удалена', 'danger');
  }

  function addTodo(id, description, date, completed) {
    setTodos([...todos, { id, description, date, completed: false }]);
    props.addAlert('Задача добавлена', 'success');
  }

  const context = {
    todos,
    getLimitTodos,
    page,
    setPage,
    totalPage,
    countTodo,
    addTodo,
  };

  return (
    <TodoContext.Provider value={context}>
      <div className={cl['todo']}>
        <div className="container">
          <h1 className={cl['todo__title']}>Список задач</h1>
          <TodoForm />
          {todos.length ? <TodoFilterControl optionsLimit={optionsLimit} setLimit={setLimit} textSearch={textSearch} setTextSearch={setTextSearch} setTypeSort={setTypeSort} value={typeSort} options={optionsSort} /> : null}
          {
            isLoading
              ? <Loader />
              : <TodoList todos={getLimitTodos} compliteTodo={compliteTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
          }
          {todos.length && !isLoading ? <TodoNavigation /> : null}
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default Todo;