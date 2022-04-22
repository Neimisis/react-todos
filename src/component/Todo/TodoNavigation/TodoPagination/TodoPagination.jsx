import React from 'react'
import config from '../../../../config.js'
import cl from './TodoPagination.module.css'

function TodoPagination(props) {

    if (config.showRenderComponents) console.log('TodoPagination')

    

    const getArrayPage = () => {
        let array = []
        for (let index = 0; index < props.totalPage; index++) {
            array.push(index + 1)
        }
        return array
    }

    const arrayPages = getArrayPage();

    const rangePage = () => {
        let result = arrayPages;
        let countLinks = 4;
        let countPages = result.length;
        let start = null;
        let end = null;

        if (countPages <= countLinks) {
            start = 0;
            end = countPages;
        } else {
            start = props.page - Math.floor(countLinks / 2) - 1;
            end = props.page + Math.floor(countLinks / 2);

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
    }
    
    const pages = rangePage();

    return (
        <nav className={cl['todo-pagination']}>
            {
                props.totalPage > 1
                ? (
                    <ul className={cl['todo-pagination__list']}>
                        {props.page > 1 ? <li className={cl['todo-pagination__item']}><span className={cl['todo-pagination__link']} onClick={()=>props.setPage(1)}><span>&laquo;</span></span></li> : null}
                        {pages.map( el => <li className={cl['todo-pagination__item']} key={el}><span onClick={()=>props.setPage(el)} className={cl['todo-pagination__link'] + (props.page === el ? ' ' + cl['todo-pagination__link--current'] : '')}>{el}</span></li>)}
                        {props.page !== props.totalPage ? <li className={cl['todo-pagination__item']}><span className={cl['todo-pagination__link']} onClick={()=>props.setPage(arrayPages.length)}><span>&raquo;</span></span></li> : null}
                    </ul>
                )
                : null
            }
            
        </nav>
    )
}

export default TodoPagination