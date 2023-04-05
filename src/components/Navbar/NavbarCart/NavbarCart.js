import React, { useRef, useEffect } from 'react';

import { useGlobalCart } from '../../../cart-context';
import { Box, Button, Card, Badge } from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link, useLocation } from 'react-router-dom';

const NavbarCart = () => {
  const { cart, amount, removeCartItem } = useGlobalCart();
  const location = useLocation();
  const refScroll = useRef(null);

  useEffect(() => {
    refScroll.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <>
      <Box
        sx={{
          pl: 2,
          pr: 3,
          ml: -2,
          color: 'inherit',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          textTransform: 'capitalize',
          borderRadius: '30px',
          transition:
            'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          '&:hover > .cartPreview, &:hover > .cartPreview-sub': {
            visibility: 'visible',
            opacity: '1',
            transition: 'all 0.25s ease-in-out',
          },
          '& > .cartPreview, & > .cartPreview-sub': {
            visibility: 'hidden',
            opacity: '0',
          },
          '& > .cartPreview': {
            p: '20px',
            minWidth: '380px',
            width: 'auto',
            maxHeight: '350px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: '50px',
            right: '30%',
            background: '#0f770f',
            zIndex: '80',
            boxShadow: '0px 5px 5px rgb(0 0 0 / 30%)',
            borderRadius: '5px',
          },
          '& > .cartPreview-sub': {
            position: 'absolute',
            zIndex: 'inherit',
            bottom: '-31px',
            right: '20px',
            borderWidth: '20px',
            borderStyle: 'solid',
            borderColor: 'transparent transparent #0f770f transparent',
          },
        }}
      >
        <Link to='/cart' style={{ color: 'inherit' }}>
          {' '}
          <Badge
            badgeContent={amount}
            sx={{ '& span': { bgcolor: 'red', width: '20px', color: 'white' } }}
          >
            <ShoppingCartIcon
              sx={{
                mr: '1px',
              }}
            />
          </Badge>
        </Link>
        <Box className='cartPreview-sub'></Box>
        <Card className='cartPreview'>
          <Box
            component={'ul'}
            ref={refScroll}
            sx={{
              overflow: 'hidden',
              overflowY: 'auto',
              '& .empty-cart-notify': {
                width: '100%',
                textAlign: 'center',
                color: 'white',
              },
            }}
          >
            {amount > 0 ? (
              cart.map((item) => (
                <Box
                  key={item.id}
                  component={'li'}
                  sx={{
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    component={Link}
                    to={'cart'}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      '& img': {
                        maxWidth: '100%',
                        width: '35%',
                      },
                      '& > p': {
                        color: 'white',
                        fontSize: '14px',
                        fontFamily: 'Domine, serif',
                      },
                      '& .title-preview': {
                        ml: '10px',
                        width: '150px',
                        wordWrap: 'break-word',
                        lineHeight: '20px',
                      },
                      '& .quantity-preview': {
                        ml: 2.5,
                      },
                    }}
                  >
                    <img src={item.thumbnail} alt={item.name} />
                    <p className='title-preview'>{item.name}</p>
                    <p className='quantity-preview'>{item.quantity}</p>
                  </Box>
                  <Button
                    sx={{ justifyContent: 'flex-end', color: 'white', pr: 0 }}
                    onClick={() => removeCartItem(item.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </Box>
              ))
            ) : (
              <h2 className='empty-cart-notify'>Your cart is empty!</h2>
            )}
          </Box>

          {amount > 0 && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                variant='contained'
                component={Link}
                to='cart'
                sx={{
                  bgcolor: '#fe59d7',
                  mt: cart.length <= 4 ? -1 : 2,

                  '&:active': {
                    bgcolor: ' #fe59d7',
                  },
                  '&:hover': {
                    bgcolor: ' #fe59d7',
                  },
                }}
              >
                View Cart
              </Button>
            </Box>
          )}
        </Card>
      </Box>
    </>
  );
};

export default NavbarCart;
