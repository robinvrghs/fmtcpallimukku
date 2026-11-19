"use client"
import Link from "next/link";

import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import {
    ArrowForward,
    SchoolOutlined,
} from "@mui/icons-material";

export default function AdmissionsCTA() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 7, md: 9 },
                bgcolor: "#FFFFFF",
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: { xs: 2, md: 3 },
                        bgcolor: "#880D2E",
                        px: { xs: 3, sm: 5, md: 8 },
                        py: { xs: 5, md: 7 },
                    }}
                >
                    {/* Decorative circles */}
                    <Box
                        sx={{
                            position: "absolute",
                            width: 320,
                            height: 320,
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: "50%",
                            right: -100,
                            top: -150,
                        }}
                    />

                    <Box
                        sx={{
                            position: "absolute",
                            width: 230,
                            height: 230,
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: "50%",
                            right: 10,
                            bottom: -150,
                        }}
                    />

                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        justifyContent="space-between"
                        alignItems={{ xs: "flex-start", md: "center" }}
                        spacing={4}
                        sx={{ position: "relative" }}
                    >
                        <Box sx={{ maxWidth: 650 }}>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                                sx={{ mb: 2 }}
                            >
                                <SchoolOutlined sx={{ color: "#E5BD55" }} />

                                <Typography
                                    sx={{
                                        color: "#E5BD55",
                                        fontSize: 12,
                                        fontWeight: 700,
                                        letterSpacing: 2,
                                    }}
                                >
                                    YOUR FUTURE STARTS HERE
                                </Typography>
                            </Stack>

                            <Typography
                                component="h2"
                                sx={{
                                    color: "#FFFFFF",
                                    fontFamily: "var(--font-playfair), Georgia, serif",
                                    fontSize: { xs: 32, sm: 38, md: 46 },
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                    mb: 2,
                                }}
                            >
                                Ready to shape the future of education?
                            </Typography>

                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,0.78)",
                                    fontSize: 14,
                                    lineHeight: 1.9,
                                    maxWidth: 550,
                                }}
                            >
                                Take the first step towards your teaching career.
                                Explore our programmes and get in touch with our college
                                for admission-related information.
                            </Typography>
                        </Box>

                        <Stack
                            direction={{ xs: "column", sm: "row", md: "column" }}
                            spacing={1.5}
                            sx={{ minWidth: { md: 210 }, width: { xs: "100%", sm: "auto" } }}
                        >
                            <Button
                                component={Link}
                                href="/admissions"
                                variant="contained"
                                endIcon={<ArrowForward />}
                                sx={{
                                    bgcolor: "#E5BD55",
                                    color: "#0B2D53",
                                    px: 3,
                                    py: 1.5,
                                    fontWeight: 700,
                                    "&:hover": {
                                        bgcolor: "#FFFFFF",
                                    },
                                }}
                            >
                                Admission Enquiry
                            </Button>

                            <Button
                                component={Link}
                                href="/contact"
                                variant="outlined"
                                sx={{
                                    color: "#FFFFFF",
                                    borderColor: "rgba(255,255,255,0.6)",
                                    px: 3,
                                    py: 1.5,
                                    "&:hover": {
                                        borderColor: "#FFFFFF",
                                        bgcolor: "rgba(255,255,255,0.08)",
                                    },
                                }}
                            >
                                Contact College
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
