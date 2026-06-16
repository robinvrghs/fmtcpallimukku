"use client"

import { useState } from "react";

import {
    Box, Button, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    FormControl,
    FormControlLabel, FormLabel, Grid, MenuItem, Paper, Stack, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography
} from "@mui/material";


import { useFormik } from "formik";
import * as yup from 'yup';
import shortid from "shortid";


const validationSchema = yup.object({
    branch: yup
        .string()
        .required('Select Branch'),
    year: yup
        .number()
        .required('Select Year')
    // .test('len', 'Enter valid phone number', val => val.toString().length === 10)
    ,
    event: yup
        .string()
        .required('Enter Event'),
    description: yup
        .string()
        .required('Enter description'),
});


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


export default function GalleryManager() {

    const [galleryData, setGalleryData] = useState([]);


    useEffect(() => {
        fetch('/api/gallery_data.php')
            .then((res) => res.json())
            .then((data) => {
                setGalleryData(data)
            })
    }, [])


    const [updateConfirmation, setUpdateConfirmation] = useState(false);

    const handleUpdateConfirmationClose = () => {
        setUpdateConfirmation(false);
    };

    const [errorConfirmation, setErrorConfirmation] = useState(false);

    const handleErrorConfirmationClose = () => {
        setErrorConfirmation(false);
    };


    const [galleryFiles, setGalleryFiles] = useState([])
    const [files, setFiles] = useState([])

    const InputChange = (e) => {

        let images = [];
        for (let i = 0; i < e.target.files.length; i++) {
            images.push((e.target.files[i]));
            let reader = new FileReader();
            let file = e.target.files[i];
            reader.onloadend = () => {
                setGalleryFiles((preValue) => {
                    return [
                        ...preValue,
                        {
                            id: shortid.generate(),
                            fileimage: reader.result,
                        }
                    ]
                });
            }
            if (e.target.files[i]) {
                reader.readAsDataURL(file);
            }
        }
        formik.setFieldValue("photos", images)
    }


    const DeleteSelectFile = (id) => {
        if (window.confirm("Are you sure you want to delete this Image?")) {
            const result = galleryFiles.filter((data) => data.id !== id);
            setGalleryFiles(result);
        } else {
            // alert('No');
        }

    }

    const formik = useFormik({
        initialValues: {
            branch: '',
            year: '',
            event: '',
            description: '',
            photos: [],
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {

            const formData = new FormData();

            Object.entries(values).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const response = await fetch(`https://fmtcpallimukku.ac.in/api/gallery_manager.php`, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (result.status) {
                setUpdateConfirmation(true)
            } else {
                setErrorConfirmation(true)
            }
        },
    });

    return (

        <Box>

            <Container>

                <Paper
                    sx={{
                        borderRadius: '20px', boxShadow: '4px 14px 28px rgba(0, 0, 0, 0.1)', p: 5
                    }}
                    data-aos="fade-up"
                >

                    <Typography variant="h4" sx={{ textAlign: 'center', mb: 5 }}>
                        Gallery Manager
                    </Typography>

                    {galleryData.length > 0 ?

                        <TableContainer component={Paper} sx={{ p: 2, mt: 2 }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Token</TableCell>
                                        <TableCell>Patient No</TableCell>
                                        <TableCell>Patient Name</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Phone Number</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {appointments.map((appointment, index) => (
                                        <TableRow
                                            key={appointment.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{appointment.tokenNo}</TableCell>
                                            <TableCell>{appointment.patientNo}</TableCell>
                                            <TableCell sx={{ textTransform: 'capitalize' }}>{appointment.firstname} {appointment.lastname}</TableCell>
                                            <TableCell>{appointment.status}</TableCell>
                                            <TableCell>{appointment.phone}</TableCell>
                                            <TableCell>
                                                <Stack direction='row' spacing={1}>
                                                    <Button
                                                        variant="contained"
                                                        size='small'
                                                        color='secondary'
                                                        onClick={
                                                            () => handleConsultationOpen(appointment)
                                                        }
                                                    >
                                                        Open
                                                    </Button>
                                                    {/* <Button
                                                    variant="outlined"
                                                    size='small'
                                                    color='secondary'
                                                >
                                                    Cancel
                                                </Button> */}
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        :
                        <Paper sx={{ p: 2, mt: 2 }}>
                            <Typography variant="h6" component="h2" color='#000'>
                                No appointments found!
                            </Typography>
                        </Paper>

                    }


                    <Box component='form' onSubmit={formik.handleSubmit}>
                        <Grid container spacing={3}>

                            <Grid size={{ xs: 12, md: 8 }}>
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, md: 5 }}>
                                        <TextField
                                            id="branch"
                                            name="branch"
                                            label="Branch"
                                            variant="outlined"
                                            fullWidth
                                            autoComplete="branch"
                                            select
                                            value={formik.values.branch}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.branch && Boolean(formik.errors.branch)}
                                            helperText={formik.touched.branch && formik.errors.branch}
                                        >
                                            <MenuItem value="Civil Engineering">
                                                Civil Engineering
                                            </MenuItem>
                                            <MenuItem value="Mechanical Engineering">
                                                Mechanical Engineering
                                            </MenuItem>
                                            <MenuItem value="Electrical & Electronics Engineering">
                                                Electrical & Electronics Engineering
                                            </MenuItem>
                                            <MenuItem value="Electronics & Communication Engineering">
                                                Electronics & Communication Engineering
                                            </MenuItem>
                                            <MenuItem value="Computer Science Engineering">
                                                Computer Science Engineering
                                            </MenuItem>
                                        </TextField>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 2 }}>
                                        <TextField
                                            id="year"
                                            name="year"
                                            label="Year"
                                            variant="outlined"
                                            fullWidth
                                            autoComplete="year"
                                            select
                                            value={formik.values.year}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.year && Boolean(formik.errors.year)}
                                            helperText={formik.touched.year && formik.errors.year}
                                        >
                                            <MenuItem value="2025">
                                                2025
                                            </MenuItem>
                                            <MenuItem value="2024">
                                                2024
                                            </MenuItem>
                                            <MenuItem value="2023">
                                                2023
                                            </MenuItem>
                                            <MenuItem value="2022">
                                                2022
                                            </MenuItem>
                                            <MenuItem value="2021">
                                                2021
                                            </MenuItem>
                                        </TextField>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 5 }}>
                                        <TextField
                                            id="event"
                                            name="event"
                                            label="Event"
                                            variant="outlined"
                                            fullWidth
                                            value={formik.values.event}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.event && Boolean(formik.errors.event)}
                                            helperText={formik.touched.event && formik.errors.event}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            id="description"
                                            name="description"
                                            label="Description"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            minRows={4}
                                            value={formik.values.description}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.description && Boolean(formik.errors.description)}
                                            helperText={formik.touched.description && formik.errors.description}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Button
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    sx={{ width: '200px' }}

                                >
                                    Upload Photo
                                    <VisuallyHiddenInput
                                        type="file"
                                        multiple
                                        onChange={
                                            (e) => {
                                                formik.setFieldValue("photos", newValue);
                                            }
                                        }
                                    />
                                </Button>
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                                <Grid container spacing={3}>
                                    {
                                        formik.values.photos && Array.from(formik.values.photos).map((pic, index) => {
                                            return (
                                                <Grid size={{ xs: 12, md: 3 }} key={index}>
                                                    <Box
                                                        component='img'
                                                        src={URL.createObjectURL(pic)}
                                                        alt=""
                                                        sx={{ maxWidth: '100%', maxHeight: '100%' }}
                                                    />
                                                    <Button onClick={() => DeleteSelectFile(pic)}>Delete</Button>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>



                            <Grid size={{ xs: 12 }} >
                                <Box sx={{ justifyContent: 'center', display: 'flex' }}>
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
                                        Upload
                                    </Button>

                                </Box>

                            </Grid>

                        </Grid>
                    </Box>

                </Paper>

            </Container>



            {updateConfirmation &&
                <Dialog
                    open={updateConfirmation}
                    onClose={handleUpdateConfirmationClose}
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Confirmation"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Your application for B.Tech {formik.values.branch} is submitted successfully. Username and Password for login is your registered mobile number.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleUpdateConfirmationClose}>Print</Button>
                        <Button onClick={handleUpdateConfirmationClose}>OK</Button>
                    </DialogActions>
                </Dialog>
            }

            {errorConfirmation &&

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
