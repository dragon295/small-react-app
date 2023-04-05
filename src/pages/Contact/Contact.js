import React from 'react';

import {
  Container,
  Typography,
  Avatar,
  Alert,
  Button,
  Grid,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  TextField,
} from '@mui/material';

import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { Twitter } from '@mui/icons-material';

import { Link } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import HeaderImg from '../../components/HeaderImg/HeaderImg';

import AbstractImg1 from '../../assets/header/abstract-img-1.jpg';

const theme = createTheme({
  palette: {
    brightPink: {
      main: '#fe59d7',
    },
  },
});

const contactList = [
  {
    id: 1,
    icon: <PlaceIcon />,
    text: '203 Fake St. Mountain View, San Francisco, California, USA',
  },
  {
    id: 2,
    icon: <PhoneIcon />,
    text: '+84 0900 123 456',
  },
  {
    id: 3,
    icon: <MailIcon />,
    text: (
      <a
        target='_blank'
        href='https://www.google.com/intl/vi/gmail/about/'
        rel='noreferrer'
      >
        Gmail
      </a>
    ),
  },
  {
    id: 4,
    icon: <Twitter />,
    text: (
      <a target='_blank' href='https://twitter.com' rel='noreferrer'>
        Twiiter
      </a>
    ),
  },
];

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Thank you');
  };

  return (
    <ThemeProvider theme={theme}>
      <HeaderImg imgUrl={AbstractImg1} page='contact' />
      <Container>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {contactList.map((listItem) => (
            <Grid item xs={12} sm={6} lg={3} key={listItem.id}>
              <Box component='div' display='block'>
                <List sx={{ display: 'flex' }}>
                  <ListItem
                    sx={{
                      flexDirection: 'column',
                      color: '#000000',
                      textAlign: 'center',
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: '#fff',
                        backgroundColor: '#fe59d7',
                        borderRadius: '50%',
                        width: '60px',
                        height: '60px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 1,
                      }}
                    >
                      {listItem.icon}
                    </ListItemIcon>
                    <ListItemText primary={listItem.text} />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container sx={{ mb: 2 }}>
          <Grid
            item
            xs={12}
            sm={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#f5f5f5',
                pt: 3,
                px: {
                  xs: 1,
                  sm: 2,
                },
              }}
            >
              <Typography variant='h5' sx={{ mb: 2 }}>
                Send message for us
              </Typography>
              <Grid
                container
                spacing={2}
                component='form'
                onSubmit={handleSubmit}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='name'
                    label='Full Name'
                    type='text'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    placeholder='Name'
                    variant='outlined'
                    color='brightPink'
                    margin='dense'
                    size='large'
                    sx={{ color: '#fe59d7' }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    type='email'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    placeholder='Email'
                    variant='outlined'
                    color='brightPink'
                    margin='dense'
                    size='large'
                    sx={{ color: '#fe59d7' }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='subject'
                    label='Subject'
                    type='text'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    placeholder='Subject'
                    variant='outlined'
                    color='brightPink'
                    margin='dense'
                    size='large'
                    sx={{ color: '#fe59d7' }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='message'
                    label='Message'
                    type='text'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    placeholder='Message'
                    variant='outlined'
                    color='brightPink'
                    margin='dense'
                    size='large'
                    rows='5'
                    multiline={true}
                  />

                  <Grid item xs={12} display='flex' justifyContent='flex-end'>
                    <Button
                      type='submit'
                      variant='contained'
                      color='brightPink'
                      sx={{ my: 3, color: '#fff' }}
                    >
                      Send message
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box
              component='div'
              display='block'
              className='maps-wrapper'
              sx={{
                position: 'relative',
                mt: {
                  xs: 2,
                  sm: 0,
                },
                pb: {
                  xs: '100%',
                  sm: '162%',
                  md: '119%',
                  lg: '101%',
                },
                height: '0',
                overflow: 'hidden',
                '& iframe': {
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100% !important',
                  height: '100% !important',
                },
              }}
            >
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.97785449192!2d105.80194408342271!3d21.022736016283936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1662956732174!5m2!1svi!2s'
                style={{
                  border: '0',
                  width: '600px',
                  height: '500px',
                  allowfullscreen: true,
                }}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Message user'
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Contact;
