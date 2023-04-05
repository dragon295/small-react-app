import React from 'react';

import moment from 'moment';

import { Box, Card } from '@mui/material';

import { Link } from 'react-router-dom';

const FullCardContent = ({ imgCard, noGutter }) => {
  return (
    <Card
      sx={{
        maxWidth: '100%',
        mb: !noGutter ? 2 : 0,
        '& img': {
          width: '100%',
          verticalAlign: 'top',
        },
      }}
    >
      {imgCard ? (
        <Link to='/blog-detail'>
          <img src={imgCard} alt={'Main-Blog-Img'} />
        </Link>
      ) : (
        ''
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          px: 3,
          py: 2,

          bgcolor: 'rgba(0,0,0,0.15)',
          '& h4': {
            mb: 1,
          },
          '& a': {
            color: 'black',
            fontWeight: 'bold',
          },
          '& p': {
            color: '#3f3f3f',
            fontSize: '14px',
          },
        }}
      >
        <h4>
          <Link to='detail-blog'>
            Game Awards: 5 Reasons Why They Don't Work & What You Can Do About
            It
          </Link>
        </h4>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
        <Box
          display={'flex'}
          sx={{
            fontSize: '14px',
            mt: 2,
            '& p': {
              ml: 1,
            },
          }}
        >
          <Link to='/author'>CMK87</Link>
          <p>
            {moment().format('D MMM YYYY')} at {moment().format('LT')}
          </p>
        </Box>
      </Box>
    </Card>
  );
};

export default FullCardContent;
