import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="commerce-header">
            <div className="header-top">
                <div className="container">
                    <div className="header-contacts">
                        <span className="phone">+7 (495) 128-1-38</span>
                        <span className="copyright">© bxenneenocobono2200 CEE</span>
                    </div>
                    <div className="header-icons">
                        <span className="icon">@</span>
                        <span className="icon">ull</span>
                    </div>
                </div>
            </div>

            <div className="header-main">
                <div className="container">
                    <nav className="main-nav">
                        <ul className="nav-list">
                            <li className="nav-item">КАТАЛОГ ТОВАРОВ</li>
                            <li className="nav-item">БРЕНДЫ</li>
                            <li className="nav-item">СТИЛИ</li>
                            <li className="nav-item">О КОМПАНИИ</li>
                            <li className="nav-item">ГАРАНТИЯ/ВОЗВРАТ</li>
                            <li className="nav-item">ДОСТАВКИ/ОПЛАТА</li>
                            <li className="nav-item">ОТЗЫВЫ</li>
                            <li className="nav-item">КОНТАКТЫ</li>
                        </ul>
                    </nav> 
                </div>         
            </div>
        </header>
    );
};

export default Header;