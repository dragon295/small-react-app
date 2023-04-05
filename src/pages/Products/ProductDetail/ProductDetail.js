import React, { useState, useEffect } from 'react';

import ModalAlert from '../../../components/Modal/ModalAlert';
import Error from '../../Error/Error';
import moment from 'moment/moment';
import SwiperComponent from './SwiperComponent';
import AlertError from '../../../components/Alert/AlertError';
import { useGlobalCart } from '../../../cart-context';
import useFetch from '../../../customHooks/useFetch';

import {
  Box,
  Container,
  Button,
  Grid,
  Typography,
  Rating,
  List,
  CircularProgress,
} from '@mui/material';

import { Link, useParams } from 'react-router-dom';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningIcon from '@mui/icons-material/Warning';
import AssistantIcon from '@mui/icons-material/Assistant';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import InfoIcon from '@mui/icons-material/Info';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

const policesList = [
  {
    id: 1,
    icon: <AssistantIcon />,
    text: 'We support 24/7',
  },
  {
    id: 2,
    icon: <AssuredWorkloadIcon />,
    text: 'Customer information is strictly confidential',
  },
];

const ProductDetail = () => {
  const { addToCart, addCart } = useGlobalCart();
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);
  const [moreProducts, setMoreProducts] = useState([]);

  const { data, loading } = useFetch(`/${id}`);

  const {
    id: productId,
    name,
    thumbnail,
    releaseAt,
    price,
    discountPercent,
    discountPrice,
    drm,
    platform,
    gerne,
    videoProduct,
    imagesProduct,
  } = data;

  const more = useFetch();

  useEffect(() => {
    const sliceProducts = Math.floor(Math.random() * more.data.length);
    setMoreProducts(more.data.slice(sliceProducts, sliceProducts + 6));
  }, [more.data]);

  if (loading) {
    return (
      <Box
        align='center'
        sx={{
          bgcolor: '#27282e',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h5' textAlign='center'>
          <CircularProgress color='success' />
        </Typography>
      </Box>
    );
  }

  if (!productId) {
    return <Error />;
  }

  const moreInfoList = [
    {
      nameTag: 'Developer',
      valueTag: 'CAPCOM',
    },
    {
      nameTag: 'Name',
      valueTag: name,
    },
    {
      nameTag: 'Genres',
      valueTag: gerne,
    },
    {
      nameTag: 'Platform',
      valueTag: platform,
    },
    {
      nameTag: 'Released',
      valueTag: moment(releaseAt).format('dddd LL'),
    },
    {
      nameTag: 'Supported Languages',
      valueTag:
        'Traditional Chinese, Spanish-Spain, Spanish-Latin America, Simplified Chinese, Russian, Portuguese-Brazil, Korean, Japanese, Italian, German, French, English, Arabic',
    },
  ];

  const formatter = new Intl.NumberFormat('vn', {
    style: 'currency',
    currency: 'VND',
  });

  const rightNow = moment().toDate().getTime();
  let checkRelease = moment(releaseAt).toDate().getTime();

  return (
    <Box
      component={'section'}
      sx={{
        my: 8,
        mb: 0,
        color: '#cacaca',
        backgroundImage: `url(${thumbnail})`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        objectFit: 'contain',
        position: 'relative',
        '&::before': {
          bottom: 0,
          content: "''",
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          background:
            'linear-gradient(to bottom,rgba(58,59,64,.75) 0,#27282e 480px)',
        },
        '& .demos': {
          mt: 1,
          fontSize: '0.875rem',
          fontStyle: 'italic',
          lineHeight: '22px',
          height: 'auto',
          overflow: 'hidden',
          transition: 'all .35s ease-in-out',
        },
        '& .custom-notes, & .custom-desciption': {
          maxHeight: '68px',
          background:
            'linear-gradient(to bottom,rgba(0,0,0,0),rgba(255,255,255,1))',
          // opacity: 0.4,
        },
        '& .custom-notes-active, & .custom-desciption-active': {
          maxHeight: '132px',
          background: 'unset',
          // opacity: 1,
        },
        ' & .custom-desciption': {
          maxHeight: '100px',
        },
        '& .custom-desciption-active': {
          maxHeight: '300px',
        },
        '& .extend-btn': {
          cursor: 'pointer',
          textDecoration: 'underline',
          mt: 1,
          color: '#fe59d7',
          fontSize: '16px',
        },
      }}
    >
      {addCart ? <ModalAlert /> : ''}
      <Container
        sx={{
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Box sx={{ py: 2 }}>
          <Typography variant='h4'>{name}</Typography>
          <Typography
            variant='p'
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '1rem',
              '& .release-tag': {
                mr: 1,
              },
            }}
          >
            <p className='star-count'>5</p>
            <Rating name='read-only' value={5} readOnly sx={{ mx: 1 }}></Rating>
          </Typography>
          <Typography
            variant='p'
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '1rem',
              '& .release-tag': {
                mr: 1,
              },
            }}
          >
            <p className='release-tag'>
              {rightNow < checkRelease ? 'RELEASE' : 'RELEASED'}
            </p>
            {moment(releaseAt).format('DD MMM YYYY')}
          </Typography>
        </Box>

        <AlertError noMarginTop />

        <Grid
          container
          spacing={{ xs: 1.5, sm: 3 }}
          sx={{ maxHeight: '100%', height: 'auto' }}
        >
          <Grid item xs={12} sm={8.5} md={9}>
            <SwiperComponent
              listImagesProduct={imagesProduct}
              thumbnail={thumbnail}
              videoProduct={videoProduct}
            />
            <Typography variant='h6' sx={{ my: 1.5 }}>
              GAME DESCRIPTION
            </Typography>

            <Box
              sx={{
                lineHeight: 1.5,
                fontSize: '0.875rem',
                mb: 1,
              }}
            >
              <p
                className={
                  !showDescription
                    ? 'demos custom-desciption'
                    : 'demos custom-desciption-active'
                }
              >
                Survival is just the beginning.
                <br />
                <br />
                Six years have passed since the biological disaster in Raccoon
                City.
                <br />
                Agent Leon S. Kennedy, one of the survivors of the incident, has
                been sent to rescue the president's kidnapped daughter.
                <br />
                He tracks her to a secluded European village, where there is
                something terribly wrong with the locals.
                <br />
                And the curtain rises on this story of daring rescue and
                grueling horror where life and death, terror and catharsis
                intersect.
                <br />
                <br />
                Featuring modernized gameplay, a reimagined storyline, and
                vividly detailed graphics,
                <br />
                Resident Evil 4 marks the rebirth of an industry juggernaut.
                <br />
                <br />
                Relive the nightmare that revolutionized survival horror.
              </p>
              <p
                className='extend-btn'
                onClick={() => setShowDescription((prev) => !prev)}
              >
                {!showDescription ? 'See More' : 'Show Less'}
              </p>
            </Box>

            <Box
              sx={{
                lineHeight: 1.5,
                fontSize: '12px',
                border: '1px solid white',
                p: 2,
                mb: 2,
                '& .title-config': {
                  textAlign: 'center',
                },
                '& .heading-requirement': {
                  mb: 1,
                },
                '& .requirements-tag': {
                  fontWeight: 'bold',
                },
                '& .requirements': {
                  height: 'auto',
                  mb: 1.5,
                },
                '& .overall-requirements': {
                  height: 'auto',
                  overflow: 'hidden',
                  transition: 'all .5s ease-in-out',
                },
                '& .requirements-hide': {
                  maxHeight: '120px',
                },
                '& .requirements-show': {
                  maxHeight: {
                    xs: '1700px',
                    md: '500px',
                  },
                },
                '& .troll': {
                  marginTop: 1,
                },
              }}
            >
              <h2 className='title-config'>PC</h2>
              <Grid
                container
                spacing={3}
                className={
                  !showRequirements
                    ? 'overall-requirements requirements-hide'
                    : 'overall-requirements requirements-show'
                }
              >
                <Grid item xs={12} md={6}>
                  <h3 className='heading-requirement'>Minimum Requirements:</h3>
                  <Grid container>
                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      OS:
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      Windows 10 64-bit
                    </Grid>

                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      Processor:
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      AMD Ryzen 3 1200 / Intel Core i5-7500
                    </Grid>
                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      Memory:
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      8 GB RAM
                    </Grid>
                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      Graphics:
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      AMD Radeon RX 560 with 4GB VRAM / NVIDIA GeForce GTX 1050
                      Ti with 4GB VRAM
                    </Grid>
                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      Network:
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      Internet connection required
                    </Grid>
                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      Direct X:
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      Version 12
                    </Grid>
                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      Additional Notes:
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      Estimated performance: 1080p/60fps. ・Framerate might drop
                      in graphics-intensive scenes. ・AMD Radeon RX 6700 XT or
                      NVIDIA GeForce RTX 2060 required to support ray tracing.
                    </Grid>
                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      Architecture
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      Requires a 64-bit processor and operating system
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <h3 className='heading-requirement'>
                    Recommended Requirements:
                  </h3>
                  <Grid container>
                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      OS:
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      Windows 10 64-bit
                    </Grid>

                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      Processor:
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      AMD Ryzen 5 3600 / Intel Core i7 8700
                    </Grid>

                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      Memory:
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      16 GB RAM
                    </Grid>

                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      Graphics:
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      AMD Radeon RX 5700 XT / NVIDIA GeForce GTX 1070 Ti
                    </Grid>

                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      Network:
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      Internet connection required
                    </Grid>

                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      Direct X:
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      Version 12
                    </Grid>

                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      Additional Notes:
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      Estimated performance: 1080p/60fps ・Framerate might drop
                      in graphics-intensive scenes. ・AMD Radeon RX 6700 XT or
                      NVIDIA GeForce RTX 2070 required to support ray tracing.
                    </Grid>

                    <Grid item xs={12} sm={3} className='requirements-tag'>
                      Architecture
                    </Grid>
                    <Grid item xs={12} md={9} className='requirements'>
                      Requires a 64-bit processor and operating system
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <p
                className='extend-btn'
                onClick={() => setShowRequirements((prev) => !prev)}
              >
                {!showRequirements ? 'See More' : 'Show Less'}
              </p>
            </Box>

            <Box
              sx={{
                '& .swiper-slide': {
                  height: '280px',
                },
                position: 'relative',
                '& .img-link': {
                  bgcolor: '#222',
                  display: 'block',
                  borderTopLeftRadius: '5px',
                  borderTopRightRadius: '5px',
                },
                '& img': {
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
                  opacity:
                    'var(--swiper-pagination-bullet-inactive-opacity, .5)',
                },
                '& .swiper-pagination-bullet-active': {
                  background: '#fe59d7',
                  opacity: 1,
                },
              }}
            >
              <Typography variant='h6' sx={{ my: 1.5 }}>
                MAYBE YOU LIKE
              </Typography>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className='mySwiper'
                breakpoints={{
                  991: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  320: {
                    slidesPerView: 1,
                  },
                }}
              >
                {moreProducts.map((item) => {
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

                  return (
                    <SwiperSlide key={id}>
                      <Box sx={{ mb: 2 }}>
                        <Box className='corner-ribbon'>
                          <Box className='corner-ribbon__inner'>
                            <Box className='corner-ribbon__ribbon'>
                              {platform}
                            </Box>
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
                              transition: 'all 0.5s ease-in-out',
                            },
                            '&:hover:before': {
                              left: 0,
                              transition: 'all 0.5s ease-in-out',
                            },
                          }}
                        >
                          <ShoppingCartCheckoutIcon
                            fontSize='small'
                            sx={{
                              mr: 1,
                            }}
                          />

                          {rightNow < checkRelease
                            ? 'pre purchase'
                            : 'add to cart'}
                        </Button>
                      </Box>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3.5} md={3}>
            <Box
              sx={{
                bgcolor: 'black',
                p: 1,
                '& img': { maxWidth: '100%', color: '#cacaca' },
              }}
            >
              <img src={thumbnail} alt={name} />

              {/* DRM , PLATFORM , ... */}
              <Box
                sx={{
                  my: 1,
                  '& .container-info': {
                    mb: '6px',
                  },
                  '& .heading': { fontWeight: 'normal', mb: '1px' },
                  '& img': {
                    maxWidth: '100%',
                    width: '16%',
                    bgcolor: 'white',
                  },
                  '& .edition': {
                    display: 'inline-block',
                    color: '#fe59d7',
                    border: '1px solid white',
                    p: '5px',
                    px: 1,
                    mt: '1px',
                    textTransform: 'capitalize',
                    fontSize: '0.875rem',
                  },
                }}
              >
                <Box className='container-info'>
                  <h4 className='heading'>DRM</h4>{' '}
                  <img
                    src={
                      (drm === 'steam' &&
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/800px-Steam_icon_logo.svg.png') ||
                      (drm === 'epic-game' &&
                        'https://img.icons8.com/wired/512/epic-games.png') ||
                      (drm === 'other' &&
                        'https://asset.brandfetch.io/idEZ5zwWaV/id7iuEM5u3.jpeg') ||
                      ''
                    }
                    alt={drm}
                  />
                </Box>
                <Box className='container-info'>
                  <h4 className='heading'>Platform</h4>
                  <img
                    src={
                      (platform === 'PC' &&
                        'https://www.freeiconspng.com/thumbs/windows-icon-png/system-windows-icon-png-4.png') ||
                      (platform === 'PS5' &&
                        'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/playstation-512.png') ||
                      (platform === 'Nintendo' &&
                        'https://www.vhv.rs/dpng/d/613-6132028_nintendo-switch-logo-hd-png-download.png') ||
                      ''
                    }
                    alt={platform}
                  />
                </Box>
                <Box className='container-info'>
                  <h4 className='heading'>Edition</h4>
                  <span className='edition'>standard edition</span>
                </Box>
              </Box>

              {/* PRICE */}
              <Box
                sx={{
                  display: 'flex',
                  my: 1.5,
                  mb: 1,
                  alignItems: 'center',
                }}
              >
                {discountPercent ? (
                  <Box
                    sx={{
                      bgcolor: 'red',
                      p: 1,
                      px: 1.5,
                      mr: 1,
                      mb: '2px',
                      // borderRadius: '3px',
                      width: 'auto',
                      textAlign: 'center',
                      color: 'white',

                      fontSize: '18px',
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
                      fontSize: discountPrice > 0 ? '14px' : '18px',
                      color: discountPrice > 0 ? 'unset' : '#fe59d7',
                      textDecoration: discountPrice ? 'line-through' : 'unset',
                      textAlign: 'left',
                    },
                    '& .reduced-price': {
                      fontSize: '16px',
                      color: '#fe59d7',
                      textAlign: 'left',
                    },
                  }}
                >
                  {price > 0 ? (
                    <p className='cost-price'>{formatter.format(price)}</p>
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

              <Button
                variant='contained'
                onClick={() => addToCart(productId)}
                sx={{
                  width: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                  borderRadius: 'unset',
                  borderBottomLeftRadius: '5px',
                  borderBottomRightRadius: '5px',
                  fontSize: '12px !important',
                  background: 'linear-gradient(to right, #4b134f, #c94b4b)',
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

              {/* POLICY */}

              <List sx={{ py: 0 }}>
                <Box
                  display='flex'
                  alignItems={'center'}
                  sx={{
                    my: 1.5,
                    '& .text-warn': { ml: '10px', fontSize: '0.875rem' },
                  }}
                >
                  <WarningIcon />
                  <p className='text-warn'>
                    Please read Customer Notes before purchasing{' '}
                    <a href='#ctn'>View</a>
                  </p>
                </Box>
                {policesList.map((item) => (
                  <Box
                    key={item.id}
                    display='flex'
                    alignItems={'center'}
                    sx={{
                      my: 1.5,
                      '& .text-warn': { ml: '10px', fontSize: '0.875rem' },
                    }}
                  >
                    {item.icon}
                    <p className='text-warn'>{item.text}</p>
                  </Box>
                ))}
              </List>
            </Box>
            <Box sx={{ my: 1.5 }}>
              <Typography variant='h6'>GAME INFORMATION</Typography>
              <Grid
                container
                sx={{
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  '& .value-tag-info': {
                    my: 1,
                    textTransform: 'capitalize',
                    lineHeight: '20px',
                    borderLeft: '1px solid #737373',
                    pl: 1,
                  },
                }}
              >
                {moreInfoList.map((item) => (
                  <React.Fragment key={item.nameTag}>
                    <Grid item xs={4} className='name-tag-info'>
                      {item.nameTag}
                    </Grid>
                    <Grid item xs={8} className='value-tag-info'>
                      {item.valueTag}
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Box>

            <Box
              sx={{
                bgcolor: '#000',
                p: 2,
                px: 1.5,
                mb: 2,
                border: '1px solid #fe59d7',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textTransform: 'uppercase',
                }}
              >
                <InfoOutlinedIcon sx={{ mr: 1.5 }} />
                <p id='ctn'>Customer Notes</p>
              </Box>

              <p
                className={
                  !show ? 'demos custom-notes' : 'demos custom-notes-active'
                }
              >
                This Game may contain content not appropriate for all ages, or
                may not be appropriate for viewing at work: Frequent Violence or
                Gore, General Mature Content
              </p>

              <p
                className='extend-btn'
                onClick={() => setShow((prev) => !prev)}
              >
                {!show ? 'See More' : 'Show Less'}
              </p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetail;
