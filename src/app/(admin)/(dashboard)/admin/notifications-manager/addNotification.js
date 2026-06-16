"use client"

import { useState } from "react";

import {
    Box, Button, ButtonBase, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid, MenuItem, Stack, TextField, Typography
} from "@mui/material";

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


import { useFormik } from "formik";
import * as yup from 'yup';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";


const validationSchema = yup.object({
    notification: yup
        .string()
        .required('Enter notification'),
    date: yup
        .string()
        .required('Enter Date')
    // .test('len', 'Enter valid phone number', val => val.toString().length === 10)
    ,
});





export default function AddNotification(props) {

    const [updateConfirmation, setUpdateConfirmation] = useState(false);

    const handleUpdateConfirmationClose = () => {
        setUpdateConfirmation(false);
    };

    const [errorConfirmation, setErrorConfirmation] = useState(false);

    const handleErrorConfirmationClose = () => {
        setErrorConfirmation(false);
    };

    const formik = useFormik({
        initialValues: {
            notification: '',
            date: null,
            link: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {

            const formData = new FormData();

            Object.entries(values).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const response = await fetch(`https://fmtcpallimukku.ac.in/api/notifications/add_notification.php`, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (result.status) {
                setUpdateConfirmation(true)
                props.handleClose();
            } else {
                setErrorConfirmation(true)
            }
        },
    });

    return (
        <Box>

            <Dialog
                open={props.open}
                onClose={props.handleClose}
                scroll='paper' maxWidth='lg' fullWidth
            >
                <DialogTitle
                    component={Box}
                    sx={{
                        bgcolor: '#091e44', px: 2, py: 0.5,
                        display: 'flex', justifyContent: 'space-between',
                    }}>
                    <Typography variant="h6" component="h2" sx={{ color: '#fff' }}>
                        Add Event
                    </Typography>
                    <ButtonBase onClick={props.handleClose}>
                        <CloseOutlinedIcon sx={{ color: "#fff" }} />
                    </ButtonBase>
                </DialogTitle>

                <DialogContent>
                    <Container sx={{ pt: 3, pb: 5 }}>
                        <Box sx={{ border: 1, borderColor: '#BFD7ED', p: 2, mb: 3 }}>
                            <Box component='form' onSubmit={formik.handleSubmit}>
                                <Grid container spacing={3}>

                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            id="notification"
                                            name="notification"
                                            label="notification"
                                            variant="outlined"
                                            fullWidth
                                            autoComplete="notification"
                                            value={formik.values.notification}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.notification && Boolean(formik.errors.notification)}
                                            helperText={formik.touched.notification && formik.errors.notification}
                                        >

                                        </TextField>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 5 }}>
                                        <LocalizationProvider dateAdapter={AdapterMoment}>
                                            <DatePicker
                                                format='DD/MM/YYYY'
                                                onChange={(value) => formik.setFieldValue("date", value, true)}
                                                value={formik.values.date}
                                                slotProps={{
                                                    textField: {
                                                        fullWidth: true,
                                                        variant: "outlined",
                                                        id: 'date',
                                                        label: "Date",
                                                        name: "date",
                                                        error: formik.touched.date && Boolean(formik.errors.date),
                                                        helperText: formik.touched.date && formik.errors.date,
                                                    }
                                                }}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 7 }}>
                                        <TextField
                                            id="link"
                                            name="link"
                                            label="link"
                                            variant="outlined"
                                            fullWidth
                                            value={formik.values.link}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.link && Boolean(formik.errors.link)}
                                            helperText={formik.touched.link && formik.errors.link}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12 }} >
                                        <Stack direction='row' spacing={3} justifyContent='center'>
                                            <Button
                                                type="submit"
                                                variant='contained'
                                                size="large"
                                                sx={{

                                                    background: 'linear-gradient(to right, #048C9D, #06B9C8)',
                                                    my: 2, color: 'white', display: 'block',
                                                    fontWeight: 900, justifyContent: 'center'
                                                }}
                                            >
                                                Add Event
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                size='small'
                                                color='secondary'
                                                startIcon={<CloseOutlinedIcon />}
                                                onClick={props.handleClose}
                                            >
                                                Close
                                            </Button>

                                        </Stack>

                                    </Grid>

                                </Grid>
                            </Box>
                        </Box>


                    </Container>

                </DialogContent>
            </Dialog>



            {
                updateConfirmation &&
                <Dialog
                    open={updateConfirmation}
                    onClose={handleUpdateConfirmationClose}
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Confirmation"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Event added successfully!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleUpdateConfirmationClose}>OK</Button>
                    </DialogActions>
                </Dialog>
            }

            {
                errorConfirmation &&

                <Dialog
                    open={errorConfirmation}
                    onClose={handleErrorConfirmationClose}
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Error"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Unable to update. Try Again!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleErrorConfirmationClose}>OK</Button>
                    </DialogActions>
                </Dialog>
            }

        </Box >


    );
}
