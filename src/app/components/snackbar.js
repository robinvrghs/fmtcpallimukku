import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SnackBar(props) {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        props.snackbarClear()
    };

    return (
        <Snackbar open={props.snackbarData.snackbarOpen} autoHideDuration={5000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity={props.snackbarData.snackbarSeverity}
                variant="filled"
            >
                {props.snackbarData.snackbarText}
            </Alert>
        </Snackbar>
    );
}
