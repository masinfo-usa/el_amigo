import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  // Add more image paths
];

const SlideShow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 250, sm: 400, md: 500 },
        overflow: 'hidden',
      }}
    >
      {images.map((src, index) => (
        <Box
          key={index}
          component="img"
          src={src}
          alt={`Slide ${index}`}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: index === current ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            transform: index === current ? 'scale(1.05) translateY(-2%)' : 'scale(1)',
            transitionProperty: 'opacity, transform',
          }}
        />
      ))}
    </Box>
  );
};

export default SlideShow;
