"use client"
import {
    Box, Button, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    FormControlLabel, Grid, MenuItem, Paper, Stack, styled, TextField, Typography
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

export default function MtechAdmissionForm() {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [updateConfirmation, setUpdateConfirmation] = useState(false);

    const handleUpdateConfirmationClose = () => {
        setUpdateConfirmation(false);
        props.handleClose()
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
            university: '',
            ug_branch: '',
            cgpa: '',
            gate_application_no: '',
            gate_roll_no: '',
            gate_score: '',
            dte_application_no: '',
            dte_rank: '',
            photo: '',
            sign: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(values)

            const response = await fetch(`https://ycet.ac.in/admissions/savmtechapp.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const result = await response.json();
            setUpdateConfirmation(true)
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
                                            <MenuItem value="male">
                                                Civil Engineering
                                            </MenuItem>
                                            <MenuItem value="female">
                                                Mechanical Engineering
                                            </MenuItem>
                                            <MenuItem value="1">
                                                Electrical & Electronics Engineering
                                            </MenuItem>
                                            <MenuItem value="2">
                                                Electronics & Communication Engineering
                                            </MenuItem>
                                            <MenuItem value="3">
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
                                            width: '200px', height: '200px', borderColor: '#000033', border: 2,
                                            textAlign: 'center'
                                        }}
                                    >
                                        {formik.values.photo ?
                                            <Box
                                                component='img'
                                                src={URL.createObjectURL(formik.values.photo)}
                                                sx={{ maxWidth: '100%', maxHeight: '100%' }}
                                            />

                                            :
                                            <Typography
                                                variant="subtitle2"
                                            >
                                                Photo
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
                                <LocalizationProvider dateAdapter={AdapterMoment}>
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

                            <Grid size={{ xs: 12, md: 6 }} >
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

                            <Grid size={{ xs: 12, md: 6 }} >
                                <TextField
                                    id="university"
                                    name="university"
                                    label="Name of University"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="university"
                                    value={formik.values.university}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.university && Boolean(formik.errors.university)}
                                    helperText={formik.touched.university && formik.errors.university}
                                />
                            </Grid>


                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    id="ug_branch"
                                    name="ug_branch"
                                    label="UG Branch"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="ug_branch"
                                    value={formik.values.ug_branch}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.ug_branch && Boolean(formik.errors.ug_branch)}
                                    helperText={formik.touched.ug_branch && formik.errors.ug_branch}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }}>
                                <TextField
                                    id="cgpa"
                                    name="cgpa"
                                    label="CGPA/Percentage"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="cgpa"
                                    value={formik.values.cgpa}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.cgpa && Boolean(formik.errors.cgpa)}
                                    helperText={formik.touched.cgpa && formik.errors.cgpa}
                                />
                            </Grid>




                            <Grid size={{ xs: 12 }} >
                                <Typography variant="h5" sx={{ mt: 5 }} >
                                    Entrance Examination Details
                                </Typography>
                            </Grid>

                            <Grid size={{ xs: 12 }} >
                                <Typography variant="h6" sx={{ mt: 5 }} >
                                    GATE Examination Details
                                </Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }} >
                                <TextField
                                    id="gate_application_no"
                                    name="gate_application_no"
                                    label="Application No"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="gate_application_no"
                                    value={formik.values.gate_application_no}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.gate_application_no && Boolean(formik.errors.gate_application_no)}
                                    helperText={formik.touched.gate_application_no && formik.errors.gate_application_no}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }}>
                                <TextField
                                    id="gate_roll_no"
                                    name="gate_roll_no"
                                    label="Roll No"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="gate_roll_no"
                                    value={formik.values.gate_roll_no}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.gate_roll_no && Boolean(formik.errors.gate_roll_no)}
                                    helperText={formik.touched.gate_roll_no && formik.errors.gate_roll_no}
                                >
                                </TextField>
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }}>
                                <TextField
                                    id="gate_score"
                                    name="gate_score"
                                    label="gate_Score"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="gate_score"
                                    value={formik.values.gate_score}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.gate_score && Boolean(formik.errors.gate_score)}
                                    helperText={formik.touched.gate_score && formik.errors.gate_score}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }}>
                                <TextField
                                    id="dte_application_no"
                                    name="dte_application_no"
                                    label="DTE Application No"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="dte_application_no"
                                    value={formik.values.dte_application_no}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.dte_application_no && Boolean(formik.errors.dte_application_no)}
                                    helperText={formik.touched.dte_application_no && formik.errors.dte_application_no}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 2 }}>
                                <TextField
                                    id="dte_rank"
                                    name="dte_rank"
                                    label="DTE Rank"
                                    variant="outlined"
                                    fullWidth
                                    autoComplete="dte_rank"
                                    value={formik.values.dte_rank}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.dte_rank && Boolean(formik.errors.dte_rank)}
                                    helperText={formik.touched.dte_rank && formik.errors.dte_rank}
                                />
                            </Grid>


                            <Grid size={{ xs: 12 }}>
                                <FormControlLabel control={<Checkbox />} label="I hereby declare that the information given in this application is true and correct to the best of my knowledge and belief. In case any information given in this application proves to be false or incorrect, my candidature may be rejected at any point of time." />
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
