import React from 'react';

import moment from 'moment';

import { Card, Box } from '@mui/material';

import { Link } from 'react-router-dom';

const MasonryBlog = ({ urls, description, user }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        zIndex: 0,
        mb: 0,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        p: 3,
        pb: 3.2,
        backgroundImage: `url(${urls.regular})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          content: '""',
          width: '100%',
          height: '100%',
          zIndex: -50,
        },
        '& h4': {
          mb: 1,
          lineHeight: '1.25rem',
        },
        '& a': {
          color: 'white',
          fontWeight: 'bold',
        },
        '& p': {
          color: 'white',
          fontSize: '14px',
        },
      }}
    >
      <h4>
        <Link to='detail-blog'>
          {description ||
            "Game Awards: 5 Reasons Why They Don't Work & What You Can Do About It"}
        </Link>
      </h4>

      <Box
        sx={{
          mt: 2,
          fontSize: '14px',
          '& p': {
            mt: 1,
            ml: 0,
          },
        }}
      >
        <Link to='/author'>{user.name || 'CMK87'}</Link>
        <p>
          {moment().format('D MMM YYYY')} at {moment().format('LT')}
        </p>
      </Box>
    </Card>
  );
};

export default MasonryBlog;
