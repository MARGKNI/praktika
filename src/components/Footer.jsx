import React from 'react';
import './Footer.css';
import telefon from '../assets/telefon.png';
import address from '../assets/address.png';
import vremya from '../assets/vremya.png';
import email from '../assets/email.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-title">КАТАЛОГ</h3>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Светильники</a></li>
            <li><a href="#" className="footer-link">Люстры и потолочные светильники</a></li>
            <li><a href="#" className="footer-link">Настенные светильники</a></li>
            <li><a href="#" className="footer-link">Настольные лампы</a></li>
            <li><a href="#" className="footer-link">Торшеры напольные</a></li>
            <li><a href="#" className="footer-link">Точечные светильники</a></li>
            <li><a href="#" className="footer-link">Уличные светильники</a></li>
            <li><a href="#" className="footer-link">Лампочки</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">ПОКУПАТЕЛЯМ</h3>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">О компании</a></li>
            <li><a href="#" className="footer-link">Оплата и доставка</a></li>
            <li><a href="#" className="footer-link">Гарантии и возврат товара</a></li>
            <li><a href="#" className="footer-link">Контакты</a></li>
            <li><a href="#" className="footer-link">Распродажа</a></li>
            <li><a href="#" className="footer-link">Отзывы</a></li>
            <li><a href="#" className="footer-link">Карта сайта</a></li>
          </ul>
        </div>

        <div className="footer-column contacts-column">
          <h3 className="footer-title">КОНТАКТЫ</h3>
          
          <div className="contact-block">
            <img src={telefon} alt="Телефон" className="contact-icon" />
            <div className="contact-text">
              <span className="contact-phone">8-800-551-39-31</span>
              <span className="address-list">Звонок по России бесплатный</span>
            </div>
          </div>

          <div className="contact-block callback-block">
            <a href="#" className="footer-link callback-link">Заказать обратный звонок</a>
          </div>

          <div className="contact-block">
            <img src={email} alt="Email" className="contact-icon" />
            <a href="mailto:info@kst-shop.ru" className="footer-link">info@kst-shop.ru</a>
          </div>

          <h4 className="address-list">Адреса пунктов самовывоза:</h4>
          
          <div className="contact-block address-block">
            <img src={address} alt="Адрес" className="contact-icon" />
            <ul className="address-list">
              <li>г. Тула, ул. Чжутова, д. 158 В</li>
              <li>д. Нижнее Елькино, 77</li>
              <li>г. Тула, пр. Ленина, д.85, тэт, оф.5</li>
              <a href="#" className="footer-link">Посмотреть все адреса в Туле</a>
            </ul>
          </div>

          <div className="contact-block">
            <img src={vremya} alt="Время работы" className="contact-icon" />
            <span className="working-hours">с 9 до 23 часов без выходных</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2022 «Свет Тула. Интернет-магазин люстр. Все права защищены. При копировании материала, ссылка на сайт - обязательна.</p>
        <p>Вся информация на сайте относительно размеров, параметров, комплектаций, технических характеристик, комплектующих, стоимости светильников и прочих товаров носит информационный характер и не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса Российской Федерации. Для получения подробной информации звоните по телефонам: 8-800-551-39-31</p>
      </div>
    </footer>
  );
};

export default Footer;