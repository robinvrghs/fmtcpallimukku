"use client"

import { useEffect, useRef, useState } from "react";

import {
    Box, Button, ButtonBase, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid, MenuItem, Stack, TextField, Typography
} from "@mui/material";

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


import { useFormik } from "formik";
import * as yup from 'yup';


const validationSchema = yup.object({
    department: yup.string().required("Department is required"),
    type: yup.string().required("Type is required"),
    name: yup.string().required("Name is required"),
    designation: yup.string().required("Designation is required"),
    qualifications: yup.string().required("Qualifications is required"),
    priority: yup.number().required("Priority is required"),
    photo: yup
        .mixed()
        .nullable()
        .required("Photo is required")
        .test("fileSize", "File size too large (max 2MB)", (value) => {
            return value && value.size <= 2 * 1024 * 1024;
        })
        .test("fileType", "Unsupported format", (value) => {
            return value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
        }),
    document: yup
        .mixed()
        .nullable()
        .test("fileSize", "File too large (max 5MB)", (value) => {
            return value && value.size <= 5 * 1024 * 1024;
        })
        .test("fileType", "Only PDF allowed", (value) => {
            return value && value.type === "application/pdf";
        }),
});



export default function AddStaff(props) {

    const isEdit = Boolean(props.editData);

    const [loading, setLoading] = useState(false);

    const [updateConfirmation, setUpdateConfirmation] = useState(false);

    const handleUpdateConfirmationClose = () => {
        setUpdateConfirmation(false);
    };

    const [errorConfirmation, setErrorConfirmation] = useState(false);

    const handleErrorConfirmationClose = () => {
        setErrorConfirmation(false);
    };

    const photoInputRef = useRef(null);
    const pdfInputRef = useRef(null);


    const [photoPreview, setPhotoPreview] = useState(null);
    const [pdfPreview, setPdfPreview] = useState(null);

    const resetFiles = () => {
        if (photoPreview) URL.revokeObjectURL(photoPreview);
        if (pdfPreview) URL.revokeObjectURL(pdfPreview);

        setPhotoPreview(null);
        setPdfPreview(null);

        if (photoInputRef.current) photoInputRef.current.value = "";
        if (pdfInputRef.current) pdfInputRef.current.value = "";
    };

    const validationSchema = yup.object({

        department: yup.string().required("Department is required"),
        type: yup.string().required("Type is required"),
        name: yup.string().required("Name is required"),
        designation: yup.string().required("Designation is required"),
        qualifications: yup.string().required("Qualifications is required"),
        priority: yup.number().typeError("Number only").required("Priority is required"),
        email: yup.string().required("Email is required"),
        mobile: yup.string().required("Mobile is required"),

        photo: yup.mixed().when('$isEdit', {
            is: true,
            then: (schema) => schema.nullable().notRequired(),
            otherwise: (schema) =>
                schema
                    .required("Photo is required")
                    .test("type", "Only JPG/PNG", v =>
                        v && ["image/jpeg", "image/png", "image/jpg"].includes(v.type)
                    )
                    .test("size", "Max 2MB", v =>
                        v && v.size <= 2 * 1024 * 1024
                    )
        }),

        document: yup.mixed().when('$isEdit', {
            is: true,
            then: (schema) => schema.nullable().notRequired(),
            otherwise: (schema) =>
                schema
                    .test("type", "Only PDF", v => v && v.type === "application/pdf")
                    .test("size", "Max 5MB", v => v && v.size <= 5 * 1024 * 1024)
        }),

    });


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: props.editData?.id || '',
            department: props.editData?.department || '',
            type: props.editData?.type || '',
            name: props.editData?.name || '',
            designation: props.editData?.designation || '',
            qualifications: props.editData?.qualifications || '',
            priority: props.editData?.priority || '',
            specialisation: props.editData?.specialisation || '',
            publications: props.editData?.publications || '',
            email: props.editData?.email || '',
            mobile: props.editData?.mobile || '',
            photo: null,
            document: null,
        },
        validate: async (values) => {
            try {
                await validationSchema.validate(values, {
                    abortEarly: false,
                    context: { isEdit }   // ⭐ THIS FIXES EVERYTHING
                });
                return {};
            } catch (err) {
                const errors = {};
                err.inner.forEach(e => errors[e.path] = e.message);
                return errors;
            }
        },
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);

            const url = isEdit
                ? "https://fmtcpallimukku.ac.in/api/update_staff.php"
                : "https://fmtcpallimukku.ac.in/api/add_staff.php";

            try {

                const formData = new FormData();

                Object.entries(values).forEach(([key, value]) => {
                    formData.append(key, value);
                });

                const response = await fetch(url, {
                    method: "POST",
                    body: formData,
                    credentials: "include"
                });

                if (!response.ok) throw new Error("Server error");

                const result = await response.json();

                if (result.status) {
                    setUpdateConfirmation(true);
                    resetForm();
                    resetFiles();
                } else {
                    setErrorConfirmation(true);
                }
            } catch (err) {
                console.error(err);
                setErrorConfirmation(true);
            }
            setLoading(false);
        },
    });

    useEffect(() => {
        if (props.editData) {
            setPhotoPreview(`https://fmtcpallimukku.ac.in/staff_data/images/${props.editData.photo}`);
            setPdfPreview(`https://fmtcpallimukku.ac.in/staff_data/documents/${props.editData.document}`);
        } else {
            setPhotoPreview(null);
            setPdfPreview(null);
        }
    }, [props.editData]);

    const handleDialogClose = () => {
        props.handleClose();
        formik.resetForm();
        resetFiles();
    };

    return (
        <Box>

            <Dialog
                open={props.open}
                onClose={handleDialogClose}
                scroll='paper' maxWidth='lg' fullWidth
            >
                <DialogTitle
                    component={Box}
                    sx={{
                        bgcolor: '#091e44', px: 2, py: 0.5,
                        display: 'flex', justifyContent: 'space-between',
                    }}>
                    <Typography variant="h6" component="h2" sx={{ color: '#fff' }}>
                        {isEdit ? "Edit Staff" : "Add Staff"}
                    </Typography>
                    <ButtonBase onClick={handleDialogClose}>
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
                                            id="priority"
                                            name="priority"
                                            label="Priority"
                                            variant="outlined"
                                            fullWidth
                                            value={formik.values.priority}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.priority && Boolean(formik.errors.priority)}
                                            helperText={formik.touched.priority && formik.errors.priority}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 5 }}>
                                        <TextField
                                            id="department"
                                            name="department"
                                            label="Department"
                                            variant="outlined"
                                            fullWidth
                                            autoComplete="department"
                                            select
                                            value={formik.values.department}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.department && Boolean(formik.errors.department)}
                                            helperText={formik.touched.department && formik.errors.department}
                                        >
                                            <MenuItem value="civil">
                                                Civil Engineering
                                            </MenuItem>
                                            <MenuItem value="mechanical">
                                                Mechanical Engineering
                                            </MenuItem>
                                            <MenuItem value="eee">
                                                Electrical & Electronics Engineering
                                            </MenuItem>
                                            <MenuItem value="ec">
                                                Electronics & Communication Engineering
                                            </MenuItem>
                                            <MenuItem value="cs">
                                                Computer Science Engineering
                                            </MenuItem>
                                            <MenuItem value="applied">
                                                Applied Science
                                            </MenuItem>
                                        </TextField>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 5 }}>
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
                                            <MenuItem value="teaching">
                                                Teaching
                                            </MenuItem>
                                            <MenuItem value="non-teaching">
                                                Non Teaching
                                            </MenuItem>
                                        </TextField>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 4 }}>
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
                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <TextField
                                            id="designation"
                                            name="designation"
                                            label="Designation"
                                            variant="outlined"
                                            fullWidth
                                            value={formik.values.designation}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.designation && Boolean(formik.errors.designation)}
                                            helperText={formik.touched.designation && formik.errors.designation}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <TextField
                                            id="qualifications"
                                            name="qualifications"
                                            label="Qualifications"
                                            variant="outlined"
                                            fullWidth
                                            value={formik.values.qualifications}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.qualifications && Boolean(formik.errors.qualifications)}
                                            helperText={formik.touched.qualifications && formik.errors.qualifications}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <TextField
                                            id="specialisation"
                                            name="specialisation"
                                            label="Specialisation / Research Area"
                                            variant="outlined"
                                            fullWidth
                                            value={formik.values.specialisation}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.specialisation && Boolean(formik.errors.specialisation)}
                                            helperText={formik.touched.specialisation && formik.errors.specialisation}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <TextField
                                            id="publications"
                                            name="publications"
                                            label="Publications"
                                            variant="outlined"
                                            fullWidth
                                            value={formik.values.publications}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.publications && Boolean(formik.errors.publications)}
                                            helperText={formik.touched.publications && formik.errors.publications}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <TextField
                                            id="email"
                                            name="email"
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <TextField
                                            id="mobile"
                                            name="mobile"
                                            label="Mobile No."
                                            variant="outlined"
                                            fullWidth
                                            value={formik.values.mobile}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                                            helperText={formik.touched.mobile && formik.errors.mobile}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            fullWidth
                                            sx={{ my: 2 }}
                                        >
                                            Upload Photo
                                            <input
                                                ref={photoInputRef}
                                                type="file"
                                                hidden
                                                accept="image/*"
                                                onChange={(event) => {
                                                    const file = event.currentTarget.files[0];
                                                    formik.setFieldValue("photo", file);
                                                    if (file) {
                                                        setPhotoPreview(URL.createObjectURL(file));
                                                    }
                                                }}
                                            />
                                        </Button>
                                        {formik.touched.photo && formik.errors.photo && (
                                            <Typography color="error" variant="caption">
                                                {formik.errors.photo}
                                            </Typography>
                                        )}

                                        {photoPreview && (
                                            <Box sx={{ mt: 2, textAlign: "center" }}>
                                                <Typography variant="subtitle2">Photo Preview</Typography>

                                                <Box
                                                    component="img"
                                                    src={photoPreview}
                                                    alt="preview"
                                                    sx={{
                                                        width: 180,
                                                        height: 200,
                                                        objectFit: "cover",
                                                        borderRadius: 2,
                                                        border: "1px solid #ccc",
                                                        mt: 1
                                                    }}
                                                />

                                                {isEdit && <Typography variant="caption">Upload new image to replace</Typography>}
                                            </Box>
                                        )}

                                    </Grid>


                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Button
                                            variant="contained"
                                            component="label"
                                            fullWidth
                                            sx={{ my: 2 }}
                                        >
                                            Upload Profile (PDF)
                                            <input
                                                ref={pdfInputRef}
                                                type="file"
                                                hidden
                                                accept="application/pdf"
                                                onChange={(event) => {
                                                    const file = event.currentTarget.files[0];
                                                    formik.setFieldValue("document", file);

                                                    if (file) {
                                                        setPdfPreview(URL.createObjectURL(file));
                                                    }
                                                }}
                                            />
                                        </Button>

                                        {formik.touched.document && formik.errors.document && (
                                            <Typography color="error" variant="caption">
                                                {formik.errors.document}
                                            </Typography>
                                        )}

                                        {pdfPreview && (
                                            <Box sx={{ mt: 3 }}>
                                                <Box
                                                    sx={{
                                                        border: "1px solid #ccc",
                                                        borderRadius: 2,
                                                        overflow: "hidden",
                                                        height: 250
                                                    }}
                                                >
                                                    <iframe
                                                        src={pdfPreview}
                                                        width="100%"
                                                        height="100%"
                                                        title="PDF Preview"
                                                    />
                                                </Box>

                                                {isEdit && <Typography variant="caption">Upload new file to replace</Typography>}
                                            </Box>
                                        )}
                                    </Grid>

                                    <Grid size={{ xs: 12 }} >
                                        <Stack direction='row' spacing={3} justifyContent='center'>
                                            <Button
                                                disabled={loading}
                                                type="submit"
                                                variant='contained'
                                                size="small"
                                                sx={{
                                                    background: 'linear-gradient(to right, #048C9D, #06B9C8)',
                                                    my: 2, color: 'white', display: 'block',
                                                    fontWeight: 900, justifyContent: 'center'
                                                }}
                                            >
                                                {isEdit ? "Update Staff" : "Add Staff"}
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                size='small'
                                                startIcon={<CloseOutlinedIcon />}
                                                onClick={handleDialogClose}
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
                            Staff updated successfully!
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
