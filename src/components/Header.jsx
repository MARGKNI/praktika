import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import topLogo from '../assets/Light.png';
import bottomLogo from '../assets/Ellipse_3.png';
import searchIcon from '../assets/Layer_30.png';
import phoneIcon from '../assets/Phone.png';
import timeIcon from '../assets/Time.png';
import favoritesIcon from '../assets/Layer_32.png';
import MoskvaIcon from '../assets/Moskva.png';
import ChtotaIcon from '../assets/Chtota.png';
import CartIcon from '../assets/Layer_31.png';

const Header = () => {
  const [activeTab, setActiveTab] = useState('КАТАЛОГ ТОВАРОВ');
  const [currentView, setCurrentView] = useState('main');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchContainerRef = useRef(null);

  const tabs = [
    'КАТАЛОГ ТОВАРОВ',
    'БРЕНДЫ +', 
    'СТИЛИ +',
    'О КОМПАНИИ',
    'ГАРАНТИЯ/ВОЗВРАТ',
    'ДОСТАВКА/ОПЛАТА',
    'ОТЗЫВЫ',
    'КОНТАКТЫ'
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        if (!searchQuery.trim()) {
          setIsSearchExpanded(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchQuery]);

  const handleSearchToggle = () => {
    setIsSearchExpanded(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCartClick = () => {
    setCurrentView('cart');
  };

  const handleFavoritesClick = () => {
    setCurrentView('favorites');
  };

  const handleBackToMain = () => {
    setCurrentView('main');
  };

  return (
    <header className="commerce-header">
      {currentView === 'main' ? (
        <>
          <div className="header-top">
            <div className="container">
              <div className="logo-composition">
                <img src={bottomLogo} alt="" className="logo-bottom" />
                <img src={topLogo} alt="Логотип" className="logo-top" />
              </div>

              <div className="header-info">
                <div 
                  ref={searchContainerRef}
                  className={`search-container ${isSearchExpanded ? 'expanded' : ''}`}
                  onClick={!isSearchExpanded ? handleSearchToggle : undefined}
                >
                  {isSearchExpanded ? (
                    <input
                      type="text"
                      className="search-input"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      autoFocus
                      placeholder="Поиск..."
                    />
                  ) : (
                    <img src={searchIcon} alt="Поиск" className="info-icon" />
                  )}
                </div>
                
                <div className="info-item">
                  <img src={MoskvaIcon} alt="Москва" className="info-icon" />
                  <span className="underlined-moskva">Москва</span>
                </div>

                <div className="info-item">
                  <img src={phoneIcon} alt="Телефон" className="info-icon" />
                  <span>+7 (495) 128-1-38</span>
                </div>
                
                <div className="info-item">
                  <img src={timeIcon} alt="Режим работы" className="info-icon" />
                  <span>Ежедневно с 9:00 до 22:00</span>
                </div>
                
                <div className="info-item clickable" onClick={handleCartClick}>
                  <img src={CartIcon} alt="Корзина" className="info-icon" />
                </div>

                <div className="info-item">
                  <img src={ChtotaIcon} alt="Иконка" className="info-icon" />
                </div>

                <div className="info-item clickable" onClick={handleFavoritesClick}>
                  <img src={favoritesIcon} alt="Избранное" className="info-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="nav-container">
            <div className="container">
              <nav className="main-nav">
                <ul className="nav-list">
                  {tabs.map(tab => (
                    <li 
                      key={tab}
                      className={`nav-item ${activeTab === tab ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </>
      ) : currentView === 'cart' ? (
        <div className="view-container">
          <h2>Ваша корзина</h2>
          <p>Здесь будут товары, которые вы добавили в корзину</p>
          <button onClick={handleBackToMain}>Вернуться на главную</button>
        </div>
      ) : (
        <div className="view-container">
          <h2>Избранное</h2>
          <p>Здесь будут товары, которые вы добавили в избранное</p>
          <button onClick={handleBackToMain}>Вернуться на главную</button>
        </div>
      )}
    </header>
  );
};

export default Header;