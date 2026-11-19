
import { Box, Container, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import Link from "next/link";

const SubHeader = ({
    title,
    subtitle,
    image = "/images/hero/slide1.webp",
    breadcrumb = "Home",
}) => {
    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: `
                    linear-gradient(
                        90deg,
                        rgba(5, 25, 48, 0.92),
                        rgba(5, 25, 48, 0.45)
                    ),
                    url("${image}")
                `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: { xs: 260, md: 350 },
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            <Container maxWidth="xl">
                <Box sx={{ maxWidth: 750 }}>

                    <Breadcrumbs
                        separator="/"
                        sx={{
                            mb: 2,
                            color: "rgba(255,255,255,0.7)",
                            "& a": {
                                color: "rgba(255,255,255,0.75)",
                            },
                        }}
                    >
                        <MuiLink
                            component={Link}
                            href="/"
                            underline="hover"
                        >
                            {breadcrumb}
                        </MuiLink>

                        <Typography color="#E5BD55" variant="body2">
                            {title}
                        </Typography>
                    </Breadcrumbs>

                    <Typography
                        variant="h1"
                        data-aos="fade-up"
                        sx={{
                            color: "#fff",
                            fontFamily: "Playfair Display",
                            fontWeight: 700,
                            fontSize: {
                                xs: "2.3rem",
                                md: "3.5rem",
                            },
                            mb: 2,
                        }}
                    >
                        {title}
                    </Typography>

                    <Box
                        sx={{
                            width: 65,
                            height: 4,
                            bgcolor: "#E5BD55",
                            mb: 2,
                        }}
                    />

                    {subtitle && (
                        <Typography
                            sx={{
                                color: "rgba(255,255,255,0.9)",
                                lineHeight: 1.8,
                                fontSize: {
                                    xs: "0.95rem",
                                    md: "1.1rem",
                                },
                            }}
                        >
                            {subtitle}
                        </Typography>
                    )}

                </Box>
            </Container>
        </Box>
    );
};

export default SubHeader;
