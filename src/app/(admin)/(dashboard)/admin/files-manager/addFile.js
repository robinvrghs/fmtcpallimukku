"use client"

import { useEffect, useState } from "react";

import {
    Box, Button, ButtonBase, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid, MenuItem, Stack, TextField, Typography
} from "@mui/material";

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


import { useFormik } from "formik";
import * as yup from 'yup';


const validationSchema = yup.object({
    type: yup
        .string()
        .required('Select type'),
    name: yup
        .string()
        .required('Select name')
    // .test('len', 'Enter valid phone number', val => val.toString().length === 10)
    , file: yup.mixed()
        .required("file is required")
        .test(
            "fileSize",
            "File size too large (max 2MB)",
            (value) => !value || (value && value.size <= 2097152)
        )
        .test(
            "fileType",
            "Unsupported format",
            (value) =>
                !value || (value && ["application/pdf", "image/jpeg", "image/png", "image/jpg"].includes(value.type))
        ),
});





export default function AddFile(props) {


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
            type: '',
            name: '',
            file: null,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {

            const formData = new FormData();

            Object.entries(values).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const response = await fetch(`https://fmtcpallimukku.ac.in/api/add_file.php`, {
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


    const [data, setData] = useState([]);

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch("https://fmtcpallimukku.ac.in/api/get_categories.php");
            const json = await res.json();
            setData(json);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };


    const handleAddCategory = async (event) => {

        if (formik.values.category.trim() === "") {
            alert('Empty value!')
        } else {

            const formData = new FormData();
            formData.append('category', formik.values.category);

            try {
                const response = await fetch(`https://fmtcpallimukku.ac.in/api/add_category.php`, {
                    method: 'POST',
                    body: formData,
                });
                fetchData();
            } catch (error) {
                console.error('Error Adding category:', error);
            }
        }
    };

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
                        Add File
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

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <TextField
                                            id="type"
                                            name="type"
                                            label="Type"
                                            variant="outlined"
                                            fullWidth
                                            autoComplete="type"
                                            select
                                            value={formik.values.type}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.type && Boolean(formik.errors.type)}
                                            helperText={formik.touched.type && formik.errors.type}
                                        >
                                            <MenuItem value="AQAR">
                                                AQAR
                                            </MenuItem>
                                            <MenuItem value="SSR">
                                                SSR
                                            </MenuItem>
                                            <MenuItem value="IQAC MINUTES">
                                                IQAC MINUTES
                                            </MenuItem>
                                            <MenuItem value="Annual Report">
                                                Annual Report
                                            </MenuItem>
                                            <MenuItem value="Best Practices">
                                                Best Practices
                                            </MenuItem>
                                            <MenuItem value="Best Practices">
                                                Institutional Distinctiveness
                                            </MenuItem>
                                        </TextField>
                                    </Grid>





                                    <Grid size={{ xs: 6 }}>
                                        <TextField
                                            id="name"
                                            name="name"
                                            label="Name"
                                            variant="outlined"
                                            fullWidth
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.name && Boolean(formik.errors.name)}
                                            helperText={formik.touched.name && formik.errors.name}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12 }}>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            fullWidth
                                            sx={{ mt: 2, mb: 2 }}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                accept=".pdf, image/*"
                                                onChange={(event) => {
                                                    formik.setFieldValue("file", event.currentTarget.files[0]);
                                                }}
                                            />
                                        </Button>
                                        {formik.values.file && <Typography>Selected: {formik.values.file.name}</Typography>}
                                        {/* <ErrorMessage name="photo" component="div" style={{ color: "red" }} /> */}
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
                                                Add File
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
                            File added successfully!
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
