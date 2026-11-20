
import { Box, Container, Typography } from "@mui/material";

export default function PageHero({
    title,
    description = "",
    image = "/images/hero/slide1.webp",
    breadcrumb = "",
    height = "default"
}) {
    return (
        <Box
            sx={{
                position: "relative",
                minHeight: height === "large"
                    ? { xs: 300, md: 420 }
                    : { xs: 220, md: 300 },
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                backgroundImage: image
                    ? `linear-gradient(90deg, rgba(5,25,48,.94), rgba(5,25,48,.45)), url("${image}")`
                    : "linear-gradient(120deg, #052039, #0B2D53)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                px: { xs: 3, md: 8 },
                py: 7,
                mb: 5
            }}
        >
            <Container maxWidth="xl">
                <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>

                    {breadcrumb && (
                        <Typography
                            sx={{
                                color: "rgba(255,255,255,.75)",
                                mb: 2,
                                fontSize: 14
                            }}
                        >
                            {breadcrumb}
                        </Typography>
                    )}

                    <Typography
                        variant="h1"
                        sx={{
                            color: "#fff",
                            fontFamily: "Playfair Display",
                            fontWeight: 700,
                            fontSize: {
                                xs: "2.3rem",
                                md: "3.8rem"
                            },
                            mb: 2
                        }}
                    >
                        {title}
                    </Typography>

                    <Box
                        sx={{
                            width: 65,
                            height: 4,
                            bgcolor: "#E5BD55",
                            mb: 2
                        }}
                    />

                    {description && (
                        <Typography
                            sx={{
                                color: "rgba(255,255,255,.9)",
                                maxWidth: 650,
                                lineHeight: 1.8
                            }}
                        >
                            {description}
                        </Typography>
                    )}

                </Box>
            </Container>
        </Box>
    );
}
