
"use client";

import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Typography,
    Paper,
} from "@mui/material";
import {
    LocationOnOutlined,
    PhoneOutlined,
    EmailOutlined,
    AccessTimeOutlined,
    ArrowForward,
    OpenInNew,
} from "@mui/icons-material";
import Link from "next/link";

const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Fathima+Memorial+Training+College+Pallimukku+Kollam";

export default function ContactSection() {
    return (
        <Box sx={{ py: { xs: 7, md: 11 }, bgcolor: "#FAF9F6" }}>
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 5, md: 8, alignItems: "center" }} >
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography
                            variant="overline"
                            sx={{ color: "#880D2E", letterSpacing: 3, fontWeight: 700 }}
                        >
                            GET IN TOUCH
                        </Typography>

                        <Typography
                            variant="h2"
                            sx={{
                                fontFamily: "Playfair Display",
                                color: "#0B2D53",
                                fontSize: { xs: "2.2rem", md: "3rem" },
                                mt: 1,
                                mb: 2,
                            }}
                        >
                            We'd Love to Hear From You
                        </Typography>

                        <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.9 }}>
                            Have questions about our programmes, admissions or campus?
                            Reach out to us. We would be happy to assist you.
                        </Typography>

                        <Stack spacing={3}>
                            <ContactItem
                                icon={<LocationOnOutlined />}
                                title="Our Location"
                                detail="Fathima Memorial Training College, Pallimukku, Kollam, Kerala, India"
                            />

                            <ContactItem
                                icon={<PhoneOutlined />}
                                title="Phone"
                                detail="0474-2727368"
                            />

                            <ContactItem
                                icon={<EmailOutlined />}
                                title="Email"
                                detail="fathimabed@gmail.com"
                            />

                            <ContactItem
                                icon={<AccessTimeOutlined />}
                                title="Office Hours"
                                detail="10.00 AM - 05.00 PM"
                            />
                        </Stack>

                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={2}
                            sx={{ mt: 4 }}
                        >
                            <Button
                                component={Link}
                                href="/contact"
                                variant="contained"
                                endIcon={<ArrowForward />}
                                sx={{
                                    bgcolor: "#880D2E",
                                    px: 3,
                                    py: 1.5,
                                    "&:hover": { bgcolor: "#6E0925" },
                                }}
                            >
                                Send an Enquiry
                            </Button>

                            <Button
                                component="a"
                                href={mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outlined"
                                endIcon={<OpenInNew />}
                                sx={{ borderColor: "#0B2D53", color: "#0B2D53" }}
                            >
                                Get Directions
                            </Button>
                        </Stack>
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 7 }}
                        sx={{ display: "flex", minHeight: { xs: 350, md: 600 } }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                width: "100%",
                                minHeight: { xs: 350, md: 600 },
                                height: "100%",
                                overflow: "hidden",
                                borderRadius: 0,
                                border: "1px solid #E8E5E0",
                                bgcolor: "#fff",
                            }}
                        >
                            <Box
                                component="iframe"
                                title="Fathima Memorial Training College location"
                                src="https://maps.google.com/maps?q=Fathima%20Memorial%20Training%20College%20Pallimukku%20Kollam&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                sx={{
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    minHeight: { xs: 350, md: 600 },
                                    border: 0,
                                }}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

function ContactItem({ icon, title, detail }) {
    return (
        <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
            <Box
                sx={{
                    width: 46,
                    height: 46,
                    flexShrink: 0,
                    borderRadius: 2,
                    bgcolor: "rgba(11,45,83,0.07)",
                    color: "#0B2D53",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                {icon}
            </Box>

            <Box>
                <Typography fontWeight={700} color="#0B2D53">
                    {title}
                </Typography>
                <Typography color="text.secondary" variant="body2" sx={{ mt: 0.5 }}>
                    {detail}
                </Typography>
            </Box>
        </Stack>
    );
}
