import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../../context';

import {
  Box,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  Button,
  IconButton,
} from '@mui/material';

const MenuUser = ({ settings }) => {
  const { currentUser, logout } = useGlobalContext();
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      {!currentUser ? (
        <Button
          color='primary'
          variant='outlined'
          component={Link}
          to='/signin'
          sx={{
            borderColor: '#fe59d7',
            color: '#fe59d7',
            transition: 'all 0.5 ease-in-out',
            '&:hover': {
              borderColor: '#fe59d7',
              bgcolor: '#fe59d7',
              color: 'white',
            },
          }}
        >
          Login
        </Button>
      ) : (
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar src={currentUser && currentUser?.photoURL}></Avatar>
        </IconButton>
      )}

      <Menu
        sx={{ mt: '45px' }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Box onClick={handleCloseUserMenu}>
          {settings.map((setting) => {
            return (
              <MenuItem
                key={setting.name}
                component={Link}
                to={setting.url}
                sx={{
                  width: '110px',
                  whiteSpace: 'unset',
                  textTransform: 'capitalize',
                }}
              >
                {setting.name}
              </MenuItem>
            );
          })}

          <MenuItem onClick={() => logout(navigate)}>
            <Typography textAlign='center'>Logout</Typography>
          </MenuItem>
        </Box>
      </Menu>
    </Box>
  );
};

export default MenuUser;
