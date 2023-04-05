import React from 'react';

import moment from 'moment';

import { Card, Box } from '@mui/material';

import { Link } from 'react-router-dom';

const SmallCard = ({ imgCard }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        zIndex: 0,
        mb: 2,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        p: 3,
        pb: 3.2,
        backgroundImage: `url(${imgCard})`,
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
          Game Awards: 5 Reasons Why They Don't Work & What You Can
        </Link>
      </h4>

      <Box
        sx={{
          display: 'flex',
          mt: 2,
          fontSize: '14px',
          '& p': {
            mt: 0,
            ml: 1,
          },
        }}
      >
        <Link to='/author'>CMK87</Link>
        <p>
          {moment().format('D MMM YYYY')} at {moment().format('LT')}
        </p>
      </Box>
    </Card>
  );
};

export default SmallCard;
