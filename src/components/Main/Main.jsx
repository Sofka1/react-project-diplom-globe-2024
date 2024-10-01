import React, { useState } from 'react';
import style from './Main.module.css'; // Используем модульные стили
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from '../DopPricols/ReviewsStars/StarRating';
 
const reviews = [
    {
        id: 1,
        title: "Важность каждого клиента",
        author: "Иван Иванов",
        text: "Я отметила неравнодушное отношение к клиентам со стороны персонала на каждом этапе работы с моим туром. Спасибо Катерине за помощь и поддержку, всегда была рядом, когда это было необходимо!",
        rating: 5,  // Добавлено поле rating
        place: "Китай - Чунцин",
        company: "Яндекс",
        imagePath: require('./images/userImageForReviews/user1.png'),
        
    },
    {
        id: 2,
        title: "Высокий уровень профессионализма",
        author: "Петр Петров",
        text: "Благодарю за высокий уровень организации, помощь и поддержку. Никаких проблем с туром не было, во время присылали все документы и актуальную информацию.",
        rating: 4, // Добавлено поле rating
        place: "Китай - Чунцин",
        company: "Яндекс",
        imagePath: require('./images/userImageForReviews/user2.png'),
    },
    {
        id: 3,
        title: "Важность каждого клиента",
        author: "Сергей Сергеев",
        text: "Я отметила неравнодушное отношение к клиентам со стороны персонала на каждом этапе работы с моим туром. Спасибо Катерине за помощь и поддержку, всегда была рядом, когда это было необходимо!",
        rating: 3,  // Добавлено поле rating
        place: "Китай - Чунцин",
        company: "Яндекс",
        imagePath: require('./images/userImageForReviews/user3.png'),
    },
    {
        id: 4,
        title: "Высокий уровень профессионализма",
        author: "Анна Аннова",
        text: "Благодарю за высокий уровень организации, помощь и поддержку. Никаких проблем с туром не было, во время присылали все документы и актуальную информацию.",
        rating: 2,  // Добавлено поле rating
        place: "Китай - Чунцин",
        company: "Яндекс",
        imagePath: require('./images/userImageForReviews/user1.png'),
    },
    {
        id: 5,
        title: "Важность каждого клиента",
        author: "Мария Мариева",
        text: "Я отметила неравнодушное отношение к клиентам со стороны персонала на каждом этапе работы с моим туром. Спасибо Катерине за помощь и поддержку, всегда была рядом, когда это было необходимо!",
        rating: 1,  // Добавлено поле rating
        place: "Китай - Чунцин",
        company: "Яндекс",
        imagePath: require('./images/userImageForReviews/user2.png'),
    }
];

const NextArrow = ({ onClick }) => (
    <div className={`${style.slickArrow} ${style.slickNext}`} onClick={onClick}>
        &gt;
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className={`${style.slickArrow} ${style.slickPrev}`} onClick={onClick}>
        &lt;
    </div>
);

const Main = ({ review }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 2 < reviews.length ? prevIndex + 2 : 0
        );
    };
 
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 2 >= 0 ? prevIndex - 2 : reviews.length - 2
        );
    };


    return (
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

            <div className={style.reviewsBlock}>
                <div className={style.headerReviews}>
                    <div className={style.title}>
                        <h3>Отзывы</h3>
                        <p>Отзывы клиентов о нашей компании</p>
                    </div>
                    <button className={style.showAllButton}>Показать все</button>
                </div>

                <div className={style.reviewsCardsConteiner}>
                    <div className={style.sliderContainer}>
                        <button className={style.prevButton} onClick={handlePrev}>
                            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.4997 39.4167C31.3948 39.4167 39.4163 31.3951 39.4163 21.5C39.4163 11.6049 31.3948 3.58337 21.4997 3.58337C11.6046 3.58337 3.58301 11.6049 3.58301 21.5C3.58301 31.3951 11.6046 39.4167 21.4997 39.4167Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.4997 14.3334L14.333 21.5L21.4997 28.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M28.6663 21.5H14.333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>

                        <div className={style.reviewsWrapper}>
                            {reviews.slice(currentIndex, currentIndex + 3).map(review => (
                                <div key={review.id} className={style.reviewCard}>
                                    <div className={style.title}>
                                        <h3>"{review.title}"</h3>
                                    </div>
                                    <div className={style.textReviews}>
                                        <div className={style.baseTextReviews}>
                                            {review.text}
                                        </div>
                                    </div>
                                    <div className={style.starsInReviews}>
                                        <StarRating rating={review.rating} />
                                    </div>
                                    <div className={style.UserInfo}>
                                        <h5>{review.author}</h5>
                                        <p>{review.place}</p>
                                    </div>
                                    <div className={style.reviewsCompany}>
                                        <img src={require('./images/iconsCompany/yandex.png')} alt=""/>
                                        <h5>{review.company}</h5>
                                    </div>

                                    <div className={style.UserImageForReviews}>
                                        <img src={review.imagePath} className={style.userImage}/>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className={style.nextButton} onClick={handleNext}>
                            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.4997 39.4167C31.3948 39.4167 39.4163 31.3951 39.4163 21.5C39.4163 11.6049 31.3948 3.58337 21.4997 3.58337C11.6046 3.58337 3.58301 11.6049 3.58301 21.5C3.58301 31.3951 11.6046 39.4167 21.4997 39.4167Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.5 28.6667L28.6667 21.5L21.5 14.3334" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.333 21.5H28.6663" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;