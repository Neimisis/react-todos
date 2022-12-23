import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import config from '../../../../config';

import cl from './TodoSearch.module.css';


function TodoSearch(props) {

  if (config.showRenderComponents) console.info('TodoSearch');

  return (
    <div className={[cl['todo-search'], props.cl].join(' ')}>
      <label className={cl['todo-search__label']}>
        <FontAwesomeIcon className={cl['todo-search__icon']} icon={faMagnifyingGlass} />
        <input onChange={e => props.setTextSearch(e.target.value)} className={cl['todo-search__input']} type="text" value={props.textSearch} />
      </label>
    </div>
  );
}

export default TodoSearch;