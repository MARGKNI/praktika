import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';

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

const extendedHits = [...hits, ...hits, ...hits];

const ScrollContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
});

const ScrollableGrid = styled(Box)({
  display: 'flex',
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  gap: '13px',
  padding: '16px 0',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  msOverflowStyle: 'none',
  width: 'calc(100% + 24px)',
  marginLeft: '-12px', 
});

const ProductContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  width: 'calc(25% - 18px)', 
  minWidth: '280px',
  flexShrink: 0,
  backgroundColor: '#fff',
});

const ProductImage = styled('img')({
  width: '100%',
  height: '280px',
  objectFit: 'contain',
  marginBottom: '30px',
});

const ProductName = styled(Typography)({
  textAlign: 'center',
  fontWeight: '500',
  marginBottom: '1px',
  textDecoration: 'underline',
  fontSize: '1.2rem',
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

const ArrowButton = styled(IconButton)({
  position: 'absolute',
  zIndex: 1,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
});

export default function HitsGrid() {
  const scrollRef = React.useRef(null);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 304; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  React.useEffect(() => {
    const container = scrollRef.current;
    const updateArrows = () => {
      if (container) {
        setShowLeftArrow(container.scrollLeft > 0);
        setShowRightArrow(
          container.scrollLeft < container.scrollWidth - container.clientWidth
        );
      }
    };
    
    container?.addEventListener('scroll', updateArrows);
    return () => container?.removeEventListener('scroll', updateArrows);
  }, []);

  return (
    <div style={{ 
      padding: '60px',
      maxWidth: '1600px',
      margin: '0 auto',
      position: 'relative',
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
      
      <ScrollContainer>
        {showLeftArrow && (
          <ArrowButton onClick={() => scroll('left')} sx={{ left: 0 }}>
            <ChevronLeftIcon fontSize="large" />
          </ArrowButton>
        )}
        
        <ScrollableGrid ref={scrollRef}>
          {extendedHits.map((product, index) => (
            <ProductContainer key={index}>
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
          ))}
        </ScrollableGrid>
        
        {showRightArrow && (
          <ArrowButton 
            onClick={() => scroll('right')}
            sx={{ right: 0 }}
          >
            <ChevronRightIcon fontSize="large" />
          </ArrowButton>
        )}
      </ScrollContainer>
    </div>
  );
}