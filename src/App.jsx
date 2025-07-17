import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Bestsellers from './components/bestsellers'; 
import New_items from './components/New_items';

function App() {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
      overflowX: 'hidden'
    }}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <CssBaseline />
      
      <Header />
      
      <Box component="main" sx={{ flex: 1, p: 2, bgcolor: 'white' }}>
        <Banner />
        {/* <Categories />
        <Bestsellers />
        <New_items />

        <Box component="section" sx={{ mt: 4 }}>
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 2,
            mt: 2
          }}>
          </Box>
        </Box> */}
      </Box>
      
      <Footer />
    </Box>
  );
}

export default App;