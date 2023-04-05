import React, { useState } from 'react';

import { useGlobalCart } from '../../../cart-context';
import { Link } from 'react-router-dom';

import {
  Box,
  Typography,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
} from '@mui/material';

import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const drawerWidth = 240;

const SidebarHeader = ({ pages, handleOpenModal }) => {
  const { amount } = useGlobalCart();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleOpenNavMenu}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>

      <Box
        component='nav'
        sx={{ width: { sm: 0 }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          variant='temporary'
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleCloseNavMenu}>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mx: 'auto',
                textAlign: 'center',
              }}
            >
              <AdbIcon sx={{ display: { xs: 'block', md: 'none' }, mr: 1 }} />
              <Typography
                variant='h5'
                noWrap
                component={Link}
                to={'/'}
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LAGO
              </Typography>
            </Box>
            <Divider />

            <List>
              {pages?.map((page) => (
                <ListItem key={page.name} disablePadding>
                  <ListItemButton component={Link} to={page.url}>
                    <ListItemIcon>{page.icon}</ListItemIcon>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem sx={{ height: '48px' }}>
                <ListItemButton
                  onClick={handleOpenModal}
                  sx={{
                    color: 'inherit',
                    ml: 0,
                    mr: 0,
                    textTransform: 'capitalize',
                    pl: 0,
                    pr: 3,
                  }}
                >
                  <ListItemIcon>
                    <SearchIcon />
                  </ListItemIcon>
                  <ListItemText primary='Search' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to='cart'>
                  <ListItemIcon>
                    {amount > 0 ? (
                      <Badge
                        badgeContent={amount}
                        sx={{
                          '& span': {
                            bgcolor: 'red',
                            width: '20px',
                            color: 'white',
                          },
                        }}
                      >
                        <ShoppingCartIcon
                          sx={{
                            mr: '1px',
                          }}
                        />
                      </Badge>
                    ) : (
                      ''
                    )}
                  </ListItemIcon>
                  <ListItemText primary='Cart' />
                </ListItemButton>
              </ListItem>
            </List>

            <Divider />
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default SidebarHeader;
