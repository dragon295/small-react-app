import React from 'react';

import Carousel from 'react-material-ui-carousel';
import { Box, Typography, Grid, Container } from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { Link } from 'react-router-dom';

import BlogCarousel1 from '../../assets/body/blog/header-carousel-1.jpg';
import BlogCarousel2 from '../../assets/body/blog/header-carousel-2.jpg';
import BlogCarousel3 from '../../assets/body/blog/header-carousel-3.jpg';

const headerCarousel = [
  {
    idHeader: 11,
    imgBanner: BlogCarousel1,
    title: 'God of War Ragnarök First Impressions',
    smallBlog: [
      {
        idsmallBlog: 1,
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut.',
      },
      {
        idsmallBlog: 2,
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut.',
      },
      {
        idsmallBlog: 3,
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut.',
      },
    ],
    videoInfo: {
      url: 'https://www.youtube.com/embed/hfJ4Km46A-0',
      title: 'God Of War',
    },
  },
  {
    idHeader: 12,
    imgBanner: BlogCarousel2,
    title: 'HomeFinal Fantasy The Best Final Fantasy Characters',
    smallBlog: [
      {
        idsmallBlog: 4,
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut.',
      },
      {
        idsmallBlog: 5,
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut.',
      },
      {
        idsmallBlog: 6,
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut.',
      },
    ],
    videoInfo: {
      url: 'https://www.youtube.com/embed/uAJP1uAuiZg',
      title: 'Final Fantasy 7 Remake Part 2',
    },
  },
  {
    idHeader: 13,
    imgBanner: BlogCarousel3,
    title: 'The Scariest Resident Evil Monsters',
    smallBlog: [
      {
        idsmallBlog: 7,
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut.',
      },
      {
        idsmallBlog: 8,
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut.',
      },
      {
        idsmallBlog: 9,
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut.',
      },
    ],
    videoInfo: {
      url: 'https://www.youtube.com/embed/2WtMjZkwdCE',
      title: 'Resident Evil 8',
    },
  },
];

const CarouselHeader = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        animation='slide'
        duration='700'
        interval='3000'
        navButtonsAlwaysVisible={true}
        NextIcon={<ChevronRightIcon fontSize='large' />}
        PrevIcon={<ChevronLeftIcon fontSize='large' />}
        navButtonsProps={{
          style: {
            backgroundColor: 'transparent',
            color: '#fe59d7',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        }}
        navButtonsWrapperProps={{
          className: 'navButtonsWrapperCarousel',
        }}
        IndicatorIcon={<FiberManualRecordIcon className='btn-navigate' />}
        indicatorIconButtonProps={{
          style: {
            padding: '5px', // 1
            cursor: 'pointer',
          },
        }}
        indicatorContainerProps={{
          className: 'indicatorContainer',
        }}
        sx={{
          zIndex: 1,
          '& .btn-navigate': {
            fontSize: '18px',
            zIndex: 90,
            '&:hover': {
              cursor: 'pointer',
            },
          },
          '& .indicatorContainer': {
            mt: {
              xs: '-68px',
              sm: '-50px',
            },
            mb: {
              xs: '40px',
              sm: '22px',
            },
          },
          '& .navButtonsWrapperCarousel': {
            top: {
              xs: '40.5%',
              sm: '43.5%',
              md: '22%',
              lg: '0',
            },
          },
          '& .css-hn784z': {
            left: {
              xs: '22%',
              sm: '35%',
              md: '0',
            },
          },
          '& .css-1abc02a': {
            right: {
              xs: '22%',
              sm: '35%',
              md: '0',
            },
          },
        }}
      >
        {headerCarousel.map((item) => {
          const { idHeader, imgBanner, title, smallBlog, videoInfo } = item;
          return (
            <Box
              key={idHeader}
              sx={{
                color: 'white',
                position: 'relative',
                zIndex: 0,
                backgroundImage: `url(${imgBanner})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'left',
                '&::after': {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.45)',
                  content: '""',
                  width: '100%',
                  height: 'inherit',
                  zIndex: -50,
                },
              }}
            >
              <Container>
                <Grid container spacing={4} sx={{ mb: 3 }}>
                  <Grid
                    item
                    xs={12}
                    md={7}
                    sx={{
                      mt: 3,
                      textAlign: {
                        xs: 'center',
                        md: 'unset',
                      },
                    }}
                  >
                    <Link to='detail-blog'>
                      <Typography
                        variant='h4'
                        color={'white'}
                        sx={{
                          pb: 1,
                          fontSize: {
                            xs: '20px',
                            md: '34px',
                          },
                        }}
                      >
                        {title}
                      </Typography>
                      Continue Reading &rarr;
                    </Link>

                    <Link to='detail-blog'>
                      <Box
                        sx={{
                          display: {
                            xs: 'none',
                            md: 'flex',
                          },
                          flexDirection: {
                            xs: 'column',
                            md: 'unset',
                          },
                        }}
                      >
                        {smallBlog.map((item) => (
                          <Box
                            key={item.idsmallBlog}
                            sx={{
                              width: '100%',
                              mt: 5,
                              background: '#dedede',
                              borderRadius: '10px',
                              textAlign: 'center',
                              p: 2,
                              mr: 3,
                              color: '#000000',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {item.title}
                          </Box>
                        ))}
                      </Box>
                    </Link>
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <Box
                      display='block'
                      sx={{
                        position: 'relative',
                        paddingBottom: '55.25%',
                        '& iframe': {
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          width: '100%',
                          height: '100%',
                        },
                      }}
                    >
                      <iframe
                        width={560}
                        height={315}
                        src={videoInfo.url}
                        title={videoInfo.title}
                        frameBorder={0}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselHeader;

/* <Typography
          variant='h2'
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Orbitron, sans-serif',
            letterSpacing: '6px',
          }}
        >
          demo
        </Typography> */
