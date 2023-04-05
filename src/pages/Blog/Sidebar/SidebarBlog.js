import React, { useState } from 'react';

import BannerBlogImages from './BannerBlogImages';

import CarouselSidebar from './CarouselSidebar';

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  InputBase,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { Link, useNavigate } from 'react-router-dom';

import SidebarBlogImg1 from '../../../assets/body/blog/sidebar-banner-1.jpg';
import SidebarBlogImg2 from '../../../assets/body/blog/sidebar-banner-2.jpg';

import moment from 'moment/moment';

import SmallBlog1 from '../../../assets/body/blog/img-main-blog-20.jpg';
import SmallBlog2 from '../../../assets/body/blog/img-main-blog-21.jpg';
import SmallBlog3 from '../../../assets/body/blog/img-main-blog-22.jpg';
import SmallBlog4 from '../../../assets/body/blog/img-main-blog-23.jpg';

let items = [
  [
    {
      id: new Date().getTime + 1,
      url: '/about',
      img: SmallBlog1,
      title: 'Even the all-powerful Pointing has no control about',
      date: moment()
        .set({ year: 2022, month: 11, date: 30 })
        .format('D MMM YYYY'),
      createdBy: 'admin',
    },
    {
      id: new Date().getTime + 2,
      url: '/',
      img: SmallBlog2,
      title: 'Hard choices, easy life. Easy choices, hard life.',
      date: moment()
        .set({ year: 2022, month: 10, date: 9 })
        .format('D MMM YYYY'),
      createdBy: 'the sad',
    },
    {
      id: new Date().getTime + 3,
      url: '/about',
      img: SmallBlog3,
      title: 'Even the all-powerful Pointing has no control about',
      date: moment()
        .set({ year: 2022, month: 9, date: 19 })
        .format('D MMM YYYY'),
      createdBy: 'the sad',
    },
    {
      id: new Date().getTime + 4,
      url: '/',
      img: SmallBlog4,
      title: 'Hard choices, easy life. Easy choices, hard life.',
      date: moment()
        .set({ year: 2022, month: 8, date: 1 })
        .format('D MMM YYYY'),
      createdBy: 'the sad',
    },
  ],
  [
    {
      id: new Date().getTime + 5,
      url: '/about',
      img: SmallBlog1,
      title: 'Even the all-powerful Pointing has no control about',
      date: moment()
        .set({ year: 2022, month: 11, date: 30 })
        .format('D MMM YYYY'),
      createdBy: 'admin',
    },
    {
      id: new Date().getTime + 6,
      url: '/',
      img: SmallBlog2,
      title: 'Hard choices, easy life. Easy choices, hard life.',
      date: moment()
        .set({ year: 2022, month: 10, date: 9 })
        .format('D MMM YYYY'),
      createdBy: 'the sad',
    },
    {
      id: new Date().getTime + 7,
      url: '/about',
      img: SmallBlog3,
      title: 'Even the all-powerful Pointing has no control about',
      date: moment()
        .set({ year: 2022, month: 10, date: 9 })
        .format('D MMM YYYY'),
      createdBy: 'admin',
    },
    {
      id: new Date().getTime + 8,
      url: '/',
      img: SmallBlog4,
      title: 'Hard choices, easy life. Easy choices, hard life.',
      date: moment()
        .set({ year: 2022, month: 8, date: 1 })
        .format('D MMM YYYY'),
      createdBy: 'the sad',
    },
  ],
  [
    {
      id: new Date().getTime + 9,
      url: '/about',
      img: SmallBlog1,
      title: 'Even the all-powerful Pointing has no control about',
      date: moment()
        .set({ year: 2022, month: 11, date: 30 })
        .format('D MMM YYYY'),
      createdBy: 'admin',
    },
    {
      id: new Date().getTime + 10,
      url: '/',
      img: SmallBlog2,
      title: 'Hard choices, easy life. Easy choices, hard life.',
      date: moment()
        .set({ year: 2022, month: 10, date: 9 })
        .format('D MMM YYYY'),
      createdBy: 'the sad',
    },
    {
      id: new Date().getTime + 11,
      url: '/about',
      img: SmallBlog3,
      title: 'Even the all-powerful Pointing has no control about',
      date: moment()
        .set({ year: 2022, month: 10, date: 9 })
        .format('D MMM YYYY'),
      createdBy: 'admin',
    },
    {
      id: new Date().getTime + 12,
      url: '/',
      img: SmallBlog4,
      title: 'Hard choices, easy life. Easy choices, hard life.',
      date: moment()
        .set({ year: 2022, month: 8, date: 1 })
        .format('D MMM YYYY'),
      createdBy: 'the sad',
    },
  ],
];

const incomingEvents = [
  {
    id: 'nextEvent-1',
    dateTime: moment()
      .set({ year: 2022, month: 10, date: 15 })
      .format('D MMM YYYY'),
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 'nextEvent-2',
    dateTime: moment()
      .set({ year: 2022, month: 9, date: 23 })
      .format('D MMM YYYY'),
    title: 'Faucibus interdum posuere lorem ipsum dolor sit amet.',
  },
  {
    id: 'nextEvent-3',
    dateTime: moment()
      .set({ year: 2022, month: 8, date: 4 })
      .format('D MMM YYYY'),
    title:
      'Pharetra et ultrices neque ornare aenean euismod elementum nisi quis',
  },
  {
    id: 'nextEvent-4',

    dateTime: moment()
      .set({ year: 2022, month: 7, date: 31 })
      .format('D MMM YYYY'),
    title: 'Volutpat sed cras ornare arcu dui vivamus',
  },
];

const SidebarBlog = () => {
  const [searchBlog, setSearchBlog] = useState('');
  const navigate = useNavigate();

  const handleRemoveSearchBlog = () => {
    setSearchBlog('');
  };

  const getSearchInfo = (e) => {
    e.preventDefault();

    navigate({
      pathname: '/blog',
      search: `?sb=${searchBlog}`,
    });
    handleRemoveSearchBlog();
  };

  return (
    <>
      <h2>Search Blog</h2>
      <Box
        component='form'
        sx={{ mr: 3, display: 'flex' }}
        onSubmit={getSearchInfo}
      >
        <FormControl fullWidth={true}>
          <InputLabel
            htmlFor='search-blog'
            sx={{
              '&.Mui-focused': {
                color: '#fe59d7',
              },
            }}
          >
            Search blog...
          </InputLabel>
          <OutlinedInput
            id='search-blog'
            required
            label='Search blog'
            type='text'
            value={searchBlog}
            onChange={(e) => setSearchBlog(e.target.value)}
            endAdornment={
              <>
                <InputAdornment position='end'>
                  {searchBlog ? (
                    <IconButton onClick={handleRemoveSearchBlog}>
                      <CloseIcon />
                    </IconButton>
                  ) : (
                    ''
                  )}
                </InputAdornment>
                <Button
                  type='submit'
                  sx={{
                    height: '100%',
                    backgroundColor: '#fe59d7',
                    color: 'white',
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#fe59d7',
                    },
                  }}
                >
                  <SearchIcon />
                </Button>
              </>
            }
            sx={{
              pr: 0,
              outline: 'none',
              '& fieldset': {
                borderColor: '#fe59d7 !important',
              },
            }}
          />
        </FormControl>
      </Box>

      {/* New Article */}
      <h2>New Article</h2>

      <CarouselSidebar items={items} />
      {/* New Article */}

      <BannerBlogImages imgUrl={SidebarBlogImg1} />

      {/* New Videos */}
      <h2>New Videos</h2>
      <CarouselSidebar items={items} radius={true} />
      {/* New Videos */}

      <BannerBlogImages imgUrl={SidebarBlogImg2} />

      <h2>Incoming Events</h2>

      <Box
        sx={{
          height: '100%',
          mr: 3,
          '& .title-events': {
            lineHeight: '20px',
            mt: '3px',
            color: '#000000',
            fontFamily: 'Josefin Sans, sans-serif',
          },
        }}
      >
        {incomingEvents.map((item) => {
          const { id, dateTime, title } = item;
          return (
            <Link
              key={id}
              to={'/events'}
              style={{ display: 'block', marginBottom: '15px' }}
            >
              <h3 className='date-events'>{dateTime}</h3>
              <h4 className='title-events'>{title}</h4>
            </Link>
          );
        })}
      </Box>
    </>
  );
};

export default SidebarBlog;
