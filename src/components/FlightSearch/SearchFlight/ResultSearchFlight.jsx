import React, { useState } from 'react';
import style from './ResultSearchFlight.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Slider } from 'antd'; // Используем ползунки из Ant Design
import { ReactComponent as ArrowIcon } from './image/arrow.svg'; // Стрелочка

const ResultSearchFlight = () => {
    const cityOptions = ['Казань', 'Пекин'];
    const flightTypeOptions = ['Чартер', 'Прямой', 'Транзит', 'Стыковочный'];
    const classOptions = ['Эконом', 'Бизнес', 'Первый'];

    const flights = [
        {
            id: 1,
            name: 'Карточка рейса 1',
            price: 29400,
            time: '10:00',
            rating: 4,
            company: 'Аэрофлот',
            logo: require('./image/aeroflotLogo.png'),
            departureTime: 0,
            arrivalTime: 13,
            feedback: 438,
        },
        // {
        //     id: 2,
        //     name: 'Карточка рейса 2',
        //     price: 6000,
        //     time: '12:00',
        //     rating: 5,
        //     company: 'Победа',
        //     logo: require('./image/pobedaLogo.png'),
        //     departureTime: 10,
        //     arrivalTime: 13,
        // },
        // {
        //     id: 3,
        //     name: 'Карточка рейса 2',
        //     price: 1000,
        //     time: '12:00',
        //     rating: 1,
        //     company: 'Аэрофлот',
        //     logo: require('./image/aeroflotLogo.png'),
        //     departureTime: 10,
        //     arrivalTime: 13,
        // },
        // {
        //     id: 4,
        //     name: 'Карточка рейса 2',
        //     price: 2000,
        //     time: '12:00',
        //     rating: 2,
        //     company: 'Аэрофлот',
        //     logo: require('./image/aeroflotLogo.png'),
        //     departureTime: 10,
        //     arrivalTime: 13,
        // },
        // {
        //     id: 5,
        //     name: 'Карточка рейса 2',
        //     price: 3000,
        //     time: '12:00',
        //     rating: 3,
        //     company: 'Аэрофлот',
        //     logo: require('./image/aeroflotLogo.png'),
        //     departureTime: 10,
        //     arrivalTime: 13,
        // },
        // {
        //     id: 6,
        //     name: 'Карточка рейса 2',
        //     price: 4000,
        //     time: '12:00',
        //     rating: 5,
        //     company: 'Аэрофлот',
        //     logo: require('./image/aeroflotLogo.png'),
        //     departureTime: 10,
        //     arrivalTime: 13,
        // },
    ];


    const [route, setRoute] = useState({ from: '', to: '' });
    const [flightType, setFlightType] = useState('');
    const [passengers, setPassengers] = useState(1);
    const [classType, setClassType] = useState('Эконом');
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [showPassengerModal, setShowPassengerModal] = useState(false);
    const [priceRange, setPriceRange] = useState([20, 50]);  // Диапазон цен
    const [timeRange, setTimeRange] = useState([8, 20]);  // Диапазон времени отправления
    const [selectedRating, setSelectedRating] = useState(0);  // Выбранный рейтинг
    const [selectedAirlines, setSelectedAirlines] = useState([]);  // Выбранные авиакомпании
    const [selectedTripTypes, setSelectedTripTypes] = useState([]);  // Выбранные типы поездки
    const [currentPage, setCurrentPage] = useState(1);  // Текущая страница
    const totalPages = Math.ceil(flights.length / 2);  // Всего страниц, 2 карточки на страницу
    const [sortCriteria, setSortCriteria] = useState('priceAsc');
    const flightsPerPage = 4;
    const indexOfLastFlight = currentPage * flightsPerPage;
    const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
    const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);


    const swapRoute = () => {
        setRoute({ from: route.to, to: route.from });
    };

    const handleInputChange = (event, field) => {
        setRoute({ ...route, [field]: event.target.value });
    };

    // Управление открытием и закрытием фильтров
    const [isFilterOpen, setIsFilterOpen] = useState({
        price: false,
        time: false,
        rating: false,
        airlines: false,
        tripType: false,
    });

    const toggleFilter = (filterName) => {
        setIsFilterOpen((prev) => ({
            ...prev,
            [filterName]: !prev[filterName],
        }));
    };

    const handlePriceChange = (value) => {
        setPriceRange(value);
    };

    const handleTimeChange = (value) => {
        setTimeRange(value);
    };

    const handleTripTypeChange = (tripType) => {
        setSelectedTripTypes((prev) =>
            prev.includes(tripType) ? prev.filter((item) => item !== tripType) : [...prev, tripType]
        );
    };

    const handlePageChange = (direction) => {
        setCurrentPage((prev) => Math.max(1, Math.min(prev + direction, totalPages)));
    };

    const toggleAirlineFilter = (airline) => {
        setSelectedAirlines(prev =>
            prev.includes(airline) ? prev.filter(item => item !== airline) : [...prev, airline]
        );
    };

    // Фильтрация карточек
    const filteredFlights = flights.filter(flight =>
        selectedAirlines.length === 0 || selectedAirlines.includes(flight.company)
    );

    // Фильтрация по времени
    const filteredByTime = filteredFlights.filter(flight =>
        flight.departureTime >= timeRange[0] && flight.departureTime <= timeRange[1]
    );

    <Slider
        range
        min={0}
        max={24}
        defaultValue={timeRange}
        onChange={(value) => setTimeRange(value)}
        marks={{ 0: '00:00', 12: '12:00', 24: '24:00' }}
    />

    const filteredByRating = filteredByTime.filter(flight =>
        flight.rating >= selectedRating
    );

    return (
        <div className={style.main}>
            <div className={style.headerFilters}>
                {/* Откуда-Куда */}
                <div className={style.field}>
                    <p>Откуда-Куда</p>
                    <div className={style.placeForm}>
                        <input
                            type="text"
                            list="cities"
                            value={route.from}
                            onChange={(event) => handleInputChange(event, 'from')}
                            placeholder="Откуда"
                        />
                        <span> - </span>
                        <input
                            type="text"
                            list="cities"
                            value={route.to}
                            onChange={(event) => handleInputChange(event, 'to')}
                            placeholder="Куда"
                        />
                        <button onClick={swapRoute}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.25 2.25L19.5 7.5L14.25 12.75M18.697 7.5H4.5M9.75 21.75L4.5 16.5L9.75 11.25M5.34375 16.5H19.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <datalist id="cities">
                            {cityOptions.map((city, index) => (
                                <option key={index} value={city} />
                            ))}
                        </datalist>
                    </div>
                </div>

                {/* Тип рейса */}
                <div className={style.field}>
                    <p>Тип рейса</p>
                    <div className={style.typeRaceForm}>
                        <select className={style.selectTypeRace} value={flightType} onChange={(e) => setFlightType(e.target.value)}>
                            <option value="" disabled>
                                Тип рейса
                            </option>
                            {flightTypeOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Даты */}
                <div className={style.field}>
                    <p>Туда-Обратно</p>
                    <div className={style.dateRaceForm}>
                        <div>
                            <DatePicker
                                id="date_range"
                                className={style.dateRaceForm}
                                selectsRange
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(update) => setDateRange(update)}
                                isClearable
                                placeholderText="Выберите даты рейса"
                            />
                        </div>
                    </div>
                </div>

                {/* Пассажиры */}
                <div className={style.field}>
                    <p>Пассажиры - Класс</p>
                    <div className={style.personRaceForm}>
                        <button onClick={() => setShowPassengerModal(true)}>
                            {passengers} Пассажир(ы), {classType}
                        </button>
                        {showPassengerModal && (
                            <div className={style.modal}>
                                <div className={style.modalPassenger}>
                                    <label>Пассажиры:</label>
                                    <input
                                        type="number"
                                        value={passengers}
                                        onChange={(e) => setPassengers(e.target.value)}
                                        min="1"
                                    />
                                </div>
                                <div className={style.modalClass}>
                                    <label>Класс:</label>
                                    <select value={classType} onChange={(e) => setClassType(e.target.value)}>
                                        {classOptions.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button onClick={() => setShowPassengerModal(false)}>Закрыть</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={style.mainContent}>
                {/* Блок с фильтрами */}
                <div className={style.flightFilters}>
                    <h3>Фильтры</h3>
                    {/* Цена */}
                    <div className={style.filter}>
                        <h4 onClick={() => toggleFilter('price')}>
                            <p>Цена</p>
                            <ArrowIcon className={isFilterOpen.price ? 'open' : ''} />
                        </h4>
                        {isFilterOpen.price && (
                            <Slider
                                range
                                defaultValue={priceRange}
                                onChange={handlePriceChange}
                                min={20000}
                                max={100000}
                                step={1}
                            />
                        )}
                    </div>

                    <div className={style.decorLine}></div>

                    {/* Время отправления */}
                    <div className={style.filter}>
                        <h4 onClick={() => toggleFilter('time')}>
                            Время отправления <ArrowIcon className={isFilterOpen.time ? 'open' : ''} />
                        </h4>
                        {isFilterOpen.time && (
                            <Slider
                                range
                                defaultValue={timeRange}
                                onChange={handleTimeChange}
                                min={0}
                                max={24}
                                step={1}
                            />
                        )}
                    </div>

                    <div className={style.decorLine}></div>

                    {/* Рейтинг */}
                    <div className={style.filter}>
                        <h4>Рейтинг</h4>
                        <div className={style.ratingOptions}>
                            {[0, 1, 2, 3, 4, 5].map((rating) => (
                                <button
                                    key={rating}
                                    className={selectedRating === rating ? style.activeRating : ''}
                                    onClick={() => setSelectedRating(rating)}
                                >
                                    {rating}+
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={style.decorLine}></div>

                    {/* Авикомпании */}
                    <div className={style.filter}>
                        <h4>Авиакомпании</h4>
                        <div className={style.checkboxOptions}>
                            {['Аэрофлот', 'Победа', 'Уральские авиалинии', 'Россия'].map(airline => (
                                <label key={airline}>
                                    <input
                                        type="checkbox"
                                        checked={selectedAirlines.includes(airline)}
                                        onChange={() => toggleAirlineFilter(airline)}
                                    />
                                    {airline}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className={style.decorLine}></div>

                    {/* Тип поездки */}
                    <div className={style.filter}>
                        <h4 onClick={() => toggleFilter('tripType')}>
                            Тип поездки <ArrowIcon className={isFilterOpen.tripType ? 'open' : ''} />
                        </h4>
                        {isFilterOpen.tripType && (
                            <div className={style.checkboxOptions}>
                                {['Односторонний', 'Возврат'].map((tripType) => (
                                    <label key={tripType}>
                                        <input
                                            type="checkbox"
                                            checked={selectedTripTypes.includes(tripType)}
                                            onChange={() => handleTripTypeChange(tripType)}
                                        />
                                        {tripType}
                                    </label>
                                ))}
                            </div>
                        )}

                    </div>
                </div>

                {/* Блок с результатами */}
                <div className={style.flightResults}>
                    <div className={style.classSelection}>
                        <button className={style.classOption}>Дешевый</button>
                        <button className={style.classOption}>Лучший</button>
                        <button className={style.classOption}>Быстрый</button>
                    </div>

                    <div className={style.resultsInfo}>
                        <div className={style.sortBy}>
                            <span>Отсортировать по:</span>
                            <select
                                className={style.sortSelect}
                                value={sortCriteria}
                                onChange={(e) => setSortCriteria(e.target.value)}
                            >
                                <option value="priceAsc">Цена (по возрастанию)</option>
                                <option value="priceDesc">Цена (по убыванию)</option>
                                <option value="ratingAsc">Рейтинг (по возрастанию)</option>
                                <option value="ratingDesc">Рейтинг (по убыванию)</option>
                            </select>
                        </div>
                    </div>

                    {/* Карточки рейсов */}
                    {/* <div className={style.flightCards}>
                        {currentFlights.map(flight => (
                            <div key={flight.id} className={style.flightCard}>
                                <img src={flight.logo} alt={flight.company} />
                                <div className={style.cardContent}>
                                    <div className={style.airlineName}>{flight.company}</div>
                                    <div className={style.headerflightCard}>
                                        <div className={style.ratingflightCard}>
                                            <p>{flight.rating}</p>
                                            <a href="">{flight.feedback} отзыва</a>
                                        </div>
                                        <div className={style.priceflightCard}>
                                            <p>от</p>
                                            <h6>{flight.price} руб.</h6>
                                        </div>
                                    </div>
                                    <div className={style.mainInfoflightCard}>
                                        <ul>
                                            <li>
                                                <div className={style.timeFlight}>
                                                    <h6>{flight.departureTime} - {flight.arrivalTime}</h6>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={style.optionflightCard}>
                                        <button>Подробнее</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}
                    <div className={style.flightCards}>
                        {currentFlights.map(flight => (
                            <div key={flight.id} className={style.flightCard}>
                                <img src={flight.logoPath} alt={flight.company} />
                                <div>Авиакомпания: {flight.company}</div>
                                <div>Цена: {flight.price} ₽</div>
                                <div>Рейтинг: {flight.rating}</div>
                            </div>
                        ))}
                    </div>

                    {/* Пагинация */}
                    <div className={style.pagination}>
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Назад
                        </button>
                        <span>{currentPage} из {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage >= Math.ceil(flights.length / flightsPerPage)}
                        >
                            Вперед
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ResultSearchFlight;
