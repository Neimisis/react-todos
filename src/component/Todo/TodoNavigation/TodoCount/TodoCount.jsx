import React, { useMemo, useState } from 'react'
import config from '../../../../config.js'
import cl from './TodoCount.module.css'


const TodoCount = (props) => {

    if (config.showRenderComponents) console.log('TodoCount')

    return (
        <div className={cl['todo-count']}>{props.countTodo}</div>
    );
};


export default TodoCount