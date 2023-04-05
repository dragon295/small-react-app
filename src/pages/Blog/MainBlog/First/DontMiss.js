import React from 'react';

import HeaderMainBlog from '../HeaderMainBlog';
import SmallCard from '../SmallCard';
import FullCardContent from '../FullCardContent';

import { Grid } from '@mui/material';

import imgMainBlog1 from '../../../../assets/body/blog/img-main-blog-1.jpg';
import imgMainBlog2 from '../../../../assets/body/blog/img-main-blog-2.jpg';
import imgMainBlog3 from '../../../../assets/body/blog/img-main-blog-3.jpg';
import imgMainBlog4 from '../../../../assets/body/blog/img-main-blog-4.jpg';

const DontMiss = () => {
  return (
    <div>
      <HeaderMainBlog titleHeader={"don't miss"} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <FullCardContent imgCard={imgMainBlog1} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <SmallCard imgCard={imgMainBlog2} />
          <SmallCard imgCard={imgMainBlog3} />
          <SmallCard imgCard={imgMainBlog4} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DontMiss;
