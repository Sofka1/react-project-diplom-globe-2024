import React, { useState, useEffect, useRef } from 'react';
import style from './HeaderMin.module.css';

const HeaderMin = () => {
    return(
        <div className={style.header}>
          {/* Блок с поиском рейсов и отелей */}
          <div className={style.search}>
            <div className={style.searchTrip}>
              <div>
                <img className={style.iconSearch} src={require('./image/airplaneBlack.png')} alt="airplane" />
              </div>
              <div className={style.searchTitle}><a href="">Поиск рейса</a></div>
            </div>
            <div className={style.searchHotel}>
              <div>
                <img className={style.iconSearch} src={require('./image/hotelBlack.png')} alt="hotel" />
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
    );
}

export default HeaderMin;