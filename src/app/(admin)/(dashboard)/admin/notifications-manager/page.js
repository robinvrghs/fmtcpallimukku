"use client"

import { useEffect, useState } from "react";

import {
    Box, Button, Container, Fab, Paper, Stack,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography
} from "@mui/material";

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { useRouter } from "next/navigation";
import AddNotification from "./addNotification";


export default function NotificationManager() {

    const router = useRouter();

    const [notificationData, setNotificationData] = useState([]);

    const [loadingDelete, setLoadingDelete] = useState(null);

    const fetchNotifications = async () => {
        const storedUsername =
            typeof window !== "undefined"
                ? sessionStorage.getItem("username")
                : null;

        if (!storedUsername) {
            router.push("/admin-login");
            return;
        }

        try {
            const res = await fetch(
                "https://fmtcpallimukku.ac.in/api/notifications/notification_get_data.php"
            );

            const data = await res.json();

            setNotificationData(data.data ?? data);

        } catch (error) {
            console.error("Failed to fetch notifications:", error);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    const [eventFormOpen, setEventFormOpen] = useState(false);
    const handleEventFormOpen = () => {
        setEventFormOpen(true)
    }
    const handleEventFormClose = (event, reason) => {
        if (reason && reason === "backdropClick")
            return;
        fetchNotifications()
        setEventFormOpen(false)
    }


    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this notification?"
        );

        if (!confirmDelete) return;

        try {
            setLoadingDelete(id);

            const res = await fetch(
                "https://fmtcpallimukku.ac.in/api/notifications/delete_notification.php",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id,
                    }),
                }
            );

            const result = await res.json();

            if (result.success) {
                fetchNotifications();
            } else {
                alert(result.message || "Delete failed");
            }

        } catch (err) {
            console.log(err);
            alert("Something went wrong");
        } finally {
            setLoadingDelete(null);
        }
    };



    return (

        <Box>
            <Toolbar />

            <Container sx={{ minHeight: '100vh' }}>

                <Paper
                    sx={{
                        borderRadius: '20px', boxShadow: '4px 14px 28px rgba(0, 0, 0, 0.1)', p: 5, mt: 5
                    }}
                    data-aos="fade-up"
                >

                    <Typography variant="h4" sx={{ textAlign: 'center', mb: 5 }}>
                        Notifications Manager
                    </Typography>

                    {notificationData.length > 0 ?

                        <TableContainer component={Paper} sx={{ p: 2, mt: 2 }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sl.No</TableCell>
                                        <TableCell>Notification</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {notificationData.map((gallery, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{gallery.date}</TableCell>
                                            <TableCell>{gallery.date}</TableCell>
                                            <TableCell>{gallery.notification}</TableCell>
                                            <TableCell>
                                                <Stack direction='row' spacing={1}>
                                                    <Button
                                                        variant="contained"
                                                        color="error"
                                                        size="small"
                                                        disabled={
                                                            loadingDelete === gallery.id
                                                        }
                                                        onClick={() =>
                                                            handleDelete(gallery.id)
                                                        }
                                                    >
                                                        {loadingDelete === gallery.id
                                                            ? "Deleting..."
                                                            : "Delete"}
                                                    </Button>
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
                                No Data found!
                            </Typography>
                        </Paper>

                    }

                </Paper>

            </Container>


            <Fab
                variant="extended"
                color="primary"
                sx={{ position: 'fixed', right: 50, bottom: 50 }}
                onClick={
                    () => handleEventFormOpen()
                }
            >
                <AddOutlinedIcon sx={{ mr: 1 }} />
                Add Notification
            </Fab>

            {eventFormOpen &&
                <AddNotification open={eventFormOpen} handleClose={handleEventFormClose} />
            }



        </Box >


    );
}
