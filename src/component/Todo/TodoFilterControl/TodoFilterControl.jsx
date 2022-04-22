import React from 'react'
import config from '../../../config.js'
import TodoLimit from './TodoLimit/TodoLimit.jsx'
import TodoSearch from './TodoSearch/TodoSearch'
import TodoSort from './TodoSort/TodoSort'
import cl from './TodoFilterControl.module.css'

function TodoFilterControl(props) {

    if(config.showRenderComponents) console.log('TodoFilterControl')

    return (
        <div className={cl['todo-filter-control']}>
            <TodoSearch cl={cl['todo-filter-control__search']} textSearch={props.textSearch} setTextSearch={props.setTextSearch} />
            <TodoSort cl={cl['todo-filter-control__sort']} setTypeSort={props.setTypeSort} value={props.value} options={props.options} />
            <TodoLimit cl={cl['todo-filter-control__limit']} setLimit={props.setLimit} optionsLimit={props.optionsLimit} />
        </div>
    )
}

export default TodoFilterControl