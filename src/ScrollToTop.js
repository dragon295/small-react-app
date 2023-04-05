import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Button } from '@mui/material';

const ScrollToTop = (props) => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/search') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      {props.children}

      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        variant='contained'
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '5px',
          zIndex: 1000,
          transition: 'all 0.5s ease-in-out',
          display: showTopBtn ? 'block' : 'none',
          minWidth: 'unset',
          width: '45px',
          height: '45px',
          p: 0,
          fontSize: '20px',
          bgcolor: '#fe59d7',
          border: '1px solid #fe59d7 ',
          '&:active': {
            bgcolor: ' #fe59d7',
          },
          '&:hover': {
            bgcolor: 'transparent',
            color: '#fe59d7',
            borderColor: '#fe59d7',
          },
        }}
      >
        &uarr;
      </Button>
    </>
  );
};

export default ScrollToTop;
