import React, { useState } from 'react';
import './Banner.css';
import sale from '../assets/sale.png';
import promotion from '../assets/Layer_47.png';
import discount from '../assets/Layer_93.png';
import overlay from '../assets/Hexagon.png';
import logoGor from '../assets/logo_gor.png';
import banBig from '../assets/ban_big.png';

const Banner = () => {
  const [currentView, setCurrentView] = useState('main');

  return (
    <div className="banner-container">
      {currentView === 'main' ? (
        <div className="banner-grid">
          <div className="main-banner">
            <div className="base-layer" style={{ backgroundImage: `url(${sale})` }} />
            <div className="black-overlay" />
            <img src={overlay} alt="" className="overlay-image" />
            <div className="banner-content right-position">
              <h1 className="sale-title">РАСПРО<br/>ДАЖА</h1>
              <button className="go-to-products-btn clickable" onClick={() => setCurrentView('sale')}>ПЕРЕЙТИ К ТОВАРАМ</button>
              <h2 className="discount-text">СКИДКИ<br/>до 60%</h2>
            </div>
          </div>

          <div className="right-banners">
            <div className="small-banner top-banner" style={{ backgroundImage: `url(${discount})` }}>
              <img src={logoGor} alt="" className="top-banner-image" />
              <h2 className="top-banner-title">С НАМИ<br/>БУДЕТ<br/>СВЕТЛО</h2>
              <a href="#" className="top-banner-link">Подробнее</a>
            </div>

            <div className="small-banner bottom-banner" style={{ backgroundImage: `url(${promotion})` }}>
              <img src={banBig} alt="" className="bottom-banner-image" />
              <h2 className="bottom-banner-title">АКЦИЯ</h2>
              <h2 className="bottom-banner-text">Лампочка для люстр<br/>в подарок</h2>
              <a href="#" className="bottom-banner-link">Подробнее</a>
            </div>
          </div>
        </div>
      ) : (
        <div className="sale-view">
          <h1>Распродажа котиков</h1>
          <button  className="back-button clickable" onClick={() => setCurrentView('main')}>
            Вернуться на главную
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;