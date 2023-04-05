import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';

import { CustomImg } from './customTheme';

import ErrorImage from '../../assets/error/page-not-found.png';

const Error = () => {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <CustomImg>
        <img
          src={ErrorImage}
          alt='404 Error'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </CustomImg>
      <Button
        variant='contained'
        component={Link}
        to={'/'}
        sx={{
          fontFamily: 'Rubik, sans-serif',
          transform: 'translateY(-6em)',
          backgroundColor: 'green',
        }}
      >
        Back to Home page
      </Button>
    </Container>
  );
};

export default Error;
