import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Header from '../../components/Header';
import { CircularProgress } from '@mui/material';
import { login } from '../../actions/authAction';
import Toast from '../../components/toast';
import { useNavigate } from 'react-router-dom';
import { formValidation } from '../../Utils/validation';
import {useDispatch} from"react-redux"; 
import { setLoggedinToken } from '../../redux/actions/authActions';


const SignIn = () => {

    const navigate= useNavigate();
    const dispatch = useDispatch();
    const [state, setState] = useState({
        username: '',
        password: '',
        apiStatus: '',
        errors: null

    })
    const handleSubmit = (e) => {

        e.preventDefault();
        setState((curr)=>({...curr,errors:null}));    
        const { username, password } = state

        const {isValidated, errors} = formValidation(state)
        if (isValidated) {
            const data = {
                username,
                password
            }
           
            setState((curr) => ({ ...curr, apiStatus: 'loading' }));
            login(data)
            .then(({ data }) => {
                if(data && data.token){
                    dispatch(setLoggedinToken(data.token));
                    console.log(data.token)
                navigate("/",{
                    replace:true
                });
                return
                }
                throw new Error ('token not availabe');
                


            }).catch((err) => {
                console.log(err.response.status);
                const status = err.response.status;
                setState((curr) => ({ ...curr, password: '',apiStatus:"error" }));
                if (status == 401) {
                    console.log("User is not valid");
                }

            })
        }
        else{
            setState((curr)=>({...curr,errors:errors}));    

        }

    };

  const onChangeInput = (e) => {
        const { name, value } = e.target;
        setState((curr)=>({
            ...curr,
            [name]: value,
        })) ;
    };


    const onCloseToast = ()=>{
        setState((curr) => ({ ...curr, apiStatus: '' }));

    }
    const isloading = state.apiStatus === 'loading'
    const error = state.apiStatus === 'error'
    const errors = state.errors;
    

    return (
        <div>
            <Header showHome={true} />


            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                            error = {Boolean(errors && errors.usernameError)}
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoFocus
                                disabled={isloading}
                                value={state.username}
                                onChange={onChangeInput}
                                helperText={errors && errors.usernameError}
                            />
                            <TextField
                             error = {Boolean(errors && errors.passwordError)}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                disabled={isloading}
                                value={state.password}
                                onChange={onChangeInput}
                                helperText={errors && errors.passwordError}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={isloading}
                            >
                              Sign In {isloading&& <CircularProgress sx={{ml:2}} size={20} />}
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
            {error && <Toast message={"Username or Password is Invalid"} open={error} type={"error"}  onClose={onCloseToast}/>}
        </div>

    );
}

export default SignIn;