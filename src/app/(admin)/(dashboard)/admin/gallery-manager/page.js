"use client"

import { useEffect, useState } from "react";

import {
    Box, Button, Container, Fab, Paper, Stack,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography
} from "@mui/material";

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import AddEvent from "./addEvent";
import ManagePhotos from "./managePhotos";
import { useRouter } from "next/navigation";


export default function GalleryManager() {

    const router = useRouter();

    const [galleryData, setGalleryData] = useState([]);

    const fetchGallery = async () => {
        try {

            const storedUsername =
                typeof window !== "undefined"
                    ? sessionStorage.getItem("username")
                    : null;

            if (!storedUsername) {
                router.replace("/admin-login");
                return;
            }

            const res = await fetch("https://fmtcpallimukku.ac.in/api/gallery/gallery_get_data.php");

            if (!res.ok) {
                throw new Error(
                    "Failed to fetch gallery"
                );
            }

            const result = await res.json();

            if (result.status) {
                setGalleryData(result.data);
            }

        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        fetchGallery();
    }, []);


    const [eventFormOpen, setEventFormOpen] = useState(false);
    const handleEventFormOpen = () => {
        setEventFormOpen(true)
    }
    const handleEventFormClose = (event, reason) => {
        if (reason && reason === "backdropClick")
            return;
        fetchGallery()
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
        fetchGallery()
    }



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
                        Gallery Manager
                    </Typography>

                    {galleryData.length > 0 ?

                        <TableContainer component={Paper} sx={{ p: 2, mt: 2 }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Year</TableCell>
                                        <TableCell>Department</TableCell>
                                        <TableCell>Event</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {galleryData.map((gallery, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{gallery.year}</TableCell>
                                            <TableCell>{gallery.department}</TableCell>
                                            <TableCell>{gallery.event}</TableCell>
                                            <TableCell>{gallery.description}</TableCell>
                                            <TableCell>
                                                <Stack direction='row' spacing={1}>
                                                    <Button
                                                        variant="contained"
                                                        size='small'
                                                        onClick={
                                                            () => handleImagesFormOpen(gallery)
                                                        }
                                                    >
                                                        Edit Photos
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
                Add Event
            </Fab>

            {eventFormOpen &&
                <AddEvent open={eventFormOpen} handleClose={handleEventFormClose} />
            }

            {imagesFormOpen &&
                <ManagePhotos gallery={selectedEvent} open={imagesFormOpen} handleClose={handleImagesFormClose} />
            }

        </Box >


    );
}
