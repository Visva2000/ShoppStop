import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { connect } from "react-redux";
import React, { PureComponent } from "react";
import { logout } from "../../redux/actions/authActions";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";





class UserAvatar extends PureComponent {

    constructor() {
        super();
        this.state = {
            menuOpen: null,
        };

    }
    handleOpenUserMenu = (e) => {
        this.setState({ menuOpen: e.currentTarget });
    }
    handleCloseUserMenu = () => {
        this.setState({ menuOpen: null });
    };

    onLogout=()=>{
        const {dispatch}= this.props;
        dispatch(logout());
        this.handleCloseUserMenu();
        this.props.navigate('/');
        
        
    }
    render() {
        const {isLoggedin}= this.props;
        console.log(isLoggedin)
        return (
            <Box sx={{ flexGrow: 0, marginLeft: 2 }}>
                <Tooltip title="Menu">
                    <IconButton onClick={this.handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar sx={{ bgcolor: deepOrange[500],width: 30, height: 30,fontSize:12 }} >V</Avatar>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={this.state.menuOpen}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(this.state.menuOpen)}
                    onClose={this.handleCloseUserMenu}
                >

                    <MenuItem  onClick={this.handleCloseUserMenu}>
                        <Typography textAlign="center">Profile</Typography>
                    </MenuItem>

                    <MenuItem  onClick={this.handleCloseUserMenu}>
                        <Typography textAlign="center">Dashboard</Typography>
                    </MenuItem>

                    <MenuItem  onClick={this.onLogout}>
                        <Typography textAlign="center">Logout</Typography>
                    </MenuItem>

                </Menu>
            </Box>
        );
    }
}


const mapStateToProps = (state)=>{
    return{
        isLoggedin: state.auth.isLoggedin
    }
}

// const mapDispatchToProps = (dispatch)=>{
//     return{
//         logoutUser: ()=> dispatch(logout())
//     }
// }



export default connect(mapStateToProps,)( UserAvatar)