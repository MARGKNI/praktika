import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';

import style1 from '../assets/skan.png';
import style2 from '../assets/loft.png';
import style3 from '../assets/provans.png';
import style4 from '../assets/sovr.png';
import bannerImage from '../assets/Rectangle_1.png';

const styles = [
  { 
    name: 'Скандинавский', 
    image: style1
  },
  { 
    name: 'Лофт', 
    image: style2
  },
  { 
    name: 'Прованс', 
    image: style3
  },
  { 
    name: 'Современный', 
    image: style4
  },
];

const extendedStyles = [...styles, ...styles, ...styles];

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
  padding: '10px 0',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  msOverflowStyle: 'none',
  width: 'calc(100% + 24px)',
  marginLeft: '-12px', 
});

const StyleContainer = styled('div')({
  position: 'relative',
  minWidth: '210px',
  flexShrink: 0,
});

const StyleImage = styled('img')({
  width: '100%',
  height: '210px',
  objectFit: 'cover',
});

const StyleName = styled(Typography)({
  position: 'absolute',
  top: '85%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#ffff',
  fontSize: '24px',
  fontWeight: '300',
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

export default function StylesGrid() {
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
          alt="СТИЛИ"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/1200x200?text=СТИЛИ';
          }}
        />
        <BannerText variant="h4">
          СТИЛИ
        </BannerText>
      </BannerContainer>
      
      <ScrollContainer>
        {showLeftArrow && (
          <ArrowButton onClick={() => scroll('left')} sx={{ left: 0 }}>
            <ChevronLeftIcon fontSize="large" />
          </ArrowButton>
        )}
        
        <ScrollableGrid ref={scrollRef}>
          {extendedStyles.map((style, index) => (
            <StyleContainer key={index}>
              <StyleImage
                src={style.image}
                alt={style.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/280x380?text=' + encodeURIComponent(style.name);
                }}
              />
              <StyleName>{style.name}</StyleName>
            </StyleContainer>
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