import React from 'react';

import { Box, Typography } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Link } from 'react-router-dom';

const listTag = [
  { id: 'tag-category-1', title: 'Action' },
  { id: 'tag-category-2', title: 'Free' },
  { id: 'tag-category-3', title: 'Indie' },
  { id: 'tag-category-4', title: 'Racing' },
  { id: 'tag-category-5', title: 'Sports' },
];

const moreTag = [
  { id: 'more-tag-1', title: 'Simulation' },
  { id: 'more-tag-2', title: 'Racing' },
  { id: 'more-tag-3', title: 'Adventure' },
  { id: 'more-tag-4', title: 'Horror' },
  { id: 'more-tag-5', title: 'RPG' },
  { id: 'more-tag-6', title: 'Strategy' },
];

const HeaderMainBlog = ({ titleHeader, disabled }) => {
  return (
    <header>
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant='h2'
          sx={{
            fontSize: '24px',
            fontWeight: 'bold',
            pl: '0 !important',
            position: 'relative',

            '&::after': {
              display: !disabled ? 'block' : 'none',
              position: 'absolute',
              bottom: '8px',
              left: '0',
              width: '50px',
              height: '2px',
              background: 'black',
              content: '""',
            },
          }}
        >
          {titleHeader}
        </Typography>
        {disabled ? (
          ''
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              '& .list-tag': {
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                listStyleType: 'none',
              },
              '& .list-tag li': {
                textTransform: 'capitalize',
                cursor: 'pointer',
                px: 2,
                py: 1,
                mx: 1,
                borderRadius: '30px',
                bgcolor: '#ededed',
                transition:
                  'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                '&:hover': {
                  bgcolor: 'rgba(25, 118, 210, 0.04)',
                },
              },
              '& .list-tag a': {
                color: 'rgba(0,0,0,0.65)',
              },
            }}
          >
            <ul className='list-tag'>
              {listTag.map((item) => {
                return (
                  <li key={item.id}>
                    <Link to=''>{item.title}</Link>
                  </li>
                );
              })}
            </ul>

            <Box
              sx={{
                position: 'relative',
                '& > .moreTag': {
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  color: 'rgba(0,0,0,0.65)',
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                  px: 2,
                  py: 1,
                  mx: 1,
                  borderRadius: '30px',
                  bgcolor: '#ededed',
                  transition:
                    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  '&:hover': {
                    bgcolor: 'rgba(25, 118, 210, 0.04)',
                  },
                  '&:hover > .moreTagContent': {
                    visibility: 'visible',
                    opacity: '1',
                  },
                  '& > .moreTagContent': {
                    listStyleType: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: '50px',
                    right: -8,
                    py: '20px',
                    pb: 1,
                    pl: '29px',
                    pr: '40px',
                    background: '#f7f7f7',
                    boxShadow: '0px 5px 5px rgb(0 0 0 / 10%)',
                    visibility: 'hidden',
                    opacity: '0',
                    zIndex: '80',
                    transition: 'all 0.25s ease-in-out',
                    '& li': {
                      mb: 2,
                      fontSize: '12px',
                      fontWeight: '500',
                      color: 'rgba(0,0,0,0.4)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.025em',
                      transition: 'all 0.25s ease-in-out',
                      '&:hover > a': {
                        color: 'black',
                        transition: 'all 0.25s ease-in-out',
                      },
                      '& a': {
                        color: 'rgba(0,0,0,0.65)',
                      },
                    },
                  },
                },
              }}
            >
              <span className='moreTag'>
                more
                <ExpandMoreIcon />
                <ul className='moreTagContent'>
                  {moreTag.map((item) => (
                    <li key={item.id}>
                      <Link to=''>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </span>
            </Box>
          </Box>
        )}
      </Box>
    </header>
  );
};

export default HeaderMainBlog;
