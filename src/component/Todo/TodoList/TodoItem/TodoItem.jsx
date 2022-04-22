import React, { useEffect, useRef, useState } from 'react'
import config from '../../../../config'
import cl from './TodoItem.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';


function TodoItem(props) {

  if (config.showRenderComponents) console.log('TodoItem')

  const [todoEdit, setTodoEdit] = useState(false)

  const refInput = useRef();
  const refDescription = useRef();

  const editTodoDescription = () => {
    if (todoEdit) {
      setTodoEdit(false)
      props.editTodo(props.id, refInput.current.value, props.todo.date, props.todo.completed)
    }
    else {
      setTodoEdit(true)
      refInput.current.value = refDescription.current.textContent;
      setTimeout(() => { refInput.current.focus() }, 200)
    }
  }

  const onKeyDownInput = (e) => {
    if (e.keyCode === 13) {
      refInput.current.blur()
    }
  }

  const getDateString = (date) => {
    date = new Date(date)
    const options = {
      timezone: 'UTC',
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }
    return date.toLocaleString("ru", options)
  }

  return (
    <div className={cl['todo-item'] + (props.todo.completed ? ' ' + cl['todo-item--completed'] : '') + (todoEdit ? ' ' + cl['todo-item--edit'] : '')}>
      <div className={cl['todo-item__wrap']}>
        <div ref={refDescription} className={cl['todo-item__description']}>{props.todo.description}</div>
        <input onBlur={editTodoDescription} onKeyDown={(e) => onKeyDownInput(e)} ref={refInput} className={cl['todo-item__input']} type="text" />
      </div>
      <div className={cl['todo-item__buttons']}>
        {
          props.todo.completed === true
            ? <button className={cl['todo-item__button']} onClick={() => props.compliteTodo(props.id, false)} ><FontAwesomeIcon icon={faCircleXmark} /></button>
            : <button className={cl['todo-item__button']} onClick={() => props.compliteTodo(props.id, true)} ><FontAwesomeIcon icon={faCheckCircle} /></button>
        }
        <button className={cl['todo-item__button']} onClick={() => editTodoDescription()} ><FontAwesomeIcon icon={faPencil} /></button>
        <button className={cl['todo-item__button']} onClick={() => {props.deleteTodo(props.id)}}><FontAwesomeIcon icon={faTrashAlt} /></button>
      </div>
      <div className={cl['todo-item__date']}>{getDateString(props.todo.date)}</div>
    </div>
  )
}

export default TodoItem