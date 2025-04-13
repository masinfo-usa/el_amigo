import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star, StarBorder } from '@mui/icons-material';

const reviews = [
  {
    name: 'Becca R.',
    date: 'Feb 3, 2025',
    rating: 5,
    text: "The best authentic Mexican restaurant in the area. We've been 5-6 times and always have had great food. From the asada burrito, the frijoles pupusa, all of the tacos, can't go wrong with any of it! ",
  },
  {
    name: 'Stephen M.',
    date: 'Jul 9, 2024',
    rating: 5,
    text: 'First time at El Amigo. Authentic Mexican menu prepared well. Tamales and tacos were delicious, highly recommended. Queso, salsa and chips were fresh and excellent.',
  },
  {
    name: 'George D.',
    date: 'May 13, 2024',
    rating: 4,
    text: "The food was outstanding! This place has all the markings of a local dive that you might bypass... But service was very good and engaging, and the best Mexican food around. Try it, you'll like it!",
  },
  {
    name: 'Laura S.',
    date: 'Jan 31, 2024',
    rating: 5,
    text: "THE BEST! El amigo is our favorite spot in the Cary/Raleigh area. Authentic Mexican that's sure to hit the spot... Highly recommend!",
  },
  {
    name: 'Kay W.',
    date: 'Jun 7, 2023',
    rating: 5,
    text: "First time is always the time to make a good impression and El Amigo delivered!... I highly recommend!",
  },
];

const YelpReview = () => {
  return (
    <Box sx={{ mt: 6, py: 6, maxWidth: '100%', mx: 'auto' }}>
      <Typography variant="h4" textAlign="center" mb={2} color='#fff'>
        Yelp Reviews From Our Customers.
      </Typography>

      <Box sx={{ position: 'relative', paddingTop: '0px'}}>
      <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 4000 }}
  loop
  pagination={{ clickable: true }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  }}
>
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  boxShadow: 0,
                  backgroundColor: '#fff',
                  textAlign: 'center',
                  minHeight: 250,
                  backgroundColor:'#000'
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                  {Array.from({ length: 5 }, (_, i) =>
                    i < review.rating ? (
                      <Star key={i} color="primary" />
                    ) : (
                      <StarBorder key={i} color="disabled" />
                    )
                  )}
                </Box>
                <Typography variant="subtitle1" fontWeight="bold"  color="#fff">
                  {review.name}
                </Typography>
                <Typography variant="caption" color="#fff">
                  {review.date}
                </Typography>
                <Typography variant="body1" mt={2} color="#fff">
                  “{review.text}”
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots Styling */}
        <style>
          {`
            .swiper-pagination {
              position: absolute;
              top: 0px;
              width: 100%;
              text-align: center;
              z-index: 10;
            }

            .swiper-pagination-bullet {
              background: #ccc;
              opacity: 1;
              margin: 0 4px !important;
              width: 10px;
              height: 10px;
            }

            .swiper-pagination-bullet-active {
              background: #1976d2;
            }
          `}
        </style>
      </Box>
    </Box>
  );
};

export default YelpReview;
