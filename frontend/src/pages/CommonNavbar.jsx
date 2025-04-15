import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemButton,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import logo from '../images/logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
];

const CommonNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: '#000',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          borderBottom: '2px solid #00c20a',
          px: { xs: '0%', sm: '0%', md: '0%', lg: '0%' },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            px: { xs: '2%', sm: '2%', md: '2%', lg: '8%' },
          }}
        >
          {isMobile ? (
            <>
              <IconButton
                onClick={() => setDrawerOpen(!drawerOpen)}
                sx={{ color: '#fff' }}
              >
                {drawerOpen ? <Close /> : <Menu />}
              </IconButton>

              <Box component="a" href="/" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <Box component="img" src={logo} alt="Logo" sx={{ height: 60 }} />
              </Box>

              <Button
                variant="contained"
                href="/store"
                sx={{
                  bgcolor: '#00c20a',
                  '&:hover': { bgcolor: '#00c20a' },
                  textTransform: 'none',
                }}
              >
                Order Now
              </Button>
            </>
          ) : (
            <>
              <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
                <Box component="img" src={logo} alt="Logo" sx={{ height: 60 }} />
              </Box>

              <Box sx={{ display: 'flex', gap: 4 }}>
                {navLinks.map((link) => (
                  <Typography
                    key={link.href}
                    component="a"
                    href={link.href}
                    sx={{
                      color: '#fff',
                      textDecoration: 'none',
                      fontWeight: 500,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      transition: 'all 0.1s ease',
                      '&:hover': {
                        color: '#fff',
                        bgcolor: '#333',
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>

              {/* Right side: Login + Order */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography
                  component="a"
                  href="/login"
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 500,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    transition: 'all 0.1s ease',
                    '&:hover': {
                      color: '#fff',
                      bgcolor: '#333',
                    },
                  }}
                >
                  Login
                </Typography>

                <Button
                  variant="contained"
                  href="/store"
                  sx={{
                    bgcolor: '#00c20a',
                    '&:hover': { bgcolor: '#00c20a' },
                    textTransform: 'none',
                  }}
                >
                  Order Now
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              bgcolor: '#111',
              pt: 10,
            },
          },
        }}
      >
        <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <ListItemButton
              disableRipple
              key={link.href}
              component="a"
              href={link.href}
              onClick={() => setDrawerOpen(true)}
              sx={{
                width: '100%',
                justifyContent: 'center',
                py: 2,
                color: '#fff',
                textAlign: 'center',
                '&:hover': {
                  bgcolor: '#333',
                  color: '#00c20a',
                },
              }}
            >
              <Typography sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
                {link.label}
              </Typography>
            </ListItemButton>
          ))}



          <Divider sx={{ my: 1, bgcolor: '#333', width: '60%' }} />

          <ListItemButton
            disableRipple
            component="a"
            href="/Login"
            onClick={() => setDrawerOpen(true)}
            sx={{
              width: '100%',
              justifyContent: 'center',
              py: 2,
              color: '#fff',
              textAlign: 'center',
              '&:hover': {
                bgcolor: '#222',
                color: '#00c20a',
              },
            }}
          >
            <Typography sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
              Login
            </Typography>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default CommonNavbar;
