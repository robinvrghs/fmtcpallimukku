"use client"
import {
    Box, Button, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    FormControl,
    FormControlLabel, FormLabel, Grid, MenuItem, Paper, Stack, styled, TextField, Typography
} from "@mui/material";


import { useFormik } from "formik";
import * as yup from 'yup';
import { useState } from "react";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

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
    declaration: yup
        .boolean()
        .oneOf([true], 'You must accept the declaration to proceed')
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

export default function AdmissionForm() {

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
            branch: '',
            name: '',
            address: '',
            phone: '',
            email: '',
            dob: null,
            gender: '',
            religion: '',
            caste: '',
            reservation: '',
            category: '',
            father: '',
            foc: '',
            mother: '',
            moc: '',
            nationality: '',
            institution: '',
            exam: '',
            physics: '',
            chemistry: '',
            maths: '',
            pcm_total: '',
            pcm_percentage: '',
            entrance: '',
            application_no: '',
            roll_no: '',
            score: '',
            rank: '',
            photo: '',
            sign: '',
            declaration: false
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {

            const formData = new FormData();

            Object.entries(values).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const response = await fetch(`https://ycet.ac.in/api/btech_application.php`, {
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
                        Application for Admission to B.Tech Degree Course
                    </Typography>

                    <Box component='form' onSubmit={formik.handleSubmit}>
                        <Grid container spacing={3}>

                            <Grid size={{ xs: 12, md: 8 }}>
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            id="branch"
                                            name="branch"
                                            label="Branch applied for"
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

                                    <Grid size={{ xs: 12 }}>
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
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            id="address"
                                            name="address"
                                            label="Address"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            minRows={4}
                                            value={formik.values.address}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.address && Boolean(formik.errors.address)}
                                            helperText={formik.touched.address && formik.errors.address}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Stack direction='column' spacing={3} alignItems='end'>

                                    <Box
                                        sx={{
                                            width: '200px', height: '200px', borderColor: '#000033', border: 2, textAlign: 'center'
                                        }}
                                    >
                                        <Box
                                            component='img'
                                            src={formik.values.photo ? URL.createObjectURL(formik.values.photo) : ''}
                                            sx={{ maxWidth: '100%', maxHeight: '100%' }}
                                        />
                                    </Box>
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
                                            onChange={(event) => { formik.setFieldValue("photo", event.currentTarget.files[0]) }}
                                        />
                                    </Button>
                                </Stack>
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }}>
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
                            <Grid size={{ xs: 12, md: 3 }}>
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

                            <Grid size={{ xs: 12, md: 3 }}>
                                <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="en-us">
                                    <DatePicker
                                        disableFuture
                                        format='DD/MM/YYYY'
                                        onChange={(value) => formik.setFieldValue("dob", value, true)}
                                        value={formik.values.dob}
                                        slotProps={{
                                            textField: {
                                                variant: "outlined",
                                                id: 'dob',
                                                label: "DOB",
                                                name: "dob",
                                                error: formik.touched.dob && Boolean(formik.errors.dob),
                                                helperText: formik.touched.dob && formik.errors.dob,
                                            }
                                        }}
                                    />
                                </LocalizationProvider>
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    id="gender"
                                    name="gender"
                                    label="Gender"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="gender"
                                    select
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.gender && Boolean(formik.errors.gender)}
                                    helperText={formik.touched.gender && formik.errors.gender}
                                >
                                    <MenuItem value="male">
                                        Male
                                    </MenuItem>
                                    <MenuItem value="female">
                                        Female
                                    </MenuItem>
                                </TextField>
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    id="religion"
                                    name="religion"
                                    label="Religion"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="religion"
                                    select
                                    value={formik.values.religion}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.religion && Boolean(formik.errors.religion)}
                                    helperText={formik.touched.religion && formik.errors.religion}
                                >
                                    <MenuItem value="hindu">
                                        Hindu
                                    </MenuItem>
                                    <MenuItem value="islam">
                                        Islam
                                    </MenuItem>
                                    <MenuItem value="christian">
                                        Christian
                                    </MenuItem>
                                </TextField>
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    id="caste"
                                    name="caste"
                                    label="Caste"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="caste"
                                    value={formik.values.caste}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.caste && Boolean(formik.errors.caste)}
                                    helperText={formik.touched.caste && formik.errors.caste}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    id="reservation"
                                    name="reservation"
                                    label="Eligible for Reservation"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="reservation"
                                    select
                                    value={formik.values.reservation}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.reservation && Boolean(formik.errors.reservation)}
                                    helperText={formik.touched.reservation && formik.errors.reservation}
                                >
                                    <MenuItem value="yes">
                                        Yes
                                    </MenuItem>
                                    <MenuItem value="no">
                                        No
                                    </MenuItem>
                                </TextField>
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    id="category"
                                    name="category"
                                    label="If yes, give category"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="category"
                                    value={formik.values.category}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.category && Boolean(formik.errors.category)}
                                    helperText={formik.touched.category && formik.errors.category}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    id="father"
                                    name="father"
                                    label="Father's Name"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="father"
                                    value={formik.values.father}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.father && Boolean(formik.errors.father)}
                                    helperText={formik.touched.father && formik.errors.father}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    id="foc"
                                    name="foc"
                                    label="Father's Occupation"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="foc"
                                    value={formik.values.foc}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.foc && Boolean(formik.errors.foc)}
                                    helperText={formik.touched.foc && formik.errors.foc}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    id="mother"
                                    name="mother"
                                    label="Mother's Name"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="mother"
                                    value={formik.values.mother}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.mother && Boolean(formik.errors.mother)}
                                    helperText={formik.touched.mother && formik.errors.mother}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    id="moc"
                                    name="moc"
                                    label="Mother's Occupation"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="moc"
                                    value={formik.values.moc}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.moc && Boolean(formik.errors.moc)}
                                    helperText={formik.touched.moc && formik.errors.moc}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    id="nationality"
                                    name="nationality"
                                    label="Nationality"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="nationality"
                                    value={formik.values.nationality}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.nationality && Boolean(formik.errors.nationality)}
                                    helperText={formik.touched.nationality && formik.errors.nationality}
                                />
                            </Grid>

                            <Grid size={{ xs: 12 }} >
                                <Typography variant="h5" sx={{ mt: 5 }}>
                                    Details of Qualifying Examination
                                </Typography>
                            </Grid>

                            <Grid size={{ xs: 12 }} >
                                <TextField
                                    id="institution"
                                    name="institution"
                                    label="Name of Institution"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="institution"
                                    value={formik.values.institution}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.institution && Boolean(formik.errors.institution)}
                                    helperText={formik.touched.institution && formik.errors.institution}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextField
                                    id="exam"
                                    name="exam"
                                    label="Name of Exam"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="exam"
                                    select
                                    value={formik.values.exam}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.exam && Boolean(formik.errors.exam)}
                                    helperText={formik.touched.exam && formik.errors.exam}
                                >
                                    <MenuItem value="hse">
                                        HSE
                                    </MenuItem>
                                    <MenuItem value="vhse">
                                        VHSE
                                    </MenuItem>
                                    <MenuItem value="ise">
                                        ISE
                                    </MenuItem>
                                    <MenuItem value="aissce">
                                        AISSCE
                                    </MenuItem>
                                </TextField>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextField
                                    id="physics"
                                    name="physics"
                                    label="Marks in Physics"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="physics"
                                    value={formik.values.physics}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.physics && Boolean(formik.errors.physics)}
                                    helperText={formik.touched.physics && formik.errors.physics}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextField
                                    id="chemistry"
                                    name="chemistry"
                                    label="Marks in Chemistry"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="chemistry"
                                    value={formik.values.chemistry}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.chemistry && Boolean(formik.errors.chemistry)}
                                    helperText={formik.touched.chemistry && formik.errors.chemistry}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextField
                                    id="maths"
                                    name="maths"
                                    label="Marks in Maths"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="maths"
                                    value={formik.values.maths}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.maths && Boolean(formik.errors.maths)}
                                    helperText={formik.touched.maths && formik.errors.maths}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextField
                                    id="pcm_total"
                                    name="pcm_total"
                                    label="PCM Total"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="pcm_total"
                                    value={formik.values.pcm_total}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.pcm_total && Boolean(formik.errors.pcm_total)}
                                    helperText={formik.touched.pcm_total && formik.errors.pcm_total}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextField
                                    id="pcm_percentage"
                                    name="pcm_percentage"
                                    label="PCM Percentage"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="pcm_percentage"
                                    value={formik.values.pcm_percentage}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.pcm_percentage && Boolean(formik.errors.pcm_percentage)}
                                    helperText={formik.touched.pcm_percentage && formik.errors.pcm_percentage}
                                />
                            </Grid>




                            <Grid size={{ xs: 12 }} >
                                <Typography variant="h5" sx={{ mt: 5 }} >
                                    Entrance Examination Details
                                </Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextField
                                    id="entrance"
                                    name="entrance"
                                    label="Name of Exam"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="entrance"
                                    select
                                    value={formik.values.entrance}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.entrance && Boolean(formik.errors.entrance)}
                                    helperText={formik.touched.entrance && formik.errors.entrance}
                                >
                                    <MenuItem value="keam">
                                        KEAM
                                    </MenuItem>
                                    <MenuItem value="kee">
                                        KEE
                                    </MenuItem>
                                    <MenuItem value="jee">
                                        JEE
                                    </MenuItem>
                                    <MenuItem value="others">
                                        Others
                                    </MenuItem>
                                </TextField>
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }} >
                                <TextField
                                    id="application_no"
                                    name="application_no"
                                    label="Application No"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="application_no"
                                    value={formik.values.application_no}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.application_no && Boolean(formik.errors.application_no)}
                                    helperText={formik.touched.application_no && formik.errors.application_no}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }}>
                                <TextField
                                    id="roll_no"
                                    name="roll_no"
                                    label="Roll No"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="roll_no"
                                    value={formik.values.roll_no}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.roll_no && Boolean(formik.errors.roll_no)}
                                    helperText={formik.touched.roll_no && formik.errors.roll_no}
                                >
                                </TextField>
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }}>
                                <TextField
                                    id="score"
                                    name="score"
                                    label="Score"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="score"
                                    value={formik.values.score}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.score && Boolean(formik.errors.score)}
                                    helperText={formik.touched.score && formik.errors.score}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }}>
                                <TextField
                                    id="rank"
                                    name="rank"
                                    label="Rank"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="rank"
                                    value={formik.values.rank}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.rank && Boolean(formik.errors.rank)}
                                    helperText={formik.touched.rank && formik.errors.rank}
                                />
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                                <FormControl
                                    error={formik.errors.declaration}
                                >
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        onChange={(e) => { formik.setFieldValue("declaration", e.target.checked) }}
                                        name="declaration"
                                        checked={formik.values.declaration}
                                        label="I hereby declare that the information given in this application is true and correct to the best of my knowledge and belief. In case any information given in this application proves to be false or incorrect, my candidature may be rejected at any point of time."
                                        onBlur={formik.handleBlur}
                                    />
                                    <FormLabel component='legend'>{formik.errors.declaration}</FormLabel>
                                </FormControl>

                            </Grid>

                            <Grid size={{ xs: 12, md: 8 }}></Grid>


                            <Grid size={{ xs: 12, md: 4 }}>
                                <Stack direction='column' spacing={2} alignItems='end'>

                                    <Box

                                        sx={{
                                            width: '200px', height: '50px', borderColor: '#000033', border: 2,
                                            display: 'flex', justifyContent: 'center', alignItems: 'center'
                                        }}
                                    >
                                        {formik.values.sign ?
                                            <Box
                                                component='img'
                                                src={URL.createObjectURL(formik.values.sign)}
                                                sx={{ maxWidth: '100%', maxHeight: '100%' }}
                                            />

                                            :
                                            <Typography
                                                variant="subtitle2"
                                            >
                                                Signature
                                            </Typography>
                                        }
                                    </Box>
                                    <Button
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        sx={{ width: '200px' }}
                                    >
                                        Upload Signature
                                        <VisuallyHiddenInput
                                            type="file"
                                            onChange={(event) => { formik.setFieldValue("sign", event.currentTarget.files[0]) }}
                                        />
                                    </Button>
                                </Stack>
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
                                        Apply Now
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
