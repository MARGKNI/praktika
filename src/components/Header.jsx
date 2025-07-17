import React, { useState } from 'react';
import { useMediaQuery, Box, IconButton, Drawer, List, ListItem, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import topLogo from '../assets/Light.png';
import bottomLogo from '../assets/Ellipse_3.png';
import searchIcon from '../assets/Layer_30.png';
import phoneIcon from '../assets/Phone.png';
import timeIcon from '../assets/Time.png';
import favoritesIcon from '../assets/Layer_32.png';
import MoskvaIcon from '../assets/Moskva.png';
import ChtotaIcon from '../assets/Chtota.png';
import CartIcon from '../assets/Layer_31.png';
import './Header.css';

const Header = () => {
  const [activeTab, setActiveTab] = useState('КАТАЛОГ ТОВАРОВ');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const tabs = [
    'КАТАЛОГ ТОВАРОВ',
    'БРЕНДЫ',
    'СТИЛИ',
    'О КОМПАНИИ',
    'ГАРАНТИЯ/ВОЗВРАТ',
    'ДОСТАВКА/ОПЛАТА',
    'ОТЗЫВЫ',
    'КОНТАКТЫ'
  ];

  return (
    <header className="commerce-header">
      {/* Верхняя часть (лого + иконки) */}
      <Box className="header-top">
        <Box className="container">
          {/* Бургер-меню (только на мобильных) */}
          {isMobile && (
            <IconButton 
              onClick={() => setIsMenuOpen(true)}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Логотип */}
          <Box className="logo-composition">
            <img src={bottomLogo} alt="" className="logo-bottom" />
            <img src={topLogo} alt="Логотип" className="logo-top" />
          </Box>

          {/* Поиск (скрывается на мобильных) */}
          {!isMobile && (
            <Box className={`search-container ${isSearchExpanded ? 'expanded' : ''}`}>
              {isSearchExpanded ? (
                <input
                  type="text"
                  className="search-input"
                  placeholder="Поиск..."
                />
              ) : (
                <img src={searchIcon} alt="Поиск" className="info-icon" />
              )}
            </Box>
          )}

          {/* Иконки (в правильном порядке) */}
          <Box className="header-info">
            {!isMobile && (
              <>
                <Box className="info-item">
                  <img src={MoskvaIcon} alt="Москва" className="info-icon" />
                  <span className="underlined-moskva">Москва</span>
                </Box>

                <Box className="info-item">
                  <img src={phoneIcon} alt="Телефон" className="info-icon" />
                  <span>+7 (495) 128-1-38</span>
                </Box>

                <Box className="info-item">
                  <img src={timeIcon} alt="Режим работы" className="info-icon" />
                  <span>Ежедневно с 9:00 до 22:00</span>
                </Box>
              </>
            )}

            {isMobile && (
              <IconButton onClick={() => setIsSearchExpanded(!isSearchExpanded)}>
                <img src={searchIcon} alt="Поиск" className="info-icon" />
              </IconButton>
            )}

            <Box className="info-item clickable">
              <img src={CartIcon} alt="Корзина" className="info-icon" />
            </Box>

            <Box className="info-item clickable">
              <img src={ChtotaIcon} alt="Иконка" className="info-icon" />
            </Box>

            <Box className="info-item clickable">
              <img src={favoritesIcon} alt="Избранное" className="info-icon" />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Навигационное меню (только для десктопа) */}
      {!isMobile && (
        <Box className="nav-container">
          <ul className="nav-list">
            {tabs.map((tab) => (
              <li 
                key={tab}
                className={`nav-item ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </Box>
      )}

      {/* Мобильное меню */}
      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <IconButton 
            onClick={() => setIsMenuOpen(false)}
            sx={{ mb: 2 }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            {tabs.map((tab) => (
              <ListItem
                key={tab}
                button
                onClick={() => {
                  setActiveTab(tab);
                  setIsMenuOpen(false);
                }}
                sx={{
                  py: 1.5,
                  borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                }}
              >
                <Typography variant="body1">{tab}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </header>
  );
};

export default Header;