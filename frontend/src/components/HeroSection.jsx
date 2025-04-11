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
        minHeight: '60vh',
      }}
    >
      {/* Left Section: Black background with text */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: 'black',
          color: 'red',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 4,
          py: 6,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          Welcome to El Amigo
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
          }}
        >
          Authentic Mexican Restaurant
        </Typography>
      </Box>

      {/* Right Section: Image with gradient fade on left */}
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          height: isMobile ? '300px' : 'auto',
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
            height: '100%',
            background: isMobile
              ? 'linear-gradient(to top, black 20%, transparent 100%)'
              : 'linear-gradient(to left, transparent 60%, black 100%)',
            pointerEvents: 'none',
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
