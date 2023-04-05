import React from 'react';

import CarouselHeader from '../../components/CarouselHeader/CarouselHeader';
import MainBlog from './MainBlog/MainBlog';
import SidebarBlog from './Sidebar/SidebarBlog';
import SearchBlog from './SearchBlog';

import { Box, Container, Grid } from '@mui/material';

import { Link, useSearchParams } from 'react-router-dom';

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const searchVal = searchParams.get('sb');

  return (
    <Box component={'section'}>
      <CarouselHeader />
      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            '& h2': {
              py: 2,
              pr: 2,
              textTransform: 'capitalize',
            },
          }}
        >
          {searchVal ? (
            <Grid
              item
              xs={12}
              md={9}
              sx={{
                pt: {
                  xs: 'auto',
                  md: '50px !important',
                },
              }}
            >
              <SearchBlog searchValue={searchVal} />
            </Grid>
          ) : (
            <Grid
              item
              xs={12}
              md={9}
              sx={{
                pt: {
                  xs: 'auto',
                  md: '50px !important',
                },
              }}
            >
              <MainBlog />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              pt: {
                xs: 'auto',
                md: '50px !important',
              },
              background: '#ededed',
              height: '100%',
              position: {
                xs: 'unset',
                md: 'sticky',
              },
              top: '0',
              right: 0,
              overflowX: 'hidden',
            }}
          >
            <SidebarBlog />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
