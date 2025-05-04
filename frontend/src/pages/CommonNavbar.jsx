import React, { useState, useEffect } from 'react';
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
  { label: 'Home', href: '#/' },
  { label: 'Menu', href: '#/menu' },
  { label: 'Gallery', href: '#/gallery' },
];

const CommonNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isActive = (href) => href === currentHash;

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

              <Box
                component="a"
                href="#/"
                
                onClick={(e) => {
                  if (window.location.hash === '#/') {
                    e.preventDefault(); // prevent default link behavior
                    window.scrollTo({ top: 0, behavior: 'instant' });
                    window.location.reload(); // force reload and navigate to homepage
                  }
                  else{
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}


                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
              >
                <Box component="img" src={logo} alt="Logo" sx={{ height: 60, ml: 2 }} />
              </Box>


              <Button
                variant="contained"
                href="tel:+19193770013"
                sx={{
                  bgcolor: '#00c20a',
                  '&:hover': { bgcolor: '#00c20a' },
                  textTransform: 'none',
                  px: 1,
                }}
              >
                Call Now
              </Button>
            </>
          ) : (
            <>
              <Box component="a" href="#/" 
              onClick={(e) => {
                if (window.location.hash === '#/') {
                  e.preventDefault(); // prevent default link behavior
                  window.scrollTo({ top: 0, behavior: 'instant' });
                  window.location.reload(); // force reload and navigate to homepage
                }
                else{
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
                sx={{ display: 'flex', alignItems: 'center' }}>
                <Box component="img" src={logo} alt="Logo" sx={{ height: 60 }} />
              </Box>

              <Box sx={{ display: 'flex', gap: 4, backgroundColor: '' }}>
                {navLinks.map((link) => (
                  <Typography
                    key={link.href}
                    component="a"
                    href={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    sx={{
                      color: '#fff',
                      textDecoration: 'none',
                      fontWeight: 500,
                      px: 1.5,
                      py: 0.5,
                      my: 1,
                      borderRadius: 2,
                      ...(isActive(link.href) && {
                        border: '2px solid #ccc',
                      }),
                      '&:hover': {
                        color: '#fff',
                        bgcolor: '#444',
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>

              {/* Right side: Login + Order */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* <Typography
                  component="a"
                  href="#/login"
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 500,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    transition: 'all 0.1s ease',
                    ...(currentHash === '#/login' && {
                      border: '1px solid #fff',
                    }),
                    '&:hover': {
                      color: '#fff',
                      bgcolor: '#333',
                    },
                  }}
                >
                  Login
                </Typography> */}

                <Button
                  variant="contained"
                  href="tel:+19193770013"
                  sx={{
                    bgcolor: '#00c20a',
                    '&:hover': { bgcolor: '#00c20a' },
                    textTransform: 'none',
                  }}
                >
                  Call Now
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
              borderBottom: '2px solid #00c20a',
                  
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
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setDrawerOpen(false);
              }}
              sx={{
                width: '100%',
                justifyContent: 'center',
                py: 2,
                color: '#fff',
                borderTop: '0px solid #555',
                textAlign: 'center',
                ...(isActive(link.href) && {
                  borderBottom: '0px solid #00c20a',
                  backgroundColor: '#333',
                  color: '#00c20a',
                }),
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
{/* 
          <Divider sx={{ my: 1, bgcolor: '#333', width: '60%' }} />

          <ListItemButton
            disableRipple
            component="a"
            href="#/login"
            onClick={() => setDrawerOpen(false)}
            sx={{
              width: '100%',
              justifyContent: 'center',
              py: 2,
              color: '#fff',
              textAlign: 'center',
              ...(currentHash === '#/login' && {
                borderBottom: '2px solid #00c20a',
                color: '#00c20a',
              }),
              '&:hover': {
                bgcolor: '#222',
                color: '#00c20a',
              },
            }}
          >
            <Typography sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
              Login
            </Typography>
          </ListItemButton> */}
        </List>
      </Drawer>
    </>
  );
};

export default CommonNavbar;
