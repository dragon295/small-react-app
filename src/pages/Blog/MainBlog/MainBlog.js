import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import DontMiss from './First/DontMiss';
import Trending from './Sec/Trending';
import GeneralNews from './Third/GeneralNews';
import MasonryBlog from './Fourth/MasonryBlog';

import { Box, Button, Typography, CircularProgress } from '@mui/material';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { Divider } from '@mui/material';

const MainBlog = () => {
  const [page, setPage] = useState(1);
  const [loadingBlog, setLoadingBlog] = useState(true);
  const [masonry, setMasonry] = useState([]);

  const getInfiniteBlog = useCallback(async () => {
    const searchUrl = `https://api.unsplash.com/search/photos/`;
    const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
    const pageUrl = `&page=${page}`;
    const queryUrl = `&query=game`;
    let url = `${searchUrl}${clientID}${pageUrl}${queryUrl}`;
    setLoadingBlog(true);
    try {
      const { data } = await axios.get(url);

      setMasonry((oldImages) => {
        if (page === 1) {
          return data.results.filter((item) => item.urls !== 'undefined');
        } else {
          return [...oldImages, ...data.results];
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingBlog(false);
    }
  }, [page]);

  useEffect(() => {
    getInfiniteBlog();
  }, [getInfiniteBlog]);

  return (
    <>
      <DontMiss />

      <Divider sx={{ my: 2, bgcolor: '#fe59d7' }} />

      <Trending />

      <Divider sx={{ my: 1.5, mb: 0.5, bgcolor: '#fe59d7' }} />

      <GeneralNews />

      <Divider sx={{ my: 1.5, mb: 3.5, bgcolor: '#fe59d7' }} />

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter='1rem'>
          {masonry.map((dataImg) => {
            return <MasonryBlog key={dataImg.id} {...dataImg} />;
          })}
        </Masonry>
      </ResponsiveMasonry>

      <Box sx={{ textAlign: 'center', my: 3 }}>
        {loadingBlog ? (
          <Typography variant='h5' textAlign='center'>
            <CircularProgress color='success' />
          </Typography>
        ) : (
          <Button
            variant='contained'
            onClick={() => setPage((prevPage) => prevPage + 1)}
            sx={{
              bgcolor: '#fe59d7',
              color: 'white',
              transition: 'all 0.5s ease',
              border: '1px solid #fe59d7',
              '&:hover': {
                boxShadow: 0,
                bgcolor: 'transparent',
                border: '1px solid #fe59d7',
                color: '#fe59d7',
                '& a': {
                  color: '#fe59d7',
                },
              },
            }}
          >
            see more
          </Button>
        )}
      </Box>
    </>
  );
};

export default MainBlog;
