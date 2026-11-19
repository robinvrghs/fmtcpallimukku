"use client"
import Image from "next/image";
import Link from "next/link";

import {
    Box,
    Container,
    Divider,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";

import {
    Facebook,
    Instagram,
    YouTube,
    LocationOnOutlined,
    PhoneOutlined,
    EmailOutlined,
    ArrowForward,
} from "@mui/icons-material";

const quickLinks = [
    { label: "About Us", href: "/about/college-profile" },
    { label: "Programmes", href: "/academics/programmes-offered/" },
    { label: "Campus Life", href: "/campus-life" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
];

const academicLinks = [
    { label: "B.Ed Programme", href: "/programmes-offered" },
    { label: "M.Ed Programme", href: "/programmes-offered" },
    { label: "Academic Calendar", href: "/academics/academic-calendar" },
    { label: "IQAC", href: "iqac/objectives" },
    { label: "Orders", href: "/downloads/orders" },
];

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "#071F3A",
                color: "#FFFFFF",
                pt: { xs: 7, md: 9 },
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 5, md: 4 }}>
                    {/* College information */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Stack spacing={2.5}>
                            <Box
                                component={Link}
                                href="/"
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    width: "fit-content",
                                }}
                            >
                                <Image
                                    src="/images/logo-footer.png"
                                    alt="FMTC logo"
                                    width={65}
                                    height={65}
                                    style={{ objectFit: "contain" }}
                                />
                                <Box sx={{ ml: 1.5 }}>
                                    <Typography
                                        sx={{
                                            color: "#FFFFFF",
                                            fontWeight: 700,
                                            fontSize: 15,
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        FATHIMA MEMORIAL
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#E5BD55",
                                            fontWeight: 700,
                                            fontSize: 12,
                                            letterSpacing: 1,
                                        }}
                                    >
                                        TRAINING COLLEGE
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,0.65)",
                                    fontSize: 13,
                                    lineHeight: 2,
                                    maxWidth: 360,
                                }}
                            >
                                Dedicated to teacher education and the development of
                                responsible, knowledgeable and inspiring educators.
                            </Typography>

                            <Stack direction="row" spacing={1}>
                                <IconButton
                                    component="a"
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    sx={{ color: "#FFFFFF", bgcolor: "rgba(255,255,255,0.08)" }}
                                >
                                    <Facebook fontSize="small" />
                                </IconButton>

                                <IconButton
                                    component="a"
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    sx={{ color: "#FFFFFF", bgcolor: "rgba(255,255,255,0.08)" }}
                                >
                                    <Instagram fontSize="small" />
                                </IconButton>

                                <IconButton
                                    component="a"
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube"
                                    sx={{ color: "#FFFFFF", bgcolor: "rgba(255,255,255,0.08)" }}
                                >
                                    <YouTube fontSize="small" />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* Quick links */}
                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography
                            sx={{
                                color: "#E5BD55",
                                fontWeight: 700,
                                fontSize: 14,
                                mb: 2.5,
                            }}
                        >
                            Quick Links
                        </Typography>

                        <Stack spacing={1.5}>
                            {quickLinks.map((item) => (
                                <Box
                                    key={item.label}
                                    component={Link}
                                    href={item.href}
                                    sx={{
                                        color: "rgba(255,255,255,0.7)",
                                        fontSize: 12,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        transition: "color 0.2s",
                                        "&:hover": { color: "#E5BD55" },
                                    }}
                                >
                                    <ArrowForward sx={{ fontSize: 12 }} />
                                    {item.label}
                                </Box>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Academic links */}
                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography
                            sx={{
                                color: "#E5BD55",
                                fontWeight: 700,
                                fontSize: 14,
                                mb: 2.5,
                            }}
                        >
                            Academics
                        </Typography>

                        <Stack spacing={1.5}>
                            {academicLinks.map((item) => (
                                <Box
                                    key={item.label}
                                    component={Link}
                                    href={item.href}
                                    sx={{
                                        color: "rgba(255,255,255,0.7)",
                                        fontSize: 12,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        transition: "color 0.2s",
                                        "&:hover": { color: "#E5BD55" },
                                    }}
                                >
                                    <ArrowForward sx={{ fontSize: 12 }} />
                                    {item.label}
                                </Box>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Contact */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography
                            sx={{
                                color: "#E5BD55",
                                fontWeight: 700,
                                fontSize: 14,
                                mb: 2.5,
                            }}
                        >
                            Contact Information
                        </Typography>

                        <Stack spacing={2.5}>
                            <Stack direction="row" spacing={1.5}>
                                <LocationOnOutlined sx={{ color: "#E5BD55" }} />
                                <Typography
                                    sx={{
                                        color: "rgba(255,255,255,0.7)",
                                        fontSize: 12,
                                        lineHeight: 1.8,
                                    }}
                                >
                                    Pallimukku, Kollam, Kerala, India
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={1.5}>
                                <PhoneOutlined sx={{ color: "#E5BD55" }} />
                                <Typography
                                    sx={{
                                        color: "rgba(255,255,255,0.7)",
                                        fontSize: 12,
                                    }}
                                >
                                    0474-2727368
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={1.5}>
                                <EmailOutlined sx={{ color: "#E5BD55" }} />
                                <Typography
                                    sx={{
                                        color: "rgba(255,255,255,0.7)",
                                        fontSize: 12,
                                    }}
                                >
                                    fathimabed@gmail.com
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", my: 5 }} />

            <Container maxWidth='lg'>

                {/* Bottom footer */}
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", md: "center" }}
                    spacing={2}
                    sx={{ pb: 3 }}
                >
                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.55)",
                            fontSize: 11,
                        }}
                    >
                        © {new Date().getFullYear()} Fathima Memorial Training College.
                        All rights reserved.
                    </Typography>

                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.55)",
                            fontSize: 11,
                        }}
                    >
                        Designed with care for education.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}
