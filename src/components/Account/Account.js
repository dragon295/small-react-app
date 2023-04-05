import React, { useRef } from 'react';

import {
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Avatar,
  Box,
  Icon,
  Alert,
} from '@mui/material';

import { green } from '@mui/material/colors';

import { useNavigate, Link } from 'react-router-dom';

import { useGlobalContext } from '../../context';

const Account = () => {
  const {
    currentUser,
    logout,
    updateProfileUser,
    message,
    error,
    setError,
    // updateEmailUser,
  } = useGlobalContext();

  const logInwithPassword =
    currentUser && currentUser.providerData?.[0].providerId === 'password';

  const navigate = useNavigate();

  const file = useRef(null);

  const updateProfile = () => {
    file.current.click();
  };

  const handleFileChange = async (e) => {
    if (
      e.target.files &&
      /(\w+)*\.(?:jpg|jpeg|gif|png|svg|webp)/g.test(e.target.files[0].name)
    ) {
      setError('');
      updateProfileUser(e.target.files, navigate);
    } else {
      setError('Not correct file format,  eg: jpg, jpeg, gif, png, svg, webp.');
    }
  };

  return (
    <Container sx={{ my: 15, mb: 12 }}>
      {error && (
        <Alert severity='error' sx={{ mt: 2, alignItems: 'center' }}>
          {error}
        </Alert>
      )}
      {message && (
        <Alert severity='success' sx={{ mt: 2, alignItems: 'center' }}>
          {message}
        </Alert>
      )}
      <Card>
        <CardContent sx={{ mt: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Avatar
              src={currentUser?.photoURL}
              sx={{
                width: '65px',
                height: '65px',
              }}
            ></Avatar>
            <Icon
              sx={{
                color: green[500],
                transform: 'translateX(-22px) translateY(15px)',
                cursor: 'pointer',
              }}
              onClick={() => updateProfile(navigate)}
            >
              add_circle
            </Icon>
            <input
              type='file'
              ref={file}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <Box
              sx={{
                mt: '5px',
              }}
            >
              <Typography variant='h5' contained='outlined'>
                <strong>Email:</strong> {currentUser?.email}
              </Typography>
              <Typography variant='h6' contained='outlined'>
                Your account
              </Typography>
            </Box>
          </Box>
          {logInwithPassword && (
            <Button
              component={Link}
              to={'/update-email'}
              variant='contained'
              fullWidth
              sx={{
                justifyContent: 'flex-start',
                marginTop: '20px',
                backgroundColor: '#fe59d7',
                '&:hover': {
                  backgroundColor: '#ff31ce',
                },
              }}
            >
              Update Email
            </Button>
          )}
          {logInwithPassword && (
            <Button
              component={Link}
              to={'/update-password'}
              variant='contained'
              fullWidth
              sx={{
                justifyContent: 'flex-start',
                marginTop: '20px',
                backgroundColor: '#fe59d7',
                '&:hover': {
                  backgroundColor: '#ff31ce',
                },
              }}
            >
              Update PassWord
            </Button>
          )}
        </CardContent>
      </Card>
      <Button
        sx={{ mt: 3, float: 'right' }}
        variant='contained'
        color='warning'
        onClick={() => logout(navigate)}
      >
        Log out
      </Button>
    </Container>
  );
};

export default Account;
