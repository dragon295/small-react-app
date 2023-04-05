import React, { useState } from 'react';

import HeaderImg from '../../components/HeaderImg/HeaderImg';
import SidebarBlog from './Sidebar/SidebarBlog';
import HeaderMainBlog from './MainBlog/HeaderMainBlog';
import SmallCard from '../Blog/MainBlog/SmallCard';

import {
  Container,
  Grid,
  Box,
  Divider,
  TextField,
  Button,
} from '@mui/material';

import moment from 'moment';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Person4Icon from '@mui/icons-material/Person4';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Link } from 'react-router-dom';

import DetailHeaderBlogImg from '../../assets/header/abstract-img-3.jpg';
import DetailBlogImg1 from '../../assets/body/blog/img-detail-blog-1.jpg';
import DetailBlogImg2 from '../../assets/body/blog/img-detail-blog-2.jpg';
import imgMainBlog5 from '../../assets/body/blog/img-main-blog-5.jpg';
import imgMainBlog6 from '../../assets/body/blog/img-main-blog-6.jpg';
import imgMainBlog7 from '../../assets/body/blog/img-main-blog-7.jpg';
import imgMainBlog8 from '../../assets/body/blog/img-main-blog-8.jpg';
import imgMainBlog10 from '../../assets/body/blog/img-main-blog-10.jpg';
import imgMainBlog11 from '../../assets/body/blog/img-main-blog-11.jpg';

const theme = createTheme({
  palette: {
    brightPink: {
      main: '#fe59d7',
    },
  },
});

const DetailBlog = () => {
  const [nameComment, setNameComment] = useState('');
  const [emailComment, setEmailComment] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you');
    setNameComment('');
    setEmailComment('');
    setComment('');
  };
  return (
    <Box sx={{ bgcolor: 'black' }} component='main'>
      <HeaderImg imgUrl={DetailHeaderBlogImg} page='Detail Blog' />
      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            '& h2': {
              py: 2,
              pr: 2,
              textTransform: 'capitalize',
            },
          }}
        >
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              pr: 3,
              pt: {
                xs: 'auto',
                md: '50px !important',
              },

              '& h2': {
                lineHeight: '32px',
                pb: 0,
              },
              background: 'white',
              // border: '1px solid white',
              // '& > *': {
              //   color: 'white !important',
              // },
            }}
          >
            <HeaderMainBlog
              titleHeader={'Ori and the Will of the Wisps Review'}
              disabled={true}
            />
            <Box
              display={'flex'}
              sx={{
                '& p': {
                  mt: '1px',
                  mr: 2,
                  ml: '2px',
                },
              }}
            >
              <Person4Icon fontSize='small' />
              <Link to=''>
                <p>
                  <b>CMK87</b>
                </p>
              </Link>
              <CalendarMonthIcon fontSize='small' />
              <p>
                <b>
                  {moment().format('D MMM YYYY')} at {moment().format('LT')}
                </b>
              </p>
              <Box
                display={'flex'}
                sx={{
                  '& p': {
                    mr: 1,
                  },
                  '& a': {
                    '& *': {
                      transition: 'color 0.15s ease-in-out',
                    },
                    '& .fb': {
                      color: '#4267B2',
                    },
                    '& .tw': {
                      color: '#1DA1F2',
                    },
                    '& .ig': {
                      color: '#e95950',
                    },
                    '&:hover > *': {
                      color: '#fe59d7',
                    },
                  },
                }}
              >
                <p>Share</p>
                <Link to=''>
                  {' '}
                  <FacebookIcon
                    fontSize='small'
                    sx={{ mr: '5px' }}
                    className='fb'
                  />
                </Link>
                <Link to=''>
                  {' '}
                  <TwitterIcon
                    fontSize='small'
                    sx={{ mr: '5px' }}
                    className='tw'
                  />
                </Link>
                <Link to=''>
                  {' '}
                  <InstagramIcon
                    fontSize='small'
                    sx={{ mr: '5px' }}
                    className='ig'
                  />
                </Link>
              </Box>
            </Box>

            <Box
              sx={{
                fontFamily: 'Domine, serif',
                // fontFamily: 'Lora, serif',
                '& figure': {
                  mt: 2,
                },
                '& img': {
                  maxWidth: '100%',
                  height: 'auto',
                },
                '& figcaption': {
                  textAlign: 'center',
                  fontSize: '12px',
                  mt: 1,
                  color: 'rgba(0,0,0,0.65)',
                },
                '& section': {
                  mt: 2,
                  lineHeight: '30px',
                  letterSpacing: '.5px',
                  '& h3, & h4': {
                    my: 2,
                  },
                },
                '& p': {
                  my: 2,
                },
              }}
            >
              <figure>
                <img src={DetailBlogImg1} alt='Ori pic 1' />
                <figcaption>
                  <i>Ori and the Will of the Wisps Review</i>
                </figcaption>
              </figure>

              <section>
                It was always hard to find anything bad to say about 2015’s Ori
                and the Blind Forest. Moon Studios’ blend of an entrancing,
                tragic fairy tale world and white-knuckle platforming challenge
                left a mark that hasn’t faded with time. And yet the new
                followup, successfully builds on that distinctive gameplay in a
                way that doesn’t just retread the same ground. There’s more
                breadth, detail, choice, and diversity than ever, and it’s all
                done with engrossing color and light and an excellent, inspiring
                soundtrack.
                <p></p>
                It may be two-dimensional, but this is a great, big, open world
                that’s backed by a great, big, beautiful score that shifts to
                echo your successes and grows frantic and immediate in moments
                of tension. That music is your constant companion as you journey
                through diverse locations that sprawl out in all directions.
                Will of the Wisps paints with a full pallet of distinct biomes,
                transitioning seamlessly from the archetypical fairytale forests
                pierced with soft, golden streaks of light through the emerald
                canopy to the gloomy, ink-blotted muddy floor of the soggy
                marshlands. Each region bursts with fine detail that’s easy to
                overlook because Moon Studios’ aesthetic moods for each location
                are so consistent. All of them feel distinct and alive.
                <Box
                  component={'div'}
                  sx={{
                    my: 2,
                    position: 'relative',
                    paddingBottom: '52.25%',
                    '& iframe': {
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                    },
                  }}
                >
                  <iframe
                    width={560}
                    height={315}
                    src='https://www.youtube.com/embed/2reK8k8nwBc'
                    title='YouTube video player'
                    frameBorder={0}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  />
                </Box>
                {/* */}
                For example, the frigid mountainous peaks Ori must breeze past
                on gusts of wind are littered with crisscrossing splintered
                alpine timber and pointed icicles that reach out to jab and poke
                from frozen overhangs. The claustrophobic, pitch-black tunnels
                of the Mouldwood Depths writhe with the bodies of thousands of
                insects whose chittering wings radiate a constant chorus of
                uncomfortable buzzing, and their sharps barbs sting if touched
                while Ori fumbles in the darkness. There’s an incredible beauty
                and attention to these unique flourishes that serve the
                overarching theme of every region, from the closest foreground
                objects all the way back through the half-dozen layers of
                background art that slowly shift in parallax scrolling as you
                move. Whether you’re burrowing through the sand in the blazing
                red light of the desert or nimbly swimming through chomping
                clams and bouncing between air bubbles, there’s always something
                surprising in store.
                <h3>Crawling With Life</h3>
                Ori and the Will of the Wisps reinforces that theme of a wider,
                living world with a menagerie of creatures to fight, big and
                small: dive-bombing mosquitos, slugs that spit caustic goo,
                dangling spiders, piranhas, spiky slimes, leaping elemental
                mantis-things, and hulking decay-touched bruisers with massive
                clubs kept me on my toes in every new place I visited. There’s a
                healthy bestiary to test your mettle.
                <p></p>
                But alongside these many enemies, friendly woodland critters and
                massive animal guardians hide and thrive in each area, ready to
                make your acquaintance. These non-player characters pop up
                frequently, telling you about their home lives, their current
                predicaments, the changes happening to the world at large, and
                tidbits of information concerning Ori’s grand adventure. Often,
                these short conversations come with requests which serve as
                simple side quests to keep you invested in the here and now. You
                might be asked to find a lost acorn in a cave, or check on some
                family members in a faraway region, or hear a useful rumor about
                a shrine that’s then marked on your map to investigate later.
                <h3>
                  There’s usually something worthwhile on the other side of
                  these small side quests.
                </h3>
              </section>
              <figure>
                <img src={DetailBlogImg2} alt='Ori pic 2' />
                <figcaption>
                  <i>Does Ori and the Will of the Wisps really fun to play ?</i>
                </figcaption>
              </figure>
              <section>
                No matter how seemingly insignificant they are in the grand
                scheme of things, it’s another layer of investment that Moon
                Studios has baked into the experience, which is so appreciated
                given so much of Ori involves simply getting from one point to
                the next as fast and fluidly as possible. Now you’ve got an
                incentive to stop and really poke around or revisit the more
                secluded crannies of the world. And there’s usually something
                worthwhile on the other side of these small errands: a bit of
                currency, a collectible item, a hearty thank you, and sometimes
                it’s just the devastating realization that you can’t save
                everyone.
                <p></p>
                In that same vein of grounding us in a living place, Ori and the
                Will of the Wisps introduces a kind of central hub village where
                many of your new critter friends end up once you’ve completed a
                task for them. Here, you’ll speak with merchants to purchase or
                upgrade abilities and turn in collectibles to community leaders
                who will, in turn, make improvements throughout the village that
                unlock new options.
                <p></p>
                For example, turning in enough ore will let you either construct
                residential huts for more characters to call home, or remove the
                pesky thorn bushes that block your passage to hidden sections of
                the village. Finding seeds from each of the regions gives you
                the opportunity to grow new plants, vines, and trees in the
                village. Again, this isn’t just cosmetic or fun story fluff;
                each new improvement adds ways to move through the village,
                opening up previously unreachable portions of it to explore, new
                NPCs to speak to, and hovels to repeatedly loot for currency.
                Building up this simple village gave me a sense of purpose and
                connection to the world – something to improve and care for,
                rather than just a series of places to leap and fight my way
                through until I reached the end.
                <h3>The Bittersweet Science</h3>
                I’m hesitant to talk at all about the finer points of Ori and
                the Will of the Wisps’ story since so much of the journey is
                propelled by the crests and troughs of its emotional waves. So,
                without venturing too deeply into spoiler territory, it should
                be no surprise for those who played Ori and the Blind Forest
                that Moons Studios’ knack for brewing joy and sorrow in heavy
                proportions is alive and well in Ori’s new tale.
                <Box
                  component={'div'}
                  sx={{
                    my: 2,
                    position: 'relative',
                    paddingBottom: '52.25%',
                    '& iframe': {
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                    },
                  }}
                >
                  <iframe
                    width={560}
                    height={315}
                    src='https://www.youtube.com/embed/2kPSl2vyu2Y'
                    title='YouTube video player'
                    frameBorder={0}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  />
                </Box>
                <h3>
                  It's hard not to pour care and concern over either side of the
                  good-bad divide.
                </h3>
                What I really appreciate about Will of the Wisps is that even
                though it’s a tale of light versus darkness, it never fully
                falls into the simplicity of good versus evil. Sometimes bad
                things happen, or have happened, and there’s just no fixing them
                regardless of how hard you try or desperately want them righted.
                It’s a really powerful sentiment to deliver in a gorgeously
                colorful video game filled with cartoonish anthropomorphic
                forest folk, but somehow Moon Studios continues to subvert that
                expectation.
                <p></p>
                Instead, Ori and the Will of the Wisps is content to show that
                heroes can be kind of broken and still rise to the occasion, and
                that sometimes the ostensible bad guys have hearts, families,
                and their own personal tragedies, regardless of whether they
                choose to seek redemption. And I really appreciate these stories
                for that reason – there’s no such thing as a perfect ending for
                everyone.
                <h4>Verdict</h4>
                In Ori and the Will of the Wisps, Moon Studios has taken an
                excellent foundation and made even more out of it. Its many new
                elements expand on and add to the first game’s fun without
                bogging it down or becoming overcomplicated. And that’s really
                the best praise you can give a sequel - it stays true to the
                spirit of the original, doubles down on what made it great, and
                gives you more stake in the world and options to navigate it.
                Ori and the Will of the Wisps is an excellent heartfelt
                follow-up that pushes the series to new heights.
                <h4>
                  You can refer to the product in <Link to={''}>here</Link>
                </h4>
              </section>
            </Box>

            {/* Related Post */}
            <Divider sx={{ bgcolor: 'black', height: '2px' }} />
            <h2>Related Post</h2>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <SmallCard imgCard={imgMainBlog8} />
              </Grid>
              <Grid item xs={12} md={4}>
                <SmallCard imgCard={imgMainBlog10} />
              </Grid>
              <Grid item xs={12} md={4}>
                <SmallCard imgCard={imgMainBlog5} />
              </Grid>
            </Grid>
            {/* Comment */}

            <h2>Comments</h2>

            <ThemeProvider theme={theme}>
              <Grid
                container
                spacing={2}
                component='form'
                onSubmit={handleSubmit}
                sx={{ mt: '2px' }}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='name'
                    label='Name'
                    type='text'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    placeholder='Name'
                    variant='outlined'
                    color='brightPink'
                    margin='dense'
                    size='large'
                    value={nameComment}
                    onChange={(e) => setNameComment(e.target.value)}
                    sx={{ color: '#fe59d7' }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='email'
                    label='Email'
                    type='email'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    placeholder='Email'
                    variant='outlined'
                    color='brightPink'
                    margin='dense'
                    size='large'
                    value={emailComment}
                    onChange={(e) => setEmailComment(e.target.value)}
                    sx={{ color: '#fe59d7' }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='comment'
                    label='Comment'
                    type='text'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    placeholder='Comment'
                    variant='outlined'
                    color='brightPink'
                    margin='dense'
                    size='large'
                    rows='5'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    multiline={true}
                  />

                  <Button
                    type='submit'
                    variant='contained'
                    color='brightPink'
                    sx={{ my: 3, color: '#fff', float: 'right' }}
                  >
                    Post Comment
                  </Button>
                </Grid>
              </Grid>
            </ThemeProvider>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              pt: {
                xs: 'auto',
                md: '50px !important',
              },
              background: '#ededed',
              height: '100%',
              position: {
                xs: 'unset',
                md: 'sticky',
              },
              top: '0',
              right: 0,
              overflowX: 'hidden',
            }}
          >
            <SidebarBlog />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DetailBlog;
