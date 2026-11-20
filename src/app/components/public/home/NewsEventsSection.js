
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
    Alert,
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import {
    ArrowForward,
    CampaignOutlined,
    EventOutlined,
} from "@mui/icons-material";

const API_URL = "https://fmtcpallimukku.ac.in/api";

const formatDate = (dateString) => {
    if (!dateString) return null;

    // Parse YYYY-MM-DD without timezone conversion
    const [year, month, day] = dateString.split("-").map(Number);

    const date = new Date(year, month - 1, day);

    return {
        day: String(day).padStart(2, "0"),
        month: date.toLocaleString("en", { month: "short" }).toUpperCase(),
        year: String(year),
    };
};

const NewsEventsSection = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchNewsEvents = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    `${API_URL}/news-events/get_news_events.php`,
                    {
                        method: "GET",
                        cache: "no-store",
                        headers: {
                            Accept: "application/json",
                        },
                    }
                );

                const result = await response.json();

                if (!response.ok || !result.status) {
                    throw new Error(
                        result.error || "Unable to load news and events."
                    );
                }

                setAnnouncements(
                    Array.isArray(result.announcements)
                        ? result.announcements
                        : []
                );

                setUpcomingEvents(
                    Array.isArray(result.events)
                        ? result.events
                        : []
                );
            } catch (err) {
                console.error("News and events error:", err);
                setError(err.message || "Unable to load news and events.");
            } finally {
                setLoading(false);
            }
        };

        fetchNewsEvents();
    }, []);

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
                    spacing={3}
                    sx={{
                        mb: 5,
                        justifyContent: "space-between",
                        alignItems: {
                            xs: "flex-start",
                            md: "flex-end",
                        },
                    }}
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
                                fontFamily:
                                    "var(--font-playfair), Georgia, serif",
                                fontSize: {
                                    xs: 32,
                                    sm: 38,
                                    md: 44,
                                },
                                fontWeight: 700,
                                lineHeight: 1.2,
                            }}
                        >
                            News, events &amp;
                            <Box
                                component="span"
                                sx={{ color: "#880D2E" }}
                            >
                                {" "}announcements.
                            </Box>
                        </Typography>
                    </Box>
                </Stack>

                {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {error}
                    </Alert>
                )}

                <Grid container spacing={4}>
                    {/* Announcements */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                mb: 2.5,
                                alignItems: "center",
                            }}
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
                            {loading ? (
                                <Typography color="text.secondary">
                                    Loading announcements...
                                </Typography>
                            ) : announcements.length > 0 ? (
                                announcements.map((item) => {
                                    const date = formatDate(
                                        item.display_date
                                    );

                                    return (
                                        <Box
                                            key={item.id}
                                            component={Link}
                                            href={
                                                item.link || "/announcements"
                                            }
                                            sx={{
                                                display: "flex",
                                                gap: 2.5,
                                                p: {
                                                    xs: 2,
                                                    sm: 2.5,
                                                },
                                                bgcolor: "#FFFFFF",
                                                border: "1px solid #EEEAE3",
                                                borderRadius: 2,
                                                color: "inherit",
                                                textDecoration: "none",
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
                                                    sx={{
                                                        fontSize: 25,
                                                        fontWeight: 700,
                                                        lineHeight: 1,
                                                    }}
                                                >
                                                    {date?.day}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        fontSize: 11,
                                                        fontWeight: 700,
                                                        mt: 0.5,
                                                    }}
                                                >
                                                    {date?.month}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        fontSize: 9,
                                                        opacity: 0.7,
                                                    }}
                                                >
                                                    {date?.year}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ flex: 1, minWidth: 0 }}>
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
                                                    display: {
                                                        xs: "none",
                                                        sm: "block",
                                                    },
                                                }}
                                            />
                                        </Box>
                                    );
                                })
                            ) : (
                                !error && (
                                    <Typography
                                        sx={{
                                            color: "#64748B",
                                            py: 3,
                                            fontSize: 14,
                                        }}
                                    >
                                        No announcements available at the moment.
                                    </Typography>
                                )
                            )}
                        </Stack>

                        <Button
                            component={Link}
                            href="/announcements"
                            endIcon={<ArrowForward />}
                            sx={{
                                mt: 2,
                                color: "#0B2D53",
                                fontWeight: 700,
                            }}
                        >
                            All Announcements
                        </Button>
                    </Grid>

                    {/* Upcoming Events */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                            sx={{
                                bgcolor: "#0B2D53",
                                borderRadius: 2.5,
                                p: {
                                    xs: 3,
                                    sm: 3.5,
                                },
                                height: "100%",
                            }}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{
                                    mb: 3,
                                    alignItems: "center",
                                }}
                            >
                                <EventOutlined
                                    sx={{ color: "#E5BD55" }}
                                />

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
                                {loading ? (
                                    <Typography
                                        sx={{
                                            color: "rgba(255,255,255,0.65)",
                                            py: 2,
                                        }}
                                    >
                                        Loading events...
                                    </Typography>
                                ) : upcomingEvents.length > 0 ? (
                                    upcomingEvents.map((event, index) => {
                                        const date = formatDate(
                                            event.display_date
                                        );

                                        return (
                                            <Box
                                                key={event.id}
                                                component={Link}
                                                href={event.link || "/events"}
                                                sx={{
                                                    display: "flex",
                                                    gap: 2,
                                                    py: 2.3,
                                                    borderBottom:
                                                        index !==
                                                            upcomingEvents.length - 1
                                                            ? "1px solid rgba(255,255,255,0.15)"
                                                            : "none",
                                                    color: "inherit",
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 53,
                                                        minWidth: 53,
                                                        textAlign: "center",
                                                        borderRight:
                                                            "1px solid rgba(255,255,255,0.2)",
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
                                                        {date?.day}
                                                    </Typography>

                                                    <Typography
                                                        sx={{
                                                            color: "#FFFFFF",
                                                            fontSize: 10,
                                                            fontWeight: 700,
                                                        }}
                                                    >
                                                        {date?.month}
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ minWidth: 0 }}>
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
                                        );
                                    })
                                ) : (
                                    !error && (
                                        <Typography
                                            sx={{
                                                color: "rgba(255,255,255,0.65)",
                                                py: 3,
                                                fontSize: 13,
                                            }}
                                        >
                                            No upcoming events scheduled.
                                        </Typography>
                                    )
                                )}
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
};

export default NewsEventsSection;
