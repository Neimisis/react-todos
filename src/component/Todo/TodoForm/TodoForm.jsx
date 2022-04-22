import React, { useContext, useState } from "react";
import config from '../../../config'
import cl from './TodoForm.module.css'


function TodoForm(props) {
    
    if (config.showRenderComponents) console.log('TodoForm')

    const [description, setDescription] = useState('');

    const addTodo = () => {

        if(description === '') return
        
        const date = Date.now()
        
        props.addTodo(date, description, date)

        setDescription('');
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13) addTodo()
    }

   

    return (
        <div className={cl['todo-form']}>
            <input onKeyDown={e => onKeyDown(e)} className={cl['todo-form__input']} type='text' placeholder='Введите задачу' onChange={e => {setDescription(e.target.value)}} name='description' value={description} />
            <button type="button" onClick={addTodo} className={cl['todo-form__button']}>Добавить</button>
        </div>
    )
}

export default TodoForm