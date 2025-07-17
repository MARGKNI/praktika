import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Импорты изображений
import brand1 from '../assets/arte.png';
import brand2 from '../assets/citi.png';
import brand3 from '../assets/eglo.png';
import brand4 from '../assets/euro.png';
import brand5 from '../assets/fav.png';
import bannerImage from '../assets/Rectangle_1.png';

const brands = [
  { image: brand1 },
  { image: brand2 },
  { image: brand3 },
  { image: brand4 },
  { image: brand5 },
];

const extendedBrands = [...brands, ...brands, ...brands];

const BrandsContainer = styled(Box)({
  padding: '60px',
  maxWidth: '1600px',
  margin: '0 auto',
  position: 'relative',
});

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
  gap: '20px',
  padding: '16px',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  msOverflowStyle: 'none',
});

const BrandCard = styled('div')({
  minWidth: '280px',
  height: '210px',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const BrandImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
});

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

export default function Brands() {
  const scrollRef = React.useRef(null);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  React.useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateArrows = () => {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    };

    container.addEventListener('scroll', updateArrows);
    updateArrows();

    return () => container.removeEventListener('scroll', updateArrows);
  }, []);

  return (
    <BrandsContainer>
      <BannerContainer>
        <BannerImage
          src={bannerImage}
          alt="Бренды"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/1200x200?text=Бренды';
          }}
        />
        <BannerText variant="h4">
          БРЕНДЫ
        </BannerText>
      </BannerContainer>
      
      <ScrollContainer>
        {showLeftArrow && (
          <ArrowButton onClick={() => scroll('left')} sx={{ left: 8 }}>
            <ChevronLeftIcon fontSize="large" />
          </ArrowButton>
        )}
        
        <ScrollableGrid ref={scrollRef}>
          {extendedBrands.map((brand, index) => (
            <BrandCard key={`${index}-${brand.image}`}>
              <BrandImage
                src={brand.image}
                alt={`Бренд ${index + 1}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/280x210?text=Бренд';
                }}
              />
            </BrandCard>
          ))}
        </ScrollableGrid>
        
        {showRightArrow && (
          <ArrowButton onClick={() => scroll('right')} sx={{ right: 8 }}>
            <ChevronRightIcon fontSize="large" />
          </ArrowButton>
        )}
      </ScrollContainer>
    </BrandsContainer>
  );
}