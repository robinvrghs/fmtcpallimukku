"use client";

import { useState } from "react";

import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
    Divider,
    Link as MuiLink
} from "@mui/material";

import {
    LocationOnOutlined,
    PhoneOutlined,
    EmailOutlined,
    AccessTimeOutlined,
    OpenInNew
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import PageHero from "@/app/components/public/PageHero";

const contactDetails = [
    {
        icon: LocationOnOutlined,
        title: "Our Address",
        lines: [
            "Fathima Memorial Training College",
            "Pallimukku, Kollam",
            "Kerala - 691010, India"
        ]
    },
    {
        icon: PhoneOutlined,
        title: "Call Us",
        lines: ["0474-2727368"],
        href: "tel:04742727368"
    },
    {
        icon: EmailOutlined,
        title: "Email Us",
        lines: ["fathimabed@gmail.com"],
        href: "mailto:fathimabed@gmail.com"
    },
    {
        icon: AccessTimeOutlined,
        title: "Office Hours",
        lines: [
            "Please contact the college",
            "for office hours and availability"
        ]
    }
];

const mapUrl =
    "https://www.google.com/maps?q=Fathima+Memorial+Training+College,+Pallimukku,+Kollam,+Kerala+691010&output=embed";

const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Fathima+Memorial+Training+College+Pallimukku+Kollam";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        comments: ""
    });

    const [formMessage, setFormMessage] = useState("");

    const handleChange = (event) => {
        setForm((previous) => ({
            ...previous,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const subject = encodeURIComponent(
            `Website Enquiry - ${form.name}`
        );

        const body = encodeURIComponent(
            `Name: ${form.name}\n` +
            `Phone: ${form.phone}\n` +
            `Email: ${form.email}\n\n` +
            `Message:\n${form.comments}`
        );

        window.location.href =
            `mailto:fathimabed@gmail.com?subject=${subject}&body=${body}`;

        setFormMessage(
            "Your email application should open with your enquiry. Please send the email to complete your enquiry."
        );
    };

    return (
        <Box sx={{ bgcolor: "#FFFFFF", overflow: "hidden" }}>

            {/* PAGE HERO */}
            <PageHero
                title="Contact Us"
                description="WE ARE HERE TO HELP"
                breadcrumb="Home / contact"
            />

            {/* CONTACT CONTENT */}
            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                <Grid container spacing={{ xs: 5, md: 8 }}>

                    {/* LEFT: CONTACT INFORMATION */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={{ maxWidth: 520 }}>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: "secondary.main",
                                    fontWeight: 700,
                                    letterSpacing: 2.5
                                }}
                            >
                                GET IN TOUCH
                            </Typography>

                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: "'Playfair Display', serif",
                                    color: "#0B2D53",
                                    fontWeight: 700,
                                    fontSize: {
                                        xs: "2rem",
                                        md: "2.7rem"
                                    },
                                    lineHeight: 1.2,
                                    mb: 2
                                }}
                            >
                                We Would Love to Hear from You
                            </Typography>

                            <Typography
                                color="text.secondary"
                                sx={{
                                    lineHeight: 1.9,
                                    mb: 4
                                }}
                            >
                                Have questions about our academic programmes,
                                admissions or college activities? Get in touch
                                with Fathima Memorial Training College.
                                We will be happy to assist you.
                            </Typography>

                            <Stack spacing={0}>
                                {contactDetails.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <Box key={item.title}>
                                            <Stack
                                                direction="row"
                                                spacing={2.5}
                                                sx={{ py: 2.5, alignItems: "flex-start" }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 54,
                                                        height: 54,
                                                        flexShrink: 0,
                                                        borderRadius: 1,
                                                        bgcolor: "#F8EDEF",
                                                        color: "#880D2E",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center"
                                                    }}
                                                >
                                                    <Icon sx={{ fontSize: 27 }} />
                                                </Box>

                                                <Box>
                                                    <Typography
                                                        fontWeight={700}
                                                        color="#0B2D53"
                                                        sx={{ mb: 0.5 }}
                                                    >
                                                        {item.title}
                                                    </Typography>

                                                    {item.lines.map((line) => (
                                                        <Typography
                                                            key={line}
                                                            variant="body2"
                                                            color="text.secondary"
                                                            sx={{
                                                                lineHeight: 1.8,
                                                                overflowWrap: "anywhere"
                                                            }}
                                                        >
                                                            {item.href ? (
                                                                <MuiLink
                                                                    href={item.href}
                                                                    underline="hover"
                                                                    color="inherit"
                                                                >
                                                                    {line}
                                                                </MuiLink>
                                                            ) : line}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            </Stack>

                                            {index !== contactDetails.length - 1 && (
                                                <Divider sx={{ borderColor: "#EEEEEE" }} />
                                            )}
                                        </Box>
                                    );
                                })}
                            </Stack>
                        </Box>
                    </Grid>

                    {/* RIGHT: CONTACT FORM */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 2.5, sm: 4, md: 5 },
                                borderRadius: 1,
                                border: "1px solid #ECE8E8",
                                bgcolor: "#FCFAFA",
                                boxShadow: "0 12px 40px rgba(11,45,83,0.06)"
                            }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: "secondary.main",
                                    fontWeight: 700,
                                    letterSpacing: 2
                                }}
                            >
                                SEND AN ENQUIRY
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: "'Playfair Display', serif",
                                    color: "#0B2D53",
                                    fontWeight: 700,
                                    mb: 1
                                }}
                            >
                                We Want To Hear From You
                            </Typography>

                            <Typography
                                color="text.secondary"
                                sx={{ mb: 3, lineHeight: 1.8 }}
                            >
                                Fill in the form below and tell us how we can help.
                            </Typography>

                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate={false}
                            >
                                <Grid container spacing={2.5}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            required
                                            label="Your Name"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            autoComplete="name"
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            required
                                            type="email"
                                            label="Email Address"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            autoComplete="email"
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            autoComplete="tel"
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            required
                                            multiline
                                            minRows={5}
                                            label="Your Message"
                                            name="comments"
                                            value={form.comments}
                                            onChange={handleChange}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12 }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="secondary"
                                            size="large"
                                            endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>

                                    {formMessage && (
                                        <Grid size={{ xs: 12 }}>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                role="status"
                                            >
                                                {formMessage}
                                            </Typography>
                                        </Grid>
                                    )}
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* MAP SECTION */}
            <Box sx={{ bgcolor: "#F8F7F4", py: { xs: 5, md: 7 } }}>
                <Container maxWidth="xl">
                    <Box sx={{ mb: 3 }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: "secondary.main",
                                fontWeight: 700,
                                letterSpacing: 2
                            }}
                        >
                            FIND OUR CAMPUS
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700,
                                color: "#0B2D53",
                                fontSize: { xs: "2rem", md: "2.5rem" }
                            }}
                        >
                            Visit Fathima Memorial Training College
                        </Typography>
                    </Box>

                    <Paper
                        elevation={0}
                        sx={{
                            overflow: "hidden",
                            borderRadius: 1,
                            border: "1px solid #E8E5DF"
                        }}
                    >
                        <Grid container>
                            <Grid size={{ xs: 12, md: 8 }}>
                                <Box
                                    sx={{
                                        height: { xs: 320, md: 440 },
                                        "& iframe": {
                                            width: "100%",
                                            height: "100%",
                                            border: 0,
                                            display: "block"
                                        }
                                    }}
                                >
                                    <iframe
                                        src={mapUrl}
                                        title="Fathima Memorial Training College location map"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        allowFullScreen
                                    />
                                </Box>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                                <Box
                                    sx={{
                                        height: "100%",
                                        minHeight: { md: 440 },
                                        bgcolor: "#0B2D53",
                                        color: "#FFFFFF",
                                        p: { xs: 3, md: 4 },
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center"
                                    }}
                                >
                                    <LocationOnOutlined
                                        sx={{
                                            color: "#E5BD55",
                                            fontSize: 42,
                                            mb: 2
                                        }}
                                    />

                                    <Typography
                                        variant="h5"
                                        fontWeight={700}
                                        sx={{
                                            fontFamily: "'Playfair Display', serif",
                                            mb: 2
                                        }}
                                    >
                                        Find Us on Map
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "rgba(255,255,255,0.8)",
                                            lineHeight: 1.9,
                                            mb: 3
                                        }}
                                    >
                                        Visit our campus at Pallimukku,
                                        Kollam, Kerala.
                                    </Typography>

                                    <Button
                                        component="a"
                                        href={directionsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="outlined"
                                        endIcon={<OpenInNew />}
                                        sx={{
                                            alignSelf: "flex-start",
                                            color: "#FFFFFF",
                                            borderColor: "rgba(255,255,255,0.6)",
                                            textTransform: "none",
                                            "&:hover": {
                                                borderColor: "#E5BD55",
                                                bgcolor: "rgba(255,255,255,0.08)"
                                            }
                                        }}
                                    >
                                        Get Directions
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>

        </Box>
    );
}
