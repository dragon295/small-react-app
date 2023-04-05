import React, { useState } from 'react';

import LogoHeader from './LogoHeader/LogoHeader';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import MenuUser from './MenuUser/MenuUser';
import SearchModal from './SearchModal/SearchModal';
import NavbarCart from './NavbarCart/NavbarCart';

import { Link, useLocation, NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../context';

import { Container, AppBar, Box, Toolbar, Button } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BookIcon from '@mui/icons-material/Book';
import PolicyIcon from '@mui/icons-material/Policy';

const settings = [
  {
    name: 'account',
    url: '/account',
  },
];

const pages = [
  {
    name: 'Home',
    url: '/',
    icon: <HomeIcon fontSize='medium' />,
  },
  {
    name: 'About',
    url: 'about',
    icon: <InfoIcon fontSize='medium' />,
  },
  {
    name: 'Blog',
    url: 'blog',
    icon: <BookIcon fontSize='medium' />,
  },
  {
    name: 'Policies',
    url: 'policies',
    icon: <PolicyIcon fontSize='medium' />,
  },
];

const activeLink = {
  color: '#fe59d7',
  fontWeight: 600,
  margin: '16px 8px',
  textTransform: 'uppercase',
};

const defaultNavLinkProps = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        end: 'end',
      },
    },
  },
});

const Navbar = () => {
  const { scrollChangeBg } = useGlobalContext();

  const location = useLocation();

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          top: '0',
          right: '0',
          zIndex: '100',
          backgroundColor: scrollChangeBg ? 'white' : 'rgba(0,0,0,0.9)',
          color: scrollChangeBg ? '#000000' : 'white',
          boxShadow:
            '0px 2px 4px -1px rgb(0 0 0 / 25%), 0px 4px 5px 0px rgb(0 0 0 / 20%), 0px 1px 10px 0px rgb(0 0 0 / 20%)',
          transition: 'color, background .25s ease-in',
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <SidebarHeader
              setOpenModal={setOpenModal}
              pages={pages}
              handleOpenModal={handleOpenModal}
            />

            {/*Logo component*/}
            <LogoHeader />
            {/*Logo component*/}

            {/*Nav component*/}
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {pages.map((page) => (
                <ThemeProvider theme={defaultNavLinkProps} key={page.name}>
                  <Button
                    sx={{ my: 2, mx: 1, color: 'inherit', fontWeight: 600 }}
                    component={NavLink}
                    to={page.url}
                    style={({ isActive }) =>
                      isActive ? activeLink : undefined
                    }
                  >
                    {page.name}
                  </Button>
                </ThemeProvider>
              ))}

              {/*Search Modal*/}
              <SearchModal
                openModal={openModal}
                handleOpenModal={handleOpenModal}
                handleCloseModal={handleCloseModal}
              />
              {/*Search Modal*/}

              {/*Header Cart*/}
              <NavbarCart />
              {/*Header Cart*/}

              {/*Nav component*/}
            </Box>
            {/*Nav component*/}

            {/*Menu User*/}
            <MenuUser settings={settings} />
            {/*Menu User*/}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
