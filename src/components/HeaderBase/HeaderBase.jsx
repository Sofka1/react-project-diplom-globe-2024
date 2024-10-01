import React, { useState, useEffect, useRef } from 'react';
import style from './HeaderBase.module.css'; // Импортируем CSS-модули
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Header = () => {

  const [activeTab, setActiveTab] = useState('flight');

  const renderContent = () => {
    if (activeTab === 'flight') {
      return <FlightTab />;
    } else {
      return <HotelTab />;
    }
  };

  return (
    <header className={style.headerMain}>

      <div className={style.mainBlock}>
        <div className={style.header}>
          {/* Блок с поиском рейсов и отелей */}
          <div className={style.search}>
            <div className={style.searchTrip}>
              <div>
                <img className={style.iconSearch} src={require('./image/airplane.png')} alt="airplane" />
              </div>
              <div className={style.searchTitle}><a href="">Поиск рейса</a></div>
            </div>
            <div className={style.searchHotel}>
              <div>
                <img className={style.iconSearch} src={require('./image/hotel.png')} alt="hotel" />
              </div>
              <div className={style.searchTitle}><a href="">Поиск отеля</a></div>
            </div>
          </div>

          {/* Блок с лого */}
          <div className={style.logo}>
            <img className={style.logoImage} src={require('./image/logo.png')} alt="logo" />
          </div>

          {/* Блок со входом и регистрацией */}
          <div className={style.login}>
            <div className={style.entry}><a href="">Вход</a></div>
            <div className={style.registr}><a href="">Регистрация</a></div>
          </div>

        </div>

        <div className={style.title}>
          <h2>Составьте свой список <br/> желаний на поездку</h2>
          <p>Специальные предложения в соответствии с вашими планами</p>
        </div>

      </div>

      <div className={style.form}>

        {/*--- gpt ---*/}
        <div className={style.tabContainer}>
          <div className={style.tabButtons}>
            <button
              className={`${style.tabButton} ${activeTab === 'flight' ? style.active : ''}`}
              onClick={() => setActiveTab('flight')}
            >
              <div className={style.click}>
                <img className={style.iconSearch} src={require('./image/airplaneBlack.png')} alt="air" />
                <p>Рейс</p>
              </div>

            </button>

            <div className={style.decorBlock}></div>
            <button
              className={`${style.tabButton} ${activeTab === 'hotel' ? style.active : ''}`}
              onClick={() => setActiveTab('hotel')}
            >
              <div className={style.click}>
                <img className={style.iconSearch} src={require('./image/hotelBlack.png')} alt="hotel" />
                <p>Отель</p>
              </div>

            </button>
          </div>

          <div className={style.tabContent}>
            {renderContent()}
          </div>

          <div className={style.headerButton}>
            <button className={style.certificat}>
              <img src={require('./image/add.png')} alt="plane" />
              <p>Добавить промокод</p>
            </button>
            <button>
              <img src={require('./image/Plane.png')} alt="plane" />
              <p>Показать</p>
            </button>
          </div>
        </div>
        {/* ------ */}

      </div>
    </header>
  );
};

const FlightTab = () => {
  const cityOptions = ['Казань', 'Пекин'];
  const flightTypeOptions = ['Чартер', 'Прямой', 'Транзит', 'Стыковочный'];
  const classOptions = ['Эконом', 'Бизнес', 'Первый'];

  const [route, setRoute] = useState({ from: '', to: '' });
  const [flightType, setFlightType] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState('Эконом');
  const [showPassengerModal, setShowPassengerModal] = useState(false);

  const swapRoute = () => {
    setRoute({ from: route.to, to: route.from });
  };

  const handleInputChange = (event, field) => {
    setRoute({ ...route, [field]: event.target.value });
  };


  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className={style.headerForm}>
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
              <path d="M14.25 2.25L19.5 7.5L14.25 12.75M18.697 7.5H4.5M9.75 21.75L4.5 16.5L9.75 11.25M5.34375 16.5H19.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
              onChange={(update) => {
                setDateRange(update);
              }}
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
  );
};

const HotelTab = () => {
  const destinationsList = [
    'Париж',
    'Лондон',
    'Нью-Йорк',
    'Токио',
    'Берлин',
    'Рим',
    'Барселона',
  ]; // Пример списка городов

  const [selectedDestination, setSelectedDestination] = useState('');
  const [isDestinationDropdownOpen, setIsDestinationDropdownOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);
  const [isRoomsDropdownOpen, setIsRoomsDropdownOpen] = useState(false);

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // Открытие и закрытие выпадающего списка для мест
  const toggleDestinationDropdown = () => {
    setIsDestinationDropdownOpen(!isDestinationDropdownOpen);
  };

  // Обработка выбора пункта назначения
  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
    setIsDestinationDropdownOpen(false); // Закрытие списка после выбора
  };

  // Обработчики изменения количества комнат и гостей
  const handleRoomsChange = (event) => setRooms(event.target.value);
  const handleGuestsChange = (event) => setGuests(event.target.value);

  // Создаем ссылку на выпадающий блок для отслеживания кликов вне его
  const dropdownRef = useRef(null);

  // Обработчик кликов вне выпадающего блока
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsRoomsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Переименовали обработчики изменений
  const onRoomsChange = (event) => {
    setRooms(event.target.value);
  };

  const onGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  return (
    <div className={style.hotelBooking}>
      {/* Поле Место назначения с выпадающим списком */}
      <div className={style.field}>
        {/* <label htmlFor="destination" onClick={toggleDestinationDropdown}>
          Место назначения
        </label> */}
        <p>Место назначения</p>
        <div className={style.dropdown}>
          <img src={require('./image/bed.png')} alt="" />
          <div className={style.selectedValue} onClick={toggleDestinationDropdown}>
            {selectedDestination || 'Выберите место назначения'}
          </div>
          {isDestinationDropdownOpen && (
            <ul className={style.dropdownMenu}>
              {destinationsList.map((destination, index) => (
                <li
                  key={index}
                  className={style.dropdownItem}
                  onClick={() => handleDestinationSelect(destination)}
                >
                  {destination}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Даты */}
      <div className={style.field}>
        <p>Туда-Обратно</p>
        <div className={style.dateHotelBlock}>
          <img src={require('./image/calendar.png')} alt="" />
          <div>
            <DatePicker
              id="date_range"
              className={style.dateHotelForm}
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              isClearable
              placeholderText="Выберите даты рейса"
            />
          </div>
        </div>
      </div>

      {/* Выпадающий список Комната & Гости */}
      <div className={style.field}>
        <p>Комната & Гости</p>
        <div className={style.roomBlock}>
          <img src={require('./image/User.png')} alt="" />
          <label
            onClick={() => setIsRoomsDropdownOpen(!isRoomsDropdownOpen)}
            className={style.roomMenu}
          >
            {rooms} комната{rooms > 1 ? 'ы' : ''}, {guests} гост{guests > 1 ? 'я' : 'ь'}
          </label>

          {isRoomsDropdownOpen && (
            <div className={style.dropdownContent} ref={dropdownRef}>
              <div className={style.dropdownItem}>
                <label>Количество комнат</label>
                <input
                  type="number"
                  value={rooms}
                  onChange={onRoomsChange} // Используем переименованный обработчик
                  min="1"
                  max="10"
                  className={style.input}
                />
              </div>
              <div className={style.dropdownItem}>
                <label>Количество гостей</label>
                <input
                  type="number"
                  value={guests}
                  onChange={onGuestsChange} // Используем переименованный обработчик
                  min="1"
                  max="10"
                  className={style.input}
                />
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Header;
