import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFilter } from '@fortawesome/free-solid-svg-icons';

import config from '../../../../config';
import Select from '../../../Interface/Select/Select';

import cl from './TodoSort.module.css';

function TodoSort(props) {

  if (config.showRenderComponents) console.info('TodoSort');

  return (
    <div className={[cl['todo-sort'], props.cl].join(' ')}>
      <label className={cl['todo-sort__label']}>
        <FontAwesomeIcon className={cl['todo-sort__icon']} icon={faFilter} />
        <Select change={props.setTypeSort} value={props.value} cl={cl['todo-sort__select']} options={props.options} />
      </label>
    </div>
  );
}

export default TodoSort;