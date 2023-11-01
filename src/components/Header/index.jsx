import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch, useSelector } from 'react-redux';
// import { setLogoutToken } from '../../redux/actions/authActions';
import { Badge, Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserAvatar from './userAvatar';
import UserAvatar1 from './userAvatar1';
import { removeFromCheckOut } from '../../redux/actions/checkoutActions';

const Header = ({ showLogin,showCart= true, showHome,Id }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


    const cartItems = useSelector((state) => state.cart.cartItems);

    // const {auth:{isLoggedIn}={},cart:{cartItems=[]}={}} = useSelector((state) => state);   // destructured  version of above lines
    // 


    const onLogin = () => {
        navigate('/signin');
    }
    
    const onHome = () => {
        navigate('/');
        dispatch(removeFromCheckOut(Id))
    }

    const onCart = () => {
        navigate('/cart')
    }

    const cartCount = Array.isArray(cartItems) ? cartItems.length : 0;

    const showCartBtn = isLoggedIn && showCart;



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link onClick={onHome} sx={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>ShoppStop</Link>
                    </Typography>


                    {showLogin && !isLoggedIn && (<IconButton size='large' color='inherit' onClick={onLogin}>
                        <AccountCircleIcon />
                    </IconButton>)}
                    {/* {showHome && (<IconButton size='large' color='inherit' onClick={onHome}>
                        <HomeIcon />
                    </IconButton>)} */}
                    {showCartBtn && (<IconButton size='large' color='inherit' onClick={onCart}>
                        <Badge badgeContent={cartCount} color="warning">
                            <ShoppingCartIcon />
                        </Badge>

                    </IconButton>)}
                    {/* { isLoggedIn  && (<IconButton size='large' color='inherit' onClick={onLogOut}>
                        <LogoutIcon />
                    </IconButton>)} */}
                   
                       { isLoggedIn && !showHome && <UserAvatar1 />}

                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Header


