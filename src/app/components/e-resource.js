import { Box, Card, CardMedia, CardContent, Typography, Grid, Paper } from "@mui/material";
import Link from "next/link";



const resources = [
    {
        id: 'swayam',
        link: 'https://swayam.gov.in/',
    },
    {
        id: 'udemy',
        link: 'https://www.udemy.com/',
    },
    {
        id: 'udacity',
        link: 'https://in.udacity.com/',
    },
    {
        id: 'edx',
        link: 'https://www.edx.org/',
    },
    {
        id: 'coursera',
        link: 'https://www.coursera.org/',
    },
    {
        id: 'stanford',
        link: 'https://lagunita.stanford.edu/',
    },
]

const EResources = () => {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'center', pb: 3
                    }}
                >
                    E Resources
                </Typography>
            </Grid>
            {resources.map((resource) => (
                <Grid size={{ xs: 12, sm: 4 }} key={resource.id}>
                    <Link href={resource.link}>
                        <Paper>
                            <Box
                                component='img'
                                src={`../images/${resource.id}.png`}
                                alt={resource.id}
                                sx={{ width: '100%', p: 1 }}
                            >

                            </Box>
                        </Paper>

                    </Link>
                </Grid>
            ))}

        </Grid>
    )
}

export default EResources;