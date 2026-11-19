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
    AutoStoriesOutlined,
    GroupsOutlined,
    PsychologyOutlined,
    WorkspacePremiumOutlined,
} from "@mui/icons-material";

const features = [
    {
        icon: AutoStoriesOutlined,
        number: "01",
        title: "Academic Learning",
        description:
            "A learning environment that encourages subject knowledge, educational understanding and continuous development.",
    },
    {
        icon: GroupsOutlined,
        number: "02",
        title: "Collaborative Learning",
        description:
            "Opportunities to learn through interaction, teamwork, discussion and shared experiences.",
    },
    {
        icon: PsychologyOutlined,
        number: "03",
        title: "Professional Growth",
        description:
            "Focus on developing teaching abilities, communication and the confidence needed in educational settings.",
    },
    {
        icon: WorkspacePremiumOutlined,
        number: "04",
        title: "Values and Responsibility",
        description:
            "Encouraging future educators to demonstrate integrity, responsibility and commitment to society.",
    },
];

export default function WhyChooseSection() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 7, md: 11 },
                bgcolor: "#0B2D53",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Decorative background elements */}
            <Box
                sx={{
                    position: "absolute",
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.07)",
                    top: -200,
                    right: -100,
                    pointerEvents: "none",
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative" }}>
                <Grid container spacing={5}>
                    {/* Introduction */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Stack spacing={2.5}>
                            <Typography
                                sx={{
                                    color: "#E5BD55",
                                    fontSize: 12,
                                    fontWeight: 700,
                                    letterSpacing: 2,
                                }}
                            >
                                THE FMTC EXPERIENCE
                            </Typography>

                            <Typography
                                component="h2"
                                sx={{
                                    color: "#FFFFFF",
                                    fontFamily: "var(--font-playfair), Georgia, serif",
                                    fontSize: { xs: 34, md: 43 },
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                }}
                            >
                                More than education.
                                <Box component="span" sx={{ color: "#E5BD55" }}>
                                    {" "}A foundation for life.
                                </Box>
                            </Typography>

                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,0.72)",
                                    fontSize: 14,
                                    lineHeight: 1.9,
                                }}
                            >
                                Teacher education is about more than learning how to teach.
                                It is about developing the knowledge, confidence and values
                                to make a meaningful difference.
                            </Typography>

                            <Box sx={{ pt: 1 }}>
                                <Button
                                    component={Link}
                                    href="/about"
                                    variant="outlined"
                                    endIcon={<ArrowForward />}
                                    sx={{
                                        color: "#E5BD55",
                                        borderColor: "#E5BD55",
                                        px: 3,
                                        py: 1.3,
                                        "&:hover": {
                                            bgcolor: "rgba(229,189,85,0.1)",
                                            borderColor: "#FFFFFF",
                                        },
                                    }}
                                >
                                    Learn More About Us
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Features */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Grid container spacing={2}>
                            {features.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <Grid
                                        key={item.number}
                                        size={{ xs: 12, sm: 6 }}
                                    >
                                        <Box
                                            sx={{
                                                height: "100%",
                                                minHeight: 220,
                                                p: { xs: 3, md: 3.5 },
                                                border: "1px solid rgba(255,255,255,0.14)",
                                                borderRadius: 2,
                                                bgcolor: "rgba(255,255,255,0.045)",
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    bgcolor: "rgba(255,255,255,0.09)",
                                                    borderColor: "#E5BD55",
                                                    transform: "translateY(-4px)",
                                                },
                                            }}
                                        >
                                            <Stack
                                                direction="row"
                                                sx={{
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    mb: 3
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 48,
                                                        height: 48,
                                                        borderRadius: 2,
                                                        bgcolor: "rgba(229,189,85,0.13)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    <Icon sx={{ color: "#E5BD55", fontSize: 26 }} />
                                                </Box>

                                                <Typography
                                                    sx={{
                                                        color: "rgba(255,255,255,0.3)",
                                                        fontSize: 25,
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {item.number}
                                                </Typography>
                                            </Stack>

                                            <Typography
                                                sx={{
                                                    color: "#FFFFFF",
                                                    fontWeight: 700,
                                                    fontSize: 16,
                                                    mb: 1,
                                                }}
                                            >
                                                {item.title}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    color: "rgba(255,255,255,0.66)",
                                                    fontSize: 12.5,
                                                    lineHeight: 1.9,
                                                }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
