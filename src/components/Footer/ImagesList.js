import React from 'react';

import { Typography, Box, ImageList, ImageListItem } from '@mui/material';

import CollectionsIcon from '@mui/icons-material/Collections';

import { CustomImgList } from './customTheme';

import { Link } from 'react-router-dom';

import imgFooter1 from '../../assets/footer/gaming-footer-1.jpg';
import imgFooter2 from '../../assets/footer/gaming-footer-2.jpg';
import imgFooter3 from '../../assets/footer/gaming-footer-3.jpg';
import imgFooter4 from '../../assets/footer/gaming-footer-4.jpg';
import imgFooter5 from '../../assets/footer/gaming-footer-5.jpg';
import imgFooter6 from '../../assets/footer/gaming-footer-6.jpg';

const imageListFooter = [
  {
    url: `${imgFooter1}`,
    title: 'gaming-footer-1',
  },
  {
    url: `${imgFooter2}`,
    title: 'gaming-footer-2',
  },
  {
    url: `${imgFooter3}`,
    title: 'gaming-footer-3',
  },
  {
    url: `${imgFooter4}`,
    title: 'gaming-footer-4',
  },
  {
    url: `${imgFooter5}`,
    title: 'gaming-footer-5',
  },
  {
    url: `${imgFooter6}`,
    title: 'gaming-footer-6',
  },
];

const ImagesList = ({ headerTag }) => {
  return (
    <>
      <Typography variant='h5' sx={headerTag}>
        <Box component='div' display='inline'>
          <CollectionsIcon />
        </Box>
        New images
      </Typography>
      <CustomImgList>
        <ImageList
          sx={{
            width: '100%',
            height: 260,
            mt: 2,
          }}
          rowHeight='auto'
          gap={6}
        >
          {imageListFooter.map((item) => (
            <Link to='/' key={item.url}>
              <ImageListItem>
                <img
                  src={`${item.url}`}
                  srcSet={`${item.url}`}
                  alt={item.title}
                  loading='lazy'
                />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </CustomImgList>
    </>
  );
};

export default ImagesList;
