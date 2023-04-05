import React from 'react';

import { Grid, Button, Typography, Box, Skeleton } from '@mui/material';

import moment from 'moment/moment';

import { useGlobalCart } from '../../cart-context';

import { Link } from 'react-router-dom';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import InfoIcon from '@mui/icons-material/Info';

const Products = () => {
  const { itemsPerPage, loading, addToCart } = useGlobalCart();

  const formatter = new Intl.NumberFormat('vn', {
    style: 'currency',
    currency: 'VND',
  });

  const rightNow = moment().toDate().getTime();

  if (loading) {
    return (
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          mt: 1,
        }}
      >
        <Skeleton width='100%' height='150px' animation='wave' />
        <Skeleton width='100%' height='150px' animation='wave' />
        <Skeleton width='100%' height='150px' animation='wave' />
      </Grid>
    );
  }

  return (
    <Grid component={'section'} container spacing={2.5}>
      {itemsPerPage.length === 0 ? (
        <Typography
          variant='h5'
          sx={{ mt: 5, textAlign: 'center', width: '100%' }}
        >
          Sorry we couldn't find your criteria. Please try again!
        </Typography>
      ) : (
        itemsPerPage.map((item) => {
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

          let checkRelease = moment(releaseAt).toDate().getTime();
          return (
            <Grid
              item
              key={item.id}
              xs={12}
              sm={6}
              md={4}
              sx={{
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
                  top: '1.25rem',
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
                  bgcolor: '#27282e',
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

                {rightNow < checkRelease ? 'pre purchase' : 'add to cart'}
              </Button>
            </Grid>
          );
        })
      )}
    </Grid>
  );
};

export default Products;
