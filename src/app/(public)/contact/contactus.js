"use client"

import { useState } from "react";

import {
    Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid, Paper, Stack, TextField, Typography
} from "@mui/material";

import { useFormik } from "formik";
import * as yup from 'yup';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTowerCell } from "@fortawesome/free-solid-svg-icons";
import MapComponent from "./map";

const validationSchema = yup.object({
    name: yup
        .string()
        .required('Enter name'),
    phone: yup
        .number()
        .required('Phone number is required')
        .typeError('Enter valid phone number')
    // .test('len', 'Enter valid phone number', val => val.toString().length === 10)
    ,
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    comments: yup
        .string()
        .required('Enter comments'),
});

export default function ContactUs() {

    const [updateConfirmation, setUpdateConfirmation] = useState(false);

    const handleUpdateConfirmationClose = () => {
        setUpdateConfirmation(false);
        props.handleClose()
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            comments: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setLoading(true);

            setUpdateConfirmation(true)
        },
    });

    return (
        <Box>
            <Container sx={{ py: 15 }}>

                <Grid container spacing={10}>
                    <Grid size={{ xs: 12, md: 5 }}>

                        <Paper elevation={0} sx={{ p: 5, backgroundColor: '#f2f2f2', height: '100%' }} data-aos="fade-up">
                            <Typography
                                variant="body1"
                                sx={{ pt: 2, pb: 3 }}
                            >
                                Our dedicated team is here to assist you 24/7.
                            </Typography>

                            <Stack direction='row' spacing={2} sx={{ pb: 2 }}>

                                <Typography
                                    variant="body1"
                                >
                                    Address:
                                </Typography>
                                <Box>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Fathima Memorial Training College
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Pallimukku
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Kollam, 691010
                                    </Typography>
                                </Box>
                            </Stack>

                            <Stack direction='row' spacing={2} sx={{ pb: 2 }}>
                                <Typography
                                    variant="body1"
                                >
                                    Phone:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: 600 }}
                                >
                                    0474-2727368
                                </Typography>
                            </Stack>
                            <Stack direction='row' spacing={2} sx={{ pb: 2 }}>
                                <Typography
                                    variant="body1"
                                >
                                    Email:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: 600 }}
                                >
                                    fathimabed@gmail.com
                                </Typography>
                            </Stack>


                        </Paper>

                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>

                        <Typography
                            variant="h5"
                            component="h5"
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 1,
                                color: "primary.main"
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faTowerCell}
                                color="currentColor"
                                style={{
                                    fontSize: "1em",
                                    width: "1em",
                                    height: "1em",
                                }}
                            />
                            CONTACT US
                        </Typography>

                        <Typography
                            variant="h3"
                            data-aos="fade-up"
                        >
                            We Want To Hear From You
                        </Typography>



                        <Typography
                            variant="body1"
                            sx={{ pb: 5 }}
                            data-aos="fade-up"
                        >
                            Simply fill out our online inquiry form, and we&#39;ll get back to you promptly.

                        </Typography>
                        <Box component='form' onSubmit={formik.handleSubmit}>
                            <Grid container spacing={3} data-aos="fade-up">
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        id="name"
                                        name="name"
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                        autoComplete="first name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        id="phone"
                                        name="phone"
                                        label="Phone Number"
                                        variant="outlined"
                                        fullWidth
                                        autoComplete="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                                        helperText={formik.touched.phone && formik.errors.phone}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        autoComplete="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </Grid>

                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        id="comments"
                                        name="comments"
                                        label="Comments"
                                        variant="outlined"
                                        fullWidth
                                        multiline
                                        minRows={4}
                                        value={formik.values.comments}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.comments && Boolean(formik.errors.comments)}
                                        helperText={formik.touched.comments && formik.errors.comments}
                                    />

                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Button
                                        type="submit"
                                        variant='contained'
                                        size="large"
                                        sx={{
                                            mt: 2, color: 'white',
                                        }}
                                    >
                                        SUBMIT
                                    </Button>
                                </Grid>

                            </Grid>
                        </Box>



                    </Grid>

                </Grid>

            </Container>

            <MapComponent />


            <Dialog
                open={updateConfirmation}
                onClose={handleUpdateConfirmationClose}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirmation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Thank you for contacting us! We will contact you soon.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUpdateConfirmationClose}>OK</Button>
                </DialogActions>
            </Dialog>

        </Box >






    );
}
