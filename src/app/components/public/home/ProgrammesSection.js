"use client"
import Image from "next/image";
import Link from "next/link";

import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import {
    ArrowForward,
    SchoolOutlined,
} from "@mui/icons-material";

const programmes = [
    {
        title: "Bachelor of Education",
        shortTitle: "B.Ed",
        duration: "2 Years",
        description:
            "A professional teacher education programme designed to develop subject knowledge, teaching skills and classroom practice.",
        image: "/images/b_ed.webp",
        href: "/programmes/b_ed",
    },
    {
        title: "Master of Education",
        shortTitle: "M.Ed",
        duration: "2 Years",
        description:
            "An advanced programme focused on educational theory, research, leadership and professional development.",
        image: "/images/m_ed.webp",
        href: "/programmes/m_ed",
    },
    {
        title: "Diploma in Elementary Education",
        shortTitle: "D.El.Ed",
        duration: "2 Years",
        description: "The D.El.Ed program designed to prepare dedicated and skilled teachers for the elementary level (classes I to VIII).",
        image: "/images/d_el_ed.webp",
        href: "/programmes/d_el_ed",
    },
];

export default function ProgrammesSection() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 7, md: 11 },
                bgcolor: "#F1F4F8",
            }}
        >
            <Container maxWidth="lg">
                {/* Section heading */}
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={3}
                    sx={{
                        mb: 5,
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", md: "flex-end" }
                    }}
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
                            EXPLORE OUR COURSES
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
                            Programmes that shape
                            <Box component="span" sx={{ color: "#880D2E" }}>
                                {" "}future educators.
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
                            Discover our teacher education programmes and take the next
                            step towards a rewarding career in education.
                        </Typography>
                    </Box>

                    <Button
                        component={Link}
                        href="/programmes"
                        endIcon={<ArrowForward />}
                        sx={{
                            color: "#0B2D53",
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                        }}
                    >
                        View All Programmes
                    </Button>
                </Stack>

                {/* Programme cards */}
                <Grid container spacing={3}>
                    {programmes.map((programme) => (
                        <Grid key={programme.shortTitle} size={{ xs: 12, md: 4 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: "0 8px 30px rgba(11,45,83,0.06)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: "0 16px 40px rgba(11,45,83,0.12)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        height: { xs: 220, md: 270 },
                                        bgcolor: "#E9E5DC",
                                    }}
                                >
                                    <Image
                                        src={programme.image}
                                        alt={`${programme.shortTitle} programme`}
                                        fill
                                        sizes="(max-width: 900px) 100vw, 50vw"
                                        style={{ objectFit: "cover" }}
                                    />

                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 18,
                                            left: 18,
                                            bgcolor: "#880D2E",
                                            color: "#FFFFFF",
                                            px: 2,
                                            py: 0.8,
                                            borderRadius: 1,
                                            fontWeight: 700,
                                            fontSize: 13,
                                        }}
                                    >
                                        {programme.shortTitle}
                                    </Box>
                                </Box>

                                <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        sx={{ mb: 1.5, alignItems: "center" }}
                                    >
                                        <SchoolOutlined
                                            sx={{ color: "#B18A28", fontSize: 19 }}
                                        />
                                        <Typography
                                            sx={{
                                                color: "#8B743D",
                                                fontSize: 12,
                                                fontWeight: 600,
                                            }}
                                        >
                                            {programme.duration}
                                        </Typography>
                                    </Stack>

                                    <Typography
                                        component="h3"
                                        sx={{
                                            color: "#0B2D53",
                                            fontFamily: "var(--font-playfair), Georgia, serif",
                                            fontSize: 25,
                                            fontWeight: 700,
                                            mb: 1.5,
                                        }}
                                    >
                                        {programme.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#64748B",
                                            fontSize: 13,
                                            lineHeight: 1.9,
                                            mb: 2.5,
                                        }}
                                    >
                                        {programme.description}
                                    </Typography>

                                    <Button
                                        component={Link}
                                        href={programme.href}
                                        endIcon={<ArrowForward />}
                                        sx={{
                                            color: "#880D2E",
                                            fontWeight: 700,
                                            px: 0,
                                            "&:hover": {
                                                bgcolor: "transparent",
                                                color: "#0B2D53",
                                            },
                                        }}
                                    >
                                        Explore Programme
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
