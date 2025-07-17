import React from 'react';
import { useMediaQuery, useTheme, Box, Button } from '@mui/material';
import './Banner.css';
import sale from '../assets/sale.png';
import promotion from '../assets/Layer_47.png';
import discount from '../assets/Layer_93.png';
import overlay from '../assets/Hexagon.png';
import logoGor from '../assets/logo_gor.png';
import banBig from '../assets/ban_big.png';

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="banner-container">
      <div className={`banner-layout ${isMobile ? 'mobile' : ''}`}>
        {/* Главный баннер */}
        <div 
          className="main-banner"
          style={{ 
            backgroundImage: `url(${sale})`,
          }}
        >
          <div className="banner-overlay" />
          <img src={overlay} alt="" className="decoration-image" />
          <div className="banner-content">
            <h1>РАСПРО<br/>ДАЖА</h1>
            <Button variant="outlined" className="action-btn">
              ПЕРЕЙТИ К ТОВАРАМ
            </Button>
            <p>СКИДКИ<br/>до 60%</p>
          </div>
        </div>

        {/* Боковые баннеры */}
        <div className="side-banners">
          {/* Второй баннер (верхний) */}
          <div 
            className="small-banner top-banner"
            style={{ backgroundImage: `url(${discount})` }}
          >
            <img src={logoGor} alt="" className="top-banner-logo" />
            <h2>С НАМИ<br/>БУДЕТ<br/>СВЕТЛО</h2>
            <a href="#">Подробнее</a>
          </div>
          
          {/* Третий баннер (нижний) */}
          <div 
            className="small-banner bottom-banner"
            style={{ backgroundImage: `url(${promotion})` }}
          >
            <img src={banBig} alt="" className="bottom-banner-image" />
            <h2>АКЦИЯ</h2>
            <p>Лампочка для люстр<br/>в подарок</p>
            <a href="#">Подробнее</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;