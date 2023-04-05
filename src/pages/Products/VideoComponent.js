import React from 'react';

import { Box } from '@mui/material';

const VideoComponent = () => {
  return (
    <Box
      component={'div'}
      sx={{
        display: 'inline',
        width: '80%',
        height: '300px',
        color: 'white',
        position: 'relative',
        paddingBottom: '16.25%',
        '& iframe': {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        },
        '& .video': {
          aspectRatio: '16 / 9',
        },
      }}
    >
      <iframe
        className='video'
        width={560}
        height={315}
        src='https://www.youtube.com/embed/uAJP1uAuiZg'
        title='YouTube video player'
        frameBorder={0}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </Box>
  );
};

export default VideoComponent;
