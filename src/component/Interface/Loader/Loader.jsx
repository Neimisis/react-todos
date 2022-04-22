import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import cl from './Loader.module.css'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Loader() {
  return (
    <FontAwesomeIcon className={cl['loader']} icon={faSpinner} />
  )
}

export default Loader