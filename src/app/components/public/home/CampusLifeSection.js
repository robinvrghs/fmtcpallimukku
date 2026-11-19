"use client"
import Image from "next/image";
import Link from "next/link";

import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import { ArrowForward } from "@mui/icons-material";

const galleryItems = [
    {
        title: "Campus Moments",
        category: "CAMPUS",
        image: "/images/campus/campus.webp",
        size: { xs: 12, md: 7 },
        height: { xs: 260, md: 390 },
    },
    {
        title: "Academic Activities",
        category: "ACADEMICS",
        image: "/images/campus/academics.webp",
        size: { xs: 12, md: 5 },
        height: { xs: 260, md: 390 },
    },
    {
        title: "Student Activities",
        category: "STUDENT LIFE",
        image: "/images/campus/students.webp",
        size: { xs: 12, md: 4 },
        height: { xs: 260, md: 300 },
    },
    {
        title: "Events and Celebrations",
        category: "EVENTS",
        image: "/images/campus/events.webp",
        size: { xs: 12, md: 4 },
        height: { xs: 260, md: 300 },
    },
    {
        title: "Learning Together",
        category: "LEARNING",
        image: "/images/campus/learning.webp",
        size: { xs: 12, md: 4 },
        height: { xs: 260, md: 300 },
    },
];

export default function CampusLifeSection() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 7, md: 11 },
                bgcolor: "#FFFFFF",
            }}
        >
            <Container maxWidth="xl">
                {/* Heading */}
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    sx={{
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", md: "flex-end" },
                        mb: 5
                    }}
                    spacing={3}
                >
                    <Box sx={{ maxWidth: 650 }}>
                        <Typography
                            sx={{
                                color: "#880D2E",
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: 2,
                                mb: 1.5,
                            }}
                        >
                            LIFE AT FMTC
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
                            Moments that make
                            <Box component="span" sx={{ color: "#880D2E" }}>
                                {" "}memories.
                            </Box>
                        </Typography>

                        <Typography
                            sx={{
                                mt: 2,
                                color: "#64748B",
                                fontSize: 14,
                                lineHeight: 1.8,
                            }}
                        >
                            Explore the experiences, activities and events that bring
                            our college community together.
                        </Typography>
                    </Box>

                    <Button
                        component={Link}
                        href="/gallery"
                        endIcon={<ArrowForward />}
                        sx={{
                            color: "#0B2D53",
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                        }}
                    >
                        Explore Gallery
                    </Button>
                </Stack>

                {/* Image grid */}
                <Grid container spacing={2}>
                    {galleryItems.map((item) => (
                        <Grid key={item.title} size={item.size}>
                            <Box
                                sx={{
                                    position: "relative",
                                    height: item.height,
                                    overflow: "hidden",
                                    borderRadius: 2,
                                    bgcolor: "#E9E5DC",
                                    "&:hover img": {
                                        transform: "scale(1.06)",
                                    },
                                    "&:hover .gallery-overlay": {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 900px) 100vw, 50vw"
                                    style={{
                                        objectFit: "cover",
                                        transition: "transform 0.5s ease",
                                    }}
                                />

                                <Box
                                    className="gallery-overlay"
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-end",
                                        p: 3,
                                        background:
                                            "linear-gradient(0deg, rgba(7,31,58,0.85), transparent 75%)",
                                        opacity: { xs: 1, md: 0.9 },
                                        transition: "opacity 0.3s ease",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "#E5BD55",
                                            fontSize: 10,
                                            fontWeight: 700,
                                            letterSpacing: 1.5,
                                            mb: 0.7,
                                        }}
                                    >
                                        {item.category}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#FFFFFF",
                                            fontFamily: "var(--font-playfair), Georgia, serif",
                                            fontSize: 22,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
