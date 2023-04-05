import React, { useState } from 'react';

import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';

const inforListFooter = [
  {
    icon: <PlaceIcon />,
    text: '203 Fake St. Mountain View, San Francisco, California, USA',
  },
  {
    icon: <PhoneIcon />,
    text: '+84 0900 123 456',
  },
  {
    icon: <MailIcon />,
    text: 'bcn@123.com',
  },
];

const emailTheme = createTheme({
  palette: {
    colorEmail: '#ffffff80',
  },
});

const AboutAuthor = ({ headerTag }) => {
  const [emailFooter, setEmailFooter] = useState('');

  const handleRemoveEmailFooter = () => {
    setEmailFooter('');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (
      emailFooter.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      alert('Thank You!');
      setEmailFooter('');
    } else {
      alert('Please enter a valid email address');
    }
  };
  return (
    <>
      <Typography variant='h5' sx={headerTag}>
        <Box component='div' display='inline'>
          <PersonIcon />
        </Box>
        About
      </Typography>
      <Box component='div' display='block'>
        <List
          sx={{
            color: '#ffffff80',
            '& > li': {
              pl: 0,
            },
          }}
        >
          {inforListFooter.map((listItem) => (
            <ListItem key={listItem.text}>
              <ListItemIcon>{listItem.icon}</ListItemIcon>
              <ListItemText primary={listItem.text} />
            </ListItem>
          ))}
        </List>

        <Box component='form' sx={{ mt: 2, display: 'flex', color: 'white' }}>
          <ThemeProvider theme={emailTheme}>
            <FormControl>
              <InputLabel
                htmlFor='Search something'
                sx={{
                  color: 'colorEmail',
                  '&.Mui-focused': {
                    color: '#fe59d7',
                  },
                }}
              >
                Enter your email
              </InputLabel>

              <OutlinedInput
                required={true}
                id='email-footer'
                name='q'
                label='Enter your email'
                type='email'
                value={emailFooter}
                onChange={(e) => setEmailFooter(e.target.value)}
                endAdornment={
                  <>
                    <InputAdornment position='end'>
                      {emailFooter ? (
                        <IconButton onClick={handleRemoveEmailFooter}>
                          <CloseIcon sx={{ color: 'colorEmail' }} />
                        </IconButton>
                      ) : (
                        ''
                      )}
                    </InputAdornment>
                    <Button
                      type='submit'
                      sx={{
                        height: '100%',
                        backgroundColor: '#fe59d7',
                        color: 'white',
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: '#fe59d7',
                        },
                      }}
                      onClick={handleEmailSubmit}
                    >
                      <SendIcon />
                    </Button>
                  </>
                }
                sx={{
                  pr: 0,
                  outline: 'none',
                  color: 'colorEmail',
                  '& fieldset': {
                    borderColor: '#fe59d7 !important',
                  },
                }}
              />
            </FormControl>
          </ThemeProvider>
        </Box>
      </Box>
    </>
  );
};

export default AboutAuthor;
