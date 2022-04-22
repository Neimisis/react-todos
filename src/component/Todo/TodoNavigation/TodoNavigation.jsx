import React from 'react'
import config from '../../../config.js'
import TodoCount from './TodoCount/TodoCount'
import TodoPagination from './TodoPagination/TodoPagination.jsx'
import cl from './TodoNavigation.module.css'

function TodoNavigation(props) {

    if (config.showRenderComponents) console.log('TodoNavigation')

    return (
        <div className={cl['todo-navigation']}>
            <TodoPagination page={props.page} setPage={props.setPage} totalPage={props.totalPage}/>
            <TodoCount countTodo={props.countTodo} />
        </div>
    )
}

export default TodoNavigation