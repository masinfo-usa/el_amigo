import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const imageImports = import.meta.glob('../images/foods/*.jpg', { eager: true });
const images = Object.values(imageImports).map((mod) => mod.default);

const captions = [
  { title: 'Tacos', desc: 'Delicious soft shell tacos with fresh ingredients.' },
  { title: 'Fried Fish', desc: 'Crispy fried fish served with a side of veggies.' },
  { title: 'Burritos', desc: 'Burritos packed with flavor and fillings.' },
  { title: 'Quesadilla', desc: 'Melted cheese in a perfectly grilled tortilla.' },
  { title: 'Tostadas', desc: 'Crunchy tostadas topped with your favorite fillings.' },
  { title: 'Nachos', desc: 'Loaded nachos with cheese, salsa, and more.' },
  { title: 'Enchiladas', desc: 'Spicy enchiladas with a rich red sauce.' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (index) => {
    // Toggle image maximization on tap (for mobile/tablet)
    if (selectedImage === index) {
      setSelectedImage(null); // Deselect if already selected
    } else {
      setSelectedImage(index);
    }
  };

  return (
    <Box
      sx={{
        columnCount: { xs: 1, sm: 2, md: 3, lg: 4 },
        columnGap: '16px',
        p: 2,
      }}
    >
      {images.map((src, index) => (
        <Box
          key={index}
          onClick={() => handleClick(index)} // Handle image click (for mobile/tablet)
          sx={{
            position: 'relative',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)', // Scale on hover (for desktop)
              zIndex: 1000, // Ensure the image is above all others on hover
            },
            overflow: 'hidden',
            borderRadius: 2,
            mb: 2,
            height: selectedImage === index ? '80vh' : 'auto', // Full screen on mobile
            zIndex: selectedImage === index ? 1000 : 'auto', // Ensure tapped image is above others
            position: selectedImage === index ? 'fixed' : 'center', // Fix position for full screen
            top: selectedImage === index ? 0 : 'auto',
            left: selectedImage === index ? 0 : 'auto',
            right: selectedImage === index ? 0 : 'auto',
            bottom: selectedImage === index ? 0 : 'auto',
            width: selectedImage === index ? '100%' : 'auto',
          }}
        >
          <Box
            component="img"
            src={src}
            alt={`Gallery Image ${index}`}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              transform: selectedImage === index ? 'scale(1.2)' : 'scale(1)', // Scale on tap (for mobile)
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'rgba(0, 0, 0, 0.6)',
              color: '#fff',
              padding: 2,
              textAlign: 'center',
              opacity: selectedImage === index ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            <Typography variant="h6">{captions[index]?.title}</Typography>
            <Typography variant="body2">{captions[index]?.desc}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Gallery;
