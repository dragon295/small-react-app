import React from 'react';
import { Box, Typography } from '@mui/material';

import { Link, useLocation } from 'react-router-dom';

const HeaderImg = ({ imgUrl, page, effectImg }) => {
  const location = useLocation();

  const pathString = location.pathname.split('/').slice(1);

  const lastPathName = pathString[pathString.length - 1];
  return (
    <>
      <Box
        sx={{
          color: 'white',
          position: 'relative',
          zIndex: 1,
          backgroundImage: `url(${imgUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          width: '100%',
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textTransform: 'capitalize',
          textAlign: 'center',
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            content: '""',
            width: '100%',
            height: 'inherit',
            zIndex: -50,
          },
        }}
      >
        <Typography
          variant='h2'
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Orbitron, sans-serif',
            letterSpacing: '6px',
          }}
        >
          {page}
        </Typography>
        <Box
          display='block'
          sx={{
            fontSize: '1.75rem',
            mt: 2,
            '& *': {
              color: 'white',
            },
          }}
        >
          <Link to='/'>Home</Link>
          {pathString.map((path, i) => (
            <Link key={i} to={`${path === lastPathName ? '' : '/' + path}`}>
              {' '}
              &rarr; {path}
            </Link>
          ))}
        </Box>
        {effectImg}
      </Box>
    </>
  );
};

export default HeaderImg;
