'use client'

import {
    Avatar, Box, ButtonBase,
    Divider, Grid, Paper, Stack, Typography
} from "@mui/material";

import withProtectedRoute from "./protected";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';

const Dashboard = () => {

    const router = useRouter();

    const [role, setRole] = useState('');

    useEffect(() => {
        setRole(sessionStorage.getItem('role'));
    }, []);

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
                    Website Manager
                </Typography>
                <Divider sx={{ mb: 5 }} />

                <Grid container spacing={5} sx={{ mb: 5 }}>
                    <Grid size={12}>
                        <Stack direction='row' spacing={5}>
                            {/* {(role === 'admin') &&
                                <ButtonBase onClick={() => router.push('/admin/application-manager-btech')}>
                                    <Paper sx={{ p: 1, width: 125 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Avatar
                                                variant="square"
                                                alt="dashboard"
                                                src="/images/icons/applications.png"
                                                sx={{ width: 56, height: 56 }}
                                            />
                                        </Box>
                                        <Typography variant="subtitle2">
                                            B.Tech Applications
                                        </Typography>
                                    </Paper>
                                </ButtonBase>
                            } */}
                            {/* {(role === 'admin') &&
                                <ButtonBase onClick={() => router.push('/admin/application-manager-mtech')}>
                                    <Paper sx={{ p: 1, width: 125 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Avatar
                                                variant="square"
                                                alt="dashboard"
                                                src="/images/icons/applications.png"
                                                sx={{ width: 56, height: 56 }}
                                            />
                                        </Box>
                                        <Typography variant="subtitle2">
                                            M.Tech Applications
                                        </Typography>
                                    </Paper>
                                </ButtonBase>
                            } */}
                            {/* <ButtonBase onClick={() => router.push('/admin/staff-management')}>
                                <Paper sx={{ p: 1, width: 125 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Avatar
                                            variant="square"
                                            alt="dashboard"
                                            src="/images/icons/applications.png"
                                            sx={{ width: 56, height: 56 }}
                                        />
                                    </Box>
                                    <Typography variant="subtitle2">
                                        Staff Management
                                    </Typography>
                                </Paper>
                            </ButtonBase> */}
                            <ButtonBase onClick={() => router.push('/admin/notifications-manager')}>
                                <Paper sx={{ p: 1, width: 125 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Avatar
                                            variant="square"
                                            alt="dashboard"
                                            src="/images/icons/notifications.png"
                                            sx={{ width: 56, height: 56 }}
                                        />
                                    </Box>
                                    <Typography variant="subtitle2">
                                        Notifications Manager
                                    </Typography>
                                </Paper>
                            </ButtonBase>
                            <ButtonBase onClick={() => router.push('/admin/gallery-manager')}>
                                <Paper sx={{ p: 1, width: 125 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Avatar
                                            variant="square"
                                            alt="dashboard"
                                            src="/images/icons/gallery.png"
                                            sx={{ width: 56, height: 56 }}
                                        />
                                    </Box>
                                    <Typography variant="subtitle2">
                                        Gallery  <br />Manager
                                    </Typography>
                                </Paper>
                            </ButtonBase>
                            <ButtonBase onClick={() => router.push('/admin/popup-manager')}>
                                <Paper sx={{ p: 1, width: 125 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Avatar
                                            variant="square"
                                            alt="dashboard"
                                            src="/images/icons/popup.png"
                                            sx={{ width: 56, height: 56 }}
                                        />
                                    </Box>
                                    <Typography variant="subtitle2">
                                        Popup  <br />Manager
                                    </Typography>
                                </Paper>
                            </ButtonBase>
                        </Stack>
                    </Grid>
                </Grid>

                {/* {openLoading &&

                <Backdrop
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                    open={openLoading}
                >
                    <CircularProgress />
                </Backdrop>
            } */}
            </Paper>
        </Box>
    )
}

export default withProtectedRoute(Dashboard);