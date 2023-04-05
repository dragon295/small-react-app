import React from 'react';

import { useGlobalCart } from '../../cart-context';

import { Box, Button, Typography, Divider } from '@mui/material';

import { Link } from 'react-router-dom';

import { useStepCard } from './CartContainer';

const CartSummary = ({ processTitle, path, submit }) => {
  const { cart, clearCart, checkVoucherVal } = useGlobalCart();
  const { handleNext } = useStepCard();

  const formatter = new Intl.NumberFormat('vn', {
    style: 'currency',
    currency: 'VND',
  });

  let showFullPrice = cart.reduce(
    (cartTotal, cartItem) => {
      const { price, quantity } = cartItem;
      const itemTotal = price * quantity;
      cartTotal.total += itemTotal;
      return cartTotal;
    },
    { total: 0 }
  ).total;

  let showDiscountPrice = cart.reduce(
    (cartTotal, cartItem) => {
      const { discountPrice, quantity, price } = cartItem;
      const itemTotal =
        discountPrice > 0 ? (price - discountPrice) * quantity : 0 * quantity;
      cartTotal.total += itemTotal;
      return cartTotal;
    },
    { total: 0 }
  ).total;

  const temporaryPrice = showFullPrice - showDiscountPrice;

  const finalPrice = checkVoucherVal
    ? (temporaryPrice / 100) * 50
    : temporaryPrice;

  const finalStep = () => {
    handleNext(path);
    clearCart();
  };

  return (
    <div>
      <Typography variant='h5' bgcolor={'#494a4f'} sx={{ p: 2, mt: 1 }}>
        Cart Summary
      </Typography>
      <Box
        sx={{
          bgcolor: 'black',
          p: 2,
          '& .summary-products, & .vouchers': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            textTransform: 'capitalize',
            mb: 2,
          },

          '& .total-products': {
            color: '#fe59d7',
            fontWeight: 700,
            mt: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            textTransform: 'uppercase',
            '& span': {
              fontSize: '20px',
            },
            '& p': {
              fontSize: '20px',
            },
          },
          '& .vouchers': {
            color: '#fe59d7',
            '& span': {
              fontSize: '18px',
            },
          },
          '& .refund-policy': {
            mt: 1,
            fontSize: '13px',
            lineHeight: '20px',
            '& span': {
              textTransform: 'capitalize',
            },
          },
        }}
      >
        <Box className='summary-products'>
          <p>full price</p>
          <span>{formatter.format(showFullPrice)}</span>
        </Box>

        {showDiscountPrice ? (
          <>
            <Box className='summary-products'>
              <p>your discount</p>
              <span>-{formatter.format(showDiscountPrice)}</span>
            </Box>
            <Box className='summary-products'>
              <p>temporary</p>
              <span>{formatter.format(temporaryPrice)}</span>
            </Box>
          </>
        ) : (
          ''
        )}

        {checkVoucherVal && cart.length > 0 ? (
          <>
            <Divider sx={{ bgcolor: ' white', mb: 2 }} />
            <Box className='vouchers'>
              <p>Voucher</p>
              <span>-50%</span>
            </Box>
          </>
        ) : (
          ''
        )}

        <Divider sx={{ bgcolor: ' white', mb: 1 }} />
        <Box className='total-products'>
          <p>total</p>
          <span>{formatter.format(finalPrice)}</span>
        </Box>
        {processTitle === 'go to payment' ? (
          <Button
            disabled={cart.length === 0}
            fullWidth
            variant='contained'
            sx={{
              mt: 2,
              bgcolor: '#fe59d7',
              '&:active': {
                bgcolor: ' #fe59d7',
              },
              '&:hover': {
                bgcolor: ' #fe59d7',
              },
              '&.Mui-disabled': {
                bgcolor: '#525252',
                color: 'rgba(0, 0, 0, 0.65)',
              },
            }}
            onClick={() => handleNext(path)}
          >
            {processTitle}
          </Button>
        ) : (
          <Button
            disabled={!submit}
            fullWidth
            variant='contained'
            sx={{
              mt: 2,
              bgcolor: '#fe59d7',
              '&:active': {
                bgcolor: ' #fe59d7',
              },
              '&:hover': {
                bgcolor: ' #fe59d7',
              },
              '&.Mui-disabled': {
                bgcolor: '#525252',
                color: 'rgba(0, 0, 0, 0.65)',
              },
            }}
            onClick={() => finalStep()}
          >
            {processTitle}
          </Button>
        )}

        <p className='refund-policy'>
          By clicking <span>{processTitle}</span>, you accept our{' '}
          <Link to={'/policies/refund-policy'}>Refund Policy</Link>
        </p>
      </Box>
    </div>
  );
};

export default CartSummary;
