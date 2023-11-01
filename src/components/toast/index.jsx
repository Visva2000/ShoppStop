import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React from "react";


const Toast = ({open, onClose, message, type}) => {
    return (
        <Snackbar width={{md:400,xs:100}} open={open} autoHideDuration={1000} onClose={onClose} anchorOrigin={{ vertical:"top", horizontal:"center" }} >
            <Alert onClose={onClose} severity={type} sx={{ width: '100%'}}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default Toast;