"use client"

import { useFormik } from "formik";
import * as yup from 'yup';

import { useEffect, useState } from "react";

import {
    Box, Button, Container, Divider, Fab, FormControlLabel, Grid, Paper, Stack, Switch, TextField, Toolbar, Typography
} from "@mui/material";

import { useRouter } from "next/navigation";


export default function PopupManager() {

    const router = useRouter();

    const [checked, setChecked] = useState(false);

    const fetchCookie = async () => {

        await fetch('https://fmtcpallimukku.ac.in/api/get_popup_status.php')
            .then((res) => res.json())
            .then((data) => {
                setChecked(data.status === "1");
                console.log(data)
            })

    }

    useEffect(() => {
        fetchCookie();
    }, [])




    const handleChange = async (event) => {
        const newValue = event.target.checked;
        setChecked(newValue);

        console.log(newValue)

        const formData = new FormData();
        formData.append('status', newValue ? '1' : '0');

        try {
            const response = await fetch(`https://fmtcpallimukku.ac.in/api/update_popup_status.php`, {
                method: 'POST',
                body: formData,
            });

            console.log('Switch state saved:', response.data);
        } catch (error) {
            console.error('Error updating switch:', error);
        }
    };


    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return alert('Please select a file first.');

        const formData = new FormData();
        formData.append('photo', file);

        try {
            const response = await fetch(`https://fmtcpallimukku.ac.in/api/update_popup_image.php`, {
                method: 'POST',
                body: formData,
            });
            console.log('Upload success:', response.data);
            alert('File uploaded successfully!');
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Upload failed.');
        }
    };


    return (
        <Box sx={{ minHeight: '100vh', p: 5 }}>
            <Paper
                sx={{
                    borderRadius: 2,
                    boxShadow: '4px 14px 28px rgba(0, 0, 0, 0.1)',
                    p: 5
                }}
            >

                <Typography variant="h6">
                    Popup Manager
                </Typography>

                <Divider sx={{ mb: 5 }} />

                <Box sx={{ border: 1, borderColor: '#BFD7ED', p: 2, mb: 3, borderRadius: 2 }}>
                    <Grid container spacing={3}>

                        <Grid size={{ xs: 12 }}>

                            <FormControlLabel
                                sx={{ display: 'block' }}
                                control={
                                    <Switch
                                        checked={checked}
                                        onChange={handleChange}
                                    />
                                }
                                label={checked ? 'On' : 'Off'}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 7 }}>
                            <input
                                accept="image/*"
                                type="file"
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                                id="upload-photo"
                            />
                            <label htmlFor="upload-photo">
                                <Button variant="contained" component="span" sx={{ mr: 5 }}>
                                    Choose Photo
                                </Button>
                            </label>
                            {file && <p>{file.name}</p>}
                            <Button variant="contained" color="primary" onClick={handleUpload}>
                                Upload
                            </Button>
                        </Grid>

                    </Grid>
                </Box>



            </Paper>


        </Box >


    );
}
