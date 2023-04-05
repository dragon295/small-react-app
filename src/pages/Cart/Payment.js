import React, { useState } from 'react';

import CartSummary from './CartSummary';
import ErrorAlert from './ErrorAlert';

import {
  Box,
  Button,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  TextField,
} from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useStepCard } from './CartContainer';

import { Formik, Field } from 'formik';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const theme = createTheme({
  palette: {
    brightPink: {
      main: '#fe59d7',
    },
  },
});

const countryList = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas (the)',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory (the)',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands (the)',
  'Central African Republic (the)',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands (the)',
  'Colombia',
  'Comoros (the)',
  'Congo (the Democratic Republic of the)',
  'Congo (the)',
  'Cook Islands (the)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czechia',
  "Côte d'Ivoire",
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic (the)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (the) [Malvinas]',
  'Faroe Islands (the)',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories (the)',
  'Gabon',
  'Gambia (the)',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See (the)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea (the Democratic People's Republic of)",
  'Korea (the Republic of)',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic (the)",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands (the)',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia (Federated States of)',
  'Moldova (the Republic of)',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands (the)',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger (the)',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands (the)',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines (the)',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of North Macedonia',
  'Romania',
  'Russian Federation (the)',
  'Rwanda',
  'Réunion',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan (the)',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands (the)',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates (the)',
  'United Kingdom of Great Britain and Northern Ireland (the)',
  'United States Minor Outlying Islands (the)',
  'United States of America (the)',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela (Bolivarian Republic of)',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Åland Islands',
];

const Payment = () => {
  const { submit, setSubMit } = useStepCard();
  const [visaCard, setVisaCard] = useState(null);
  const [masterCard, setMasterCard] = useState(null);

  return (
    <Box component={'section'}>
      <Typography variant='h4'>Payment Details</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Box
            component={'ul'}
            sx={{
              '& li': {
                listStyleType: 'none',
              },
            }}
          >
            <Box
              component={'li'}
              sx={{
                my: 1,
                '& .MuiAccordionSummary-root': {
                  color: 'white',
                  bgcolor: 'black',
                },
                '& hr': {
                  bgcolor: 'white',
                },
              }}
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls='visa-content'
                  id='visa-header'
                >
                  <Typography>Visa Card</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Formik
                    initialValues={{
                      cardNumber: '',
                      securityCode: '',
                      cardName: '',
                      date: '',
                      phone: '',
                      firstName: '',
                      lastName: '',
                      address: '',
                      postCode: '',
                      country: '',
                    }}
                    // Note: These values are string, can convert to number

                    validate={(values) => {
                      const errors = {};

                      if (!values.cardNumber) {
                        errors.cardNumber = 'Required';
                      } else if (
                        values.cardNumber.length !== 11 ||
                        values.cardNumber.match(/\D/g)
                      ) {
                        errors.cardNumber = 'Card Number is wrong';
                      }

                      if (!values.securityCode) {
                        errors.securityCode = 'Required';
                      } else if (
                        values.securityCode.length !== 4 ||
                        values.securityCode.match(/\D/g)
                      ) {
                        errors.securityCode = 'Security Code is wrong';
                      }

                      if (!values.cardName) {
                        errors.cardName = 'Required';
                      }

                      if (!values.date) {
                        errors.date = 'Required';
                      }

                      if (!values.firstName) {
                        errors.firstName = 'Required';
                      }

                      if (!values.lastName) {
                        errors.lastName = 'Required';
                      }

                      if (!values.address) {
                        errors.address = 'Required';
                      } else if (
                        values.address.match(
                          /^(\d{3,})\s?(\w{0,5})\s([a-zA-Z]{2,30})\s([a-zA-Z]{2,15})\.?\s?(\w{0,5})$/gi
                        )
                      ) {
                        errors.address = 'Address is wrong';
                      }

                      if (!values.postCode) {
                        errors.postCode = 'Required';
                      } else if (values.postCode.match(/\D/g)) {
                        errors.postCode = 'Post Code is wrong';
                      }

                      if (!values.country) {
                        errors.country = 'Required';
                      }

                      return errors;
                    }}
                    onSubmit={(values, { resetForm }) => {
                      setTimeout(() => {
                        resetForm({
                          values: {
                            cardNumber: '',
                            securityCode: '',
                            cardName: '',
                            date: '',
                            phone: '',
                            firstName: '',
                            lastName: '',
                            city: '',
                            postCode: '',
                            country: '',
                          },
                        });
                        setVisaCard(values);
                        setSubMit(true);
                      }, 600);
                    }}
                  >
                    {({
                      values,
                      isValid,
                      dirty,
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      setFieldValue,
                    }) => (
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
                              id='cardNumber'
                              label='Card Number'
                              name='cardNumber'
                              type='text'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder='Card Number * '
                              variant='outlined'
                              color='brightPink'
                              margin='dense'
                              size='large'
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.cardNumber}
                              sx={{ color: '#fe59d7' }}
                            />

                            <ErrorAlert name='cardNumber' />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <Box
                              display={'flex'}
                              alignItems='center'
                              sx={{ '& p': { fontSize: '12px', ml: 1 } }}
                            >
                              <TextField
                                required
                                fullWidth
                                id='securityCode'
                                label='Security code'
                                name='securityCode'
                                type='text'
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                placeholder='Security code * '
                                variant='outlined'
                                color='brightPink'
                                margin='dense'
                                size='large'
                                value={values.securityCode}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                sx={{ color: '#fe59d7' }}
                              />
                              <p>
                                The 3 digit security code on the back of your
                                card.
                              </p>
                            </Box>
                            <ErrorAlert name='securityCode' />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id='cardName'
                              label='Name on Card'
                              name='cardName'
                              type='text'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder='Name on Card *'
                              variant='outlined'
                              color='brightPink'
                              margin='dense'
                              value={values.cardName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorAlert name='cardName' />
                          </Grid>

                          <Grid
                            item
                            xs={12}
                            sm={6}
                            sx={{
                              '& .date-picker': {
                                mt: 1,
                                p: '16px 14px',
                                width: '100%',
                                fontSize: '18px',
                                '&:focus-visible': {
                                  outlineColor: '#fe59d7',
                                },
                              },
                              '& .react-datepicker-popper': {
                                zIndex: 10,
                              },
                              '& .react-datepicker__close-icon': {
                                top: '3px',
                              },
                            }}
                          >
                            <DatePicker
                              dateFormat='dd/MM/yyyy'
                              selected={values.date}
                              name='date'
                              isClearable
                              placeholderText='Expiry Date *'
                              onChange={(val) => setFieldValue('date', val)}
                              onBlur={handleBlur}
                              className='date-picker'
                            />
                            <ErrorAlert name='date' />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id='phone'
                              label='Phone Number (optional)'
                              name='phone'
                              type='text'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder='Phone Number *'
                              variant='outlined'
                              color='brightPink'
                              margin='dense'
                              value={values.phone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <Divider />
                            <Typography variant='h5' sx={{ mt: 2 }}>
                              Billing Detail
                            </Typography>
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id='firstName'
                              label='First Name'
                              name='firstName'
                              type='text'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder='First Name *'
                              variant='outlined'
                              color='brightPink'
                              margin='dense'
                              value={values.firstName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorAlert name='firstName' />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id='lastName'
                              label='Last Name'
                              name='lastName'
                              type='text'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder='Last Name *'
                              variant='outlined'
                              color='brightPink'
                              margin='dense'
                              value={values.lastName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorAlert name='lastName' />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id='address'
                              label='Address'
                              name='address'
                              type='text'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder='Address *'
                              variant='outlined'
                              color='brightPink'
                              margin='dense'
                              value={values.address}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorAlert name='address' />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id='postCode'
                              label='Post Code'
                              name='postCode'
                              type='text'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder='Post Code *'
                              variant='outlined'
                              color='brightPink'
                              margin='dense'
                              value={values.postCode}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />

                            <ErrorAlert name='postCode' />
                          </Grid>

                          <Grid
                            item
                            xs={12}
                            sm={6}
                            sx={{
                              '& select': {
                                width: '100%',
                                fontSize: '18px',
                                p: '16.5px 14px',
                                borderRadius: '3px',
                                borderColor: 'grey',
                                '&:focus-visible': {
                                  outlineColor: '#fe59d7',
                                },
                                '&:focus-visible option': {
                                  py: 2,
                                },
                                '& option': {
                                  mb: 1,
                                  display: 'block',
                                  my: 2,
                                  fontSize: '20px',
                                  lineHeight: '50px',
                                },
                              },
                            }}
                          >
                            <Field
                              id='country'
                              name='country'
                              component={'select'}
                            >
                              <Box component={'option'} value=''>
                                -- Select country --
                              </Box>
                              {countryList.map((item, i) => (
                                <Box component={'option'} key={i} value={item}>
                                  {item}
                                </Box>
                              ))}
                            </Field>

                            <ErrorAlert name='country' />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <Button
                              type='submit'
                              variant='contained'
                              color='brightPink'
                              disabled={!isValid || !dirty}
                              sx={{ my: 3, color: '#fff', float: 'right' }}
                            >
                              Submit
                            </Button>
                          </Grid>
                        </Grid>
                      </ThemeProvider>
                    )}
                  </Formik>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls='masterCard-content'
                  id='masterCard-header'
                >
                  <Typography>Master Card</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Formik
                    initialValues={{
                      cardNumber: '',
                      securityCode: '',
                      cardName: '',
                      date: '',
                      phone: '',
                      firstName: '',
                      lastName: '',
                      address: '',
                      postCode: '',
                      country: '',
                    }}
                    // Note: These values are string, can convert to number

                    validate={(values) => {
                      const errors = {};

                      if (!values.cardNumber) {
                        errors.cardNumber = 'Required';
                      } else if (
                        values.cardNumber.length !== 11 ||
                        values.cardNumber.match(/\D/g)
                      ) {
                        errors.cardNumber = 'Card Number is wrong';
                      }

                      if (!values.securityCode) {
                        errors.securityCode = 'Required';
                      } else if (
                        values.securityCode.length !== 4 ||
                        values.securityCode.match(/\D/g)
                      ) {
                        errors.securityCode = 'Security Code is wrong';
                      }

                      if (!values.cardName) {
                        errors.cardName = 'Required';
                      }

                      if (!values.date) {
                        errors.date = 'Required';
                      }

                      if (!values.firstName) {
                        errors.firstName = 'Required';
                      }

                      if (!values.lastName) {
                        errors.lastName = 'Required';
                      }

                      if (!values.address) {
                        errors.address = 'Required';
                      } else if (
                        values.address.match(
                          /^(\d{3,})\s?(\w{0,5})\s([a-zA-Z]{2,30})\s([a-zA-Z]{2,15})\.?\s?(\w{0,5})$/gi
                        )
                      ) {
                        errors.address = 'Address is wrong';
                      }

                      if (!values.postCode) {
                        errors.postCode = 'Required';
                      } else if (values.postCode.match(/\D/g)) {
                        errors.postCode = 'Post Code is wrong';
                      }

                      if (!values.country) {
                        errors.country = 'Required';
                      }

                      return errors;
                    }}
                    onSubmit={(values, { resetForm }) => {
                      setTimeout(() => {
                        resetForm({
                          values: {
                            cardNumber: '',
                            securityCode: '',
                            cardName: '',
                            date: '',
                            phone: '',
                            firstName: '',
                            lastName: '',
                            city: '',
                            postCode: '',
                            country: '',
                          },
                        });
                        setVisaCard(values);
                        setSubMit(true);
                      }, 600);
                    }}
                  >
                    {({
                      values,
                      isValid,
                      dirty,
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      setFieldValue,
                    }) => (
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
                              id='cardNumber'
                              label='Card Number'
                              name='cardNumber'
                              type='text'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder='Card Number * '
                              variant='outlined'
                              color='brightPink'
                              margin='dense'
                              size='large'
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.cardNumber}
                              sx={{ color: '#fe59d7' }}
                            />

                            <ErrorAlert name='cardNumber' />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <Box
                              display={'flex'}
                              alignItems='center'
                              sx={{ '& p': { fontSize: '12px', ml: 1 } }}
                            >
                              <TextField
                                required
                                fullWidth
                                id='securityCode'
                                label='Security code'
                                name='securityCode'
                                type='text'
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                placeholder='Security code * '
                                variant='outlined'
                                color='brightPink'
                                margin='dense'
                                size='large'
                                value={values.securityCode}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                sx={{ color: '#fe59d7' }}
                              />
                              <p>
                                The 3 digit security code on the back of your
                                card.
                              </p>
                            </Box>
                            <ErrorAlert name='securityCode' />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id='cardName'
                              label='Name on Card'
                              name='cardName'
                              type='text'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder='Name on Card *'
                              variant='outlined'
                              color='brightPink'
                              margin='dense'
                              value={values.cardName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorAlert name='cardName' />
                          </Grid>

                          <Grid
                            item
                            xs={12}
                            sm={6}
                            sx={{
                              '& .date-picker': {
                                mt: 1,
                                p: '16px 14px',
                                width: '100%',
                                fontSize: '18px',
                                '&:focus-visible': {
                                  outlineColor: '#fe59d7',
                                },
                              },
                              '& .react-datepicker-popper': {
                                zIndex: 10,
                              },
                              '& .react-datepicker__close-icon': {
                                top: '3px',
                              },
                            }}
                          >
                            <DatePicker
                              dateFormat='dd/MM/yyyy'
                              selected={values.date}
                              name='date'
                              isClearable
                              placeholderText='Expiry Date *'
                              onChange={(val) => setFieldValue('date', val)}
                              onBlur={handleBlur}
                              className='date-picker'
                            />
                            <ErrorAlert name='date' />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id='phone'
                              label='Phone Number (optional)'
                              name='phone'
                              type='text'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder='Phone Number *'
                              variant='outlined'
                              color='brightPink'
                              margin='dense'
                              value={values.phone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <Divider />
                            <Typography variant='h5' sx={{ mt: 2 }}>
                              Billing Detail
                            </Typography>
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id='firstName'
                              label='First Name'
                              name='firstName'
                              type='text'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder='First Name *'
                              variant='outlined'
                              color='brightPink'
                              margin='dense'
                              value={values.firstName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorAlert name='firstName' />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id='lastName'
                              label='Last Name'
                              name='lastName'
                              type='text'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder='Last Name *'
                              variant='outlined'
                              color='brightPink'
                              margin='dense'
                              value={values.lastName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorAlert name='lastName' />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id='address'
                              label='Address'
                              name='address'
                              type='text'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder='Address *'
                              variant='outlined'
                              color='brightPink'
                              margin='dense'
                              value={values.address}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorAlert name='address' />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id='postCode'
                              label='Post Code'
                              name='postCode'
                              type='text'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              placeholder='Post Code *'
                              variant='outlined'
                              color='brightPink'
                              margin='dense'
                              value={values.postCode}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />

                            <ErrorAlert name='postCode' />
                          </Grid>

                          <Grid
                            item
                            xs={12}
                            sm={6}
                            sx={{
                              '& select': {
                                width: '100%',
                                fontSize: '18px',
                                p: '16.5px 14px',
                                borderRadius: '3px',
                                borderColor: 'grey',
                                '&:focus-visible': {
                                  outlineColor: '#fe59d7',
                                },
                                '&:focus-visible option': {
                                  py: 2,
                                },
                                '& option': {
                                  mb: 1,
                                  display: 'block',
                                  my: 2,
                                  fontSize: '20px',
                                  lineHeight: '50px',
                                },
                              },
                            }}
                          >
                            <Field
                              id='country'
                              name='country'
                              component={'select'}
                            >
                              <Box component={'option'} value=''>
                                -- Select country --
                              </Box>
                              {countryList.map((item, i) => (
                                <Box component={'option'} key={i} value={item}>
                                  {item}
                                </Box>
                              ))}
                            </Field>

                            <ErrorAlert name='country' />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <Button
                              type='submit'
                              variant='contained'
                              color='brightPink'
                              disabled={!(isValid && dirty)}
                              sx={{ my: 3, color: '#fff', float: 'right' }}
                            >
                              Submit
                            </Button>
                          </Grid>
                        </Grid>
                      </ThemeProvider>
                    )}
                  </Formik>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <Accordion disabled>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='ggpay-content'
                  id='ggpay-header'
                >
                  <Typography>
                    Google Pay (This feature is release soon, please try again
                    later)
                  </Typography>
                </AccordionSummary>
              </Accordion>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={3} sx={{ color: 'white' }}>
          <CartSummary processTitle={'place order'} submit={submit} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Payment;
