import React, { forwardRef, useState } from 'react';

import ListSearch from './ListSearch';

import { useGlobalCart } from '../../../cart-context';
import {
  Box,
  IconButton,
  Typography,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { useNavigate } from 'react-router-dom';
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const SearchModal = ({ openModal, handleOpenModal, handleCloseModal }) => {
  const { setSearchProducts } = useGlobalCart();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const closeSearchModal = () => {
    handleCloseModal();
    setSearchValue('');
  };

  const getSearchProducts = (e) => {
    e.preventDefault();
    closeSearchModal();

    setSearchProducts(searchValue.trim());

    searchValue
      ? navigate({
          pathname: '/search',
          search: `?q=${searchValue}`,
        })
      : navigate('/search');
  };

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Button
        onClick={handleOpenModal}
        sx={{
          color: 'inherit',
          ml: -2,
          outline: 'none',
          '& span': {
            bgColor: 'transparent',
          },
        }}
      >
        <SearchIcon />
      </Button>

      <Dialog
        fullScreen={fullScreen}
        fullWidth={true}
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseModal}
        aria-describedby='dialog-slide-description'
      >
        <DialogContent
          sx={{
            p: {
              xs: '20px',
              sm: '20px 24px',
            },
          }}
        >
          <Box id='dialog-slide-description'>
            <Typography
              id='modal-modal-title'
              variant='h6'
              component='h2'
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              Search something
              <CloseIcon
                onClick={handleCloseModal}
                sx={{ cursor: 'pointer' }}
              />
            </Typography>

            <Box
              component='form'
              sx={{ mt: 2, display: 'flex' }}
              onSubmit={getSearchProducts}
            >
              <FormControl fullWidth>
                <InputLabel
                  htmlFor='Search something'
                  sx={{
                    '&.Mui-focused': {
                      color: '#fe59d7',
                    },
                  }}
                >
                  Search something...
                </InputLabel>
                <OutlinedInput
                  id='search'
                  label='Search something'
                  type='text'
                  value={searchValue}
                  inputProps={{ maxLength: 30 }}
                  onChange={(e) => setSearchValue(e.target.value)}
                  endAdornment={
                    <>
                      <InputAdornment position='end'>
                        {searchValue ? (
                          <IconButton onClick={() => setSearchValue('')}>
                            <CloseIcon />
                          </IconButton>
                        ) : (
                          ''
                        )}
                      </InputAdornment>
                      <Button
                        type='submit'
                        sx={{
                          height: '100%',
                          backgroundColor: '#fe59d7',
                          color: 'white',
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#fe59d7',
                          },
                        }}
                      >
                        <SearchIcon />
                      </Button>
                    </>
                  }
                  sx={{
                    pr: 0,
                    outline: 'none',
                    '& fieldset': {
                      borderColor: '#fe59d7 !important',
                    },
                  }}
                />
              </FormControl>
            </Box>

            {/* <ListSearch searchValue={searchValue} /> */}
          </Box>
          <DialogActions sx={{ p: '0', mt: 2 }}>
            <Button variant='outlined' onClick={closeSearchModal}>
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default SearchModal;
