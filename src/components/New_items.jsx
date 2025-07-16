import * as React from 'react';
import { styled } from '@mui/material/styles';
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
    name: 'Подвесная люстра Mythony Grazia', 
    code: 'MOD046PL-08CH',
    image: product1, 
    price: '19,677', 
    oldPrice: '29,370' 
  },
  { 
    name: 'Подвесная люстра Mythony Grazia', 
    code: 'MOD046PL-08CH',
    image: product2, 
    price: '9,677', 
    oldPrice: '29,370' 
  },
  { 
    name: 'Подвесная люстра Mythony Grazia', 
    code: 'MOD046PL-08CH',
    image: product3, 
    price: '9,677', 
    oldPrice: '29,370' 
  },
  { 
    name: 'Подвесная люстра Mythony Grazia', 
    code: 'MOD046PL-08CH',
    image: product4, 
    price: '119,677', 
    oldPrice: '29,370' 
  },
];

const ProductContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
});

const ProductImage = styled('img')({
  width: '100%',
  height: '230px',
  objectFit: 'contain',
  marginBottom: '30px',
});

const ProductName = styled(Typography)({
  textAlign: 'center',
  fontWeight: '500',
  marginBottom: '1px',
  textDecoration: 'underline',
});

const ProductCode = styled(Typography)({
  textAlign: 'center',
  fontSize: '0.9rem',
  color: 'text.secondary',
  marginBottom: '8px',
  textDecoration: 'underline',
});

const PriceContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '8px 0',
});

const CurrentPrice = styled(Typography)({
  fontSize: '3rem',
  color: '#000000',
});

const OldPrice = styled(Typography)({
  fontSize: '1rem',
  textDecoration: 'line-through',
  color: '#777',
});

const AddButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  padding: '6px 12px',
  backgroundColor: '#FFDE00',
  color: '#000000',
  borderRadius: '20px',
  fontSize: '0.875rem',
  minWidth: '120px',
  textTransform: 'none',
  '&:hover': {
  backgroundColor: '#fbc02d',
  },
}));

const BannerContainer = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  margin: '20px 0 40px 0',
  position: 'relative',
});

const BannerImage = styled('img')({
  width: '100%',
  height: 'auto',
});

const BannerText = styled(Typography)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#000',
  textAlign: 'center',
  width: '100%',
  fontSize: '1.4rem',
  textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
});

export default function HitsGrid() {
  return (
    <div style={{ 
      padding: '24px',
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
          НОВИНКИ
        </BannerText>
      </BannerContainer>
      
      <Grid container spacing={4}>
        {hits.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProductContainer>
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
              <ProductCode>
                {product.code}
              </ProductCode>
              <PriceContainer>
                <CurrentPrice>
                  {product.price} ₽
                </CurrentPrice>
                <OldPrice>
                  {product.oldPrice} ₽
                </OldPrice>
              </PriceContainer>
              <AddButton 
                variant="contained"
                size="small"
              >
                В корзину
              </AddButton>
            </ProductContainer>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}