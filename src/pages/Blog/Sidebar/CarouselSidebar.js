import React from 'react';

import Carousel from 'react-material-ui-carousel';

import { Box, Typography } from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { Link } from 'react-router-dom';

const CarouselSidebar = ({ items, radius }) => {
  return (
    <>
      <Carousel
        autoPlay={true}
        animation='slide'
        duration='900'
        interval='6000'
        navButtonsAlwaysVisible={true}
        NextIcon={<ChevronRightIcon fontSize='large' />}
        PrevIcon={<ChevronLeftIcon fontSize='large' />}
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: 'transparent',
            color: '#fe59d7',
            padding: 0,
            margin: 0,
          },
        }}
        navButtonsWrapperProps={{
          className: 'navButtonsSidebarCarousel',
        }}
        IndicatorIcon={<FiberManualRecordIcon className='three-dots' />}
        indicatorContainerProps={{
          className: 'navigate-btns',
          style: {
            margin: '20px 0',
          },
        }}
        sx={{
          '&': {
            height: '100% !important',
            overflow: 'hidden',
          },
          '& .three-dots': {
            fontSize: '15px',
          },
          '& .navButtonsSidebarCarousel': {
            top: {
              xs: '43.45%',
            },
          },
          '& .css-hn784z': {
            left: {
              xs: '30%',
              sm: '40%',
              md: '28%',
              lg: '30%',
            },
          },
          '& .css-1abc02a': {
            right: {
              xs: '30%',
              sm: '40%',
              md: '28%',
              lg: '30%',
            },
          },
        }}
      >
        {items.map((item) =>
          item.map((itemChild) => (
            <Box
              key={itemChild.id}
              sx={{
                pr: 2,
                color: '#fe59d7',
                fontWeight: 400,
                lineHeight: 1.5,
                textTransform: 'capitalize',
                overflow: 'hidden',
                marginBottom: '10px',
                transition: '.5s ease-in-out',
                '& a': {
                  display: 'flex',
                },
                '&:hover p': {
                  color: 'red',
                },
                '& img': {
                  width: radius ? '65px' : '80px',
                  height: radius ? '65px' : '70px',
                  borderRadius: radius ? '100px' : '0.25rem',
                  marginRight: '.5rem',
                  mt: '4px',
                },
                '& .text-title': {
                  fontWeight: 600,
                },
              }}
            >
              <Link to='/'>
                <img src={itemChild.img} alt='news' />
                <Box
                  sx={{
                    '& p': {
                      mt: '5px',
                      fontSize: '12px',
                      transition: '.5s ease-in-out',
                    },
                  }}
                >
                  <Typography className='text-title'>
                    {itemChild.title}
                  </Typography>
                  <Box
                    component='div'
                    sx={{
                      display: 'flex',
                    }}
                  >
                    <Typography sx={{ mr: 1 }}>{itemChild.date}</Typography>
                    <Typography>{itemChild.createdBy}</Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          ))
        )}
      </Carousel>
    </>
  );
};

export default CarouselSidebar;
