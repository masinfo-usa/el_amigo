import React from 'react';
import { Box, Typography, Container, CardMedia, Avatar, Paper, Divider, IconButton, Link } from '@mui/material';
import { Facebook, Instagram, YouTube, LocationOn, Email, Phone } from '@mui/icons-material';
import HeroSection from '../components/HeroSection';
import YelpReview from '../components/YelpReview';
import FAQSection from '../components/FAQSection';

import historyImage from '../images/our-history.jpg';
import chefImage from '../images/our-chef.jpg';

// Sample review data
const reviews = [
  { name: 'Sofia L.', date: 'Apr 10, 2025', comment: 'Best pasta I’ve had in years!' },
  { name: 'Marcus K.', date: 'Apr 5, 2025', comment: 'Friendly staff and cozy vibe.' },
  { name: 'Rina M.', date: 'Mar 28, 2025', comment: 'The desserts were heavenly!' },
];

const HomePage = () => {
  return (
    <Box sx={{width: '100%', px: {xs:'2%', sm:'2%', md:'2%', lg: '8%'}, backgroundColor: '#000'}}>
      <HeroSection />
      
     




      {/* Our History Section */}
      <Box
          display="grid"
          sx={{
            mx: '3%',
            my: 10,
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gridTemplateRows: 'auto auto',
            gap: 4,
          }}
        >
          {/* Image */}
          <CardMedia
            component="img"
            image={historyImage}
            alt="Our History"
            sx={{
              borderRadius: 5,
              width: '100%',
              height: 'auto',
              gridColumn: { xs: '1', md: '1' },
              gridRow: { xs: '2', md: '1 / span 2' },
            }}
          />

          {/* Title */}
          <Box
            sx={{
              gridColumn: { xs: '1', md: '2' },
              gridRow: { xs: '1', md: '1' },
              alignSelf: { md: 'end' }, // bottom-align on md+
            }}
          >
            <Typography variant="h3" gutterBottom color="#fff">
              Our History
            </Typography>
          </Box>

          {/* Description */}
          <Box
            sx={{
              gridColumn: { xs: '1', md: '2' },
              gridRow: { xs: '3', md: '2' },
              alignSelf: { md: 'start' }, // top-align on md+
            }}
          >
            <Typography variant="body1" color="#fff">
              El Amigo began as a dream — to bring the heart of Mexico to our local community through authentic, home-style cooking. What started as a small kitchen with a handful of family recipes has grown into a beloved spot for real Mexican flavors.
              <br /><br />
              From day one, we’ve stayed true to our roots. Every tamale, taco, and torta is made with the same passion and tradition passed down through generations. Our goal has always been simple: to serve delicious, honest food that feels like home.
              <br /><br />
              Over the years, El Amigo has become more than a restaurant — it's a gathering place for friends, families, and anyone craving that warmth only great food can bring.
            </Typography>
          </Box>
        </Box>


     



      {/* Our History Section */}
      <Box
          display="grid"
          sx={{
            mx: '3%',
            my: 10,
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gridTemplateRows: 'auto auto',
            gap: 4,
          }}
        >
          {/* Image */}
          <CardMedia
            component="img"
            image={chefImage}
            alt="Our History"
            sx={{
              borderRadius: 5,
              width: '100%',
              height: 'auto',
              gridColumn: { xs: '1', md: '2' },
              gridRow: { xs: '2', md: '1 / span 2' },
            }}
          />

          {/* Title */}
          <Box
            sx={{
              gridColumn: { xs: '1', md: '1' },
              gridRow: { xs: '1', md: '1' },
              alignSelf: { md: 'end' }, // bottom-align on md+
            }}
          >
            <Typography variant="h3" gutterBottom color="#fff">
            Word from the Chef
            </Typography>
          </Box>

          {/* Description */}
          <Box
            sx={{
              gridColumn: { xs: '1', md: '1' },
              gridRow: { xs: '3', md: '2' },
              alignSelf: { md: 'start' }, // top-align on md+
            }}
          >
            <Typography variant="body1" color="#fff">
            "At El Amigo, cooking isn't just a profession — it's a legacy passed down through generations. Every dish tells a story from my Mexican roots. From tamales and chilaquiles to tacos, tortas, and gorditas — we prepare everything with care, tradition, and authentic ingredients.
            <br/><br/>
            Our food is made the way my family taught me — from scratch, with love. The tacos come loaded with flavor and served just like back home, with roasted jalapeños, grilled onions, radishes, and fresh lime. Our quesadillas and empanadas are crispy, comforting, and made to satisfy.
            <br/><br/>Whether you're enjoying our hearty tortas or a plate of hot tamales, we’re honored to share a taste of Mexico with you. Thanks for being part of the El Amigo family.

— Chef Miguel,
Head Chef & Co-founder, El Amigo
</Typography>
          </Box>
        </Box>






      <YelpReview />
    
      <FAQSection />
    

      
      
    </Box>
  );
};

export default HomePage;
