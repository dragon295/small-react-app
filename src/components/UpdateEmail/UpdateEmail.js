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

import { useNavigate, Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const UpdateEmail = () => {
  const { updateEmailUser, error } = useGlobalContext();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    updateEmailUser(data.get('email'), data.get('password'), navigate);
  };
  return (
    <Container sx={{ my: 15 }}>
      <Card
        sx={{
          mt: 3,
        }}
      >
        <CardContent sx={{ mt: 1 }}>
          <Typography variant='h4'>Update Email</Typography>

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
                  fullWidth
                  required
                  id='email-update'
                  label='New Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
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
                  Update Email
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

export default UpdateEmail;
