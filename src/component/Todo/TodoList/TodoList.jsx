import React from 'react'
import config from '../../../config'
import TodoItem from './TodoItem/TodoItem'
import cl from './TodoList.module.css'

function TodoList(props) {

    if (config.showRenderComponents) console.log('TodoList')

    return (
        <div className={cl['todo-list']}>

            {props.todos.map(todo =>

                <TodoItem todo={todo} id={todo.id} compliteTodo={props.compliteTodo} deleteTodo={props.deleteTodo} editTodo={props.editTodo} key={todo.id} />

            )}

        </div>
    )
}

export default TodoList