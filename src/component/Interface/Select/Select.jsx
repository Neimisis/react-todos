import React from 'react'
import cl from './Select.module.css'
import config from '../../../config.js'

function Select(props) {

  if (config.showRenderComponents) console.log('Select');

  return (
    <select onChange={e => {props.change(e.target.value)}} className={cl['select'] + ' ' + props.cl} value={props.value}>
        {props.options.map(option =>
            <option disabled={option.disabled ? true : false} key={option.value} value={option.value}>{option.text}</option>
        )}
    </select>
  )
}

export default Select