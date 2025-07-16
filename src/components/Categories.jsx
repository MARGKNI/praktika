import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import lustr from '../assets/lustr.png';
import bra from '../assets/bra.png';
import torsher from '../assets/torsher.png';
import potoloch_svet from '../assets/potoloch_svet.png';
import nastol_svet from '../assets/nastol_svet.png';
import vstr_svet from '../assets/vstr_svet.png';
import ulich_svet from '../assets/ulich_svet.png';
import lampoch from '../assets/lampoch.png';
import lightBanner from '../assets/Rectangle_1.png'; 

const categories = [
  { name: 'ЛЮСТРЫ', image: lustr },
  { name: 'БРА', image: bra },
  { name: 'ТОРШЕРЫ', image: torsher },
  { name: 'ПОТОЛОЧНЫЕ СВЕТИЛЬНИКИ', image: potoloch_svet, twoLines: true },
  { name: 'НАСТОЛЬНЫЕ ЛАМПЫ', image: nastol_svet, twoLines: true },
  { name: 'ВСТРАИВАЕМЫЕ СВЕТИЛЬНИКИ', image: vstr_svet, twoLines: true },
  { name: 'УЛИЧНЫЕ СВЕТИЛЬНИКИ', image: ulich_svet, twoLines: true },
  { name: 'ЛАМПОЧКИ', image: lampoch },
];

const CategoryCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const ImageWrapper = styled('div')({
  width: '100%',
  height: 'px', 
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const CategoryImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain', 
  padding: 0,
  margin: 0,
  border: 'none',
});

const CategoryName = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1.5),
  textAlign: 'center',
  fontWeight: '500',
  fontSize: '1rem',
  color: theme.palette.text.primary,
  backgroundColor: '#fff',
  whiteSpace: 'pre-line', 
}));

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
  fontWeight: 'normal',
  textAlign: 'center',
  width: '100%',
  fontSize: '1.5rem',
});

export default function CategoryGrid() {
  return (
    <Box sx={{ 
      flexGrow: 1, 
      padding: 3,
      maxWidth: '1600px',
      margin: '0 auto',
    }}>
      <BannerContainer>
        <BannerImage
          src={lightBanner}
          alt="ИНТЕРНЕТ-МАГАЗИН СВЕТИЛЬНИКОВ LIGHT"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/1200x100?text=Banner+Image+Not+Found';
          }}
        />
        <BannerText variant="h5">
          ИНТЕРНЕТ-МАГАЗИН СВЕТИЛЬНИКОВ LIGHT
        </BannerText>
      </BannerContainer>
      
      <Grid container spacing={3}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CategoryCard>
              <ImageWrapper>
                <CategoryImage
                  src={category.image}
                  alt={category.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                  }}
                />
              </ImageWrapper>
              <CategoryName>
                {category.twoLines 
                  ? category.name.replace(' ', '\n') 
                  : category.name}
              </CategoryName>
            </CategoryCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}