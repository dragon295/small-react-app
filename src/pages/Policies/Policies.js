import React, { useState } from 'react';

import { Container, Grid, Button, Typography } from '@mui/material';

import { Link, Outlet } from 'react-router-dom';

import HeaderImg from '../../components/HeaderImg/HeaderImg';

import Policy from '../../assets/header/policy.jpg';

const Policies = () => {
  return (
    <>
      <HeaderImg imgUrl={Policy} page='policies' />
      <Container sx={{ my: 2 }}>
        <Typography variant='h4' sx={{ mb: 2 }}>
          Our policies are introduced in the links below
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            '& a': {
              bgcolor: '#fe59d7',
              color: 'white',
              transition: 'all 0.5s ease',
              border: '1px solid #fe59d7',
              '&:hover': {
                boxShadow: 0,
                bgcolor: 'transparent',
                border: '1px solid #fe59d7',
                color: '#fe59d7',
                '& a': {
                  color: '#fe59d7',
                },
              },
            },
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Button variant='contained' component={Link} to='cookies'>
              Cookies
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant='contained' component={Link} to='refund-policy'>
              Refund Policy
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant='contained' component={Link} to='private-policy'>
              Private Policy
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant='contained' component={Link} to='terms-conditions'>
              Terms & Conditions
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Outlet />
    </>
  );
};

export default Policies;
