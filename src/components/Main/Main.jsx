import React, { useState } from 'react';
import style from './Main.module.css';

const Main = () => {
    return(
        <div className={style.main}>
            <div className={style.plan}>
                <div className={style.header}>
                    <div className={style.title}>
                        <div className={style.text_header}>Спланируйте свое идеальное путешествие</div>
                        <div className={style.text_under_header}>Поиск авиабилетов и отелей по самым популярным направлениям</div>
                    </div>
                    <button className={style.button}>Показать больше</button>
                </div>
                <div className={style.cards}>
                    <div className={style.country}>
                        <img className={style.logo_of_coutry} src={require('./images/Turkey.png')} alt="Turkey"></img>
                        <div className={style.description}>
                            <div className={style.location}>Стамбул, Турция</div>
                            <div className={style.menu}>
                                <a href=''>Рейсы</a> •
                                <a href=''> Отели</a> • 
                                <a href=''> Путевки</a>
                            </div>
                        </div>
                    </div>

                    <div className={style.country}>
                        <img className={style.logo_of_coutry} src={require('./images/Sidney.png')} alt="Sidney"></img>
                        <div className={style.description}>
                            <div className={style.location}>Сидней, Австралия</div>
                            <div className={style.menu}>
                                <a href=''>Рейсы</a> •
                                <a href=''> Отели</a> • 
                                <a href=''> Путевки</a>
                            </div>
                        </div>
                    </div>

                    <div className={style.country}>
                        <img className={style.logo_of_coutry} src={require('./images/Baku.png')} alt="Baku"></img>
                        <div className={style.description}>
                            <div className={style.location}>Баку, Азербайджан</div>
                            <div className={style.menu}>
                                <a href=''>Рейсы</a> •
                                <a href=''> Отели</a> • 
                                <a href=''> Путевки</a>
                            </div>
                        </div>
                    </div>

                    <div className={style.country}>
                        <img className={style.logo_of_coutry} src={require('./images/Male.png')} alt="Male"></img>
                        <div className={style.description}>
                            <div className={style.location}>Мале, Мальдивы</div>
                            <div className={style.menu}>
                                <a href=''>Рейсы</a> •
                                <a href=''> Отели</a> • 
                                <a href=''> Путевки</a>
                            </div>
                        </div>
                    </div>

                    <div className={style.country}>
                        <img className={style.logo_of_coutry} src={require('./images/Paris.png')} alt="Paris"></img>
                        <div className={style.description}>
                            <div className={style.location}>Париж, Франция</div>
                            <div className={style.menu}>
                                <a href=''>Рейсы</a> •
                                <a href=''> Отели</a> • 
                                <a href=''> Путевки</a>
                            </div>
                        </div>
                    </div>

                    <div className={style.country}>
                        <img className={style.logo_of_coutry} src={require('./images/NY.png')} alt="NY"></img>
                        <div className={style.description}>
                            <div className={style.location}>Нью-Йорк, США</div>
                            <div className={style.menu}>
                                <a href=''>Рейсы</a> •
                                <a href=''> Отели</a> • 
                                <a href=''> Путевки</a>
                            </div>
                        </div>
                    </div>

                    <div className={style.country}>
                        <img className={style.logo_of_coutry} src={require('./images/London.png')} alt="London"></img>
                        <div className={style.description}>
                            <div className={style.location}>Лидс, Великобритания</div>
                            <div className={style.menu}>
                                <a href=''>Рейсы</a> •
                                <a href=''> Отели</a> • 
                                <a href=''> Путевки</a>
                            </div>
                        </div>
                    </div>

                    <div className={style.country}>
                        <img className={style.logo_of_coutry} src={require('./images/Tokio.png')} alt="Tokio"></img>
                        <div className={style.description}>
                            <div className={style.location}>Токио, Япония</div>
                            <div className={style.menu}>
                                <a href=''>Рейсы</a> •
                                <a href=''> Отели</a> • 
                                <a href=''> Путевки</a>
                            </div>
                        </div>
                    </div>

                    <div className={style.country}>
                        <img className={style.logo_of_coutry} src={require('./images/Dubai.png')} alt="Dubai"></img>
                        <div className={style.description}>
                            <div className={style.location}>Дубай, ОАЭ</div>
                            <div className={style.menu}>
                                <a href=''>Рейсы</a> •
                                <a href=''> Отели</a> • 
                                <a href=''> Путевки</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.trip_and_hotels}>
                <div className={style.bloks}>
                    <div className={style.trip}>
                        <div className={style.naming}>Рейсы</div>
                        <div className={style.description_1}>Поиск авиабилетов по самым популярным направлениям</div>
                        <button className={style.button_of_card}>
                            <img src={require('./images/Paper Plane 1.png')} alt="" />
                            <p>Показать</p>
                        </button>
                    </div>
                    <div className={style.hotel}>
                    <div className={style.naming}>Отели</div>
                        <div className={style.description_1}>Поиск отелей по самым популярным направлениям</div>
                        <button className={style.button_of_card}>
                            <img src={require('./images/Paper Plane 1.png')} alt="" />
                            <p>Показать</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default Main;