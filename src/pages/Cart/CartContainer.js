import React, { useContext, useEffect, useState } from 'react';

import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  Card,
} from '@mui/material';

import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';

import { useGlobalContext } from '../../context';

import DoneIcon from '@mui/icons-material/Done';
import { textAlign } from '@mui/system';

const ContainerContext = React.createContext('');

const steps = ['Cart', 'Payment', 'Successful'];

const CartContainer = ({ children }) => {
  const { currentUser } = useGlobalContext();
  const [submit, setSubMit] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const pathString = location.pathname.split('/').slice(1);
  const lastPathName = pathString[pathString.length - 1];

  const handleNext = (path) => {
    if (!currentUser) {
      navigate('/signin');
    } else if (path) navigate(path);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    navigate(-1);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    if (lastPathName === 'cart') handleReset();
    else if (lastPathName === 'payment') setActiveStep(1);
  }, [lastPathName]);

  const handleCart = {
    handleNext,
    submit,
    setSubMit,
  };

  return (
    <>
      <ContainerContext.Provider value={handleCart}>
        <Container>
          <Box sx={{ width: '100%', mt: 15 }}>
            <Stepper activeStep={activeStep} sx={{ mb: 2 }}>
              {steps.map((label, index) => {
                const stepProps = {};
                if (activeStep === steps.length - 1) stepProps.completed = true;
                return (
                  <Step key={label} {...stepProps} sx={{ px: 0 }}>
                    <StepLabel
                      sx={{
                        '& span .Mui-active': {
                          color: '#fe59d7',
                        },
                        '& span .Mui-completed': {
                          color: '#13c113',
                        },
                      }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length - 1 ? (
              <Card
                sx={{
                  display: ' flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  my: 3,
                  mb: 5,
                  background: 'black',
                }}
              >
                <Box
                  bgcolor={'#34be55'}
                  sx={{
                    width: '100%',
                    px: 2.5,
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  <Box
                    variant='h4'
                    sx={{
                      textAlign: 'center',
                      py: 2,
                      '& p': {
                        mt: 2,
                        fontSize: '18px',
                        '& a': {
                          fontWeight: 'bold',
                          color: 'black',
                          textShadow: '2px 2px #fe59d7',
                        },
                      },
                    }}
                  >
                    <DoneIcon
                      sx={{
                        fontSize: '100px',
                        color: 'white',
                      }}
                    />
                    <Typography
                      variant='h5'
                      sx={{ fontFamily: 'Domine, serif' }}
                    >
                      Thank you {currentUser.email}
                    </Typography>
                    <p>
                      Your info about the cart will be sent over this email.
                      Please check your email for details
                    </p>
                  </Box>
                </Box>

                <Button
                  variant='contained'
                  sx={{
                    borderRadius: '30px',
                    my: 2.5,
                    bgcolor: '#fe59d7',
                    '&:active': {
                      bgcolor: ' #fe59d7',
                    },
                    '&:hover': {
                      bgcolor: ' #fe59d7',
                    },
                  }}
                  onClick={() => navigate('/')}
                >
                  Back to Home
                </Button>
              </Card>
            ) : (
              <>
                <Outlet />
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color='inherit'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1, mb: 2 }}
                  >
                    Back
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Container>
        {children}
      </ContainerContext.Provider>
    </>
  );
};

export const useStepCard = () => {
  return useContext(ContainerContext);
};

export { ContainerContext, CartContainer };
