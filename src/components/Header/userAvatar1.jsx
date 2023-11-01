import React, { useState } from 'react';
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
import { deepOrange } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/actions/authActions';

const UserAvatar1 = () => {
  const [menuOpen, setMenuOpen] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenUserMenu = (e) => {
    setMenuOpen(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setMenuOpen(null);
  };

  const onLogout = () => {
   
    dispatch(logout());
    handleCloseUserMenu();
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 0, marginLeft: 2 }}>
      <Tooltip title="Menu">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30, fontSize: 12 }}>V</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={menuOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(menuOpen)}
        onClose={handleCloseUserMenu}
      >
        
        <MenuItem onClick={onLogout}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     isLoggedin: state.auth.isLoggedin,
//   };
// };

//export default connect(mapStateToProps)(UserAvatar1);
export default UserAvatar1