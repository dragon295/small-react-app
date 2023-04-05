import React from 'react';

import HeaderMainBlog from '../HeaderMainBlog';
import SmallCard from '../SmallCard';

import { Grid } from '@mui/material';

import imgMainBlog5 from '../../../../assets/body/blog/img-main-blog-5.jpg';
import imgMainBlog6 from '../../../../assets/body/blog/img-main-blog-6.jpg';
import imgMainBlog7 from '../../../../assets/body/blog/img-main-blog-7.jpg';
import imgMainBlog8 from '../../../../assets/body/blog/img-main-blog-8.jpg';
import imgMainBlog10 from '../../../../assets/body/blog/img-main-blog-10.jpg';
import imgMainBlog11 from '../../../../assets/body/blog/img-main-blog-11.jpg';

const Trending = () => {
  return (
    <div>
      <HeaderMainBlog titleHeader={"what's trending"} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <SmallCard imgCard={imgMainBlog5} />
          <SmallCard imgCard={imgMainBlog6} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SmallCard imgCard={imgMainBlog7} />
          <SmallCard imgCard={imgMainBlog8} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SmallCard imgCard={imgMainBlog11} />
          <SmallCard imgCard={imgMainBlog10} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Trending;
