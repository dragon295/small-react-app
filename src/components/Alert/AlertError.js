import React, { useState, useEffect } from 'react';

import { useGlobalCart } from '../../cart-context';
import { Alert } from '@mui/material';

const AlertError = ({ noMarginTop }) => {
  const { amount, cart } = useGlobalCart();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    amount === 13 || cart.filter((item) => item.quantity === 6).length > 0
      ? setOpen(true)
      : setOpen(false);
  }, [amount, cart]);

  return (
    <>
      {amount === 13 || cart.filter((item) => item.quantity === 6).length > 0
        ? open && (
            <Alert
              severity='error'
              sx={{
                my: 2,
                mt: noMarginTop && 0,
                widows: '100%',
                alignItems: 'center',
              }}
              onClose={() => setOpen((prev) => !prev)}
            >
              Please complete your order if you want to add more games to your
              cart
            </Alert>
          )
        : ''}
    </>
  );
};

export default AlertError;
