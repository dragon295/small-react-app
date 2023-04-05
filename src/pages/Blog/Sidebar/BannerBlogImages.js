import React from 'react';

import { Box } from '@mui/material';

import { Link } from 'react-router-dom';

const BannerBlogImages = ({ imgUrl }) => {
  return (
    <Box
      sx={{
        pr: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: '100%',
          backgroundImage: `url(${imgUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          '& a': {
            color: 'white',
            transition: '.25s ease-in-out',
          },
          '&:hover > a': {
            color: 'red',
          },
        }}
      >
        <Link to='detail-blog'>
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              height: '400px',
              display: 'flex',
              justifyContent: 'flex-end',
              flexDirection: 'column',
            }}
          >
            <Box
              className='empty-box'
              sx={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'column',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                '& .banner-sidebar': {
                  fontSize: '22px',
                  px: 2,
                },
              }}
            >
              <h2 className='banner-sidebar'>
                The new events are waiting for you!
              </h2>
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default BannerBlogImages;
