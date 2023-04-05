import React from 'react';

import AboutAuthor from './AboutAuthor';
import LatestNews from './LatestNews';
import Information from './Information';
import ImagesList from './ImagesList';

import { Container, Grid, Typography, Box } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    footerPink: {
      main: '#fe59d7',
    },
    boxInput: {
      main: '#ffffff4d',
    },
    inputColor: {
      main: '#ffffff4d',
    },
    defaultWhite: {
      main: '#fff',
    },
  },
});

const footerBg = {
  color: 'white',
  padding: '5em 24px 3em 24px',
  width: '100%',
  fontFamily: 'Poppins, sans-serif',
  '& li svg': {
    color: '#fe59d7',
  },
  '& > a:hover': {
    color: '#fe59d7',
    transition: '.5s ease-in-out',
  },
};

const headerTag = {
  fontSize: '1.25rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Poppins, sans-serif',
  '& div': {
    width: '40px',
    marginRight: '10px',
    borderRadius: '50%',
    height: '40px',
    color: '#fe59d7',
    border: '1px solid #fe59d7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <footer
        style={{
          background: 'linear-gradient(45deg, #2a1a5e 0%, #5126a7 100%)',
        }}
      >
        <Container sx={footerBg}>
          <Grid
            container
            spacing={4}
            sx={{
              '& > div': {
                display: 'flex',
                flexDirection: 'column',
              },
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              // sx={{
              //   display: 'flex',
              //   alignItems: 'center',
              //   justifyContent: 'center',
              // }}
            >
              <AboutAuthor headerTag={headerTag} />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <LatestNews headerTag={headerTag} />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              sx={{
                pl: {
                  xs: 0,
                  lg: '3.25rem !important',
                },
              }}
            >
              <Information headerTag={headerTag} />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <ImagesList headerTag={headerTag} />
            </Grid>
          </Grid>

          <Box sx={{ borderTop: '1px solid #ffffff1a', mt: 2 }}>
            <Grid
              container
              spacing={2}
              sx={{
                color: '#ffffff80',
                textTransform: 'capitalize',
                py: 2,
              }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  textAlign: {
                    xs: 'center',
                    sm: 'left',
                  },
                }}
              >
                <Typography variant='p'>
                  Copyright © {new Date().getFullYear()} All rights reserved.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  textAlign: {
                    xs: 'center',
                    sm: 'right',
                  },
                }}
              >
                <Typography variant='p'>
                  This website is made by{' '}
                  <Box component={Link} to={'/'} sx={{ color: '#fe59d7' }}>
                    The sad
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </footer>
    </ThemeProvider>
  );
};

export default Footer;
