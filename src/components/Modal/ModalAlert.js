import { Modal, Typography, Box, Fade } from '@mui/material';
import { useGlobalCart } from '../../cart-context';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ModalAlert = () => {
  const { cart, amount, addCart } = useGlobalCart();
  return (
    <Modal
      open={addCart}
      closeAfterTransition
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Fade in={addCart}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'black',
            color: 'white',
            border: '2px solid #000',
            boxShadow: 24,
            borderRadius: '5px',
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography id='modal-modal-title' variant='h3'>
            {amount === 13 ||
            cart.filter((item) => item.quantity === 6).length > 0 ? (
              <HighlightOffIcon sx={{ fontSize: '3rem', color: 'red' }} />
            ) : (
              <CheckCircleIcon sx={{ fontSize: '3rem', color: 'green' }} />
            )}
          </Typography>
          <Typography id='modal-modal-description' variant='h5' sx={{ mt: 2 }}>
            {amount === 13 ||
            cart.filter((item) => item.quantity === 6).length > 0
              ? 'Please complete your order first'
              : 'Successfully added to cart'}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalAlert;
