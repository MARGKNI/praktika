import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import product1 from '../assets/Layer_11.png';
import product2 from '../assets/Layer_12.png';
import product3 from '../assets/Layer_13.png';
import product4 from '../assets/Layer_14.png';
import bannerImage from '../assets/Rectangle_1.png';

const hits = [
  { 
    name: 'Люстра Crystal', 
    image: product1, 
    price: '12 990', 
    oldPrice: '15 990' 
  },
  { 
    name: 'Бра Vintage', 
    image: product2, 
    price: '5 490', 
    oldPrice: '6 990' 
  },
  { 
    name: 'Торшер Modern', 
    image: product3, 
    price: '8 790', 
    oldPrice: '10 290' 
  },
  { 
    name: 'Светильник потолочный', 
    image: product4, 
    price: '3 990', 
    oldPrice: '4 590' 
  },
];

const ProductCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  height: '100%',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const ProductImage = styled('img')({
  width: '100%',
  height: '280px',
  objectFit: 'contain',
  marginBottom: '16px',
});

const ProductName = styled(Typography)({
  textAlign: 'center',
  fontWeight: '500',
  marginBottom: '8px',
  textDecoration: 'underline',
});

const CurrentPrice = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#000000ff',
  marginBottom: '4px',
});

const OldPrice = styled(Typography)({
  fontSize: '1rem',
  textDecoration: 'line-through',
  color: 'text.secondary',
  marginBottom: '16px',
});

const AddButton = styled(Button)({
  width: '100%',
  padding: '8px 16px',
});

const BannerContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  margin: '20px 0 40px 0',
  position: 'relative',
  padding: '20px 0',
});

const BannerImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

const BannerText = styled(Typography)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#000',
  fontWeight: 'bold',
  textAlign: 'center',
  width: '100%',
  fontSize: '2rem',
  textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
});

export default function HitsGrid() {
  return (
    <Box sx={{ 
      flexGrow: 1, 
      padding: 3,
      maxWidth: '1600px',
      margin: '0 auto',
    }}>
      <BannerContainer>
        <BannerImage
          src={bannerImage}
          alt="Хиты продаж"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/1200x200?text=Хиты+продаж';
          }}
        />
        <BannerText variant="h4">
          ХИТЫ ПРОДАЖ
        </BannerText>
      </BannerContainer>
      
      <Grid container spacing={4}>
        {hits.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProductCard>
              <ProductImage
                src={product.image}
                alt={product.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/300x200?text=Изображение+не+найдено';
                }}
              />
              <ProductName variant="h6">
                {product.name}
              </ProductName>
              <CurrentPrice>
                {product.price} ₽
              </CurrentPrice>
              <OldPrice>
                {product.oldPrice} ₽
              </OldPrice>
              <AddButton 
                variant="contained" 
                color="primary"
                size="large"
              >
                Добавить в корзину
              </AddButton>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}