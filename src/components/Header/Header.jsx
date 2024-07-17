import React, { useState } from 'react';
import style from './Header.module.css'; // Импортируем CSS-модули
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
          <h2>Ваш личный помощник</h2>
          <h1>рейсы и отели</h1>
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
              <img className={style.iconSearch} src={require('./image/airplaneBlack.png')} alt="air"/>
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
  return (
  <div>Контент для отелей</div>
);
};

export default Header;
