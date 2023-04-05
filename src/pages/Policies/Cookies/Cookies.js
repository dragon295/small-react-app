import React from 'react';

import { Typography, Container, Box, Button } from '@mui/material';

import { Link } from 'react-router-dom';

import '../style.css';

import HeaderImg from '../../../components/HeaderImg/HeaderImg';

import CookiesImg from '../../../assets/header/cookies.jpg';

const Cookies = () => {
  return (
    <>
      <HeaderImg imgUrl={CookiesImg} page='cookies' />

      <Box className='policies-container-1'>
        <Container>
          <Typography variant='h6'>do we use cookies?</Typography>
          <span>
            Yes we do!
            <br />
            <br />
            We use cookies and other technologies to ensure everyone who uses
            Abstraction has the best possible experience. Cookies also help us
            keep your account safe and allows the Abstraction website to
            remember things like your preferences or what’s in your shopping
            basket. By continuing to visit or use our services and interacting
            with the content of our website, you are agreeing to the use of
            cookies and similar technologies for the purposes we describe in
            this policy.
            <br />
            <br />
            At any point, you can change your preferences in our
            <Link to=''> cookie settings</Link>
          </span>
        </Container>
      </Box>
      <Box className='policies-container-2'>
        <Container>
          <Typography variant='h6'>what is a cookie?</Typography>
          <span>
            A cookie is a small file placed onto your device that enables
            Abstraction features and functionality. For example, cookies enable
            us to identify whether you are signed into your account, determine
            what currency and prices to display, and secure your access to our
            site. Cookies also help us to serve relevant ads to you on trusted
            third party websites and provide a more personalised experience.
          </span>
        </Container>
      </Box>
      <Box className='policies-container-1'>
        <Container>
          <Typography variant='h6'>
            When does Abstraction place cookies?
          </Typography>
          <span>
            We use cookies on our site and mobile application. Any browser
            visiting Abstraction site and every device using our app will
            receive cookies from us. We also place cookies in your browser when
            you visit non-Abstraction sites that host our adverts and content
            (for example our affiliate partners or Facebook).
          </span>
        </Container>
      </Box>
      <Box className='policies-container-2'>
        <Container>
          <Typography variant='h6'>
            What types of cookies does Abstraction use?
          </Typography>
          <span>
            We use two types: persistent cookies and session cookies. A
            persistent cookie helps us recognize you as an existing user, so
            it's easier to return to Abstraction or interact with our services
            without signing in again. After you sign in, a persistent cookie
            stays in your browser and will be read by Abstraction when you
            return to our site. The retention period for a 'persistent' cookie
            is one year. Session cookies only last for as long as the session
            (usually the current visit to a website or a browser session) and
            are used to keep track of any interaction you make with our site
            during your visit (such as adding an item to your basket).
          </span>
        </Container>
      </Box>
      <Box className='policies-container-1'>
        <Container>
          <Typography variant='h6'>How we use cookies?</Typography>
          <span>
            We use cookies in order to improve your user experience by enabling
            our services to ‘remember’ you, either for the duration of your
            visit (using a ‘session cookie’) or for repeat visits (using a
            ‘persistent cookie’). Our cookies do lots of different jobs, like
            letting you navigate between pages efficiently, storing your
            preferences, delivering more targeted advertising, and generally
            improving your experience on our website.
            <br />
            <br />
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th scope='col'>
                    <strong>Categories of Cookies</strong>
                  </th>
                  <th scope='col'>
                    <strong>Description</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Strictly Necessary</td>
                  <td>
                    We use Strictly Necessary cookies in order to enable you to
                    move around the website and use its features, such as
                    accessing your account, purchasing video games and
                    displaying correct prices and availability. Without these
                    cookies, the site will not function correctly.
                  </td>
                </tr>
                <tr>
                  <td>Performance</td>
                  <td>
                    We use Performance cookies to collect and aggregate
                    information about how you use and engage with our website,
                    including what pages you are visiting and how you are
                    accessing our site. Also known as ‘Analytics’ cookies, these
                    cookies are a mixture of First and Third party cookies.
                  </td>
                </tr>
                <tr>
                  <td>Functionality</td>
                  <td>
                    We use Functionality cookies to provide site functionality
                    that is visible or advantageous to you or your experience on
                    our the site. This includes elements of on-site
                    personalisation, and enhanced functionality like customer
                    service support, feedback systems, surveys and competitions.
                    These cookies are a mixture of First and Third party
                    cookies.
                  </td>
                </tr>
                <tr>
                  <td>Targeting &amp; Advertising</td>
                  <td>
                    We use Targeting and Advertising cookies for the purpose of
                    managing and analysing the performance of adverts,
                    displaying adverts to you once you have left our site, and
                    building user profiles to determine the display of
                    advertising elsewhere. These are predominantly Third party
                    cookies.
                  </td>
                </tr>
              </tbody>
            </table>
          </span>
        </Container>
      </Box>
      <Box className='policies-container-2'>
        <Container>
          <Typography variant='h6'>What is Do Not Track (DNT)?</Typography>
          <span>
            DNT is a concept that has been promoted by regulatory agencies such
            as the U.S. Federal Trade Commission (FTC), for the Internet
            industry to develop and implement a mechanism for allowing Internet
            users to control the tracking of their online activities across
            websites by using browser settings. The World Wide Web Consortium
            (W3C) has been working with industry groups, Internet browsers,
            technology companies, and regulators to develop a DNT technology
            standard. While some progress has been made, it has been slow. No
            standard has been adopted to this date. As such, Abstraction does
            not generally respond to "do not track" signals, but you can at any
            time change your cookie preferences in our
            <Link to=''> cookie settings</Link>
          </span>
        </Container>
      </Box>
      <Box className='policies-container-1'>
        <Container>
          <Typography variant='h6'>How we use cookies?</Typography>
          <span>
            Cookies and other ad technology such as beacons, pixels, and tags
            help us serve relevant ads to you more effectively. They also help
            us provide aggregated auditing, research, and reporting, understand
            and improve our service, and know when content has been seen by you.
            Note: Because your web browser may request advertisements and
            beacons directly from third party ad network servers, these networks
            can view, edit, or set third party cookies, just as if you had
            requested a web page from their site. Ads served by Abstraction may
            also set third party cookies.
            <br />
            <br />
            If you are logged in on a website or app or another Service that
            references this Cookie Policy or browsing a third party partner site
            of Abstraction and one of our cookies on your device identifies you,
            your usage (such as your browsing behavior) and log data (such as
            your IP address), will be associated by us with your account. We
            also use aggregate data from third parties and data from your
            profile and Abstraction activity.
            <br />
            <br />
            Unless you clear these cookies from your browser, we may use this
            information to:
            <br />
          </span>
          <ul>
            <li>
              <span>provide more relevant, interest-based advertising</span>
            </li>
            <li>
              <span>
                provide aggregate reports of ads activity to partners and
                websites hosting the ads
              </span>
            </li>
            <li>
              <span>
                help us understand how our visitors engage with our site or app
              </span>
            </li>
            <li>
              <span>
                detect and defend against fraud and other risks to protect users
                and partners
              </span>
            </li>
            <li>
              <span>improve our products</span>
            </li>
          </ul>
          <Button
            variant='contained'
            component={Link}
            to='/policies'
            sx={{
              mt: 1,
              transition: 'all 0.5s ease',
              backgroundColor: '#fe59d7',
              border: '1px solid #fe59d7',
              color: 'white',
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#fe59d7',
                boxShadow: 0,
              },
            }}
          >
            Back to policies
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Cookies;
