import React from 'react';

import config from '../../config.js';

import cl from './About.module.css';

function About() {
  if (config.showRenderComponents) console.info('About');

  return (
    <div className="container">
      <h1 className={cl['about__title']}>О проекте</h1>
      <p className={cl['about__item']}><span className={cl['about__label']}>Автор:</span><span className={cl['about__value']}>Ходасевич Антон Эдуардович</span></p>
      <p className={cl['about__item']}><span className={cl['about__label']}>Эл. почта:</span><a href="mailto:Khodasevich.anton.eduardovich@gmail.com" className={cl['about__value']}>Khodasevich.anton.eduardovich@gmail.com</a></p>
      <p className={cl['about__item']}><span className={cl['about__label']}>Вконтакте:</span><a href="https://vk.com/khodasevich_anton_eduardovich" target="_blank" rel="noreferrer" className={cl['about__value']}>https://vk.com/khodasevich_anton_eduardovich</a></p>
      <p className={cl['about__item']}><span className={cl['about__label']}>Проект:</span><span className={cl['about__value']}>Список дел</span></p>
      <p className={cl['about__item']}><span className={cl['about__label']}>Версия:</span><span className={cl['about__value']}>1.0.2</span></p>
    </div>
  );
}

export default About;