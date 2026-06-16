"use client"

import { useState } from "react";

import {
    Box, Button, ButtonBase, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid, MenuItem, Stack, styled, TextField, Typography
} from "@mui/material";

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


import { useFormik } from "formik";
import * as yup from 'yup';


const validationSchema = yup.object({
    photos: yup
        .mixed()
        .required('Select files to upload')
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



export default function ManagePhotos(props) {

    const [updateConfirmation, setUpdateConfirmation] = useState(false);

    const handleUpdateConfirmationClose = () => {
        setUpdateConfirmation(false);
        props.handleClose();
    };

    const [errorConfirmation, setErrorConfirmation] = useState(false);

    const handleErrorConfirmationClose = () => {
        setErrorConfirmation(false);
    };

    const formik = useFormik({
        initialValues: {
            photos: [],
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {

            const formData = new FormData();

            formData.append('id', props.gallery.id);
            formData.append('files', props.gallery.files);
            formData.append('year', props.gallery.year);
            formData.append('department_path', props.gallery.department_path);
            formData.append('event_path', props.gallery.event_path);

            values.photos.forEach((file) => {
                formData.append('photos[]', file)
            })

            const response = await fetch(`https://fmtcpallimukku.ac.in/api/gallery/gallery_add_photos.php`, {
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

    const DeleteSelectFile = (pic) => {
        if (window.confirm("Are you sure you want to delete this Image?")) {
            const result = Array.from(formik.values.photos).filter((data) => data !== pic);
            formik.setFieldValue("photos", result);
        } else {
            // alert('No');
        }

    }

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
                        Manage Photos
                    </Typography>
                    <ButtonBase onClick={props.handleClose}>
                        <CloseOutlinedIcon sx={{ color: "#fff" }} />
                    </ButtonBase>
                </DialogTitle>

                <DialogContent>
                    <Container sx={{ pt: 3, pb: 5 }}>
                        <Box sx={{ border: 1, borderColor: '#BFD7ED', p: 2, mb: 3 }}>
                            <Box component='form' onSubmit={formik.handleSubmit}>
                                <Grid size={{ xs: 12 }}>
                                    <Typography variant="h6">
                                        {props.gallery.department} - {props.gallery.event}  - {props.gallery.year}
                                    </Typography>
                                    <Typography variant="body1">
                                        {props.gallery.description}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Box
                                        sx={{
                                            justifyContent: 'center', alignItems: 'center', border: '2px dotted #808080',
                                            height: '100px', display: 'flex'
                                        }}
                                    >
                                        <Stack spacing={2}>
                                            <Button
                                                component="label"
                                                role={undefined}
                                                variant="contained"
                                                tabIndex={-1}
                                                sx={{ width: '200px' }}

                                            >
                                                Upload Photos
                                                <VisuallyHiddenInput
                                                    type="file"
                                                    multiple
                                                    onChange={
                                                        (e) => {
                                                            formik.setFieldValue("photos", Array.from(e.currentTarget.files));
                                                        }
                                                    }
                                                />
                                            </Button>
                                            <Typography variant="body2">You can select multiple photos.</Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12 }} sx={{ my: 5 }}>
                                    <Grid container spacing={3}>
                                        {
                                            formik.values.photos && Array.from(formik.values.photos).map((pic, index) => {
                                                return (
                                                    <Grid size={{ xs: 12, md: 3 }} key={index}>
                                                        <Box sx={{ height: '200px' }}>
                                                            <Box
                                                                component='img'
                                                                src={URL.createObjectURL(pic)}
                                                                alt=""
                                                                sx={{ maxWidth: '100%', maxHeight: '100%', }}
                                                            />

                                                        </Box>

                                                        <Button onClick={() => DeleteSelectFile(pic)}>Delete</Button>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>

                                    <Grid size={{ xs: 12 }} >
                                        <Stack direction='row' spacing={3} justifyContent='center'>
                                            <Button
                                                type="submit"
                                                variant='contained'
                                                size="large"
                                                disabled={formik.isSubmitting}
                                                sx={{

                                                    background: 'linear-gradient(to right, #048C9D, #06B9C8)',
                                                    my: 2, color: 'white', display: 'block',
                                                    fontWeight: 900, justifyContent: 'center'
                                                }}
                                            >
                                                Update
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                size='large'
                                                startIcon={<CloseOutlinedIcon />}
                                                onClick={props.handleClose}
                                            >
                                                Close
                                            </Button>

                                        </Stack>

                                    </Grid>

                                    <Grid size={{ xs: 12 }} sx={{ my: 5 }}>
                                        <Grid container spacing={3}>
                                            {
                                                props.gallery.files && JSON.parse(props.gallery.files).map((file, index) => {
                                                    return (
                                                        <Grid size={{ xs: 12, md: 3 }} key={index}>
                                                            <Box sx={{ height: '200px' }}>
                                                                <Box
                                                                    component='img'
                                                                    src={`/images/gallery/${props.gallery.year}/${props.gallery.department_path}/${props.gallery.event_path}/${file}`}
                                                                    alt=""
                                                                    sx={{ maxWidth: '100%', maxHeight: '100%', }}
                                                                />

                                                            </Box>
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </Grid>
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
                            Images added successfully!
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
