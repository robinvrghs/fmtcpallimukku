
"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Container,
    Fab,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Toolbar,
    Typography,
} from "@mui/material";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import AddNotification from "./addNotification";
import { useAuth } from "@/context/AuthContext";

const API_URL = "https://fmtcpallimukku.ac.in/api";

export default function NotificationManager() {
    const router = useRouter();

    const {
        authenticated,
        loading: authLoading,
        csrfToken,
    } = useAuth();

    const [notificationData, setNotificationData] = useState([]);

    const [loadingData, setLoadingData] = useState(true);
    const [loadingDelete, setLoadingDelete] = useState(null);

    const [error, setError] = useState("");
    const [deleteError, setDeleteError] = useState("");

    const [eventFormOpen, setEventFormOpen] = useState(false);

    // Fetch notifications
    const fetchNotifications = useCallback(async () => {
        setLoadingData(true);
        setError("");

        try {
            const response = await fetch(
                `${API_URL}/notifications/notification_get_data.php`,
                {
                    method: "GET",
                    cache: "no-store",
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            const result = await response.json();

            if (!response.ok || !result.status) {
                throw new Error(
                    result.error || "Unable to load notifications."
                );
            }

            if (!Array.isArray(result.data)) {
                throw new Error("Invalid notification response.");
            }

            setNotificationData(result.data);

        } catch (err) {
            console.error("Notification loading error:", err);
            setError(err.message || "Unable to load notifications.");
        } finally {
            setLoadingData(false);
        }
    }, []);

    // Authentication check
    useEffect(() => {
        if (authLoading) return;

        if (!authenticated) {
            router.replace("/admin-login");
            return;
        }

        fetchNotifications();
    }, [
        authLoading,
        authenticated,
        router,
        fetchNotifications,
    ]);

    // Open add notification dialog
    const handleEventFormOpen = () => {
        setEventFormOpen(true);
    };

    // Close add notification dialog
    const handleEventFormClose = (event, reason) => {
        if (reason === "backdropClick") return;

        setEventFormOpen(false);
        fetchNotifications();
    };

    // Delete notification
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this notification?"
        );

        if (!confirmDelete) return;

        if (!csrfToken) {
            setDeleteError(
                "Security token unavailable. Please refresh the page."
            );
            return;
        }

        try {
            setLoadingDelete(id);
            setDeleteError("");

            const response = await fetch(
                `${API_URL}/notifications/delete_notification.php`,
                {
                    method: "POST",
                    credentials: "include",
                    cache: "no-store",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "X-CSRF-Token": csrfToken,
                    },
                    body: JSON.stringify({ id }),
                }
            );

            const result = await response.json();

            if (!response.ok || !result.status) {
                throw new Error(
                    result.error || "Unable to delete notification."
                );
            }

            await fetchNotifications();

        } catch (err) {
            console.error("Notification delete error:", err);

            setDeleteError(
                err.message || "Something went wrong."
            );
        } finally {
            setLoadingDelete(null);
        }
    };

    // Wait for authentication check
    if (authLoading) {
        return (
            <Box
                sx={{
                    minHeight: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    // Do not render admin content while redirecting
    if (!authenticated) {
        return null;
    }

    return (
        <Box>
            <Toolbar />

            <Container sx={{ minHeight: "100vh" }}>
                <Paper
                    sx={{
                        borderRadius: "20px",
                        boxShadow: "4px 14px 28px rgba(0, 0, 0, 0.1)",
                        p: { xs: 2, md: 5 },
                        mt: 5,
                    }}
                    data-aos="fade-up"
                >
                    {/* Header */}
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: "center",
                            mb: 5,
                        }}
                    >
                        Notifications Manager
                    </Typography>

                    {/* Errors */}
                    {error && (
                        <Alert
                            severity="error"
                            sx={{ mb: 2 }}
                            action={
                                <Button
                                    color="inherit"
                                    size="small"
                                    onClick={fetchNotifications}
                                >
                                    Retry
                                </Button>
                            }
                        >
                            {error}
                        </Alert>
                    )}

                    {deleteError && (
                        <Alert
                            severity="error"
                            sx={{ mb: 2 }}
                            onClose={() => setDeleteError("")}
                        >
                            {deleteError}
                        </Alert>
                    )}

                    {/* Loading */}
                    {loadingData ? (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                py: 8,
                                gap: 2,
                            }}
                        >
                            <CircularProgress />

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Loading notifications...
                            </Typography>
                        </Box>
                    ) : notificationData.length > 0 ? (

                        /* Notification table */
                        <TableContainer
                            component={Paper}
                            sx={{
                                p: { xs: 1, md: 2 },
                                mt: 2,
                                overflowX: "auto",
                            }}
                        >
                            <Table
                                sx={{ minWidth: 650 }}
                                aria-label="Notifications table"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sl.No</TableCell>
                                        <TableCell>Notification</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell align="right">
                                            Actions
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {notificationData.map(
                                        (notification, index) => (
                                            <TableRow
                                                key={notification.id}
                                                hover
                                                sx={{
                                                    "&:last-child td, &:last-child th": {
                                                        border: 0,
                                                    },
                                                }}
                                            >
                                                <TableCell>
                                                    {index + 1}
                                                </TableCell>

                                                <TableCell>
                                                    {notification.notification}
                                                </TableCell>

                                                <TableCell>
                                                    {notification.date}
                                                </TableCell>

                                                <TableCell align="right">
                                                    <Button
                                                        variant="contained"
                                                        color="error"
                                                        size="small"
                                                        disabled={
                                                            loadingDelete === notification.id
                                                        }
                                                        onClick={() =>
                                                            handleDelete(
                                                                notification.id
                                                            )
                                                        }
                                                    >
                                                        {loadingDelete === notification.id
                                                            ? "Deleting..."
                                                            : "Delete"}
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    ) : (

                        /* Empty state */
                        <Paper
                            variant="outlined"
                            sx={{
                                p: 4,
                                mt: 2,
                                textAlign: "center",
                                borderRadius: 2,
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="h2"
                                color="text.secondary"
                            >
                                No notifications found.
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mt: 1 }}
                            >
                                Add a notification to display it here.
                            </Typography>
                        </Paper>
                    )}
                </Paper>
            </Container>

            {/* Add Notification Button */}
            <Fab
                variant="extended"
                color="primary"
                sx={{
                    position: "fixed",
                    right: { xs: 16, md: 50 },
                    bottom: { xs: 16, md: 50 },
                    zIndex: 1100,
                }}
                onClick={handleEventFormOpen}
            >
                <AddOutlinedIcon sx={{ mr: 1 }} />
                Add Notification
            </Fab>

            {/* Add Notification Dialog */}
            {eventFormOpen && (
                <AddNotification
                    open={eventFormOpen}
                    handleClose={handleEventFormClose}
                />
            )}
        </Box>
    );
}
