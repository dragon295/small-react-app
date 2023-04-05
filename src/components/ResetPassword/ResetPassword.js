import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const ResetPassword = () => {
  const { loading, resetPassword } = useGlobalContext();

  const navigate = useNavigate();
  const query = useQuery();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    resetPassword(query.get('oobCode'), data.get('password'), navigate);
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
        <Typography variant='h3'>Reset Password</Typography>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='new password'
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
            {loading ? 'Signing In' : 'Reset Password'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ResetPassword;
