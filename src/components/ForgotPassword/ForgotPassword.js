import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Grid,
  Button,
  Alert,
} from '@mui/material';

import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const ForgotPassword = () => {
  const { loading, forgotPassword, error, message } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    forgotPassword(data.get('email'));
  };
  return (
    <Container align='center' maxWidth='md' sx={{ my: 15, mb: 12 }}>
      <Box
        sx={{
          border: 1,
          borderColor: 'grey.500',
          borderRadius: '5px',
          p: 5,
          mt: 5,
        }}
      >
        <Typography variant='h3'>Password Reset</Typography>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {message && (
            <Alert severity='success' sx={{ my: 2, alignItems: 'center' }}>
              {message}
            </Alert>
          )}
          {error && (
            <Alert severity='error' sx={{ my: 2, alignItems: 'center' }}>
              {error}
            </Alert>
          )}
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{
              mt: 3,
              mb: 2,
              transition: 'all 0.5s ease',
              backgroundColor: '#fe59d7',
              border: '1px solid #fe59d7',
              color: 'white',
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#fe59d7',
                boxShadow: 0,
              },
            }}
            disabled={loading}
          >
            Reset Password
          </Button>
          <Grid container justifyContent='center'>
            <Grid item>
              Don't have an account?<Link to='/signup'> Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
