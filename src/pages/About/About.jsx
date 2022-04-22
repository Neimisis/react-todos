import React from 'react'
import { useParams } from 'react-router-dom';
import cl from './About.module.css'

function About() {

  const asd = useParams();
  console.log(asd);

  return (
    <div className='container'>
        <h1 className={cl['about__title']}>О проекте</h1>
        <p className={cl['about__item']}><span className={cl['about__label']}>Автор:</span><span>Ходасевич Антон Эдуардович</span></p>
        <p className={cl['about__item']}><span className={cl['about__label']}>Эл. почта:</span><span>Khodasevich.anton.eduardovich@gmail.com</span></p>
        <p className={cl['about__item']}><span className={cl['about__label']}>Вконтакте:</span><span>https://vk.com/khodasevich_anton_eduardovich</span></p>
        <p className={cl['about__item']}><span className={cl['about__label']}>Проект:</span><span>Планировщик задач</span></p>
        <p className={cl['about__item']}><span className={cl['about__label']}>Версия:</span><span>1.0.1</span></p>
    </div>
  )
}

export default About