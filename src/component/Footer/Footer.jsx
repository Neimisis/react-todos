import React from 'react'
import { useLocation } from 'react-router-dom'
import cl from './Footer.module.css'

function Footer() {
    const location = useLocation();

    return (
        <div className={cl['footer']}>
            <div className='container'>
                {location.pathname === '/about' ? <a className={cl['footer__link']} href="/">Планировщик задач</a> : null}
                {location.pathname === '/' ? <a className={cl['footer__link']} href="/about">О проекте</a> : null }
            </div>
        </div>
    )
}

export default Footer