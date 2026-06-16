"use client"
import {
    Box, Divider, Grid, Paper, Typography
} from "@mui/material";

import AdminSidebar from "./components/sidebar";


export default function PagesLayout({ children }) {


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
                    Page Editor
                </Typography>

                <Divider sx={{ mb: 5 }} />

                <Box>
                    <Grid container spacing={5}>
                        <Grid size={{ xs: 12, md: 3 }}>

                            <AdminSidebar />

                        </Grid>
                        <Grid size={{ xs: 12, md: 9 }}>
                            {children}
                        </Grid>
                    </Grid>
                </Box>



            </Paper>


        </Box >


    );
}
