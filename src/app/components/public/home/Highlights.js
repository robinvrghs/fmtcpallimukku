import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import {
    AccountBalance,
    VerifiedOutlined,
    SchoolOutlined,
    AutoStoriesOutlined,
} from "@mui/icons-material";

const highlights = [
    {
        icon: AccountBalance,
        title: "University Affiliation",
        description: "Affiliated to the University of Kerala",
        color: "#0B2D53",
    },
    {
        icon: VerifiedOutlined,
        title: "NCTE Recognition",
        description: "Recognised by the National Council for Teacher Education",
        color: "#880D2E",
    },
    {
        icon: SchoolOutlined,
        title: "Teacher Education",
        description: "Focused on preparing competent future educators",
        color: "#B18A28",
    },
    {
        icon: AutoStoriesOutlined,
        title: "Academic Excellence",
        description: "Committed to knowledge, values and holistic learning",
        color: "#0B2D53",
    },
];

export default function Highlights() {
    return (
        <Box
            component="section"
            sx={{
                bgcolor: "#FAF9F6",
                py: { xs: 5, md: 6 },
                borderBottom: "1px solid #EEEAE3",
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={0}>
                    {highlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Grid
                                key={item.title}
                                size={{ xs: 12, sm: 6, lg: 3 }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    sx={{
                                        alignItems: "center",
                                        px: {
                                            xs: 1,
                                            sm: 2.5,
                                            md: 3,
                                        },
                                        py: {
                                            xs: 2,
                                            lg: 1,
                                        },
                                        minHeight: { lg: 100 },
                                        borderRight: {
                                            xs: "none",
                                            lg:
                                                index !== 3
                                                    ? "1px solid #DDD8CF"
                                                    : "none",
                                        },
                                        transition: "transform 0.25s ease",
                                        "&:hover": {
                                            transform: {
                                                lg: "translateY(-4px)",
                                            },
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 54,
                                            height: 54,
                                            minWidth: 54,
                                            borderRadius: 2,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            bgcolor: `${item.color}12`,
                                        }}
                                    >
                                        <Icon
                                            sx={{
                                                fontSize: 29,
                                                color: item.color,
                                            }}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography
                                            sx={{
                                                color: "#0B2D53",
                                                fontWeight: 700,
                                                fontSize: 14,
                                                mb: 0.5,
                                            }}
                                        >
                                            {item.title}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#64748B",
                                                fontSize: 12,
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
}
