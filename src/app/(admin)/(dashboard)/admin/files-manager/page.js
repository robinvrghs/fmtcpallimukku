"use client"

import { useEffect, useState } from "react";

import {
    Box, Button, Container, Fab, Paper, Stack,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography
} from "@mui/material";

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


import { useRouter } from "next/navigation";
import AddFile from "./addFile";


export default function FilesManager() {

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
            await fetch('https://fmtcpallimukku.ac.in/api/get_files.php')
                .then((res) => res.json())
                .then((data) => {
                    setGalleryData(data)
                })
        }
    }

    useEffect(() => {
        fetchCookie();
    }, [])


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
                        Files Manager
                    </Typography>

                    {galleryData.length > 0 ?

                        <TableContainer component={Paper} sx={{ p: 2, mt: 2 }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {galleryData.map((gallery, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{gallery.type}</TableCell>
                                            <TableCell>{gallery.name}</TableCell>
                                            <TableCell>
                                                <Stack direction='row' spacing={1}>
                                                    <Button
                                                        variant="contained"
                                                        size='small'

                                                    >
                                                        Download
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        size='small'

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
                Add File
            </Fab>

            {eventFormOpen &&
                <AddFile open={eventFormOpen} handleClose={handleEventFormClose} />
            }

        </Box >


    );
}
