import React, { useState } from 'react';

import { Box } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Navigation, Thumbs } from 'swiper';

import YouTubeIcon from '@mui/icons-material/YouTube';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// SwiperCore.use([Navigation, A11y]);

const SwiperComponent = ({ listImagesProduct, thumbnail, videoProduct }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box
      sx={{
        position: 'relative',
        '& img': {
          height: '100%',
          margin: 'auto',
          width: '100%',
          objectFit: 'cover',
        },

        '& .swiper-slide': {
          textAlign: 'center',
          fontSize: 18,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          '& .yt-icon': {
            position: 'absolute',
            zIndex: 1,
            color: 'red',
            fontSize: {
              xs: '1rem',
              sm: '1.85rem',
            },
          },
          '& .yt-icon-white': {
            height: '8px',
            width: '8px',
            position: 'absolute',
            zIndex: 0,
            bgcolor: 'white',
          },
        },

        '& .mySwiper': {
          height: '10%',
          bgcolor: 'black',
          padding: '10px 0',
          display: 'block',
          '& .swiper-slide': {
            width: {
              xs: '30%',
              sm: '18%',
              md: '18.5%',
            },
            height: '100%',
            opacity: 0.5,
          },
          '& .swiper-slide-thumb-active ': {
            opacity: 1,
            outline: '3px solid #fe59d7',
            zIndex: 10,
          },
        },
        '& .mySwiper2': {
          // height: '10%',
          position: 'relative',
          maxWidth: '100%',
          width: {
            xs: '100%',
            sm: '75%',
          },
        },
        '& .swiperButtonNext, & .swiperButtonPrev': {
          position: 'absolute',
          top: '36%',
          width: 'auto',
          height: 'auto',
          marginTop: 'calc(0px - (var(--swiper-navigation-size)/ 2))',
          zIndex: 10,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'red',
        },

        '& .swiperButtonNext': {
          right: {
            xs: '0',
            sm: '10px',
            md: '20px',
          },
        },
        '& .swiperButtonPrev': {
          left: {
            xs: '0',
            sm: '10px',
            md: '20px',
          },
        },
        '& .video-trailer': {
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          '& iframe': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          },
        },
      }}
    >
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={{
          nextEl: '.swiperButtonNext',
          prevEl: '.swiperButtonPrev',
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        <SwiperSlide className='video-trailer'>
          <iframe
            width={560}
            height={315}
            src={videoProduct}
            title='YouTube video player'
            frameBorder={0}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          />
        </SwiperSlide>

        {listImagesProduct?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={item} alt='large-swiper' />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        centeredSlides={true}
        watchSlidesProgress={true}
        slideToClickedSlide={true}
        spaceBetween={10}
        slidesPerView={'auto'}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={thumbnail} alt='demo-swiper' />
          <YouTubeIcon className='yt-icon' />
          <Box className='yt-icon-white'></Box>
        </SwiperSlide>

        {listImagesProduct ? (
          listImagesProduct.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img src={item} alt='small-swiper' />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>''</SwiperSlide>
        )}
      </Swiper>
      <Box className='swiperButtonPrev'>
        <ChevronLeftIcon
          sx={{
            fontSize: {
              xs: '40px',
              sm: '50px',
            },
          }}
        />
      </Box>
      <Box className='swiperButtonNext'>
        <NavigateNextIcon
          sx={{
            fontSize: {
              xs: '40px',
              sm: '50px',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default SwiperComponent;
