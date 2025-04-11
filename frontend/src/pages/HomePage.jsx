import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection';
import SlideShow from '../components/SlideShow';

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <SlideShow />
    </Box>
  );
};

export default HomePage;
