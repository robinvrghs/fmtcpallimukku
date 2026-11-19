'use client'

import {
    Avatar, Box, ButtonBase,
    Divider, Grid, Paper, Stack, Typography
} from "@mui/material";

import { useRouter } from "next/navigation";

const dashboardItems = [
    {
        title: 'Notifications Manager',
        image: '/images/icons/notifications.png',
        path: '/admin/notifications-manager',
    },
    {
        title: 'Gallery Manager',
        image: '/images/icons/gallery.png',
        path: '/admin/gallery-manager',
    },
    {
        title: 'Popup Manager',
        image: '/images/icons/popup.png',
        path: '/admin/popup-manager',
    },
];

const Dashboard = () => {

    const router = useRouter();

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

                <Stack
                    direction="row"
                    spacing={3}
                    useFlexGap
                    flexWrap="wrap"
                >

                    {dashboardItems.map((item) => (

                        <ButtonBase
                            key={item.path}
                            onClick={() => router.push(item.path)}
                            sx={{ borderRadius: 2 }}
                        >
                            <Paper
                                elevation={1}
                                sx={{
                                    p: 2,
                                    width: 140,
                                    minHeight: 125,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    textAlign: 'center',
                                    transition: '0.2s',
                                    '&:hover': {
                                        boxShadow: 4,
                                        transform: 'translateY(-3px)',
                                    },
                                }}
                            >

                                <Avatar
                                    variant="square"
                                    src={item.image}
                                    alt={item.title}
                                    sx={{
                                        width: 56,
                                        height: 56,
                                    }}
                                />

                                <Typography variant="subtitle2">
                                    {item.title}
                                </Typography>

                            </Paper>
                        </ButtonBase>

                    ))}

                </Stack>

            </Paper>

        </Box>
    );
};

export default Dashboard;
