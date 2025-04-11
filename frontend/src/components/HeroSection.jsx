import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import foodImage from '../images/food.jpg';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        width: '100%',
        minHeight: isMobile ? '80vh' : '60vh',
      }}
    >
      {/* Left Section: Black background with text */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: 'black',
          color: '#F84F31',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 4,
          pt: 5,
          pb: 0
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
          }}
        >
          Authentic Mexican Restaurant
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontSize: { xs: '1.0rem', sm: '1.0rem', md: '1.2rem' },
            color:'#fff'
          }}
        >
          Serving best mexican food in Cary since 2010.
        </Typography>
      </Box>

      {/* Right Section: Image with gradient fade on left */}
      <Box
        sx={{
          flex: 2,
          position: 'relative',
          height: isMobile ? 'auto' : 'auto',
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={foodImage}
          alt="Delicious food"
          sx={{
            width: '100%',
            height: '100%',
            minHeight: '50vh',
            objectFit: 'cover',
          }}
        />

        {/* Gradient overlay from left (black) to transparent */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: isMobile ? '50%' :'100%',
            background: isMobile
              ? 'linear-gradient(to bottom, black 20%, transparent 100%)'
              : 'linear-gradient(to left, transparent 60%, black 100%)',
            pointerEvents: 'none',
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
