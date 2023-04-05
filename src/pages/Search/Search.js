import React from 'react';

import AlertError from '../../components/Alert/AlertError';
import ModalAlert from '../../components/Modal/ModalAlert';
import Products from '../Products/Products';

import { useGlobalCart } from '../../cart-context';

import SortCriteria from './SortCriteria';

import {
  Container,
  Grid,
  Typography,
  Stack,
  Pagination,
  Box,
} from '@mui/material';

import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const getSearchQuery = searchParams.get('s');

  const { allData, page, handleChangePage, addCart } = useGlobalCart();

  return (
    <Container component={'section'} sx={{ mt: 12 }}>
      {getSearchQuery ? (
        <Typography variant='h5' sx={{ mb: 1, fontSize: '1.625rem' }}>
          Search result for: {getSearchQuery}
        </Typography>
      ) : (
        <Typography variant='h5' sx={{ mb: 1, fontSize: '1.625rem' }}>
          All products
        </Typography>
      )}

      {addCart ? <ModalAlert /> : ''}

      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} md={2.5}>
          <SortCriteria />
        </Grid>

        <Grid item xs={12} sm={9} md={9.5}>
          <AlertError noMarginTop />
          <Products />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {' '}
            {allData.length > 0 && (
              <Stack spacing={2} my={4}>
                <Pagination
                  count={Math.ceil(allData.length / 9)}
                  showFirstButton
                  showLastButton
                  sx={{
                    '& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected, & .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover':
                      {
                        bgcolor: '#fe59d7 ',
                        color: 'white',
                      },
                  }}
                  page={page}
                  onChange={(e, value) => handleChangePage(value)}
                />
              </Stack>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Search;
