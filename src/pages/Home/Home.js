import React, { Fragment } from 'react';

import ModalAlert from '../../components/Modal/ModalAlert';
import {
  Typography,
  Container,
  Grid,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useGlobalCart } from '../../cart-context';
import useFetch from '../../customHooks/useFetch';

import RedeemIcon from '@mui/icons-material/Redeem';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import InfoIcon from '@mui/icons-material/Info';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CelebrationIcon from '@mui/icons-material/Celebration';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import BgVideo from '../../assets/header/main-background.mp4';
import HomeBg1 from '../../assets/header/home1.png';
import HomeBg2 from '../../assets/header/home2.png';
import HomeBg3 from '../../assets/header/home3.png';
import BgAd1 from '../../assets/body/home/bg-ad-1.jpg';
import BgAd2 from '../../assets/body/home/bg-ad-2.jpg';
import IMGBlog1 from '../../assets/body/blog/img-main-blog-8.jpg';
import IMGBlog2 from '../../assets/body/blog/img-main-blog-12.jpg';
import IMGBlog3 from '../../assets/body/blog/img-main-blog-13.jpg';
import IMGBlog4 from '../../assets/body/blog/img-main-blog-20.jpg';

import FeaturesIcon1 from '../../assets/body/home/features-icon-1.png';
import FeaturesIcon2 from '../../assets/body/home/features-icon-2.png';
import FeaturesIcon3 from '../../assets/body/home/features-icon-3.png';
import FeaturesIcon4 from '../../assets/body/home/features-icon-4.png';
import FeaturesIcon5 from '../../assets/body/home/features-icon-5.png';
import FeaturesIcon6 from '../../assets/body/home/features-icon-6.png';

import { Autoplay, Pagination, Navigation } from 'swiper';

const Home = () => {
  const { addToCart, addCart } = useGlobalCart();

  const navigate = useNavigate();
  const formatter = new Intl.NumberFormat('vn', {
    style: 'currency',
    currency: 'VND',
  });

  const { data: recommend } = useFetch('?discountPercent_gte=0&_limit=8');

  const { data: onSales } = useFetch(
    '?discountPercent_gte=0&_limit=8&release_status=released'
  );

  const { data: topSellers } = useFetch('?_start=19&_end=24');

  const { data: mostPlayed } = useFetch('?_start=24&_end=29');

  const { data: newRelease } = useFetch('?_start=6&_end=11');

  const { data: comingSoon } = useFetch(
    '?gerne=multiplayer&gerne=indie&gerne=strategy'
  );

  const { data: mostPopular } = useFetch(
    '?release_status=coming-soon&id_ne=7&_limit=5'
  );

  // miscelancious fetch

  const { data: free } = useFetch('?price=0');

  const { data: bayonetta } = useFetch('?q=bayonetta');

  const { data: amongUs } = useFetch('?q=among us');

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '& video': {
            position: 'static',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
        }}
      >
        <video autoPlay loop muted playsInline>
          <source src={BgVideo} type='video/mp4' />
        </video>

        <Box
          sx={{
            position: 'absolute',
            color: 'white',
            width: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              '& .mySwiper-header': {
                height: '100vh',
                mx: 3,
                '& .swiper-slide': {
                  px: {
                    xs: '0',
                    sm: '3rem',
                  },
                  pt: {
                    xs: '6rem',
                    sm: '0',
                  },
                },
                '& swiper-pagination-bullets ': {
                  mt: 3,
                },
                '& .swiper-pagination-bullet': {
                  bgcolor: 'white',
                  opacity: 1,
                  width: '10px',
                  height: '10px',
                },
                '& .swiper-pagination-bullet-active': {
                  bgcolor: '#fe59d7',
                  opacity: 1,
                  width: '10px',
                  height: '10px',
                },
                '& .swiper-button-prev, & .swiper-button-next': {
                  display: {
                    xs: 'none',
                    md: 'block',
                  },
                },
                '& .swiper-button-prev': {
                  left: '0',
                  color: 'white',
                },
                '& .swiper-button-next': {
                  right: '0',
                  color: 'white',
                },
              },
            }}
          >
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className='mySwiper-header'
            >
              <SwiperSlide>
                <Grid
                  container
                  sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: {
                      xs: 'column',
                      sm: 'unset',
                    },
                  }}
                >
                  <Grid
                    xs={12}
                    sm={7}
                    item
                    component={'div'}
                    sx={{
                      '& > *': {
                        mb: 1.5,
                        textShadow: '10px 10px 20px #000000',
                      },
                    }}
                  >
                    <Typography
                      variant='h4'
                      sx={{
                        fontFamily: 'Chakra Petch, sans-serif',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: {
                          xs: '2rem',
                          sm: 'auto',
                        },
                      }}
                    >
                      LAGO: Your Ultimate Destination for Video Games
                    </Typography>
                    <Box
                      sx={{
                        my: 1.5,
                        verticalAlign: 'center',
                        bgcolor: 'rgb(33 49 60 / 50%)',
                        display: 'flex',
                        alignItems: 'center',
                        p: 2,
                        opacity: 0.8,
                        borderRadius: '10px',
                      }}
                    >
                      <Typography
                        sx={{ opacity: 1, fontSize: '1rem !important' }}
                      >
                        Welcome to our online gaming store! Here, you'll find an
                        extensive collection of exciting games that cater to a
                        variety of interests and ages. Whether you're a hardcore
                        gamer or simply looking for a fun way to spend your
                        downtime, our store has something for you.
                      </Typography>
                    </Box>
                    <Button
                      sx={{
                        '& a': {
                          color: 'white',
                          transition: 'all 0.5s ease',
                        },
                        mt: 1.5,
                        bgcolor: '#fe59d7',
                        color: 'white',
                        transition: 'all 0.5s ease',
                        border: '1px solid #fe59d7',
                        '&:hover': {
                          bgcolor: 'transparent',
                          border: '1px solid #fe59d7',
                          color: '#fe59d7',
                          '& a': {
                            color: '#fe59d7',
                          },
                        },
                      }}
                    >
                      <a href='#start-content'> GET STARTED</a>
                    </Button>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={5}
                    item
                    component={'div'}
                    sx={{
                      display: {
                        xs: 'none',
                        md: 'block',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        '& img': {
                          maxWidth: '100%',
                          width: '100%',
                        },
                      }}
                    >
                      <img src={HomeBg1} alt='Main Background 1' />
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <Grid
                  container
                  sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: {
                      xs: 'column',
                      sm: 'unset',
                    },
                  }}
                >
                  <Grid
                    xs={12}
                    sm={9}
                    item
                    component={'div'}
                    sx={{
                      '& > *': {
                        mb: 1.5,
                        textShadow: '10px 10px 20px #000000',
                      },
                    }}
                  >
                    <Typography
                      variant='h4'
                      sx={{
                        fontFamily: 'Chakra Petch, sans-serif',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: {
                          xs: '2rem',
                          sm: 'auto',
                        },
                      }}
                    >
                      WE PROVIDE MANY QUALITY GAMES
                    </Typography>
                    <Box
                      sx={{
                        my: 1.5,
                        verticalAlign: 'center',
                        bgcolor: 'rgb(33 49 60 / 50%)',
                        display: 'flex',
                        alignItems: 'center',
                        p: 2,
                        opacity: 0.8,
                        borderRadius: '10px',
                      }}
                    >
                      <Typography
                        sx={{ opacity: 1, fontSize: '1rem !important' }}
                      >
                        Our website is designed with gamers in mind, making it
                        easy to find the games you want and discover new
                        favorites. Browse by platform or genre, check out our
                        deals and discounts, and read reviews from other players
                        to find out what's hot and what's not.
                      </Typography>
                    </Box>
                    <Button
                      sx={{
                        '& a': {
                          color: 'white',
                          transition: 'all 0.5s ease',
                        },
                        mt: 1.5,
                        bgcolor: '#fe59d7',
                        color: 'white',
                        transition: 'all 0.5s ease',
                        border: '1px solid #fe59d7',
                        '&:hover': {
                          bgcolor: 'transparent',
                          border: '1px solid #fe59d7',
                          color: '#fe59d7',
                          '& a': {
                            color: '#fe59d7',
                          },
                        },
                      }}
                    >
                      <a href='#start-content'> CHECK IT OUT</a>
                    </Button>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={3}
                    item
                    component={'div'}
                    sx={{
                      display: {
                        xs: 'none',
                        md: 'block',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        '& img': {
                          maxWidth: '100%',
                          width: '100%',
                        },
                      }}
                    >
                      <img src={HomeBg2} alt='Main Background 2' />
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <Grid
                  container
                  sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: {
                      xs: 'column',
                      sm: 'unset',
                    },
                  }}
                >
                  <Grid
                    xs={12}
                    sm={9}
                    item
                    component={'div'}
                    sx={{
                      '& > *': {
                        mb: 1.5,
                        textShadow: '10px 10px 20px #000000',
                      },
                    }}
                  >
                    <Typography
                      variant='h4'
                      sx={{
                        fontFamily: 'Chakra Petch, sans-serif',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: {
                          xs: '2rem',
                          sm: 'auto',
                        },
                      }}
                    >
                      OUR SERVICE BRINGS CUSTOMERS SATISFACTION
                    </Typography>
                    <Box
                      sx={{
                        my: 1.5,
                        verticalAlign: 'center',
                        bgcolor: 'rgb(33 49 60 / 50%)',
                        display: 'flex',
                        alignItems: 'center',
                        p: 2,
                        opacity: 0.8,
                        borderRadius: '10px',
                      }}
                    >
                      <Typography
                        sx={{ opacity: 1, fontSize: '1rem !important' }}
                      >
                        Our service is dedicated to bringing complete
                        satisfaction to our customers. We strive to provide the
                        most reliable and efficient service possible, using the
                        latest technology and innovative solutions to meet the
                        unique needs and preferences of each individual
                        customer.
                      </Typography>
                    </Box>
                    <Button
                      sx={{
                        '& a': {
                          color: 'white',
                          transition: 'all 0.5s ease',
                        },
                        mt: 1.5,
                        bgcolor: '#fe59d7',
                        color: 'white',
                        transition: 'all 0.5s ease',
                        border: '1px solid #fe59d7',
                        '&:hover': {
                          bgcolor: 'transparent',
                          border: '1px solid #fe59d7',
                          color: '#fe59d7',
                          '& a': {
                            color: '#fe59d7',
                          },
                        },
                      }}
                    >
                      <a href='#start-content'>LET'S GO</a>
                    </Button>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={3}
                    item
                    component={'div'}
                    sx={{
                      display: {
                        xs: 'none',
                        md: 'block',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        '& img': {
                          maxWidth: '100%',
                          width: '100%',
                        },
                      }}
                    >
                      <img src={HomeBg3} alt='Main Background 3' />
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>

      {addCart ? <ModalAlert /> : ''}

      <Container
        id='start-content'
        sx={{
          position: 'relative',
          color: 'white',
          bgcolor: 'transparent',

          '& .swiper-slide': {
            height: '300px',
          },

          '& .img-link': {
            bgcolor: '#222',
            display: 'block',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
          },
          '& img': {
            maxWidth: '100%',
            verticalAlign: 'middle',
            width: '100%',
            height: '140px',
            objectFit: 'cover',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            transition: 'all 0.35s ease-in-out',
          },
          '& .release': {
            position: 'absolute',
            top: 0,
            right: 0,
            p: '5px',
            py: '3px',
            color: 'whitesmoke',
            fontWeight: 'bold',
            fontSize: '10px',
            bgcolor: '#8a2be2',
            borderTopRightRadius: '5px',
            zIndex: 1,
            transition: 'all 0.35s ease-in-out',
          },
          '& .corner-ribbon': {
            opacity: 1,
            position: 'relative',
          },
          '& .corner-ribbon__inner': {
            left: 0,
            position: 'absolute',
            top: 0,
            height: '4rem',
            width: '4rem',
            overflow: 'hidden',
            pt: 1,
            zIndex: 1,
          },
          '& .corner-ribbon__ribbon': {
            left: '1rem',
            position: 'absolute',
            top: '1rem',
            height: '1.15rem',
            width: '5.256rem',
            transform: 'translate(-38px, -8px) rotate(-45deg)',
            backgroundColor: '#8a2be2',
            color: 'white',
            textAlign: 'center',
            fontSize: '10px',
            fontWeight: 700,
            pt: '3px',
          },
          '& .swiper-pagination-bullet': {
            background: 'white',
            opacity: 'var(--swiper-pagination-bullet-inactive-opacity, .5)',
          },
          '& .swiper-pagination-bullet-active': {
            background: '#fe59d7',
            opacity: 1,
          },
        }}
      >
        {/*Recommend */}
        <Box sx={{ pt: 3 }}>
          <Box
            display={'flex'}
            alignItems='center'
            justifyContent='space-between'
            sx={{ my: 2 }}
          >
            <Box
              display='flex'
              alignItems='center'
              sx={{ textTransform: 'uppercase' }}
            >
              <RedeemIcon fontSize='large' />
              <Typography
                variant='h5'
                sx={{
                  fontFamily: 'Chakra Petch, sans-serif',
                  ml: '5px',
                  fontSize: {
                    xs: '20px',
                    sm: '24px',
                  },
                }}
              >
                Recommend
              </Typography>
            </Box>
            <Button
              variant='outlined'
              sx={{
                borderColor: '#fe59d7',
                transition: 'all 0.5s ease-in-out',
                '& a': {
                  transition: 'all 0.5s ease-in-out',
                },
                '&:hover': {
                  bgcolor: '#fe59d7',
                  borderColor: '#fe59d7',
                  '& a': {
                    color: 'white',
                  },
                },
              }}
            >
              <Link to={'/search'}>See more</Link>
            </Button>
          </Box>

          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className='mySwiper'
            spaceBetween={20}
            breakpoints={{
              991: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}
          >
            {recommend.map((item) => {
              const {
                id,
                name,
                price,
                discountPercent,
                discountPrice,
                thumbnail,
                releaseAt,
                platform,
              } = item;

              const rightNow = moment().toDate().getTime();
              let checkRelease = moment(releaseAt).toDate().getTime();

              return (
                <SwiperSlide key={id}>
                  <Box sx={{ mb: 2 }}>
                    <Box className='corner-ribbon'>
                      <Box className='corner-ribbon__inner'>
                        <Box className='corner-ribbon__ribbon'>{platform}</Box>
                      </Box>
                    </Box>

                    <p className='release'>
                      {moment(releaseAt).format('DD MMM YYYY')}
                    </p>

                    <Link to={`/products/${id}`} className='img-link'>
                      <Box
                        sx={{
                          width: '100%',
                          position: 'relative',
                          '&:hover > img, &:hover >.release': {
                            opacity: 0.35,
                          },
                          '&:hover > .icon-link': {
                            opacity: 1,
                          },
                        }}
                      >
                        <img src={thumbnail} alt={name} />
                        <InfoIcon
                          className='icon-link'
                          fontSize='large'
                          sx={{
                            opacity: 0,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            transition: 'all 0.35s ease-in-out',
                            color: 'white',
                          }}
                        />
                      </Box>
                    </Link>

                    <Box
                      sx={{
                        pl: 2,
                        py: 1,
                        bgcolor: 'black',
                        color: 'white',
                        '& .product-name': {
                          fontFamily: 'Domine, serif',
                          fontSize: '14px',
                          pb: 1,
                          color: 'white',
                        },
                      }}
                    >
                      <Link to={`/products/${id}`}>
                        <h4 className='product-name'>{name}</h4>
                      </Link>

                      <Box
                        sx={{
                          display: 'flex',
                          height: '2rem',
                          alignItems: 'center',
                        }}
                      >
                        {discountPercent ? (
                          <Box
                            sx={{
                              bgcolor: 'red',
                              p: 1,
                              mr: 1,
                              mb: '2px',
                              borderRadius: '3px',
                              width: 'auto',
                              textAlign: 'center',
                              color: 'white',
                              fontSize: '14px',
                            }}
                          >
                            {discountPercent < 10
                              ? discountPercent.toFixed(1)
                              : parseFloat(discountPercent)}
                            %
                          </Box>
                        ) : (
                          ''
                        )}
                        <Box
                          sx={{
                            '& .cost-price': {
                              fontSize: discountPrice > 0 ? '12px' : '14px',
                              color: discountPrice > 0 ? 'unset' : '#fe59d7',
                              textDecoration: discountPrice
                                ? 'line-through'
                                : 'unset',
                              textAlign: 'left',
                            },
                            '& .reduced-price': {
                              fontSize: '14px',
                              color: '#fe59d7',
                              textAlign: 'left',
                            },
                          }}
                        >
                          {price > 0 ? (
                            <p className='cost-price'>
                              {formatter.format(price)}
                            </p>
                          ) : (
                            <p className='cost-price'>FREE</p>
                          )}
                          {discountPrice ? (
                            <p className='reduced-price'>
                              {formatter.format(discountPrice)}
                            </p>
                          ) : (
                            ''
                          )}
                        </Box>
                      </Box>
                    </Box>

                    <Button
                      variant='contained'
                      onClick={() => addToCart(id)}
                      sx={{
                        width: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                        borderRadius: 'unset',
                        borderBottomLeftRadius: '5px',
                        borderBottomRightRadius: '5px',
                        fontSize: '12px !important',
                        transition: 'all 0.25s ease-in-out',
                        background:
                          'linear-gradient(to right, #4b134f, #c94b4b)',
                        zIndex: 0,
                        '&::before': {
                          content: "''",
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          background:
                            'linear-gradient(160.09deg, #c94b4b 4.36%, #4b134f 117.5%)',
                          zIndex: '-1',
                          transition: 'all 0.5s ease',
                        },
                        '&:hover:before': {
                          left: 0,
                          transition: 'all 0.5s ease',
                        },
                      }}
                    >
                      <ShoppingCartCheckoutIcon
                        fontSize='small'
                        sx={{
                          mr: 1,
                        }}
                      />

                      {rightNow < checkRelease ? 'pre purchase' : 'add to cart'}
                    </Button>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Container>

      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            color: 'rgb(245, 245, 245)',
            my: 2,
            mb: 3,
            '& img': {
              maxWidth: '100%',
              borderRadius: '1rem',
            },
            '& p': {
              color: 'rgba(245, 245, 245, 0.6)',
              my: 2,
              fontSize: '14px',
              lineHeight: '24px',
            },
            '& a': {
              textTransform: 'uppercase',
            },
          }}
        >
          <Grid item xs={12} sm={4}>
            <img src={IMGBlog1} alt='blog-home-1' />

            <Box
              sx={{
                p: 1,
                '& a': {
                  transition: 'all 0.5s ease',
                },
                '&:hover a': {
                  textDecoration: 'underline',
                },
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Game Awards: 5 Reasons Why They Don't Work & What You Can Do
                About It
              </Typography>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>

              <Link to={'/blog/detail-blog'}>Read more</Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <img src={IMGBlog2} alt='blog-home-1' />

            <Box sx={{ p: 1 }}>
              <Typography
                variant='h6'
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                How to survive the zombie apocalypse in Resident Evil
              </Typography>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>

              <Link to={'/blog/detail-blog'}>Read more</Link>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              position: 'relative',
              '& img': {
                verticalAlign: 'middle',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
              '& .release': {
                position: 'absolute',
                my: 0,
                top: '5.8%',
                right: 0,
                p: '5px',
                py: '3px',
                color: 'whitesmoke',
                fontWeight: 'bold',
                fontSize: '10px',
                bgcolor: '#8a2be2',
                borderTopRightRadius: '5px',
                zIndex: 1,
                transition: 'all 0.35s ease-in-out',
              },
              '& .corner-ribbon': {
                opacity: 1,
                position: 'relative',
              },
              '& .corner-ribbon__inner': {
                left: 0,
                position: 'absolute',
                top: 0,
                height: '4rem',
                width: '4rem',
                overflow: 'hidden',
                pt: 1,
                zIndex: 1,
              },
              '& .corner-ribbon__ribbon': {
                left: '1rem',
                position: 'absolute',
                top: '1rem',
                height: '1.15rem',
                width: '5.256rem',
                transform: 'translate(-38px, -8px) rotate(-45deg)',
                backgroundColor: '#8a2be2',
                color: 'white',
                textAlign: 'center',
                fontSize: '10px',
                fontWeight: 700,
                pt: '3px',
              },
            }}
          >
            {free.map((item) => {
              const {
                id,
                name,
                price,
                discountPercent,
                discountPrice,
                thumbnail,
                releaseAt,
                platform,
              } = item;

              const rightNow = moment().toDate().getTime();
              let checkRelease = moment(releaseAt).toDate().getTime();

              return (
                <Fragment key={id}>
                  <Box sx={{ mb: 2 }}>
                    <Box className='corner-ribbon'>
                      <Box className='corner-ribbon__inner'>
                        <Box className='corner-ribbon__ribbon'>{platform}</Box>
                      </Box>
                    </Box>

                    <p className='release'>
                      {moment(releaseAt).format('DD MMM YYYY')}
                    </p>

                    <Link to={`/products/${id}`} className='img-link'>
                      <Box
                        sx={{
                          width: '100%',
                          position: 'relative',
                          '&:hover > img, &:hover >.release': {
                            opacity: 0.35,
                          },
                          '&:hover > .icon-link': {
                            opacity: 1,
                          },
                        }}
                      >
                        <img src={thumbnail} alt={name} />
                        <InfoIcon
                          className='icon-link'
                          fontSize='large'
                          sx={{
                            opacity: 0,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            transition: 'all 0.35s ease-in-out',
                            color: 'white',
                          }}
                        />
                      </Box>
                    </Link>

                    <Box
                      sx={{
                        pl: 2,
                        py: 1,
                        bgcolor: 'black',
                        color: 'white',
                        '& .product-name': {
                          fontFamily: 'Domine, serif',
                          fontSize: '14px',
                          pb: 1,
                          color: 'white',
                        },
                      }}
                    >
                      <Link to={`/products/${id}`}>
                        <h4 className='product-name'>{name}</h4>
                      </Link>

                      <Box
                        sx={{
                          display: 'flex',
                          height: '2rem',
                          alignItems: 'center',
                        }}
                      >
                        {discountPercent ? (
                          <Box
                            sx={{
                              bgcolor: 'red',
                              p: 1,
                              mr: 1,
                              mb: '2px',
                              borderRadius: '3px',
                              width: 'auto',
                              textAlign: 'center',
                              color: 'white',
                              fontSize: '14px',
                            }}
                          >
                            {discountPercent < 10
                              ? discountPercent.toFixed(1)
                              : parseFloat(discountPercent)}
                            %
                          </Box>
                        ) : (
                          ''
                        )}
                        <Box
                          sx={{
                            '& .cost-price': {
                              fontSize: discountPrice > 0 ? '12px' : '14px',
                              color: discountPrice > 0 ? 'unset' : '#fe59d7',
                              textDecoration: discountPrice
                                ? 'line-through'
                                : 'unset',
                              textAlign: 'left',
                            },
                            '& .reduced-price': {
                              fontSize: '14px',
                              color: '#fe59d7',
                              textAlign: 'left',
                            },
                          }}
                        >
                          {price > 0 ? (
                            <p className='cost-price'>
                              {formatter.format(price)}
                            </p>
                          ) : (
                            <p className='cost-price'>FREE</p>
                          )}
                          {discountPrice ? (
                            <p className='reduced-price'>
                              {formatter.format(discountPrice)}
                            </p>
                          ) : (
                            ''
                          )}
                        </Box>
                      </Box>
                    </Box>

                    <Button
                      variant='contained'
                      onClick={() => addToCart(id)}
                      sx={{
                        width: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                        borderRadius: 'unset',
                        borderBottomLeftRadius: '5px',
                        borderBottomRightRadius: '5px',
                        fontSize: '12px !important',
                        transition: 'all 0.25s ease-in-out',
                        background:
                          'linear-gradient(to right, #4b134f, #c94b4b)',
                        zIndex: 0,
                        '&::before': {
                          content: "''",
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          background:
                            'linear-gradient(160.09deg, #c94b4b 4.36%, #4b134f 117.5%)',
                          zIndex: '-1',
                          transition: 'all 0.5s ease',
                        },
                        '&:hover:before': {
                          left: 0,
                          transition: 'all 0.5s ease',
                        },
                      }}
                    >
                      <ShoppingCartCheckoutIcon
                        fontSize='small'
                        sx={{
                          mr: 1,
                        }}
                      />

                      {rightNow < checkRelease ? 'pre purchase' : 'add to cart'}
                    </Button>
                  </Box>
                </Fragment>
              );
            })}
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{
          position: 'relative',
          color: 'white',
          bgcolor: 'transparent',

          '& .swiper-slide': {
            height: '300px',
          },

          '& .img-link': {
            bgcolor: '#222',
            display: 'block',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
          },
          '& img': {
            maxWidth: '100%',
            width: '100%',
            height: '140px',
            objectFit: 'cover',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            verticalAlign: 'bottom',
            transition: 'all 0.35s ease-in-out',
          },
          '& .release': {
            position: 'absolute',
            top: 0,
            right: 0,
            p: '5px',
            py: '3px',
            color: 'whitesmoke',
            fontWeight: 'bold',
            fontSize: '10px',
            bgcolor: '#8a2be2',
            borderTopRightRadius: '5px',
            zIndex: 1,
            transition: 'all 0.35s ease-in-out',
          },
          '& .corner-ribbon': {
            opacity: 1,
            position: 'relative',
          },
          '& .corner-ribbon__inner': {
            left: 0,
            position: 'absolute',
            top: 0,
            height: '4rem',
            width: '4rem',
            overflow: 'hidden',
            pt: 1,
            zIndex: 1,
          },
          '& .corner-ribbon__ribbon': {
            left: '1rem',
            position: 'absolute',
            top: '1rem',
            height: '1.15rem',
            width: '5.256rem',
            transform: 'translate(-38px, -8px) rotate(-45deg)',
            backgroundColor: '#8a2be2',
            color: 'white',
            textAlign: 'center',
            fontSize: '10px',
            fontWeight: 700,
            pt: '3px',
          },
          '& .swiper-pagination-bullet': {
            background: 'white',
            opacity: 'var(--swiper-pagination-bullet-inactive-opacity, .5)',
          },
          '& .swiper-pagination-bullet-active': {
            background: '#fe59d7',
            opacity: 1,
          },
        }}
      >
        {/*On Sale */}
        <Box>
          <Box
            display={'flex'}
            alignItems='center'
            justifyContent='space-between'
            sx={{ my: 2 }}
          >
            <Box
              display='flex'
              alignItems='center'
              sx={{ textTransform: 'uppercase' }}
            >
              <CelebrationIcon fontSize='large' />
              <Typography
                variant='h5'
                sx={{ ml: '5px', fontFamily: 'Chakra Petch, sans-serif' }}
              >
                On Sales
              </Typography>
            </Box>
            <Button
              variant='outlined'
              sx={{
                borderColor: '#fe59d7',
                transition: 'all 0.5s ease-in-out',
                '& a': {
                  transition: 'all 0.5s ease-in-out',
                },
                '&:hover': {
                  bgcolor: '#fe59d7',
                  borderColor: '#fe59d7',
                  '& a': {
                    color: 'white',
                  },
                },
              }}
            >
              <Link to={'/search'}>See more</Link>
            </Button>
          </Box>

          <Swiper
            spaceBetween={20}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className='mySwiper'
            breakpoints={{
              991: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}
          >
            {onSales.map((item) => {
              const {
                id,
                name,
                price,
                discountPercent,
                discountPrice,
                thumbnail,
                releaseAt,
                platform,
              } = item;

              const rightNow = moment().toDate().getTime();
              let checkRelease = moment(releaseAt).toDate().getTime();

              return (
                <SwiperSlide key={id}>
                  <Box sx={{ mb: 2 }}>
                    <Box className='corner-ribbon'>
                      <Box className='corner-ribbon__inner'>
                        <Box className='corner-ribbon__ribbon'>{platform}</Box>
                      </Box>
                    </Box>

                    <p className='release'>
                      {moment(releaseAt).format('DD MMM YYYY')}
                    </p>

                    <Link to={`/products/${id}`} className='img-link'>
                      <Box
                        sx={{
                          width: '100%',
                          position: 'relative',
                          '&:hover > img, &:hover >.release': {
                            opacity: 0.35,
                          },
                          '&:hover > .icon-link': {
                            opacity: 1,
                          },
                        }}
                      >
                        <img src={thumbnail} alt={name} />
                        <InfoIcon
                          className='icon-link'
                          fontSize='large'
                          sx={{
                            opacity: 0,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            transition: 'all 0.35s ease-in-out',
                            color: 'white',
                          }}
                        />
                      </Box>
                    </Link>

                    <Box
                      sx={{
                        pl: 2,
                        py: 1,
                        bgcolor: 'black',
                        color: 'white',
                        '& .product-name': {
                          fontFamily: 'Domine, serif',
                          fontSize: '14px',
                          pb: 1,
                          color: 'white',
                        },
                      }}
                    >
                      <Link to={`/products/${id}`}>
                        <h4 className='product-name'>{name}</h4>
                      </Link>

                      <Box
                        sx={{
                          display: 'flex',
                          height: '2rem',
                          alignItems: 'center',
                        }}
                      >
                        {discountPercent ? (
                          <Box
                            sx={{
                              bgcolor: 'red',
                              p: 1,
                              mr: 1,
                              mb: '2px',
                              borderRadius: '3px',
                              width: 'auto',
                              textAlign: 'center',
                              color: 'white',
                              fontSize: '14px',
                            }}
                          >
                            {discountPercent < 10
                              ? discountPercent.toFixed(1)
                              : parseFloat(discountPercent)}
                            %
                          </Box>
                        ) : (
                          ''
                        )}
                        <Box
                          sx={{
                            '& .cost-price': {
                              fontSize: discountPrice > 0 ? '12px' : '14px',
                              color: discountPrice > 0 ? 'unset' : '#fe59d7',
                              textDecoration: discountPrice
                                ? 'line-through'
                                : 'unset',
                              textAlign: 'left',
                            },
                            '& .reduced-price': {
                              fontSize: '14px',
                              color: '#fe59d7',
                              textAlign: 'left',
                            },
                          }}
                        >
                          {price > 0 ? (
                            <p className='cost-price'>
                              {formatter.format(price)}
                            </p>
                          ) : (
                            <p className='cost-price'>FREE</p>
                          )}
                          {discountPrice ? (
                            <p className='reduced-price'>
                              {formatter.format(discountPrice)}
                            </p>
                          ) : (
                            ''
                          )}
                        </Box>
                      </Box>
                    </Box>

                    <Button
                      variant='contained'
                      onClick={() => addToCart(id)}
                      sx={{
                        width: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                        borderRadius: 'unset',
                        borderBottomLeftRadius: '5px',
                        borderBottomRightRadius: '5px',
                        fontSize: '12px !important',
                        transition: 'all 0.25s ease-in-out',
                        background:
                          'linear-gradient(to right, #4b134f, #c94b4b)',
                        zIndex: 0,
                        '&::before': {
                          content: "''",
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          background:
                            'linear-gradient(160.09deg, #c94b4b 4.36%, #4b134f 117.5%)',
                          zIndex: '-1',
                          transition: 'all 0.5s ease',
                        },
                        '&:hover:before': {
                          left: 0,
                          transition: 'all 0.5s ease',
                        },
                      }}
                    >
                      <ShoppingCartCheckoutIcon
                        fontSize='small'
                        sx={{
                          mr: 1,
                        }}
                      />

                      {rightNow < checkRelease ? 'pre purchase' : 'add to cart'}
                    </Button>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Container>

      <Box
        sx={{
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
          zIndex: 0,
          '&::after': {
            border: '3px solid #fe59d7',
            content: '""',
            display: 'block',
            width: '100%',
            height: '250px',
            opacity: 0.6,
            backgroundImage: `url(${BgAd1})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            margin: 'auto',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            flexDirection: {
              xs: 'column',
              md: 'unset',
            },
            '& .surprise-tag': {
              bgcolor: '#e0e007',
              m: 2,
              p: 2,
              color: 'black',
              textTransform: 'uppercase',
              fontWeight: 'bold',
            },
            '& button': {
              mt: 1.5,
              bgcolor: '#fe59d7',
              transition: 'all 0.5s ease',
              border: '1px solid #fe59d7',
              '&:hover': {
                bgcolor: 'transparent',
                border: '1px solid #fe59d7',
                color: '#fe59d7',
              },
            },
          }}
        >
          <Typography variant='h5' className='surprise-tag'>
            surprise for you today!
          </Typography>

          <ArrowRightAltIcon
            sx={{
              fontSize: '50px',
              ml: 0,
              mr: 1,
              display: {
                xs: 'none',
                md: 'block',
              },
            }}
          />

          <Button variant='contained' onClick={() => navigate('/search')}>
            Collect Now
          </Button>
        </Box>
      </Box>

      <Container>
        <Grid container sx={{ color: 'white' }} spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              sx={{ textTransform: 'uppercase' }}
            >
              <Typography
                variant='h5'
                sx={{ fontFamily: 'Chakra Petch, sans-serif' }}
              >
                top sellers
              </Typography>
              <Button
                variant='outlined'
                sx={{
                  borderColor: '#fe59d7',
                  transition: 'all 0.5s ease-in-out',
                  '& a': {
                    transition: 'all 0.5s ease-in-out',
                  },
                  '&:hover': {
                    bgcolor: '#fe59d7',
                    borderColor: '#fe59d7',
                    '& a': {
                      color: 'white',
                    },
                  },
                }}
              >
                <Link to={'/search'}>See more</Link>
              </Button>
            </Box>
            <nav aria-label='most-played'>
              <List>
                {topSellers.map((item, idx) => {
                  const {
                    id,
                    name,
                    price,
                    discountPercent,
                    discountPrice,
                    thumbnail,
                  } = item;

                  return (
                    <ListItem
                      key={id}
                      disablePadding
                      component={Link}
                      to={`/products/${id}`}
                      sx={{
                        bgcolor: '#161618',
                        my: 1,
                        transition: 'all 0.35s ease-in-out',
                        '&:hover': {
                          bgcolor: '#494a4f',
                        },
                        '& img': {
                          maxWidth: {
                            xs: '40%',
                            sm: '25%',
                          },
                          height: 'auto',
                        },
                        '& span': {
                          color: 'white',
                          ml: 1,
                          maxWidth: '100%',
                          // width: '250px',
                          fontSize: {
                            xs: '10px',
                            sm: '14px',
                          },
                        },
                        '& .title-horizontal': {
                          display: {
                            xs: 'none',
                            sm: 'block',
                          },
                        },
                      }}
                    >
                      <ListItemButton>
                        <img src={thumbnail} alt={name} />
                        <ListItemText
                          primary={`${name}`}
                          className='title-horizontal'
                        />
                        <ListItemText>
                          <Box
                            sx={{
                              pl: 2,
                              py: 1,

                              color: 'white',
                              '& .product-name': {
                                fontFamily: 'Domine, serif',
                                fontSize: '14px',
                                pb: 1,
                                color: 'white',
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                height: '2rem',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                              }}
                            >
                              <Box
                                sx={{
                                  '& .cost-price': {
                                    fontSize:
                                      discountPrice > 0 ? '12px' : '14px',
                                    color:
                                      discountPrice > 0 ? 'unset' : '#fe59d7',
                                    textDecoration: discountPrice
                                      ? 'line-through'
                                      : 'unset',
                                    textAlign: 'left',
                                  },
                                  '& .reduced-price': {
                                    fontSize: '14px',
                                    color: '#fe59d7',
                                    textAlign: 'left',
                                  },
                                }}
                              >
                                {price > 0 ? (
                                  <p className='cost-price'>
                                    {formatter.format(price)}
                                  </p>
                                ) : (
                                  <p className='cost-price'>FREE</p>
                                )}
                                {discountPrice ? (
                                  <p className='reduced-price'>
                                    {formatter.format(discountPrice)}
                                  </p>
                                ) : (
                                  ''
                                )}
                              </Box>

                              {discountPercent ? (
                                <Box
                                  sx={{
                                    bgcolor: 'red',
                                    p: 1,
                                    ml: 1,
                                    mb: '2px',
                                    borderRadius: '3px',
                                    width: 'auto',
                                    textAlign: 'center',
                                    color: 'white',
                                    fontSize: '14px',
                                  }}
                                >
                                  {discountPercent < 10
                                    ? discountPercent.toFixed(1)
                                    : parseFloat(discountPercent)}
                                  %
                                </Box>
                              ) : (
                                ''
                              )}
                            </Box>
                          </Box>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </nav>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              sx={{ textTransform: 'uppercase' }}
            >
              <Typography
                variant='h5'
                sx={{ fontFamily: 'Chakra Petch, sans-serif' }}
              >
                Most Played
              </Typography>
              <Button
                variant='outlined'
                sx={{
                  borderColor: '#fe59d7',
                  transition: 'all 0.5s ease-in-out',
                  '& a': {
                    transition: 'all 0.5s ease-in-out',
                  },
                  '&:hover': {
                    bgcolor: '#fe59d7',
                    borderColor: '#fe59d7',
                    '& a': {
                      color: 'white',
                    },
                  },
                }}
              >
                <Link to={'/search'}>See more</Link>
              </Button>
            </Box>
            <nav aria-label='most-played'>
              <List>
                {mostPlayed.map((item, idx) => {
                  const {
                    id,
                    name,
                    price,
                    discountPercent,
                    discountPrice,
                    thumbnail,
                  } = item;

                  return (
                    <ListItem
                      key={id}
                      disablePadding
                      component={Link}
                      to={`/products/${id}`}
                      sx={{
                        bgcolor: '#161618',
                        my: 1,
                        transition: 'all 0.35s ease-in-out',
                        '&:hover': {
                          bgcolor: '#494a4f',
                        },
                        '& img': {
                          maxWidth: {
                            xs: '40%',
                            sm: '25%',
                          },
                          height: 'auto',
                        },
                        '& span': {
                          color: 'white',
                          ml: 1,
                          maxWidth: '100%',
                          // width: '250px',
                          fontSize: {
                            xs: '10px',
                            sm: '14px',
                          },
                        },
                        '& .title-horizontal': {
                          display: {
                            xs: 'none',
                            sm: 'block',
                          },
                        },
                      }}
                    >
                      <ListItemButton>
                        <img src={thumbnail} alt={name} />
                        <ListItemText
                          primary={`${name}`}
                          className='title-horizontal'
                        />
                        <ListItemText>
                          <Box
                            sx={{
                              pl: 2,
                              py: 1,

                              color: 'white',
                              '& .product-name': {
                                fontFamily: 'Domine, serif',
                                fontSize: '14px',
                                pb: 1,
                                color: 'white',
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                height: '2rem',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                              }}
                            >
                              <Box
                                sx={{
                                  '& .cost-price': {
                                    fontSize:
                                      discountPrice > 0 ? '12px' : '14px',
                                    color:
                                      discountPrice > 0 ? 'unset' : '#fe59d7',
                                    textDecoration: discountPrice
                                      ? 'line-through'
                                      : 'unset',
                                    textAlign: 'left',
                                  },
                                  '& .reduced-price': {
                                    fontSize: '14px',
                                    color: '#fe59d7',
                                    textAlign: 'left',
                                  },
                                }}
                              >
                                {price > 0 ? (
                                  <p className='cost-price'>
                                    {formatter.format(price)}
                                  </p>
                                ) : (
                                  <p className='cost-price'>FREE</p>
                                )}
                                {discountPrice ? (
                                  <p className='reduced-price'>
                                    {formatter.format(discountPrice)}
                                  </p>
                                ) : (
                                  ''
                                )}
                              </Box>

                              {discountPercent ? (
                                <Box
                                  sx={{
                                    bgcolor: 'red',
                                    p: 1,
                                    ml: 1,
                                    mb: '2px',
                                    borderRadius: '3px',
                                    width: 'auto',
                                    textAlign: 'center',
                                    color: 'white',
                                    fontSize: '14px',
                                  }}
                                >
                                  {discountPercent < 10
                                    ? discountPercent.toFixed(1)
                                    : parseFloat(discountPercent)}
                                  %
                                </Box>
                              ) : (
                                ''
                              )}
                            </Box>
                          </Box>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </nav>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            color: 'rgb(245, 245, 245)',
            my: 2,
            mb: 3,
            '& img': {
              maxWidth: '100%',
              borderRadius: '1rem',
            },
            '& p': {
              color: 'rgba(245, 245, 245, 0.6)',
              my: 2,
              fontSize: '14px',
              lineHeight: '24px',
            },
            '& a': {
              textTransform: 'uppercase',
            },
          }}
        >
          <Grid item xs={12} sm={3}>
            <img src={IMGBlog3} alt='blog-home-1' />

            <Box sx={{ p: 1 }}>
              <Typography
                variant='h6'
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Plaion Publisher Sale - Up to 85% Off
              </Typography>
              <p>
                Deep Silver, Prime Matter and Ravenscourt have teamed up to
                bring you one of the biggest sales of the season.
              </p>

              <Link to={'/blog/detail-blog'}>Save Now</Link>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              position: 'relative',
              '& img': {
                verticalAlign: 'middle',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
              '& .release': {
                position: 'absolute',
                my: 0,
                top: '6.25%',
                right: 0,
                p: '5px',
                py: '3px',
                color: 'whitesmoke',
                fontWeight: 'bold',
                fontSize: '10px',
                bgcolor: '#8a2be2',
                borderTopRightRadius: '5px',
                zIndex: 1,
                transition: 'all 0.35s ease-in-out',
              },
              '& .corner-ribbon': {
                opacity: 1,
                position: 'relative',
              },
              '& .corner-ribbon__inner': {
                left: 0,
                position: 'absolute',
                top: 0,
                height: '4rem',
                width: '4rem',
                overflow: 'hidden',
                pt: 1,
                zIndex: 1,
              },
              '& .corner-ribbon__ribbon': {
                left: '1rem',
                position: 'absolute',
                top: '1rem',
                height: '1.15rem',
                width: '5.256rem',
                transform: 'translate(-38px, -8px) rotate(-45deg)',
                backgroundColor: '#8a2be2',
                color: 'white',
                textAlign: 'center',
                fontSize: '10px',
                fontWeight: 700,
                pt: '3px',
              },
            }}
          >
            {amongUs.map((item) => {
              const {
                id,
                name,
                price,
                discountPercent,
                discountPrice,
                thumbnail,
                releaseAt,
                platform,
              } = item;

              const rightNow = moment().toDate().getTime();
              let checkRelease = moment(releaseAt).toDate().getTime();

              return (
                <Fragment key={id}>
                  <Box sx={{ mb: 2 }}>
                    <Box className='corner-ribbon'>
                      <Box className='corner-ribbon__inner'>
                        <Box className='corner-ribbon__ribbon'>{platform}</Box>
                      </Box>
                    </Box>

                    <p className='release'>
                      {moment(releaseAt).format('DD MMM YYYY')}
                    </p>

                    <Link to={`/products/${id}`} className='img-link'>
                      <Box
                        sx={{
                          width: '100%',
                          position: 'relative',
                          '&:hover > img, &:hover >.release': {
                            opacity: 0.35,
                          },
                          '&:hover > .icon-link': {
                            opacity: 1,
                          },
                        }}
                      >
                        <img src={thumbnail} alt={name} />
                        <InfoIcon
                          className='icon-link'
                          fontSize='large'
                          sx={{
                            opacity: 0,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            transition: 'all 0.35s ease-in-out',
                            color: 'white',
                          }}
                        />
                      </Box>
                    </Link>

                    <Box
                      sx={{
                        pl: 2,
                        py: 1,
                        bgcolor: 'black',
                        color: 'white',
                        '& .product-name': {
                          fontFamily: 'Domine, serif',
                          fontSize: '14px',
                          pb: 1,
                          color: 'white',
                        },
                      }}
                    >
                      <Link to={`/products/${id}`}>
                        <h4 className='product-name'>{name}</h4>
                      </Link>

                      <Box
                        sx={{
                          display: 'flex',
                          height: '2rem',
                          alignItems: 'center',
                        }}
                      >
                        {discountPercent ? (
                          <Box
                            sx={{
                              bgcolor: 'red',
                              p: 1,
                              mr: 1,
                              mb: '2px',
                              borderRadius: '3px',
                              width: 'auto',
                              textAlign: 'center',
                              color: 'white',
                              fontSize: '14px',
                            }}
                          >
                            {discountPercent < 10
                              ? discountPercent.toFixed(1)
                              : parseFloat(discountPercent)}
                            %
                          </Box>
                        ) : (
                          ''
                        )}
                        <Box
                          sx={{
                            '& .cost-price': {
                              fontSize: discountPrice > 0 ? '12px' : '14px',
                              color: discountPrice > 0 ? 'unset' : '#fe59d7',
                              textDecoration: discountPrice
                                ? 'line-through'
                                : 'unset',
                              textAlign: 'left',
                            },
                            '& .reduced-price': {
                              fontSize: '14px',
                              color: '#fe59d7',
                              textAlign: 'left',
                            },
                          }}
                        >
                          {price > 0 ? (
                            <p className='cost-price'>
                              {formatter.format(price)}
                            </p>
                          ) : (
                            <p className='cost-price'>FREE</p>
                          )}
                          {discountPrice ? (
                            <p className='reduced-price'>
                              {formatter.format(discountPrice)}
                            </p>
                          ) : (
                            ''
                          )}
                        </Box>
                      </Box>
                    </Box>

                    <Button
                      variant='contained'
                      onClick={() => addToCart(id)}
                      sx={{
                        width: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                        borderRadius: 'unset',
                        borderBottomLeftRadius: '5px',
                        borderBottomRightRadius: '5px',
                        fontSize: '12px !important',
                        transition: 'all 0.25s ease-in-out',
                        background:
                          'linear-gradient(to right, #4b134f, #c94b4b)',
                        zIndex: 0,
                        '&::before': {
                          content: "''",
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          background:
                            'linear-gradient(160.09deg, #c94b4b 4.36%, #4b134f 117.5%)',
                          zIndex: '-1',
                          transition: 'all 0.5s ease',
                        },
                        '&:hover:before': {
                          left: 0,
                          transition: 'all 0.5s ease',
                        },
                      }}
                    >
                      <ShoppingCartCheckoutIcon
                        fontSize='small'
                        sx={{
                          mr: 1,
                        }}
                      />

                      {rightNow < checkRelease ? 'pre purchase' : 'add to cart'}
                    </Button>
                  </Box>
                </Fragment>
              );
            })}
          </Grid>

          <Grid item xs={12} sm={3}>
            <img src={IMGBlog4} alt='blog-home-1' />

            <Box sx={{ p: 1 }}>
              <Typography
                variant='h6'
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Level Up Your Gaming Experience with Our Unbeatable Deals!
              </Typography>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>

              <Link to={'/blog/detail-blog'}>Read more</Link>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              position: 'relative',
              '& img': {
                verticalAlign: 'middle',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
              '& .release': {
                position: 'absolute',
                my: 0,
                top: '6.25%',
                right: 0,
                p: '5px',
                py: '3px',
                color: 'whitesmoke',
                fontWeight: 'bold',
                fontSize: '10px',
                bgcolor: '#8a2be2',
                borderTopRightRadius: '5px',
                zIndex: 1,
                transition: 'all 0.35s ease-in-out',
              },
              '& .corner-ribbon': {
                opacity: 1,
                position: 'relative',
              },
              '& .corner-ribbon__inner': {
                left: 0,
                position: 'absolute',
                top: 0,
                height: '4rem',
                width: '4rem',
                overflow: 'hidden',
                pt: 1,
                zIndex: 1,
              },
              '& .corner-ribbon__ribbon': {
                left: '1rem',
                position: 'absolute',
                top: '1rem',
                height: '1.15rem',
                width: '5.256rem',
                transform: 'translate(-38px, -8px) rotate(-45deg)',
                backgroundColor: '#8a2be2',
                color: 'white',
                textAlign: 'center',
                fontSize: '10px',
                fontWeight: 700,
                pt: '3px',
              },
            }}
          >
            {bayonetta.map((item) => {
              const {
                id,
                name,
                price,
                discountPercent,
                discountPrice,
                thumbnail,
                releaseAt,
                platform,
              } = item;

              const rightNow = moment().toDate().getTime();
              let checkRelease = moment(releaseAt).toDate().getTime();

              return (
                <Fragment key={id}>
                  <Box sx={{ mb: 2 }}>
                    <Box className='corner-ribbon'>
                      <Box className='corner-ribbon__inner'>
                        <Box className='corner-ribbon__ribbon'>{platform}</Box>
                      </Box>
                    </Box>

                    <p className='release'>
                      {moment(releaseAt).format('DD MMM YYYY')}
                    </p>

                    <Link to={`/products/${id}`} className='img-link'>
                      <Box
                        sx={{
                          width: '100%',
                          position: 'relative',
                          '&:hover > img, &:hover >.release': {
                            opacity: 0.35,
                          },
                          '&:hover > .icon-link': {
                            opacity: 1,
                          },
                        }}
                      >
                        <img src={thumbnail} alt={name} />
                        <InfoIcon
                          className='icon-link'
                          fontSize='large'
                          sx={{
                            opacity: 0,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            transition: 'all 0.35s ease-in-out',
                            color: 'white',
                          }}
                        />
                      </Box>
                    </Link>

                    <Box
                      sx={{
                        pl: 2,
                        py: 1,
                        bgcolor: 'black',
                        color: 'white',
                        '& .product-name': {
                          fontFamily: 'Domine, serif',
                          fontSize: '14px',
                          pb: 1,
                          color: 'white',
                        },
                      }}
                    >
                      <Link to={`/products/${id}`}>
                        <h4 className='product-name'>{name}</h4>
                      </Link>

                      <Box
                        sx={{
                          display: 'flex',
                          height: '2rem',
                          alignItems: 'center',
                        }}
                      >
                        {discountPercent ? (
                          <Box
                            sx={{
                              bgcolor: 'red',
                              p: 1,
                              mr: 1,
                              mb: '2px',
                              borderRadius: '3px',
                              width: 'auto',
                              textAlign: 'center',
                              color: 'white',
                              fontSize: '14px',
                            }}
                          >
                            {discountPercent < 10
                              ? discountPercent.toFixed(1)
                              : parseFloat(discountPercent)}
                            %
                          </Box>
                        ) : (
                          ''
                        )}
                        <Box
                          sx={{
                            '& .cost-price': {
                              fontSize: discountPrice > 0 ? '12px' : '14px',
                              color: discountPrice > 0 ? 'unset' : '#fe59d7',
                              textDecoration: discountPrice
                                ? 'line-through'
                                : 'unset',
                              textAlign: 'left',
                            },
                            '& .reduced-price': {
                              fontSize: '14px',
                              color: '#fe59d7',
                              textAlign: 'left',
                            },
                          }}
                        >
                          {price > 0 ? (
                            <p className='cost-price'>
                              {formatter.format(price)}
                            </p>
                          ) : (
                            <p className='cost-price'>FREE</p>
                          )}
                          {discountPrice ? (
                            <p className='reduced-price'>
                              {formatter.format(discountPrice)}
                            </p>
                          ) : (
                            ''
                          )}
                        </Box>
                      </Box>
                    </Box>

                    <Button
                      variant='contained'
                      onClick={() => addToCart(id)}
                      sx={{
                        width: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                        borderRadius: 'unset',
                        borderBottomLeftRadius: '5px',
                        borderBottomRightRadius: '5px',
                        fontSize: '12px !important',
                        transition: 'all 0.25s ease-in-out',
                        background:
                          'linear-gradient(to right, #4b134f, #c94b4b)',
                        zIndex: 0,
                        '&::before': {
                          content: "''",
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          background:
                            'linear-gradient(160.09deg, #c94b4b 4.36%, #4b134f 117.5%)',
                          zIndex: '-1',
                          transition: 'all 0.5s ease',
                        },
                        '&:hover:before': {
                          left: 0,
                          transition: 'all 0.5s ease',
                        },
                      }}
                    >
                      <ShoppingCartCheckoutIcon
                        fontSize='small'
                        sx={{
                          mr: 1,
                        }}
                      />

                      {rightNow < checkRelease ? 'pre purchase' : 'add to cart'}
                    </Button>
                  </Box>
                </Fragment>
              );
            })}
          </Grid>
        </Grid>
      </Container>

      <Container
        id='start-content'
        sx={{
          position: 'relative',
          color: 'white',
          bgcolor: 'transparent',

          '& .swiper-slide': {
            height: '300px',
          },

          '& .img-link': {
            bgcolor: '#222',
            display: 'block',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
          },
          '& img': {
            maxWidth: '100%',
            width: '100%',
            height: '140px',
            objectFit: 'cover',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            verticalAlign: 'bottom',
            transition: 'all 0.35s ease-in-out',
          },
          '& .release': {
            position: 'absolute',
            top: 0,
            right: 0,
            p: '5px',
            py: '3px',
            color: 'whitesmoke',
            fontWeight: 'bold',
            fontSize: '10px',
            bgcolor: '#8a2be2',
            borderTopRightRadius: '5px',
            zIndex: 1,
            transition: 'all 0.35s ease-in-out',
          },
          '& .corner-ribbon': {
            opacity: 1,
            position: 'relative',
          },
          '& .corner-ribbon__inner': {
            left: 0,
            position: 'absolute',
            top: 0,
            height: '4rem',
            width: '4rem',
            overflow: 'hidden',
            pt: 1,
            zIndex: 1,
          },
          '& .corner-ribbon__ribbon': {
            left: '1rem',
            position: 'absolute',
            top: '1rem',
            height: '1.15rem',
            width: '5.256rem',
            transform: 'translate(-38px, -8px) rotate(-45deg)',
            backgroundColor: '#8a2be2',
            color: 'white',
            textAlign: 'center',
            fontSize: '10px',
            fontWeight: 700,
            pt: '3px',
          },
          '& .swiper-pagination-bullet': {
            background: 'white',
            opacity: 'var(--swiper-pagination-bullet-inactive-opacity, .5)',
          },
          '& .swiper-pagination-bullet-active': {
            background: '#fe59d7',
            opacity: 1,
          },
        }}
      >
        {/*Most Popular */}
        <Box sx={{ pt: 3 }}>
          <Box
            display={'flex'}
            alignItems='center'
            justifyContent='space-between'
            sx={{ my: 2 }}
          >
            <Box
              display='flex'
              alignItems='center'
              sx={{ textTransform: 'uppercase' }}
            >
              <NewReleasesIcon fontSize='large' />
              <Typography
                variant='h5'
                sx={{
                  ml: '5px',
                  fontSize: {
                    xs: '20px',
                    sm: '24px',
                  },
                  fontFamily: 'Chakra Petch, sans-serif',
                }}
              >
                Most Popular
              </Typography>
            </Box>
            <Button
              variant='outlined'
              sx={{
                borderColor: '#fe59d7',
                transition: 'all 0.5s ease-in-out',
                '& a': {
                  transition: 'all 0.5s ease-in-out',
                },
                '&:hover': {
                  bgcolor: '#fe59d7',
                  borderColor: '#fe59d7',
                  '& a': {
                    color: 'white',
                  },
                },
              }}
            >
              <Link to={'/search'}>See more</Link>
            </Button>
          </Box>

          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className='mySwiper'
            spaceBetween={20}
            breakpoints={{
              991: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}
          >
            {mostPopular.map((item) => {
              const {
                id,
                name,
                price,
                discountPercent,
                discountPrice,
                thumbnail,
                releaseAt,
                platform,
              } = item;

              const rightNow = moment().toDate().getTime();
              let checkRelease = moment(releaseAt).toDate().getTime();

              return (
                <SwiperSlide key={id}>
                  <Box sx={{ mb: 2 }}>
                    <Box className='corner-ribbon'>
                      <Box className='corner-ribbon__inner'>
                        <Box className='corner-ribbon__ribbon'>{platform}</Box>
                      </Box>
                    </Box>

                    <p className='release'>
                      {moment(releaseAt).format('DD MMM YYYY')}
                    </p>

                    <Link to={`/products/${id}`} className='img-link'>
                      <Box
                        sx={{
                          width: '100%',
                          position: 'relative',
                          '&:hover > img, &:hover >.release': {
                            opacity: 0.35,
                          },
                          '&:hover > .icon-link': {
                            opacity: 1,
                          },
                        }}
                      >
                        <img src={thumbnail} alt={name} />
                        <InfoIcon
                          className='icon-link'
                          fontSize='large'
                          sx={{
                            opacity: 0,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            transition: 'all 0.35s ease-in-out',
                            color: 'white',
                          }}
                        />
                      </Box>
                    </Link>

                    <Box
                      sx={{
                        pl: 2,
                        py: 1,
                        bgcolor: 'black',
                        color: 'white',
                        '& .product-name': {
                          fontFamily: 'Domine, serif',
                          fontSize: '14px',
                          pb: 1,
                          color: 'white',
                        },
                      }}
                    >
                      <Link to={`/products/${id}`}>
                        <h4 className='product-name'>{name}</h4>
                      </Link>

                      <Box
                        sx={{
                          display: 'flex',
                          height: '2rem',
                          alignItems: 'center',
                        }}
                      >
                        {discountPercent ? (
                          <Box
                            sx={{
                              bgcolor: 'red',
                              p: 1,
                              mr: 1,
                              mb: '2px',
                              borderRadius: '3px',
                              width: 'auto',
                              textAlign: 'center',
                              color: 'white',
                              fontSize: '14px',
                            }}
                          >
                            {discountPercent < 10
                              ? discountPercent.toFixed(1)
                              : parseFloat(discountPercent)}
                            %
                          </Box>
                        ) : (
                          ''
                        )}
                        <Box
                          sx={{
                            '& .cost-price': {
                              fontSize: discountPrice > 0 ? '12px' : '14px',
                              color: discountPrice > 0 ? 'unset' : '#fe59d7',
                              textDecoration: discountPrice
                                ? 'line-through'
                                : 'unset',
                              textAlign: 'left',
                            },
                            '& .reduced-price': {
                              fontSize: '14px',
                              color: '#fe59d7',
                              textAlign: 'left',
                            },
                          }}
                        >
                          {price > 0 ? (
                            <p className='cost-price'>
                              {formatter.format(price)}
                            </p>
                          ) : (
                            <p className='cost-price'>FREE</p>
                          )}
                          {discountPrice ? (
                            <p className='reduced-price'>
                              {formatter.format(discountPrice)}
                            </p>
                          ) : (
                            ''
                          )}
                        </Box>
                      </Box>
                    </Box>

                    <Button
                      variant='contained'
                      onClick={() => addToCart(id)}
                      sx={{
                        width: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                        borderRadius: 'unset',
                        borderBottomLeftRadius: '5px',
                        borderBottomRightRadius: '5px',
                        fontSize: '12px !important',
                        transition: 'all 0.25s ease-in-out',
                        background:
                          'linear-gradient(to right, #4b134f, #c94b4b)',
                        zIndex: 0,
                        '&::before': {
                          content: "''",
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          background:
                            'linear-gradient(160.09deg, #c94b4b 4.36%, #4b134f 117.5%)',
                          zIndex: '-1',
                          transition: 'all 0.5s ease',
                        },
                        '&:hover:before': {
                          left: 0,
                          transition: 'all 0.5s ease',
                        },
                      }}
                    >
                      <ShoppingCartCheckoutIcon
                        fontSize='small'
                        sx={{
                          mr: 1,
                        }}
                      />

                      {rightNow < checkRelease ? 'pre purchase' : 'add to cart'}
                    </Button>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Container>

      <Box
        sx={{
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
          zIndex: 0,
          '&::after': {
            border: '3px solid yellow',
            content: '""',
            display: 'block',
            width: '100%',
            height: '250px',
            opacity: 0.6,
            backgroundImage: `url(${BgAd2})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            p: 3,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            flexDirection: 'column',

            '& .surprise-tag': {
              bgcolor: '#e0e007',
              m: 2,
              ml: 0,
              mb: 1,
              p: 1,
              color: 'black',
              textTransform: 'uppercase',
              fontWeight: 'bold',
            },
            '& button': {
              mt: 1.5,
              bgcolor: '#fe59d7',
              transition: 'all 0.5s ease',
              border: '1px solid #fe59d7',
              '&:hover': {
                bgcolor: 'transparent',
                border: '1px solid #fe59d7',
                color: '#fe59d7',
              },
            },
          }}
        >
          <Box>
            <Typography variant='h5' className='surprise-tag'>
              Game On: Spring Savings on Video Games
            </Typography>
            <p>REWARDS FOR OUR CUSTOMERS</p>
          </Box>

          <Button variant='contained' onClick={() => navigate('/search')}>
            Start Now
          </Button>
        </Box>
      </Box>

      <Container>
        <Grid container sx={{ color: 'white', my: 2 }} spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              sx={{ textTransform: 'uppercase' }}
            >
              <Typography
                variant='h5'
                sx={{ fontFamily: 'Chakra Petch, sans-serif' }}
              >
                New Releases
              </Typography>
              <Button
                variant='outlined'
                sx={{
                  borderColor: '#fe59d7',
                  transition: 'all 0.5s ease-in-out',
                  '& a': {
                    transition: 'all 0.5s ease-in-out',
                  },
                  '&:hover': {
                    bgcolor: '#fe59d7',
                    borderColor: '#fe59d7',
                    '& a': {
                      color: 'white',
                    },
                  },
                }}
              >
                <Link to={'/search'}>See more</Link>
              </Button>
            </Box>
            <nav aria-label='most-played'>
              <List>
                {newRelease.map((item, idx) => {
                  const {
                    id,
                    name,
                    price,
                    discountPercent,
                    discountPrice,
                    thumbnail,
                  } = item;

                  return (
                    <ListItem
                      key={id}
                      disablePadding
                      component={Link}
                      to={`/products/${id}`}
                      sx={{
                        bgcolor: '#161618',
                        my: 1,
                        transition: 'all 0.35s ease-in-out',
                        '&:hover': {
                          bgcolor: '#494a4f',
                        },
                        '& img': {
                          maxWidth: {
                            xs: '40%',
                            sm: '25%',
                          },
                          height: 'auto',
                        },
                        '& span': {
                          color: 'white',
                          ml: 1,
                          maxWidth: '100%',
                          // width: '250px',
                          fontSize: {
                            xs: '10px',
                            sm: '14px',
                          },
                        },
                        '& .title-horizontal': {
                          display: {
                            xs: 'none',
                            sm: 'block',
                          },
                        },
                      }}
                    >
                      <ListItemButton>
                        <img src={thumbnail} alt={name} />
                        <ListItemText
                          primary={`${name}`}
                          className='title-horizontal'
                        />
                        <ListItemText>
                          <Box
                            sx={{
                              pl: 2,
                              py: 1,

                              color: 'white',
                              '& .product-name': {
                                fontFamily: 'Domine, serif',
                                fontSize: '14px',
                                pb: 1,
                                color: 'white',
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                height: '2rem',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                              }}
                            >
                              <Box
                                sx={{
                                  '& .cost-price': {
                                    fontSize:
                                      discountPrice > 0 ? '12px' : '14px',
                                    color:
                                      discountPrice > 0 ? 'unset' : '#fe59d7',
                                    textDecoration: discountPrice
                                      ? 'line-through'
                                      : 'unset',
                                    textAlign: 'left',
                                  },
                                  '& .reduced-price': {
                                    fontSize: '14px',
                                    color: '#fe59d7',
                                    textAlign: 'left',
                                  },
                                }}
                              >
                                {price > 0 ? (
                                  <p className='cost-price'>
                                    {formatter.format(price)}
                                  </p>
                                ) : (
                                  <p className='cost-price'>FREE</p>
                                )}
                                {discountPrice ? (
                                  <p className='reduced-price'>
                                    {formatter.format(discountPrice)}
                                  </p>
                                ) : (
                                  ''
                                )}
                              </Box>

                              {discountPercent ? (
                                <Box
                                  sx={{
                                    bgcolor: 'red',
                                    p: 1,
                                    ml: 1,
                                    mb: '2px',
                                    borderRadius: '3px',
                                    width: 'auto',
                                    textAlign: 'center',
                                    color: 'white',
                                    fontSize: '14px',
                                  }}
                                >
                                  {discountPercent < 10
                                    ? discountPercent.toFixed(1)
                                    : parseFloat(discountPercent)}
                                  %
                                </Box>
                              ) : (
                                ''
                              )}
                            </Box>
                          </Box>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </nav>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              sx={{ textTransform: 'uppercase' }}
            >
              <Typography
                variant='h5'
                sx={{ fontFamily: 'Chakra Petch, sans-serif' }}
              >
                Coming Soon
              </Typography>
              <Button
                variant='outlined'
                sx={{
                  borderColor: '#fe59d7',
                  transition: 'all 0.5s ease-in-out',
                  '& a': {
                    transition: 'all 0.5s ease-in-out',
                  },
                  '&:hover': {
                    bgcolor: '#fe59d7',
                    borderColor: '#fe59d7',
                    '& a': {
                      color: 'white',
                    },
                  },
                }}
              >
                <Link to={'/search'}>See more</Link>
              </Button>
            </Box>
            <nav aria-label='most-played'>
              <List>
                {comingSoon.map((item, idx) => {
                  const {
                    id,
                    name,
                    price,
                    discountPercent,
                    discountPrice,
                    thumbnail,
                  } = item;

                  return (
                    <ListItem
                      key={id}
                      disablePadding
                      component={Link}
                      to={`/products/${id}`}
                      sx={{
                        bgcolor: '#161618',
                        my: 1,
                        transition: 'all 0.35s ease-in-out',
                        '&:hover': {
                          bgcolor: '#494a4f',
                        },
                        '& img': {
                          maxWidth: {
                            xs: '40%',
                            sm: '25%',
                          },
                          height: 'auto',
                        },
                        '& span': {
                          color: 'white',
                          ml: 1,
                          maxWidth: '100%',
                          // width: '250px',
                          fontSize: {
                            xs: '10px',
                            sm: '14px',
                          },
                        },
                        '& .title-horizontal': {
                          display: {
                            xs: 'none',
                            sm: 'block',
                          },
                        },
                      }}
                    >
                      <ListItemButton>
                        <img src={thumbnail} alt={name} />
                        <ListItemText
                          primary={`${name}`}
                          className='title-horizontal'
                        />
                        <ListItemText>
                          <Box
                            sx={{
                              pl: 2,
                              py: 1,

                              color: 'white',
                              '& .product-name': {
                                fontFamily: 'Domine, serif',
                                fontSize: '14px',
                                pb: 1,
                                color: 'white',
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                height: '2rem',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                              }}
                            >
                              <Box
                                sx={{
                                  '& .cost-price': {
                                    fontSize:
                                      discountPrice > 0 ? '12px' : '14px',
                                    color:
                                      discountPrice > 0 ? 'unset' : '#fe59d7',
                                    textDecoration: discountPrice
                                      ? 'line-through'
                                      : 'unset',
                                    textAlign: 'left',
                                  },
                                  '& .reduced-price': {
                                    fontSize: '14px',
                                    color: '#fe59d7',
                                    textAlign: 'left',
                                  },
                                }}
                              >
                                {price > 0 ? (
                                  <p className='cost-price'>
                                    {formatter.format(price)}
                                  </p>
                                ) : (
                                  <p className='cost-price'>FREE</p>
                                )}
                                {discountPrice ? (
                                  <p className='reduced-price'>
                                    {formatter.format(discountPrice)}
                                  </p>
                                ) : (
                                  ''
                                )}
                              </Box>

                              {discountPercent ? (
                                <Box
                                  sx={{
                                    bgcolor: 'red',
                                    p: 1,
                                    ml: 1,
                                    mb: '2px',
                                    borderRadius: '3px',
                                    width: 'auto',
                                    textAlign: 'center',
                                    color: 'white',
                                    fontSize: '14px',
                                  }}
                                >
                                  {discountPercent < 10
                                    ? discountPercent.toFixed(1)
                                    : parseFloat(discountPercent)}
                                  %
                                </Box>
                              ) : (
                                ''
                              )}
                            </Box>
                          </Box>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </nav>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Typography
          variant='h5'
          color={'white'}
          sx={{
            fontFamily: 'Chakra Petch, sans-serif',
          }}
        >
          LAGO FEATURES
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            color: 'rgb(245, 245, 245)',
            py: 2,
            pb: 3,
            '& img': {
              maxWidth: '100%',
              borderRadius: '1rem',
            },
            '& a': {
              textTransform: 'uppercase',
            },
            '& .title-feature': {
              fontFamily: 'Chakra Petch, sans-serif',
            },
            '& p': {
              color: 'rgba(245, 245, 245, 0.6)',
              my: 2,
              fontSize: '14px',
              lineHeight: '24px',
            },
          }}
        >
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center', my: 2 }}>
            <Box
              className='img-area'
              sx={{
                width: 110,
                height: 110,
                background: '#d435af',
                borderRadius: 55,
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                '&::before': {
                  position: 'absolute',
                  content: "''",
                  width: 130,
                  height: 130,
                  background: '#d435af',
                  opacity: 0.4,
                  borderRadius: 65,
                },
              }}
            >
              <img src={FeaturesIcon1} alt='FeaturesIcon1' />
            </Box>
            <Typography variant='h6' className='title-feature' sx={{ my: 2 }}>
              PREMIUM SUPPORT
            </Typography>
            <p>
              Our dedicated admins are there to answer in no time, avg response
              time is 5mins.
            </p>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ textAlign: 'center', my: 2 }}>
            <Box
              className='img-area'
              sx={{
                width: 110,
                height: 110,
                background: '#d435af',
                borderRadius: 55,
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                '&::before': {
                  position: 'absolute',
                  content: "''",
                  width: 130,
                  height: 130,
                  background: '#d435af',
                  opacity: 0.4,
                  borderRadius: 65,
                },
              }}
            >
              <img src={FeaturesIcon2} alt='FeaturesIcon2' />
            </Box>
            <Typography variant='h6' className='title-feature' sx={{ my: 2 }}>
              INSTANT DEPOSITS
            </Typography>
            <p>
              Make a deposit and receive your funds instantly to your account.
            </p>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ textAlign: 'center', my: 2 }}>
            <Box
              className='img-area'
              sx={{
                width: 110,
                height: 110,
                background: '#d435af',
                borderRadius: 55,
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                '&::before': {
                  position: 'absolute',
                  content: "''",
                  width: 130,
                  height: 130,
                  background: '#d435af',
                  opacity: 0.4,
                  borderRadius: 65,
                },
              }}
            >
              <img src={FeaturesIcon3} alt='FeaturesIcon3' />
            </Box>
            <Typography variant='h6' className='title-feature' sx={{ my: 2 }}>
              CLIMB THE LEADERBOARDS
            </Typography>
            <p>
              Compete in monthly leaderboard challenges for real cash and
              prizes.
            </p>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ textAlign: 'center', my: 2 }}>
            <Box
              className='img-area'
              sx={{
                width: 110,
                height: 110,
                background: '#d435af',
                borderRadius: 55,
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                '&::before': {
                  position: 'absolute',
                  content: "''",
                  width: 130,
                  height: 130,
                  background: '#d435af',
                  opacity: 0.4,
                  borderRadius: 65,
                },
              }}
            >
              <img src={FeaturesIcon4} alt='FeaturesIcon4' />
            </Box>
            <Typography variant='h6' className='title-feature' sx={{ my: 2 }}>
              MAKE 2X YOUR $$
            </Typography>
            <p>
              Our dedicated admins are there to answer in no time, avg response
              time is 5mins.
            </p>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ textAlign: 'center', my: 2 }}>
            <Box
              className='img-area'
              sx={{
                width: 110,
                height: 110,
                background: '#d435af',
                borderRadius: 55,
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                '&::before': {
                  position: 'absolute',
                  content: "''",
                  width: 130,
                  height: 130,
                  background: '#d435af',
                  opacity: 0.4,
                  borderRadius: 65,
                },
              }}
            >
              <img src={FeaturesIcon5} alt='FeaturesIcon5' />
            </Box>
            <Typography variant='h6' className='title-feature' sx={{ my: 2 }}>
              MAKE UP TO 10X YOUR $$
            </Typography>
            <p>
              Make up to 10X your money on multiplayer tourneys. With paid and
              free entry.
            </p>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ textAlign: 'center', my: 2 }}>
            <Box
              className='img-area'
              sx={{
                width: 110,
                height: 110,
                background: '#d435af',
                borderRadius: 55,
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                '&::before': {
                  position: 'absolute',
                  content: "''",
                  width: 130,
                  height: 130,
                  background: '#d435af',
                  opacity: 0.4,
                  borderRadius: 65,
                },
              }}
            >
              <img src={FeaturesIcon6} alt='FeaturesIcon6' />
            </Box>
            <Typography variant='h6' className='title-feature' sx={{ my: 2 }}>
              PLAY AT YOUR LEVEL
            </Typography>
            <p>
              With ranked divisions we help you find the right level to compete.
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
