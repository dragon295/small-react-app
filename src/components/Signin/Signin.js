import React, { useState } from 'react';
import {
  Container,
  Typography,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Alert,
  Grid,
  Box,
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';

import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login = () => {
  const { signin, isLogin, currentUser, error, loading, googleSignin } =
    useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signin(data.get('email'), data.get('password'), navigate);
  };

  return (
    <Container component='main' maxWidth='xs' sx={{ py: 8, pb: 12 }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        {error && (
          <Alert
            severity='error'
            sx={{ width: '100%', mt: 2, alignItems: 'center' }}
          >
            {error}
          </Alert>
        )}
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{
              my: 2,
              height: '100%',
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
            {loading ? 'Signing In' : 'Sign in'}
          </Button>
          <Button
            fullWidth
            variant='contained'
            sx={{
              mt: 1,
              mb: 2,
              py: 1,
              height: '100%',
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
            align='center'
            onClick={() => googleSignin(navigate)}
          >
            <GoogleIcon fontSize='medium' sx={{ mr: 1 }} />
            Login with Goggle
          </Button>
          <Grid container justifyContent='between'>
            <Grid item xs>
              <Link to='/forgot-password'>Forgot password?</Link>
            </Grid>
            <Grid item>
              Don't have an account?<Link to='/signup'> Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
