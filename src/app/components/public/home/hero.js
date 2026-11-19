"use client"

import Image from "next/image";
import Link from "next/link";

import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
} from "@mui/material";

import {
    ArrowForward,
    KeyboardArrowRight,
} from "@mui/icons-material";

const COLORS = {
    navy: "#0B2D53",
    burgundy: "#880D2E",
    gold: "#E5BD55",
};

export default function Hero() {
    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                minHeight: {
                    xs: 530,
                    sm: 480,
                    md: 500,
                    lg: 520,
                },
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                bgcolor: COLORS.navy,
            }}
        >
            {/* Background image */}
            <Image
                src="/images/hero/slide1.webp"
                alt="Fathima Memorial Training College campus"
                fill
                priority
                sizes="100vw"
                style={{
                    objectFit: "cover",
                    objectPosition: "center 45%",
                }}
            />

            {/* Image overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background: {
                        xs: "linear-gradient(90deg, rgba(5,24,43,0.88) 0%, rgba(5,24,43,0.65) 100%)",
                        md: "linear-gradient(90deg, rgba(5,24,43,0.92) 0%, rgba(5,24,43,0.78) 36%, rgba(5,24,43,0.20) 75%, rgba(5,24,43,0.05) 100%)",
                    },
                }}
            />

            {/* Hero content */}
            <Container
                maxWidth="xl"
                sx={{
                    position: "relative",
                    zIndex: 1,
                    py: { xs: 7, md: 9 },
                }}
            >
                <Box
                    sx={{
                        maxWidth: { xs: "100%", sm: 560, md: 650 },
                    }}
                >
                    {/* Eyebrow */}
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ mb: 2.5, alignItems: "center" }}
                    >
                        <Box
                            sx={{
                                width: 28,
                                height: 2,
                                bgcolor: COLORS.gold,
                            }}
                        />

                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: 3,
                            }}
                        >
                            WELCOME TO FMTC
                        </Typography>
                    </Stack>

                    {/* Heading */}
                    <Typography
                        component="h1"
                        sx={{
                            fontFamily: "Georgia, serif",
                            fontSize: {
                                xs: 39,
                                sm: 48,
                                md: 58,
                                lg: 66,
                            },
                            fontWeight: 700,
                            color: "#fff",
                            lineHeight: 1.08,
                            letterSpacing: -1.2,
                            mb: 2,
                        }}
                    >
                        Shaping Teachers.
                        <Box
                            component="span"
                            sx={{
                                display: "block",
                                color: COLORS.gold,
                            }}
                        >
                            Inspiring Generations.
                        </Box>
                    </Typography>

                    {/* Description */}
                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.9)",
                            fontSize: {
                                xs: 15,
                                md: 17,
                            },
                            lineHeight: 1.8,
                            maxWidth: 500,
                            mb: 3.5,
                        }}
                    >
                        A premier teacher education institution committed
                        to academic excellence, value-oriented education
                        and the holistic development of future educators.
                    </Typography>

                    {/* Action buttons */}
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        sx={{ alignItems: { xs: "stretch", sm: "center" } }}
                    >
                        <Button
                            component={Link}
                            href="/programmes"
                            variant="contained"
                            endIcon={<ArrowForward />}
                            sx={{
                                bgcolor: COLORS.burgundy,
                                color: "#fff",
                                px: 3,
                                py: 1.5,
                                borderRadius: 1.5,
                                fontWeight: 600,
                                textTransform: "none",
                                "&:hover": {
                                    bgcolor: "#6E0925",
                                },
                            }}
                        >
                            Explore Programmes
                        </Button>

                        <Button
                            component={Link}
                            href="/about"
                            variant="outlined"
                            endIcon={<KeyboardArrowRight />}
                            sx={{
                                color: "#fff",
                                borderColor: "#fff",
                                px: 3,
                                py: 1.5,
                                borderRadius: 1.5,
                                fontWeight: 600,
                                textTransform: "none",
                                "&:hover": {
                                    borderColor: COLORS.gold,
                                    bgcolor: "rgba(255,255,255,0.08)",
                                },
                            }}
                        >
                            About the College
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
