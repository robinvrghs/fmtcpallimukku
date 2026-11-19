"use client"
import Link from "next/link";

import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import {
    ArrowForward,
    CalendarMonthOutlined,
    CampaignOutlined,
    EventOutlined,
} from "@mui/icons-material";

const announcements = [
    {
        date: "01",
        month: "JUN",
        year: "2026",
        category: "ANNOUNCEMENT",
        title: "Admission Notification",
        description:
            "Admission-related announcements and important information for prospective students.",
        href: "/announcements",
    },
    {
        date: "15",
        month: "JUN",
        year: "2026",
        category: "ACADEMICS",
        title: "Academic Activities",
        description:
            "Updates about academic activities, programmes and student learning experiences.",
        href: "/announcements",
    },
    {
        date: "20",
        month: "JUN",
        year: "2026",
        category: "COLLEGE NEWS",
        title: "College Activities and Updates",
        description:
            "Stay informed about important developments and activities from the college.",
        href: "/announcements",
    },
];

const upcomingEvents = [
    {
        day: "05",
        month: "DEC",
        title: "Academic Seminar",
        description: "Academic seminar and knowledge-sharing session.",
        category: "ACADEMIC",
    },
    {
        day: "12",
        month: "DEC",
        title: "Student Development Programme",
        description: "A programme focused on student learning and development.",
        category: "STUDENT LIFE",
    },
    {
        day: "18",
        month: "DEC",
        title: "College Activities",
        description: "Updates on activities and programmes at the college.",
        category: "CAMPUS",
    },
];

export default function NewsEventsSection() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 7, md: 11 },
                bgcolor: "#FAF9F6",
            }}
        >
            <Container maxWidth="xl">
                {/* Heading */}
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", md: "flex-end" }}
                    spacing={3}
                    sx={{ mb: 5 }}
                >
                    <Box>
                        <Typography
                            sx={{
                                color: "#880D2E",
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: 2,
                                mb: 1.5,
                            }}
                        >
                            WHAT'S HAPPENING AT FMTC
                        </Typography>

                        <Typography
                            component="h2"
                            sx={{
                                color: "#0B2D53",
                                fontFamily: "var(--font-playfair), Georgia, serif",
                                fontSize: { xs: 32, sm: 38, md: 44 },
                                fontWeight: 700,
                                lineHeight: 1.2,
                            }}
                        >
                            News, events &amp;
                            <Box component="span" sx={{ color: "#880D2E" }}>
                                {" "}announcements.
                            </Box>
                        </Typography>
                    </Box>
                </Stack>

                <Grid container spacing={4}>
                    {/* Announcements */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                            sx={{ mb: 2.5 }}
                        >
                            <CampaignOutlined sx={{ color: "#880D2E" }} />
                            <Typography
                                sx={{
                                    color: "#0B2D53",
                                    fontWeight: 700,
                                    fontSize: 17,
                                }}
                            >
                                Latest Announcements
                            </Typography>
                        </Stack>

                        <Stack spacing={2}>
                            {announcements.map((item) => (
                                <Box
                                    key={item.title}
                                    component={Link}
                                    href={item.href}
                                    sx={{
                                        display: "flex",
                                        gap: 2.5,
                                        p: { xs: 2, sm: 2.5 },
                                        bgcolor: "#FFFFFF",
                                        border: "1px solid #EEEAE3",
                                        borderRadius: 2,
                                        color: "inherit",
                                        transition: "all 0.25s ease",
                                        "&:hover": {
                                            borderColor: "#D4AF37",
                                            transform: "translateX(4px)",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 68,
                                            minWidth: 68,
                                            height: 76,
                                            bgcolor: "#0B2D53",
                                            color: "#FFFFFF",
                                            borderRadius: 1.5,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Typography
                                            sx={{ fontSize: 25, fontWeight: 700, lineHeight: 1 }}
                                        >
                                            {item.date}
                                        </Typography>
                                        <Typography
                                            sx={{ fontSize: 11, fontWeight: 700, mt: 0.5 }}
                                        >
                                            {item.month}
                                        </Typography>
                                        <Typography sx={{ fontSize: 9, opacity: 0.7 }}>
                                            {item.year}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ flex: 1 }}>
                                        <Typography
                                            sx={{
                                                color: "#880D2E",
                                                fontSize: 10,
                                                fontWeight: 700,
                                                letterSpacing: 1,
                                                mb: 0.7,
                                            }}
                                        >
                                            {item.category}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#0B2D53",
                                                fontWeight: 700,
                                                fontSize: 15,
                                                mb: 0.5,
                                            }}
                                        >
                                            {item.title}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#64748B",
                                                fontSize: 12,
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Box>

                                    <ArrowForward
                                        sx={{
                                            color: "#B18A28",
                                            alignSelf: "center",
                                            display: { xs: "none", sm: "block" },
                                        }}
                                    />
                                </Box>
                            ))}
                        </Stack>

                        <Button
                            component={Link}
                            href="/announcements"
                            endIcon={<ArrowForward />}
                            sx={{ mt: 2, color: "#0B2D53", fontWeight: 700 }}
                        >
                            All Announcements
                        </Button>
                    </Grid>

                    {/* Events */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                            sx={{
                                bgcolor: "#0B2D53",
                                borderRadius: 2.5,
                                p: { xs: 3, sm: 3.5 },
                                height: "100%",
                            }}
                        >
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                                sx={{ mb: 3 }}
                            >
                                <EventOutlined sx={{ color: "#E5BD55" }} />
                                <Typography
                                    sx={{
                                        color: "#FFFFFF",
                                        fontWeight: 700,
                                        fontSize: 17,
                                    }}
                                >
                                    Upcoming Events
                                </Typography>
                            </Stack>

                            <Stack spacing={0}>
                                {upcomingEvents.map((event, index) => (
                                    <Box
                                        key={event.title}
                                        sx={{
                                            display: "flex",
                                            gap: 2,
                                            py: 2.3,
                                            borderBottom:
                                                index !== upcomingEvents.length - 1
                                                    ? "1px solid rgba(255,255,255,0.15)"
                                                    : "none",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 53,
                                                minWidth: 53,
                                                textAlign: "center",
                                                borderRight: "1px solid rgba(255,255,255,0.2)",
                                                pr: 1.5,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "#E5BD55",
                                                    fontSize: 24,
                                                    fontWeight: 700,
                                                    lineHeight: 1.1,
                                                }}
                                            >
                                                {event.day}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: "#FFFFFF",
                                                    fontSize: 10,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                {event.month}
                                            </Typography>
                                        </Box>

                                        <Box>
                                            <Typography
                                                sx={{
                                                    color: "#E5BD55",
                                                    fontSize: 9,
                                                    fontWeight: 700,
                                                    letterSpacing: 1,
                                                    mb: 0.5,
                                                }}
                                            >
                                                {event.category}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    color: "#FFFFFF",
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    mb: 0.5,
                                                }}
                                            >
                                                {event.title}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    color: "rgba(255,255,255,0.65)",
                                                    fontSize: 11,
                                                    lineHeight: 1.7,
                                                }}
                                            >
                                                {event.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>

                            <Button
                                component={Link}
                                href="/events"
                                endIcon={<ArrowForward />}
                                sx={{
                                    mt: 2,
                                    color: "#E5BD55",
                                    fontWeight: 700,
                                    px: 0,
                                }}
                            >
                                View Event Calendar
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
