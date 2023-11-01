import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Header from '../../components/Header';
import { Checkbox, CircularProgress, FormControlLabel } from '@mui/material';
import { login, signup } from '../../actions/authAction';
import Toast from '../../components/toast';
import { useNavigate } from 'react-router-dom';
import { signupFormValidation } from '../../Utils/validation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const SignUp = () => {

    const navigate = useNavigate();
    const [state, setState] = useState({
        username: '',
        password: '',
        Confirmpassword: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        apiStatus: '',
        errors: null

    })
    const handleSubmit = (e) => {

        e.preventDefault();
        setState((curr) => ({ ...curr, errors: null }));
        const { username, password,Confirmpassword,email,firstName,lastName,phone } = state

        const { isValidated, errors } = signupFormValidation(state)
        if (isValidated) {
            const data = {
                username,
                password,
                Confirmpassword,
                email,
                firstName,
                lastName,
                phone
            }

            setState((curr) => ({ ...curr, apiStatus: 'loading' }));
            signup(data).then(({ data }) => {
                console.log(data, 'signup Successfull')
                navigate("/signin", {
                    replace: true
                });


            }).catch((err) => {
                console.log(err.response.status);
                // const status = err.response.status;
                // setState((curr) => ({ ...curr, password: '', apiStatus: "error" }));
                // if (status == 401) {
                //     console.log("User is not valid");
                // }

            })
        }
        else {
            setState((curr) => ({ ...curr, errors: errors }));

        }

    };

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setState((curr) => ({
            ...curr,
            [name]: value,
        }));
    };


    // const onCloseToast = () => {
    //     setState((curr) => ({ ...curr, apiStatus: '' }));

    // }
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
                            <AccountCircleIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>


                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    error={Boolean(errors && errors.firstNameError)}
                                    
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        disabled={isloading}
                                        value={state.firstName}
                                        onChange={onChangeInput}
                                        helperText={errors && errors.firstNameError}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    error={Boolean(errors && errors.lastNameError)}
                                   
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        disabled={isloading}
                                        value={state.lastName}
                                        onChange={onChangeInput}
                                        helperText={errors && errors.lastNameError}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    error={Boolean(errors && errors.emailError)}
                                    
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        disabled={isloading}
                                        value={state.email}
                                        onChange={onChangeInput}
                                        helperText={errors && errors.emailError}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    error={Boolean(errors && errors.phoneError)}
                                    
                                        required
                                        fullWidth
                                        id="phone"
                                        label="Phone Number"
                                        name="phone"
                                        autoComplete="mobile"
                                        type='number'
                                        disabled={isloading}
                                        value={state.phone}
                                        onChange={onChangeInput}
                                        helperText={errors && errors.phoneError}
                                    />
                                </Grid>
                            </Grid>

                            <TextField
                                error={Boolean(errors && errors.usernameError)}
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
                                error={Boolean(errors && errors.passwordError)}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                disabled={isloading}
                                value={state.password}
                                onChange={onChangeInput}
                                helperText={errors && errors.passwordError}
                            />
                            <TextField
                                error={Boolean(errors && errors.confirmPasswordErrorr)}
                                margin="normal"
                                required
                                fullWidth
                                name="Confirmpassword"
                                label="Confirm password"
                                type="password"
                                id="Confirmpassword "
                                disabled={isloading}
                                value={state.Confirmpassword}
                                onChange={onChangeInput}
                                helperText={errors && errors.confirmPasswordErrorr}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={isloading}
                            >
                                Sign Up{isloading && <CircularProgress sx={{ ml: 2 }} size={20} />}
                            </Button>
                            <Grid container>
                                <Grid item >
                                    <FormControlLabel 
                                        control={<Checkbox   color="primary"  />}
                                        label="I agree with the Terms and Conitions."
                                    />
                                </Grid> 
                                <Grid item>
                                    <Link href="/signin" variant="body2">
                                        {"Already have an account? SignIn   "}
                                    </Link>
                                </Grid>
                            </Grid>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
            {/* {error && <Toast message={"Username or Password is Invalid"} open={error} type={"error"} onClose={onCloseToast} />} */}
        </div>

    );
}

export default SignUp;