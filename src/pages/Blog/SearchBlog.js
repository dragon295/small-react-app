import React from 'react';

import SmallCard from './MainBlog/SmallCard';
import FullCardContent from './MainBlog/FullCardContent';

import { Box, Grid } from '@mui/material';

import imgSearchBlog7 from '../../assets/body/blog/img-main-blog-7.jpg';
import imgSearchBlog8 from '../../assets/body/blog/img-main-blog-8.jpg';
import imgSearchBlog10 from '../../assets/body/blog/img-main-blog-10.jpg';
import imgSearchBlog11 from '../../assets/body/blog/img-main-blog-11.jpg';
import imgSearchBlog12 from '../../assets/body/blog/img-main-blog-12.jpg';
import imgSearchBlog13 from '../../assets/body/blog/img-main-blog-13.jpg';
import imgSearchBlog15 from '../../assets/body/blog/img-main-blog-15.jpg';
import imgSearchBlog18 from '../../assets/body/blog/img-main-blog-18.jpg';

const searchBlogs = [
  {
    img: imgSearchBlog10,
  },
  {
    img: imgSearchBlog7,
  },
  {
    img: imgSearchBlog11,
  },
  {
    img: imgSearchBlog8,
  },
  {
    img: imgSearchBlog18,
  },
  {
    img: imgSearchBlog13,
  },
  {
    img: imgSearchBlog12,
  },
  {
    img: imgSearchBlog15,
  },
];

const SearchBlog = ({ searchValue }) => {
  return (
    <section>
      <Box
        sx={{
          '& h2': {
            py: 2,
            pb: 1,
          },
        }}
      >
        <h2>search result blog: {searchValue}</h2>
      </Box>
      <Box sx={{ height: '2px', bgcolor: 'black', width: '15%', mb: 2 }}></Box>
      <Grid container spacing={2}>
        {searchBlogs.map((item) => (
          <Grid item xs={12} sm={4} key={item.img}>
            <SmallCard imgCard={item.img} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default SearchBlog;
