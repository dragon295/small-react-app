import React from 'react';

import AlertError from '../../components/Alert/AlertError';

import { useGlobalCart } from '../../cart-context';

import CartSummary from './CartSummary';

import { Box, Button, Typography, Grid, Alert } from '@mui/material';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    cart,
    amount,
    increaseItem,
    decreaseItem,
    removeCartItem,
    voucher,
    setVoucher,
    handleSubmitVoucher,
    displayErrorVoucher,
  } = useGlobalCart();

  const formatter = new Intl.NumberFormat('vn', {
    style: 'currency',
    currency: 'VND',
  });

  return (
    <Box component={'section'}>
      <Typography variant='h4' fontSize={'1.875rem'}>
        Your Cart
      </Typography>
      <AlertError />
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          {!cart.length > 0 ? (
            <Box sx={{ textAlign: 'left', mt: 1 }}>
              <Alert severity='warning'>Your cart is empty!</Alert>
            </Box>
          ) : (
            <>
              <Box component={'ul'}>
                {cart.map((item) => {
                  const {
                    id,
                    name,
                    thumbnail,
                    platform,
                    quantity,
                    discountPercent,
                    discountPrice,
                    price,
                  } = item;
                  return (
                    <Box
                      key={id}
                      component={'li'}
                      sx={{
                        display: 'flex',
                        bgcolor: 'black',
                        my: 1,
                        mb: 2.5,
                        borderRadius: '5px',
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Box
                            component={Link}
                            to={`/products/${id}`}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'flex-start',
                              color: 'white',
                              '& img': {
                                maxWidth: '100%',
                                width: {
                                  xs: '34%',
                                },
                                borderTopLeftRadius: '5px',
                                borderBottomLeftRadius: '5px',
                              },
                            }}
                          >
                            <img src={thumbnail} alt={name} />

                            <Box
                              sx={{
                                ml: '10px',
                                fontFamily: 'Domine, serif',
                                fontSize: '14px',
                                '& .title-preview': {
                                  fontSize: '16px',
                                  letterSpacing: '0.5px',
                                  width: {
                                    xs: '180px',
                                    sm: '250px',
                                  },
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  mb: '5px',
                                },
                              }}
                            >
                              <h4 className='title-preview'>{name}</h4>
                              <p>{platform}</p>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sm={6}
                          sx={{
                            color: 'white',
                            pb: {
                              xs: 1,
                              sm: 'unset',
                            },
                          }}
                          display='flex'
                          alignItems='center'
                          justifyContent='space-between'
                        >
                          {/* quantity */}
                          <Box
                            display={'flex'}
                            alignItems='center'
                            sx={{
                              '& .quantity-cart': {
                                width: '18px',
                                textAlign: 'center',
                              },
                            }}
                          >
                            <Button
                              sx={{
                                color: '#fe59d7',
                                justifyContent: 'flex-end',
                                minWidth: {
                                  xs: '45px',
                                  sm: '64px',
                                },
                                '&.Mui-disabled': {
                                  color: '#bb2497',
                                },
                              }}
                              disabled={quantity === 1}
                              onClick={() => decreaseItem(id)}
                            >
                              <RemoveCircleOutlineIcon />
                            </Button>
                            <p className='quantity-cart'>{quantity}</p>
                            <Button
                              sx={{
                                color: '#fe59d7',
                                justifyContent: 'flex-start',
                                minWidth: {
                                  xs: '45px',
                                  sm: '64px',
                                },
                                '&.Mui-disabled': {
                                  color: '#bb2497',
                                },
                              }}
                              disabled={amount >= 13 || quantity === 6}
                              onClick={() => increaseItem(id)}
                            >
                              <AddCircleOutlineIcon />
                            </Button>
                          </Box>
                          {/* price */}
                          <Box
                            display={'flex'}
                            sx={{ width: '150px', justifyContent: 'center' }}
                          >
                            <Box
                              sx={{
                                '& .cost-price': {
                                  fontSize: discountPrice > 0 ? '14px' : '16px',
                                  color:
                                    discountPrice > 0 ? 'unset' : '#fe59d7',
                                  textDecoration: discountPrice
                                    ? 'line-through'
                                    : 'unset',
                                  textAlign: 'right',
                                },

                                '& .reduced-price': {
                                  fontSize: '16px',
                                  color: '#fe59d7',
                                  textAlign: 'right',
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
                                  textAlign: 'center',
                                }}
                              >
                                {parseFloat(discountPercent)}%
                              </Box>
                            ) : (
                              ''
                            )}
                          </Box>
                          {/* delete */}
                          <Button
                            sx={{
                              justifyContent: 'center',
                              color: 'white',
                              minWidth: {
                                xs: '50px',
                                sm: '64px',
                              },
                            }}
                            onClick={() => removeCartItem(id)}
                          >
                            <DeleteIcon />
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  );
                })}
              </Box>
              <Box sx={{ mt: 3 }}>
                <Typography variant='h4' fontSize={'1.875rem'}>
                  Vouchers & Gift Cards
                </Typography>
                {displayErrorVoucher && (
                  <Alert severity='error' sx={{ mb: 2 }}>
                    Sorry your Vouchers is not correct{' '}
                  </Alert>
                )}
                <Box
                  component='form'
                  onSubmit={handleSubmitVoucher}
                  display={'flex'}
                  sx={{
                    alignItems: {
                      xs: 'flex-start',
                      sm: 'center',
                    },
                    justifyContent: {
                      xs: 'flex-start',
                      sm: 'space-between',
                    },
                    flexDirection: {
                      xs: 'column',
                      sm: 'unset',
                    },
                    mt: 1,
                    p: 2,
                    borderRadius: '5px',
                    bgcolor: ' black',
                    color: 'white',
                    '& span': {
                      fontSize: '18px',
                      textTransform: 'capitalize',
                    },
                    '& input': {
                      width: {
                        xs: '100%',
                        sm: 'auto',
                      },
                      height: '40px',
                      fontSize: '18px',
                      my: {
                        xs: 2,
                        sm: 0,
                      },
                      textAlign: {
                        xs: 'left',
                        sm: 'center',
                      },
                      pl: {
                        xs: 1,
                        sm: 0,
                      },
                    },
                  }}
                >
                  <Typography variant='h5'>Enter voucher</Typography>
                  <input
                    type='text'
                    maxLength={15}
                    value={voucher}
                    onChange={(e) => setVoucher(e.target.value)}
                  />
                  <Button
                    type='submit'
                    variant='contained'
                    sx={{
                      bgcolor: '#13c113',
                      '&:active': {
                        bgcolor: ' #13c113',
                      },
                      '&:hover': {
                        bgcolor: ' #13c113',
                      },
                    }}
                  >
                    Apply
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Grid>

        <Grid item xs={12} md={3} sx={{ color: 'white' }}>
          <CartSummary processTitle={'go to payment'} path={'payment'} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
