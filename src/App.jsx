import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Шапка сайта */}
      <Header />
      
      {/* Основное содержимое страницы */}
      <main className="main-content">
        <h1>Добро пожаловать в наш магазин!</h1>
        <p>Здесь будет основной контент вашего сайта...</p>
        
        {/* Пример секции - можно заменить на свои компоненты */}
        <section className="featured-products">
          <h2>Популярные товары</h2>
          <div className="products-grid">
            {/* Здесь будут карточки товаров */}
          </div>
        </section>
      </main>
      
      {/* Подвал сайта */}
      <Footer />
    </div>
  );
}

export default App;