
import Image from "next/image";

import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function FounderMessage() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 7, md: 10 },
                bgcolor: "#FAF9F6",
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        bgcolor: "#FFFFFF",
                        borderRadius: 3,
                        overflow: "hidden",
                        boxShadow: "0 10px 40px rgba(11,45,83,0.07)",
                    }}
                >
                    <Grid container alignItems="stretch">
                        {/* Founder portrait */}
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box
                                sx={{
                                    position: "relative",
                                    minHeight: { xs: 360, sm: 430, md: 480 },
                                    height: "100%",
                                    bgcolor: "#E9E5DC",
                                }}
                            >
                                <Image
                                    src="/images/founder.webp"
                                    alt="Dr. A. Younus Kunju, Founder Chairman"
                                    fill
                                    sizes="(max-width: 900px) 100vw, 42vw"
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "center top",
                                    }}
                                />
                            </Box>
                        </Grid>

                        {/* Message */}
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Stack
                                justifyContent="center"
                                sx={{
                                    height: "100%",
                                    p: { xs: 3, sm: 4, md: 6, lg: 7 },
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#880D2E",
                                        fontSize: 12,
                                        fontWeight: 700,
                                        letterSpacing: 2,
                                        mb: 2,
                                    }}
                                >
                                    REMEMBERING OUR FOUNDER
                                </Typography>

                                <FormatQuoteIcon
                                    sx={{
                                        color: "#D4AF37",
                                        fontSize: 52,
                                        mb: 1,
                                    }}
                                />

                                <Typography
                                    component="blockquote"
                                    sx={{
                                        m: 0,
                                        color: "#0B2D53",
                                        fontFamily: "var(--font-playfair), Georgia, serif",
                                        fontSize: { xs: 25, sm: 29, md: 34 },
                                        fontWeight: 600,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    Magic doesn't make a dream come true; it requires passion,
                                    determination, hard work and sacrifices.
                                </Typography>

                                <Box
                                    sx={{
                                        width: 65,
                                        height: 3,
                                        bgcolor: "#D4AF37",
                                        my: 3,
                                    }}
                                />

                                <Typography
                                    sx={{
                                        color: "#0B2D53",
                                        fontFamily: "var(--font-playfair), Georgia, serif",
                                        fontSize: 25,
                                        fontWeight: 700,
                                    }}
                                >
                                    Dr. A. Younus Kunju
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#880D2E",
                                        fontSize: 13,
                                        fontWeight: 600,
                                        mt: 0.5,
                                    }}
                                >
                                    Ex-MLA | Founder Chairman
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#64748B",
                                        fontSize: 12,
                                        mt: 2,
                                        lineHeight: 1.8,
                                    }}
                                >
                                    His vision and dedication remain an inspiration to the
                                    institution and its community.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
