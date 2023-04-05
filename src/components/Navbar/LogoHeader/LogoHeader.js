import React from 'react';

import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';

import AdbIcon from '@mui/icons-material/Adb';

const LogoHeader = () => {
  return (
    <>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant='h6'
        noWrap
        sx={{
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <Link to='/' style={{ color: 'inherit' }}>
          LAGO
        </Link>
      </Typography>

      <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
      <Typography
        variant='h5'
        noWrap
        component={Link}
        to={'/'}
        sx={{
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LAGO
      </Typography>
    </>
  );
};

export default LogoHeader;
