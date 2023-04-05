import React from 'react';

import { Container, Box, Button } from '@mui/material';

import { Link } from 'react-router-dom';

import '../style.css';

import HeaderImg from '../../../components/HeaderImg/HeaderImg';

import MoneyBack from '../../../assets/header/money-back.jpg';

const RefundPolicy = () => {
  return (
    <>
      <HeaderImg imgUrl={MoneyBack} page='refund policy' />
      <Container>
        <Box className='policies-container-1'>
          <span>
            This is our 'plain English' version of the legal agreement in our
            Terms of Conditions that customers must accept to register on the
            GMG service and purchase games.
          </span>
          <br />
          <br />
          <span>
            Certain restrictions apply to sales of Products sold through the
            Service that might not otherwise apply to physical goods. Refunds
            will not be issued due to your dissatisfaction with the product or
            if your computer does not meet the minimum Product requirements.{' '}
          </span>
          <br />
          <br />
          <span>
            Purchases made with the use of a proxy server, VPN or similar
            technology may not work at all and will not be eligible for a
            refund.
          </span>
          <br />
          <br />
          <span>
            Refunds or store credit may be issued solely at refund-context’s
            discretion and every refund request is treated on a case by case
            basis, taking into consideration the following conditions:
          </span>{' '}
          <br />
          <br />
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <span>
                The time of your request for refund/credit is no more than 7
                days from the time of purchase.
              </span>
            </li>
            <li>
              <span>
                The game has not been activated or downloaded (including keyless
                redemption).
              </span>
            </li>
            <li>
              <span>
                The game activation key (including any bonus or beta keys) has
                not been disclosed to you by email or web page.
              </span>
            </li>
            <li>
              <span>
                We are unable to process refunds 48 hours before a game is due
                to be released or preload begins.
              </span>
            </li>
            <li>
              <span>
                Due to Paypal limitations, Paypal refunds cannot be processed
                any later than&nbsp; 120 days from purchase.
              </span>
            </li>
          </ul>
          <br />
          <span>
            <strong>EU Customers:</strong>
            <br />
            <br />
            If you reside in the European Union and you purchase a Product the
            Consumer Protection (Distance Selling) Regulations 2000 may apply,
            and you may have the right to withdraw from your purchase within
            fourteen calendar days, commencing on the day after the date of
            purchase (the "Cooling Off Period"). You will lose your right of
            withdrawal if you start downloading your product, or if the
            performance of our services has begun (such as if the Product
            activation key has been disclosed to you), before the end of the
            Cooling Off Period. Please note that if you purchase services from
            us, the performance of our services will begin immediately after you
            have received our purchase confirmation email. To withdraw from your
            purchase within the Cooling Off Period, please contact Customer
            Service. If you withdraw from your purchase within the Cooling Off
            Period, we will provide you with a refund for your purchase.{' '}
          </span>
          <br />
          <br />
          <span className='refund-hyper'>
            {' '}
            If you feel that your purchase qualifies for a refund, please
            contact Abstraction Customer Service at{' '}
            <Link to='/contact'>Contact</Link>{' '}
          </span>
          <br />
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
        </Box>
      </Container>
    </>
  );
};

export default RefundPolicy;
