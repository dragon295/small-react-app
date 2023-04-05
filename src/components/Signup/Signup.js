import React, { useState } from 'react';
import {
  Container,
  Typography,
  Avatar,
  Alert,
  Button,
  CssBaseline,
  Grid,
  Box,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
  FormControl,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Visibility, VisibilityOff } from '@mui/icons-material';

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

const SignUp = () => {
  const { signup, loading, error, setError, message } = useGlobalContext();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (e) => {
    setCredentials({ ...credentials, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setCredentials({
      ...credentials,
      showPassword: !credentials.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setCredentials({
      ...credentials,
      showConfirmPassword: !credentials.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleMouseDownConfimPassword = (e) => {
    e.preventDefault();
  };

  const defaultCredentials = (
    email = '',
    password = '',
    confirmPassword = '',
    showPassword = false,
    showConfirmPassword = false
  ) => {
    setCredentials({
      email,
      password,
      confirmPassword,
      showPassword,
      showConfirmPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = credentials;

    if (password !== confirmPassword) {
      return setError('Password do not match');
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      return setError('Email is not valid, Please try again');
    }
    signup(email, password, defaultCredentials);
  };

  return (
    <Container component='main' maxWidth='xs' sx={{ my: 15, mb: 12 }}>
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
          Sign up
        </Typography>

        {error && (
          <Alert
            severity='error'
            sx={{ width: '100%', mt: 2, alignItems: 'center' }}
          >
            {error}
          </Alert>
        )}
        {message && (
          <Alert
            severity='success'
            sx={{ width: '100%', mt: 2, alignItems: 'center' }}
          >
            {message}
          </Alert>
        )}
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor='email-credential'>
                  Email Address *
                </InputLabel>
                <OutlinedInput
                  id='email-credential'
                  required
                  label='Email Address'
                  type='email'
                  value={credentials.email}
                  onChange={handleChange('email')}
                  autoComplete='email'
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor='password-credential'>
                  Password *
                </InputLabel>
                <OutlinedInput
                  id='password-credential'
                  required
                  label='Password'
                  type={credentials.showPassword ? 'text' : 'password'}
                  value={credentials.password}
                  onChange={handleChange('password')}
                  autoComplete='password'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        tabIndex={-1}
                        aria-label='toggle password'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {credentials.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{ paddingRight: '5px' }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor='outlined-confirmPassword'>
                  Confirm Password *
                </InputLabel>
                <OutlinedInput
                  id='outlined-confirmPassword'
                  required
                  label='Confirm Password'
                  type={credentials.showConfirmPassword ? 'text' : 'password'}
                  value={credentials.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  autoComplete='confirm-password'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        tabIndex={-1}
                        aria-label='toggle confirmPassword'
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfimPassword}
                      >
                        {credentials.showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{ paddingRight: '5px' }}
                />
              </FormControl>
            </Grid>
          </Grid>
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
            sign up
          </Button>
          <Grid container justifyContent='center'>
            <Grid item>
              Already have an account?
              <Link to='/signin'> Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
