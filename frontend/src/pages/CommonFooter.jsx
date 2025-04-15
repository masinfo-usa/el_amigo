import { Box, Typography, IconButton, Divider, Link, Container } from '@mui/material';
import { LocationOn, Email, Phone, Facebook, Language } from '@mui/icons-material';
import { FaYelp, FaGoogle } from 'react-icons/fa';

const CommonFooter = () => {
  return (
    <Box sx={{ bgcolor: '#000', 
      borderTop: "2px solid #00c20a",
      color: '#eee', py: 6, mt: 0 }}>
      <Container>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" gap={4}>
          {/* Location + Map */}
          <Box flex={1}>
            <Typography variant="h6" gutterBottom>Visit Us</Typography>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <LocationOn fontSize="small" />
              <Typography variant="body2">404 W Chatham St, Cary, NC 27511</Typography>
            </Box>
            <Box borderRadius={2} overflow="hidden">
              <iframe
                title="Map"
                width="100%"
                height="150"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.778744211006!2d-78.78760528469746!3d35.78760798017308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf589a68267e9%3A0x7c9db7b6b1dc9949!2s404%20W%20Chatham%20St%2C%20Cary%2C%20NC%2027511!5e0!3m2!1sen!2sus!4v1712900900000!5m2!1sen!2sus"
              ></iframe>
            </Box>
          </Box>

          {/* Hours */}
          <Box flex={1}>
            <Typography variant="h6" gutterBottom>Hours</Typography>
            <Typography variant="body2">Sunday: 10 AM–8 PM</Typography>
            <Typography variant="body2">Monday: Closed</Typography>
            <Typography variant="body2">Tuesday: 10 AM–8 PM</Typography>
            <Typography variant="body2">Wednesday: 10 AM–8 PM</Typography>
            <Typography variant="body2">Thursday: 10 AM–8 PM</Typography>
            <Typography variant="body2">Friday: 10 AM–8 PM</Typography>
            <Typography variant="body2">Saturday: 10 AM–8 PM</Typography>
          </Box>

          {/* Contact */}
          <Box flex={1}>
            <Typography variant="h6" gutterBottom>Contact</Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Phone fontSize="small" />
              <Typography variant="body2">+1 (919) 377-0013</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <Email fontSize="small" />
              <Typography variant="body2">hello@restaurant.com</Typography>
            </Box>
          </Box>

          {/* Social + Legal */}
          <Box flex={1}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <Box display="flex" gap={2} mb={2}>
              <IconButton color="inherit" href="https://www.facebook.com/p/El-Amigo-Mexican-Restaurant-100063170232456/" target="_blank">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://www.yelp.com/biz/el-amigo-mexican-restaurant-cary" target="_blank">
              <FaYelp size={24} /> {/* Using Language as Yelp placeholder */}
              </IconButton>
              <IconButton color="inherit" href="https://www.google.com/maps/place/El+Amigo+Mexican+Restaurant/@35.7871375,-78.7911446,17z/data=!4m8!3m7!1s0x89acf33421f1dde7:0x27387de807f7ed39!8m2!3d35.7871332!4d-78.7885697!9m1!1b1!16s%2Fg%2F11jntsbn1c?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
              <FaGoogle size={24} />
              </IconButton>
            </Box>
            <Divider sx={{ bgcolor: '#444' }} />
            <Typography variant="caption" display="block" mt={2}>
              <Link href="#" underline="hover" color="inherit">Terms & Conditions</Link>
            </Typography>
            <Typography variant="caption" display="block">
              <Link href="#" underline="hover" color="inherit">Privacy Policy</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CommonFooter;
