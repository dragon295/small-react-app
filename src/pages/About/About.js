import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';

import { Link } from 'react-router-dom';

import HeaderImg from '../../components/HeaderImg/HeaderImg';
import AboutImg from '../../assets/header/about-img.jpg';
import MeetingRoom from '../../assets/body/about/meeting-room.jpg';
import SmallImg1 from '../../assets/body/about/about-1.jpg';
import SmallImg2 from '../../assets/body/about/about-2.jpg';

const SVGEffect = (
  <Box
    sx={{
      position: 'absolute',
      bottom: '-1px',
      left: '0',
      width: '100%',
      overflow: 'hidden',
      lineHeight: '0',
      transform: 'rotate(180deg)',
    }}
  >
    <svg
      width='100%'
      height='100%'
      id='svg'
      viewBox='0 0 1440 250'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M 0,400 C 0,400 0,200 0,200 C 138.8,226 277.6,252 418,240 C 558.4,228 700.4000000000001,178 871,165 C 1041.6,152 1240.8,176 1440,200 C 1440,200 1440,400 1440,400 Z'
        stroke='none'
        strokeWidth={0}
        fill='#ffffff'
        fillOpacity={1}
        transform='rotate(-180 720 135)'
      />
    </svg>
  </Box>
);

const About = () => {
  return (
    <>
      <HeaderImg imgUrl={AboutImg} page='About' effectImg={SVGEffect} />
      <Container sx={{ fontFamily: "'Poppins', sans-serif", mb: 2 }}>
        <Grid
          container
          sx={{
            fontSize: '14px',
          }}
          spacing={{
            xs: 1,
            sm: 3,
            md: 5,
          }}
        >
          <Grid item xs={12} sm={6}>
            <Typography
              variant='h4'
              sx={{
                fontFamily: "'Poppins', sans-serif ",
                fontSize: '2rem',
              }}
            >
              About Company
            </Typography>
            <b style={{ margin: '5px 0', display: 'block' }}>
              Architecto provident deserunt
            </b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate molestiae temporibus et tenetur unde quasi, cum nemo
              quo, molestias architecto alias voluptatibus corrupti corporis
              earum. Necessitatibus maxime modi ipsam, quod!
            </p>
            <Box sx={{ mt: 2 }}>
              <img
                src={MeetingRoom}
                alt='MeetingRoom'
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2} mb={1}>
              <Grid item xs={6}>
                <img
                  src={SmallImg1}
                  alt='Office  1'
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src={SmallImg2}
                  alt='Office  2'
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </Grid>
            </Grid>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              iusto quidem laborum atque, sapiente ipsa excepturi fuga cum sed
              in assumenda eos quasi harum culpa laboriosam nulla, incidunt
              quae. Voluptatum.
            </p>
            <b style={{ margin: '5px 0', display: 'block' }}>
              Aliquid fuga sunt velit, temporibus molestias ab. Ipsa nesciunt
              totam, aliquid dignissimos.
            </b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              ut a dolorem, consectetur, eos suscipit consequatur magnam est
              dolore obcaecati adipisci expedita, vero, iste ducimus qui numquam
              animi facilis officia?
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
