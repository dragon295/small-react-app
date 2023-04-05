import React from 'react';

import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

import NewspaperIcon from '@mui/icons-material/Newspaper';

import { Link } from 'react-router-dom';

const linkListFooter = [
  {
    url: '/about',
    title: 'about',
  },
  {
    url: '/products',
    title: 'products',
  },
  {
    url: '/blog',
    title: 'blog',
  },
  {
    url: '/contact',
    title: 'contact',
  },
  {
    url: '/policies',
    title: 'our policies',
  },
];

const linkList = {
  width: '100%',
  textTransform: 'capitalize',
  '& > *': {
    color: '#ffffff80',
    paddingLeft: 0,
    '&:hover': {
      color: '#fe59d7',
      transition: '.5s ease-in-out',
    },
    '& span': {
      fontSize: '18px',
    },
  },
};

const Information = ({ headerTag }) => {
  return (
    <>
      <Typography variant='h5' sx={headerTag}>
        <Box component='div' display='inline'>
          <NewspaperIcon />
        </Box>
        Information
      </Typography>
      <List sx={linkList}>
        {linkListFooter.map((listItem) => (
          <ListItem key={listItem.title} component={Link} to={listItem.url}>
            <ListItemText>{listItem.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Information;
