import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { useState } from 'react';
import AddressForm from '../AddressForm/AddressForm';
import PaymentForm from '../paymentForm/PaymentForm';
import Review from '../review/Review';
import Header from '../../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCheckOut } from '../../../redux/actions/checkoutActions';
import { useNavigate, useParams } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        ShoppStop
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Shipping address', 'Review your order', 'Payment details'];
//const { checkoutItems = [] } = useSelector((state) => state.checkout)

function getStepContent(step,setId,Id,pageKeyId) {
  switch (step) {
    case 0:
      return <AddressForm setId={setId} />;
    case 1:
      return <Review  pageKeyId={pageKeyId} />;
    case 2:
      return <PaymentForm />;
    default:
      throw new Error('Unknown step');
  }
}

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const[Id,setId]=useState(0);

   const dispatch = useDispatch();
const navigate =useNavigate();
  const handleNext = () => {
    
    setActiveStep(activeStep + 1);
  };
  const handlePlaceOrder=()=>{
    dispatch(removeFromCheckOut(Id))
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const returnToProduct=()=>{
    navigate(`/product/${Id}`)
    dispatch(removeFromCheckOut(Id))
    
  }
  const { keyId: pageKeyId } = useParams()
  console.log(pageKeyId)

  return (
    <React.Fragment>
      <CssBaseline />
      <Header Id={Id} />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #{Id+2000}. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep,setId,Id,pageKeyId)}
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {activeStep === 0 && (
                  
                  <Button onClick={returnToProduct} sx={{ mt: 3, ml: 1 }} endIcon={<KeyboardReturnIcon/>}>
                    Return
                  </Button>
                )}
                 {activeStep !== 0 && (
                  
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
             { activeStep === steps.length - 1 &&  <Button
                  variant="contained"
                  onClick={handlePlaceOrder}                  
                  sx={{ mt: 3, ml: 1 }}
                >
                  Place order
                </Button>}
            {activeStep !== steps.length - 1 &&<Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 3, ml: 1 }}
            >
              Next
            </Button>}
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}

export default Checkout

// {activeStep === steps.length - 1 ? 'Place order' : 'Next'}