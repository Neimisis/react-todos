import React, { useContext } from 'react';

import config from '../../../../config.js';
import { TodoContext } from '../../../../context/TodoContext.js';

import cl from './TodoPagination.module.css';


function TodoPagination(props) {

  if (config.showRenderComponents) console.info('TodoPagination');

  const { page, setPage, totalPage } = useContext(TodoContext);

  const getArrayPage = () => {
    const array = [];
    for (let index = 0; index < totalPage; index++) {
      array.push(index + 1);
    }
    return array;
  };

  const arrayPages = getArrayPage();

  const rangePage = () => {
    const result = arrayPages;
    const countLinks = 4;
    const countPages = result.length;
    let start = null;
    let end = null;

    if (countPages <= countLinks) {
      start = 0;
      end = countPages;
    } else {
      start = page - Math.floor(countLinks / 2) - 1;
      end = page + Math.floor(countLinks / 2);

      if (start < 1) {
        end += Math.abs(start);
        start = 0;
      }

      if (end > countPages) {
        start -= (end - countPages);
        end = countPages;
      }
    }

    return result.slice(start, end);
  };

  const pages = rangePage();

  return (
    <nav className={cl['todo-pagination']}>
      {
        totalPage > 1
          ? (
            <ul className={cl['todo-pagination__list']}>
              {page > 1 ? <li className={cl['todo-pagination__item']}><span className={cl['todo-pagination__link']} onClick={() => setPage(1)}><span>&laquo;</span></span></li> : null}
              {pages.map(el => <li className={cl['todo-pagination__item']} key={el}><span onClick={() => setPage(el)} className={cl['todo-pagination__link'] + (page === el ? ' ' + cl['todo-pagination__link--current'] : '')}>{el}</span></li>)}
              {page !== totalPage ? <li className={cl['todo-pagination__item']}><span className={cl['todo-pagination__link']} onClick={() => setPage(arrayPages.length)}><span>&raquo;</span></span></li> : null}
            </ul>
          )
          : null
      }

    </nav>
  );
}

export default TodoPagination;