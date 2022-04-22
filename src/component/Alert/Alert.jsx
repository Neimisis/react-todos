import React from 'react'
import config from '../../config.js'
import cl from './Alert.module.css'

function Alert(props) {

  if (config.showRenderComponents) console.log('Alert')
  console.log('Alert')
  return (
    <div ref={props.refAlert} className={cl['alert']}>

    </div>
  )
}

export default Alert