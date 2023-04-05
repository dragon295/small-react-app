import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  Alert,
  Grid,
  TextField,
} from '@mui/material';

import { green } from '@mui/material/colors';

import { useNavigate, Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const UpdatePassword = () => {
  const { updatePasswordUser, error, setError } = useGlobalContext();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (data.get('newpassword') !== data.get('confirmpassword')) {
      return setError('Password do not match');
    }
    updatePasswordUser(
      data.get('currentpassword'),
      data.get('newpassword'),
      navigate
    );
  };
  return (
    <Container sx={{ my: 15 }}>
      <Card
        sx={{
          mt: 3,
        }}
      >
        <CardContent sx={{ mt: 1 }}>
          <Typography variant='h4'>Update Password</Typography>

          {error && (
            <Alert severity='error' sx={{ mt: 2, alignItems: 'center' }}>
              {error}
            </Alert>
          )}
          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{ mt: 3, display: 'flex' }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  sx={{ display: 'none' }}
                  type='text'
                  autoComplete='username'
                />
                <TextField
                  fullWidth
                  required
                  id='currentpassword'
                  type='password'
                  label='Current Password'
                  name='currentpassword'
                  autoComplete='current-password'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='newpassword'
                  label='New Password'
                  type='password'
                  id='newpassword'
                  autoComplete='new-password'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='confirmpassword'
                  label='New Password Confirm'
                  type='password'
                  id='confirmpassword'
                  autoComplete='new-password-confirm'
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type='submit'
                  variant='contained'
                  sx={{
                    backgroundColor: '#fe59d7',
                    '&:hover': {
                      backgroundColor: '#ff31ce',
                    },
                  }}
                >
                  Update Password
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <Button
        variant='contained'
        component={Link}
        to={'/account'}
        color='warning'
        sx={{
          my: 3,
        }}
      >
        Back to account
      </Button>
    </Container>
  );
};

export default UpdatePassword;
