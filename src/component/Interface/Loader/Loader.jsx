import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import cl from './Loader.module.css';

function Loader() {
  return (
    <FontAwesomeIcon className={cl['loader']} icon={faSpinner} />
  );
}

export default Loader;