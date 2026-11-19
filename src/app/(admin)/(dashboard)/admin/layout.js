'use client';

import { Box, Toolbar } from "@mui/material";
import TopBar from "../../components/appbar";
import MainDrawer from "../../components/drawer";
import AuthGuard from "@/components/AuthGuard";

export default function AdminLayout({ children }) {
    return (
        <AuthGuard>
            <Box sx={{ display: 'flex' }}>
                <TopBar />
                <MainDrawer />

                <Box
                    sx={{
                        minHeight: '100vh',
                        width: '100%',
                        bgcolor: '#f3f3f3'
                    }}
                >
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </AuthGuard>
    );
}