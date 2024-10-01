import React, { } from 'react';
import style from './MainFlightSearch.module.css'; // Используем модульные стили

// короче эта страница с ебанной картой
const MainFlightSearch = () => {
    return (
        <div className={style.main}>
            {/* херня с картой */}
            <div className={style.blockWithMup}>
                <div className={style.headerBlock}>
                    <div className={style.title}>
                        <h2>Поехали вместе!</h2>
                        <p>Ознакомьтесь с последними предложениями и новостями и начните планировать свою следующую поездку вместе с нами.</p>
                    </div>
                    <button>Показать все</button>
                </div>
                <div className={style.mainMup}>
                    {/* изображение карты с гребанными точками */}
                    <div className={style.mupImage}></div>
                    <div className={style.point1}>
                        <div className={style.cartPoint}>
                            <img src={require('./image/cart1.png')} alt="place" />
                            <div className={style.cartTitle}>
                                <h5>Саша Л</h5>
                                <p>Билет №123</p>
                            </div>
                        </div>
                        <div className={style.pointArrow1}>
                            <img src={require('./image/arrow1.png')} alt="arrow" />
                        </div>
                    </div>

                    <div className={style.point2}>
                        <div className={style.cartPoint}>
                            <img src={require('./image/cart2.png')} alt="place" />
                            <div className={style.cartTitle}>
                                <h5>Стас А</h5>
                                <p>Билет №124</p>
                            </div>
                        </div>
                        <div className={style.pointArrow2}>
                            <img src={require('./image/arrow2.png')} alt="arrow" />
                        </div>
                    </div>

                    <div className={style.point3}>
                        <div className={style.pointArrow3}>
                            <img src={require('./image/arrow3.png')} alt="arrow" />
                        </div>
                        <div className={style.cartPoint}>
                            <img src={require('./image/cart3.png')} alt="place" />
                            <div className={style.cartTitle}>
                                <h5>Юлия Ш</h5>
                                <p>Билет №125</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.point4}>
                        <div className={style.cartPoint}>
                            <img src={require('./image/cart4.png')} alt="place" />
                            <div className={style.cartTitle}>
                                <h5>Лев В</h5>
                                <p>Билет №126</p>
                            </div>
                        </div>
                        <div className={style.pointArrow4}>
                            <img src={require('./image/arrow4.png')} alt="arrow" />
                        </div>
                    </div>

                    <div className={style.point5}>
                        <div className={style.cartPoint}>
                            <img src={require('./image/cart5.png')} alt="place" />
                            <div className={style.cartTitle}>
                                <h5>Сергей М</h5>
                                <p>Билет №127</p>
                            </div>
                        </div>
                        <div className={style.pointArrow5}>
                            <img src={require('./image/arrow5.png')} alt="arrow" />
                        </div>
                    </div>

                </div>
            </div>

            {/* карточки какие-то и написано погрузись в путешествие */}
            <div className={style.cartWithCity}>
                <div className={style.headerBlock}>
                    <div className={style.title}>
                        <h2>Погрузись в путешествие</h2>
                        <p>Выбираете билеты на рейс? Независимо от цели вашей поездки, у нас есть все необходимое, чтобы доставить вас к месту назначения</p>
                    </div>
                    <button>Показать все</button>
                </div>
                <div className={style.cytiGallery}>
                    <div className={style.cartCityMelbourne}>
                        <div className={style.titleCityCart}>
                            <h3>Мельбурн</h3>
                            <p>Приключения</p>
                            <button>Забронировать</button>
                        </div>
                    </div>

                    <div className={style.cartCityParis}>
                        <div className={style.titleCityCart}>
                            <h3>Париж</h3>
                            <p>Романтика</p>
                            <button>Забронировать</button>
                        </div>
                    </div>

                    <div className={style.cartCityLondon}>
                        <div className={style.titleCityCart}>
                            <h3>Лондон</h3>
                            <p>Бизнес</p>
                            <button>Забронировать</button>
                        </div>
                    </div>

                    <div className={style.cartCityColombia}>
                        <div className={style.titleCityCart}>
                            <h3>Колумбия</h3>
                            <p>Архитектура</p>
                            <button>Забронировать</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* опять почему то погрузись в путешествие, но есть еще карточка экскурсия по шри-ланке */}
            <div className={style.tourBlock}>
                <div className={style.headerBlock}>
                    <div className={style.title}>
                        <h2>Поехали вместе!</h2>
                        <p>Хотите хорошо отдохнуть этим летом? Мы подберем лучший тур с учетом ваших пожеланий к поездке</p>
                    </div>
                    <button>Показать все</button>
                </div>
                <div className={style.tourContent}>
                    <div className={style.mainTextWithContent}>
                        <div className={style.tourContentTitle}>
                            <h2>Экскурсия по Шри-Ланке</h2>
                            <div className={style.tourPrice}>
                                от 70 000 руб.
                            </div>
                        </div>
                        <p>Путешествие - это уникальный возможность отвлечься от суеты повседневной жизни. Любая смена обстановки помогает нам забыть о наших проблемах, разочарованиях и страхах. Во время путешествия мы проживаем огромный спектр эмоций. Мы исследуем новые места, культуру, кухню, традиции и образ жизни.</p>
                        <button>Забронировать</button>
                    </div>
                    <div className={style.galleryTour}>
                        <div className={style.imageTour}>
                            <img src={require('./image/tour1.png')} />
                        </div>

                        <div className={style.imageTour}>
                            <img src={require('./image/tour2.png')} />
                        </div>

                        <div className={style.imageTour}>
                            <img src={require('./image/tour3.png')} />
                        </div>

                        <div className={style.imageTour}>
                            <img src={require('./image/tour3.png')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainFlightSearch;