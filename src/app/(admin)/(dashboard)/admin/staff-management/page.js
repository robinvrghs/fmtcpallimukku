"use client"

import { useEffect, useState } from "react";

import {
    Box, Button, Container, Divider, Fab, Paper, Stack,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography
} from "@mui/material";

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { useRouter } from "next/navigation";
import AddStaff from "./addStaff";


export default function GalleryManager() {

    const router = useRouter();

    const [galleryData, setGalleryData] = useState([]);

    const fetchCookie = async () => {
        let storedUsername = undefined;
        if (typeof window !== 'undefined') {
            storedUsername = sessionStorage.getItem('username');
        }
        if (!storedUsername) {
            router.push('/admin/signin')
        } else {
            await fetch('https://fmtcpallimukku.ac.in/api/get_staff_data.php')
                .then((res) => res.json())
                .then((data) => {
                    setGalleryData(data)
                })
        }
    }

    useEffect(() => {
        fetchCookie();
    }, [])

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this record?")) return;

        try {
            const res = await fetch("https://fmtcpallimukku.ac.in/api/delete_staff.php", {
                method: "POST",
                body: new URLSearchParams({ id }),
            });
            const data = await res.json();
            alert(data.message);
            if (data.status === "success") {
                fetchCookie(); // refresh list
            }
        } catch (err) {
            console.error(err);
            alert("Error deleting record");
        }
    };


    const [eventFormOpen, setEventFormOpen] = useState(false);
    const handleEventFormOpen = () => {
        setEventFormOpen(true)
    }
    const handleEventFormClose = (event, reason) => {
        if (reason && reason === "backdropClick")
            return;
        fetchCookie()
        setEventFormOpen(false)
    }

    const [selectedEvent, setSelectedEvent] = useState('');
    const [imagesFormOpen, setImagesFormOpen] = useState(false);
    const handleImagesFormOpen = (gallery) => {
        setSelectedEvent(gallery)
        setImagesFormOpen(true)
    }
    const handleImagesFormClose = (event, reason) => {
        if (reason && reason === "backdropClick")
            return;
        setImagesFormOpen(false)
    }


    const [selectedStaff, setSelectedStaff] = useState(null);

    const handleAdd = () => {
        setSelectedStaff(null);
        setEventFormOpen(true)
    };

    const handleEdit = (row) => {
        setSelectedStaff(row);
        setEventFormOpen(true)
    };



    return (

        <Box sx={{ minHeight: '100vh', p: 5 }}>

            <Paper
                sx={{
                    borderRadius: 2,
                    boxShadow: '4px 14px 28px rgba(0, 0, 0, 0.1)',
                    p: 5
                }}
                data-aos="fade-up"
            >

                <Typography variant="h6">
                    Staff Management
                </Typography>

                <Divider sx={{ mb: 5 }} />

                {galleryData.length > 0 ?

                    <TableContainer component={Paper} sx={{ p: 2, mt: 2 }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Priority</TableCell>
                                    <TableCell>Department</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Designation</TableCell>
                                    <TableCell>Qualifications</TableCell>
                                    <TableCell>Photo</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {galleryData.map((gallery, index) => (
                                    <TableRow
                                        key={gallery.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{gallery.priority}</TableCell>
                                        <TableCell>{gallery.department}</TableCell>
                                        <TableCell>{gallery.type}</TableCell>
                                        <TableCell>{gallery.name}</TableCell>
                                        <TableCell>{gallery.designation}</TableCell>
                                        <TableCell>{gallery.qualifications}</TableCell>
                                        <TableCell>
                                            <Box
                                                component='img'
                                                sx={{ widows: 100, height: 100 }}
                                                src={`https://fmtcpallimukku.ac.in/staff_data/images/${gallery.photo}`}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Stack direction='row' spacing={1}>
                                                <Button
                                                    variant="contained"
                                                    size='small'
                                                    onClick={
                                                        () => handleEdit(gallery)
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    size='small'
                                                    onClick={
                                                        () => handleDelete(gallery.id)
                                                    }
                                                >
                                                    Delete
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

            <Fab
                variant="extended"
                color="primary"
                sx={{ position: 'fixed', right: 50, bottom: 50 }}
                onClick={
                    () => handleAdd()
                }
            >
                <AddOutlinedIcon sx={{ mr: 1 }} />
                Add Staff
            </Fab>

            {eventFormOpen &&
                <AddStaff
                    open={eventFormOpen}
                    handleClose={handleEventFormClose}
                    editData={selectedStaff}
                />
            }
        </Box >


    );
}
