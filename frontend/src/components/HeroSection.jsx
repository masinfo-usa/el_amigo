import React from 'react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import foodImage from '../images/food.jpg';
import SlideShow from './SlideShow';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '',
        flexDirection: isMobile ? 'column' : 'column',
        borderBottom: "0px solid lightgreen",
        width: '100%',
        pb: 3,
        gap: '5%' 

       }}
    >
      <Box
        sx={{
          backgroundColor: '',
          color: '#F84F31',
          display: 'flex',
          flexDirection: 'column',
          px: 1,
          pt: 1,
          pb: 0

        }}
      >
      <SlideShow/>
      </Box>
      


      <Box
        sx={{
          backgroundColor: '',
          color: '#F84F31',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 0,
          mx: 1.5,
          my: 1.5
        }}
      >

  <Typography variant="h2" color="red" fontWeight="bold">
    El Amigo
  </Typography>

        <Typography
          variant="body1"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', sm: '3.0rem', md: '3.5rem' },
            color: '#fff'
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
          Serving Best Mexican Food In Cary Since 2010.
        </Typography>

        <Button
              name='order_online'
              href="/Login"            
              sx={{
                display: 'flex',
                bgcolor:"#00c20a",
                alignItems: 'center',
                borderRadius: 2, 
                padding: '8px 6px', 
                textTransform: 'none',
                boxShadow: 'none',
                color: '#FFF',
                fontSize: 14,
                width: '150px',
                height: '50px',
                marginTop: 3,
                marginLeft: 0,
                '&:hover': {
                  boxShadow: 'none', // Remove shadow on hover
                }, 
              }}>
                ORDER ONLINE
            </Button>


      </Box>

      {/* Right Section: Image with gradient fade on left */}
     
    </Box>
  );
};

export default HeroSection;
