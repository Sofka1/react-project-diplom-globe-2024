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
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div>
      <form action='' method=''>
        <label htmlFor="direction">Откуда-куда</label>
        <input id="direction" type='text' name='direction'></input>
        
        <label htmlFor="type_of_trip">Тип рейса
          <select>
            <option>Чартер</option>
            <option>Прямой</option>
            <option>Транзит</option>
            <option>Стыковочный</option>
          </select>
        </label>

        <div>
          <label htmlFor="date_range" className={style.dateR}>Дата рейса</label>
          <DatePicker
            id="date_range"
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable
            placeholderText=""
          />
        </div>
        
        <label htmlFor="type_of_trip">Тип рейса
          <select>
            <option>Чартер</option>
            <option>Прямой</option>
            <option>Транзит</option>
            <option>Стыковочный</option>
          </select>
        </label>

      </form>
    </div>
  );
};

const HotelTab = () => {
  return (
  <div>Контент для отелей</div>
);
};

export default Header;
