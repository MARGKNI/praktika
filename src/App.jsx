import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="app">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      <Header />
      
      <main className="main-content">
        <Banner />
        <Categories />

        <section className="featured-products">
          <div className="products-grid">
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;