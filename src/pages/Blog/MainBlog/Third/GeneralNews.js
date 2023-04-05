import React from 'react';

import HeaderMainBlog from '../HeaderMainBlog';
import SmallCard from '../SmallCard';
import FullCardContent from '../FullCardContent';

import { Grid } from '@mui/material';

// import imgMainBlog12 from '../../../../assets/body/blog/img-main-blog-12.jpg';
import imgMainBlog13 from '../../../../assets/body/blog/img-main-blog-13.jpg';
import imgMainBlog14 from '../../../../assets/body/blog/img-main-blog-14.jpg';
import imgMainBlog15 from '../../../../assets/body/blog/img-main-blog-15.jpg';
import imgMainBlog16 from '../../../../assets/body/blog/img-main-blog-16.jpg';
import imgMainBlog17 from '../../../../assets/body/blog/img-main-blog-17.jpg';
import imgMainBlog18 from '../../../../assets/body/blog/img-main-blog-18.jpg';
import imgMainBlog19 from '../../../../assets/body/blog/img-main-blog-19.jpg';

// const textValue =
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const GeneralNews = () => {
  return (
    <>
      <HeaderMainBlog titleHeader={'general news'} disabled={true} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <SmallCard imgCard={imgMainBlog19} />
          <FullCardContent imgCard={imgMainBlog13} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FullCardContent imgCard={imgMainBlog14} />
          <SmallCard imgCard={imgMainBlog15} />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <SmallCard imgCard={imgMainBlog16} />
        </Grid>
        <Grid item xs={12}>
          <SmallCard imgCard={imgMainBlog17} />
        </Grid>
        <Grid item xs={12}>
          <SmallCard imgCard={imgMainBlog18} />
        </Grid>
      </Grid>
    </>
  );
};

export default GeneralNews;
