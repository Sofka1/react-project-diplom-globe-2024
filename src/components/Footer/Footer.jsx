import React, { useState } from 'react';
import style from './Footer.module.css';

const Main = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerInternal }>
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
                <div className={style.base_footer}>
                    <div className={style.innardsFooter}>
                        <div className={style.mainInfo}>
                            <div className={style.logoFooter}>
                                <img src={require('./images/logo.png')} alt=""/>
                            </div>
                            <div className={style.socialNetworks}>
                                <a href=""><img src={require('./images/icons/facebook.png')} alt="" /></a>
                                <a href=""><img src={require('./images/icons/instagram.png')} alt="" /></a>
                                <a href=""><img src={require('./images/icons/twitter.png')} alt="" /></a>
                                <a href=""><img src={require('./images/icons/youtube.png')} alt="" /></a>
                            </div>
                        </div>
                        <div className={style.footerMenu}>
                            <div className={style.columnMenuFooter}>
                                <h5>Направления</h5>
                                <ul>
                                    <li><a href="">Канада</a></li>
                                    <li><a href="">Аляска</a></li>
                                    <li><a href="">Франция</a></li>
                                    <li><a href="">Исландия</a></li>
                                </ul>
                            </div>

                            <div className={style.columnMenuFooter}>
                                <h5>Наша деятельность</h5>
                                <ul>
                                    <li><a href="">Северное сияние</a></li>
                                    <li><a href="">Круизы и парусные туры</a></li>
                                    <li><a href="">Кругосветные путешествия</a></li>
                                    <li><a href="">Экскурсии</a></li>
                                </ul>
                            </div>

                            <div className={style.columnMenuFooter}>
                                <h5>Блоги о путешествиях</h5>
                                <ul>
                                    <li><a href="">Путеводитель по Бали</a></li>
                                    <li><a href="">Путеводитель по Шри-Ланке</a></li>
                                    <li><a href="">Путеводитель по Перу</a></li>
                                    <li><a href="">Путеводитель по Китаю</a></li>
                                </ul>
                            </div>

                            <div className={style.columnMenuFooter}>
                                <h5>О нас</h5>
                                <ul>
                                    <li><a href="">Наша история</a></li>
                                    <li><a href="">Вакансии</a></li>
                                </ul>
                            </div>

                            <div className={style.columnMenuFooter}>
                                <h5>Контакты</h5>
                                <ul>
                                    <li><a href="">Поддержка</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Main;