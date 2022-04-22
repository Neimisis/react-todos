import React, { useRef } from 'react'
import cl from './Home.module.css'
import Todo from '../../component/Todo/Todo'
import Alert from '../../component/Alert/Alert.jsx'
import clAlertItem from '../../component/Alert/AlertItem/AlertItem.module.css'

function Home() {

    const refAlert = useRef()

    const addAlert = (text, color) => {
        let id = Date.now()
        let script = document.createElement('script')
        script.textContent = `setTimeout(()=>{document.querySelector(".js-alert-item-${id}").remove()}, 1500)`;
        refAlert.current.insertAdjacentHTML('beforeend', `<div class="${clAlertItem['alert-item']} ${clAlertItem['alert-item--' + color]} js-alert-item-${id}"><span class="alert-item__text">${text}</span></div>`)
        document.querySelector(`.js-alert-item-${id}`).appendChild(script);
    }

    return (
        <div className={cl['home']}>
            <Todo addAlert={addAlert}/>
            <Alert refAlert={refAlert} />
        </div>
    )
}

export default Home