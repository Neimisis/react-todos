import React from 'react'
import config from '../../../../config'
import Select from '../../../Interface/Select/Select'
import cl from './TodoLimit.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function TodoLimit(props) {

  if (config.showRenderComponents) console.log('TodoLimit')
    
  return (
    <div className={[cl['todo-limit'], props.cl].join(' ')}>
        <label className={cl['todo-limit__label']}>
            <FontAwesomeIcon className={cl['todo-limit__icon']} icon={faBars} />
            <Select change={props.setLimit} setTypeSort={props.setTypeSort} options={props.optionsLimit} />
        </label>
    </div>
  )
}

export default TodoLimit