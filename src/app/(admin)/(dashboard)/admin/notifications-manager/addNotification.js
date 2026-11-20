
"use client";

import { useState } from "react";

import {
    Box,
    Button,
    ButtonBase,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Stack,
    TextField,
    Typography,
    Alert,
    CircularProgress,
} from "@mui/material";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { useFormik } from "formik";
import * as yup from "yup";

import {
    DatePicker,
    LocalizationProvider,
} from "@mui/x-date-pickers";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { useAuth } from "@/context/AuthContext";

const API_URL = "https://fmtcpallimukku.ac.in/api";

const validationSchema = yup.object({
    notification: yup
        .string()
        .trim()
        .required("Enter notification"),

    date: yup
        .string()
        .required("Select date"),

    link: yup
        .string()
        .trim()
        .required("Enter notification link")
        .url("Enter a valid URL"),
});

export default function AddNotification(props) {
    const { csrfToken } = useAuth();

    const [updateConfirmation, setUpdateConfirmation] = useState(false);
    const [errorConfirmation, setErrorConfirmation] = useState("");

    const handleUpdateConfirmationClose = () => {
        setUpdateConfirmation(false);
        props.handleClose();
    };

    const handleErrorConfirmationClose = () => {
        setErrorConfirmation("");
    };

    const formik = useFormik({
        initialValues: {
            notification: "",
            date: null,
            link: "",
        },

        validationSchema,

        onSubmit: async (values) => {
            try {
                if (!csrfToken) {
                    throw new Error(
                        "Security token unavailable. Please refresh the page."
                    );
                }

                const formData = new FormData();

                formData.append(
                    "notification",
                    values.notification.trim()
                );

                formData.append(
                    "date",
                    values.date.format("YYYY-MM-DD")
                );

                formData.append(
                    "link",
                    values.link.trim()
                );

                const response = await fetch(
                    `${API_URL}/notifications/notification_add.php`,
                    {
                        method: "POST",
                        credentials: "include",
                        cache: "no-store",
                        headers: {
                            Accept: "application/json",
                            "X-CSRF-Token": csrfToken,
                        },
                        body: formData,
                    }
                );

                const result = await response.json();

                if (!response.ok || !result.status) {
                    throw new Error(
                        result.error || "Unable to add notification."
                    );
                }

                setUpdateConfirmation(true);

            } catch (error) {
                console.error("Add notification error:", error);

                setErrorConfirmation(
                    error.message || "Unable to add notification. Try again."
                );
            }
        },
    });

    return (
        <Box>
            {/* Add Notification Dialog */}
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                scroll="paper"
                maxWidth="lg"
                fullWidth
            >
                <DialogTitle
                    component={Box}
                    sx={{
                        bgcolor: "#091e44",
                        px: 2,
                        py: 0.5,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{ color: "#fff" }}
                    >
                        Add Notification
                    </Typography>

                    <ButtonBase onClick={props.handleClose}>
                        <CloseOutlinedIcon sx={{ color: "#fff" }} />
                    </ButtonBase>
                </DialogTitle>

                <DialogContent>
                    <Container sx={{ pt: 3, pb: 5 }}>
                        <Box
                            sx={{
                                border: 1,
                                borderColor: "#BFD7ED",
                                p: 2,
                                mb: 3,
                            }}
                        >
                            <Box
                                component="form"
                                onSubmit={formik.handleSubmit}
                            >
                                <Grid container spacing={3}>
                                    {/* Notification */}
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            id="notification"
                                            name="notification"
                                            label="Notification"
                                            variant="outlined"
                                            fullWidth
                                            autoComplete="off"
                                            value={formik.values.notification}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={
                                                formik.touched.notification &&
                                                Boolean(formik.errors.notification)
                                            }
                                            helperText={
                                                formik.touched.notification &&
                                                formik.errors.notification
                                            }
                                        />
                                    </Grid>

                                    {/* Date */}
                                    <Grid size={{ xs: 12, md: 5 }}>
                                        <LocalizationProvider
                                            dateAdapter={AdapterMoment}
                                        >
                                            <DatePicker
                                                format="DD/MM/YYYY"
                                                value={formik.values.date}
                                                onChange={(value) => {
                                                    formik.setFieldValue(
                                                        "date",
                                                        value && value.isValid()
                                                            ? value
                                                            : null
                                                    );
                                                }}
                                                onClose={() => {
                                                    formik.setFieldTouched(
                                                        "date",
                                                        true
                                                    );
                                                }}
                                                slotProps={{
                                                    textField: {
                                                        fullWidth: true,
                                                        variant: "outlined",
                                                        id: "date",
                                                        label: "Date",
                                                        name: "date",
                                                        onBlur: formik.handleBlur,
                                                        error:
                                                            formik.touched.date &&
                                                            Boolean(formik.errors.date),
                                                        helperText:
                                                            formik.touched.date &&
                                                            formik.errors.date,
                                                    },
                                                }}
                                            />
                                        </LocalizationProvider>
                                    </Grid>

                                    {/* Link */}
                                    <Grid size={{ xs: 12, md: 7 }}>
                                        <TextField
                                            id="link"
                                            name="link"
                                            label="Notification Link"
                                            variant="outlined"
                                            fullWidth
                                            value={formik.values.link}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={
                                                formik.touched.link &&
                                                Boolean(formik.errors.link)
                                            }
                                            helperText={
                                                formik.touched.link &&
                                                formik.errors.link
                                            }
                                        />
                                    </Grid>

                                    {/* Actions */}
                                    <Grid size={{ xs: 12 }}>
                                        <Stack
                                            direction="row"
                                            spacing={3}
                                            sx={{
                                                justifyContent: "center",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                disabled={formik.isSubmitting}
                                                sx={{
                                                    background:
                                                        "linear-gradient(to right, #048C9D, #06B9C8)",
                                                    my: 2,
                                                    color: "white",
                                                    fontWeight: 900,
                                                    minWidth: 150,
                                                }}
                                            >
                                                {formik.isSubmitting ? (
                                                    <CircularProgress
                                                        size={24}
                                                        color="inherit"
                                                    />
                                                ) : (
                                                    "Add Notification"
                                                )}
                                            </Button>

                                            <Button
                                                variant="outlined"
                                                size="small"
                                                color="secondary"
                                                startIcon={
                                                    <CloseOutlinedIcon />
                                                }
                                                onClick={props.handleClose}
                                                disabled={formik.isSubmitting}
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

            {/* Success Confirmation */}
            <Dialog
                open={updateConfirmation}
                onClose={() => { }}
            >
                <DialogTitle>Confirmation</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Notification added successfully!
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleUpdateConfirmationClose}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Error Confirmation */}
            <Dialog
                open={Boolean(errorConfirmation)}
                onClose={handleErrorConfirmationClose}
            >
                <DialogTitle>Error</DialogTitle>

                <DialogContent>
                    <Alert severity="error">
                        {errorConfirmation}
                    </Alert>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleErrorConfirmationClose}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
