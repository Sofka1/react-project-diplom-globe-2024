import React, { useState } from 'react';
import style from './Footer.module.css';

const Main = () => {
    return(
        <div className={style.footer}>
            <div className={style.subscribe}>
                <div className={style.forma}>
                    <div className={style.title_of_footer}>Подписаться на рассылку</div>
                    <div className={style.second_title}>Путешествие</div>
                    <div className={style.description_of_second_title}>Вдохновляйтесь! Получайте скидки на поездки, советы и актуальные туры.</div>
                    <div className={style.form_of_subscribe}>
                        <div className={style.form_input}>
                            <input className={style.input_form} type="text" placeholder="Электронная почта"></input>
                        </div>
                        <button className={style.buttonSub}>Подписаться</button>
                    </div>
                </div>
                <div className={style.image}>
                    <img className={style.logoSub} src={require('./images/SUB.png')} alt="Subscribe"></img>
                </div>
            </div>
            <div className={style.base_footer}></div>
        </div>      
    ); 
}

export default Main;