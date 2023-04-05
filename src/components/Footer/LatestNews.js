import React from 'react';

import { Typography, Box } from '@mui/material';

import FeedIcon from '@mui/icons-material/Feed';

import { Link } from 'react-router-dom';

import newsFooter1 from '../../assets/footer/news-footer-1.jpg';
import newsFooter2 from '../../assets/footer/news-footer-2.jpg';

const latestNews = [
  {
    url: '/blog/detail-blog',
    img: newsFooter1,
    title: 'Even the all-powerful Pointing has no control about',
    date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    createdBy: 'admin',
  },
  {
    url: '/blog/detail-blog',
    img: newsFooter2,
    title: 'Even the all-powerful Pointing has no control about',
    date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    createdBy: 'the sad',
  },
];

const linkNews = {
  color: '#ffffff80',
  fontWeight: 400,
  lineHeight: 1.5,
  display: 'flex',
  justifyContent: 'space-between',
  textTransform: 'capitalize',
  marginBottom: '10px',
  transition: '.5s ease-in-out',
  '&:hover': {
    color: '#fe59d7',
  },
  '& img': {
    width: '100px',
    height: '70px',
    borderRadius: '0.25rem',
    marginRight: '1.25rem',
    marginTop: '4px',
  },
};

const LatestNews = ({ headerTag }) => {
  return (
    <>
      <Typography variant='h5' sx={headerTag}>
        <Box component='div' display='inline'>
          <FeedIcon />
        </Box>
        Latest News
      </Typography>
      <Box component='div' display='block' sx={{ mt: 2 }}>
        {latestNews.map((item) => (
          <Box
            component={Link}
            key={item.createdBy}
            to={item.url}
            sx={linkNews}
          >
            <img src={item.img} alt='news' />
            <Box>
              <Typography>{item.title}</Typography>
              <Box
                component='div'
                sx={{
                  display: 'flex',
                  mt: 1,
                }}
              >
                <Typography sx={{ mr: 1, fontSize: '14px' }}>
                  {item.date}
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  {item.createdBy}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default LatestNews;
