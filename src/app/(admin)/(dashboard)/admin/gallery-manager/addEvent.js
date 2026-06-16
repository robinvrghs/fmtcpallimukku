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
    branch: yup
        .string()
        .required('Select category'),
    year: yup
        .number()
        .required('Select Year'),
    event: yup
        .string()
        .required('Enter Event'),
    description: yup
        .string()
        .required('Enter description'),
});





export default function AddEvent(props) {


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
            year: '',
            category: '',
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

            const response = await fetch(`https://fmtcpallimukku.ac.in/api/gallery/gallery_add_event.php`, {
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


    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const res = await fetch(
                "https://fmtcpallimukku.ac.in/api/gallery/get_categories.php"
            );

            if (!res.ok) {
                throw new Error("Failed to fetch");
            }

            const json = await res.json();

            if (json.status) {
                setCategories(json.data);
            }

        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleAddCategory = async () => {

        const category = formik.values.category.trim();

        if (!category) {
            alert("Category cannot be empty");
            return;
        }

        try {

            const formData = new FormData();
            formData.append("category", category);

            const response = await fetch(
                "https://fmtcpallimukku.ac.in/api/gallery/gallery_add_category.php",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.json();

            if (!result.status) {
                throw new Error(
                    result.message || "Failed to add category"
                );
            }

            setCategories(prev => [
                ...prev,
                {
                    category,
                    path: result.path
                }
            ]);

            formik.setFieldValue("category", "");

            alert(result.message || "Category added!");

        } catch (error) {

            console.error(error);

            alert(
                error.message || "Something went wrong"
            );
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

                                    <Grid size={{ xs: 12, md: 2 }}>
                                        <TextField
                                            size="small"
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
                                            <MenuItem value="2026">
                                                2026
                                            </MenuItem>
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
                                            <MenuItem value="2020">
                                                Legacy Collection
                                            </MenuItem>
                                        </TextField>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 5 }}>
                                        <TextField
                                            size="small"
                                            id="branch"
                                            name="branch"
                                            label="Category"
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
                                            {categories.map((row, index) => (
                                                <MenuItem value={row.category} sx={{ textTransform: 'capitalize' }} key={index}>
                                                    {row.category}
                                                </MenuItem>
                                            ))}

                                        </TextField>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 5 }}>
                                        <Stack direction='row' spacing={2} sx={{ border: 2, p: 2, borderColor: 'red', borderRadius: 2 }}>
                                            <TextField
                                                size="small"
                                                id="category"
                                                name="category"
                                                label="Category"
                                                variant="outlined"
                                                fullWidth
                                                value={formik.values.category}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.touched.category && Boolean(formik.errors.category)}
                                                helperText={formik.touched.category && formik.errors.category}
                                            />
                                            <Button
                                                onClick={handleAddCategory}
                                                variant='contained'
                                                sx={{
                                                    background: 'linear-gradient(to right, #048C9D, #06B9C8)',
                                                    my: 2, color: 'white', display: 'block',
                                                    fontWeight: 900, justifyContent: 'center'
                                                }}
                                            >
                                                Add
                                            </Button>
                                        </Stack>
                                    </Grid>

                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            size="small"
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
                                            size="small"
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
                                                color='linear-gradient(to right, #048C9D, #06B9C8)'
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
