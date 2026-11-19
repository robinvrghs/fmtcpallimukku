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

import {
    ArrowForward,
    AutoStoriesOutlined,
    VisibilityOutlined,
} from "@mui/icons-material";

const aboutPoints = [
    {
        icon: VisibilityOutlined,
        title: "Our Vision",
        description:
            "To nurture responsible, knowledgeable and inspiring educators who contribute positively to society.",
    },
    {
        icon: AutoStoriesOutlined,
        title: "Our Mission",
        description:
            "To provide quality teacher education through academic excellence, practical learning and strong values.",
    },
];

export default function AboutSection() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 7, md: 11 },
                bgcolor: "#FFFFFF",
                overflow: "hidden",
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
                    {/* Image */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                minHeight: { xs: 340, sm: 430, md: 520 },
                                borderRadius: { xs: 2, md: 3 },
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src="/images/hero/slide1.webp"
                                alt="Fathima Memorial Training College campus"
                                fill
                                sizes="(max-width: 900px) 100vw, 50vw"
                                style={{ objectFit: "cover" }}
                            />

                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(0deg, rgba(7,31,58,0.75), transparent 55%)",
                                }}
                            />

                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    p: { xs: 3, md: 4 },
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#E5BD55",
                                        fontSize: 12,
                                        fontWeight: 700,
                                        letterSpacing: 2,
                                        mb: 1,
                                    }}
                                >
                                    FATHIMA MEMORIAL TRAINING COLLEGE
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#FFFFFF",
                                        fontFamily: "var(--font-playfair), Georgia, serif",
                                        fontSize: { xs: 25, md: 32 },
                                        fontWeight: 700,
                                        maxWidth: 420,
                                    }}
                                >
                                    Inspiring the educators of tomorrow.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Content */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={2.5}>
                            <Typography
                                sx={{
                                    color: "#880D2E",
                                    fontSize: 12,
                                    fontWeight: 700,
                                    letterSpacing: 2,
                                }}
                            >
                                ABOUT OUR COLLEGE
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
                                Building a foundation for
                                <Box component="span" sx={{ color: "#880D2E" }}>
                                    {" "}better education.
                                </Box>
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#64748B",
                                    fontSize: 15,
                                    lineHeight: 1.9,
                                }}
                            >
                                Fathima Memorial Training College is dedicated to teacher
                                education and the development of future educators. Through
                                learning, professional development and a commitment to
                                educational values, the institution aims to prepare teachers
                                for the changing needs of society.
                            </Typography>

                            <Stack spacing={2} sx={{ pt: 1 }}>
                                {aboutPoints.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <Stack
                                            key={item.title}
                                            direction="row"
                                            spacing={2}
                                            sx={{ alignItems: "flex-start" }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 46,
                                                    height: 46,
                                                    minWidth: 46,
                                                    borderRadius: 2,
                                                    bgcolor: "#F7F2E8",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <Icon sx={{ color: "#880D2E", fontSize: 25 }} />
                                            </Box>

                                            <Box>
                                                <Typography
                                                    sx={{
                                                        color: "#0B2D53",
                                                        fontWeight: 700,
                                                        mb: 0.5,
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        color: "#64748B",
                                                        fontSize: 13,
                                                        lineHeight: 1.8,
                                                    }}
                                                >
                                                    {item.description}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    );
                                })}
                            </Stack>

                            <Box sx={{ pt: 1 }}>
                                <Button
                                    component={Link}
                                    href="/about"
                                    variant="contained"
                                    endIcon={<ArrowForward />}
                                    sx={{
                                        bgcolor: "#0B2D53",
                                        px: 3,
                                        py: 1.4,
                                        borderRadius: 1.5,
                                        "&:hover": { bgcolor: "#880D2E" },
                                    }}
                                >
                                    Discover Our College
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
