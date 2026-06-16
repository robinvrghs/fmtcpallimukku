import { faHandHoldingHand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";



const features = [
    {
        id: 1,
        name: 'Recognized & Accredited Programs',
        description: 'Approved by NCTE and affiliated with [University/SCERT], ensuring quality and credibility in teacher education',
        icon: 'recognition'
    },
    {
        id: 2,
        name: 'Experienced & Dedicated Faculty',
        description: 'A team of qualified educators committed to academic excellence and holistic student development',
        icon: 'faculty'
    },
    {
        id: 3,
        name: 'Modern Teaching & Learning Facilities',
        description: 'Well-equipped classrooms, smart boards, computer labs, and a rich library to support innovative learning',
        icon: 'teaching'
    },
    {
        id: 5,
        name: 'Student-Centered Approach',
        description: 'Focused mentoring, personalized guidance, and a nurturing academic environment',
        icon: 'student'
    },
    {
        id: 7,
        name: 'Digital Literacy & ICT Training',
        description: 'Integration of technology in teaching, ensuring students are digitally competent educators',
        icon: 'digital'
    },
    {
        id: 8,
        name: 'Cultural & Co-curricular Activities',
        description: 'Opportunities for students to develop leadership, creativity, and interpersonal skills beyond the classroom',
        icon: 'cultural'
    }

]

export default function Features() {

    const colleageFeatures = features.map(feature =>
        <Grid size={{ xs: 12, md: 4 }} key={feature.id}>
            {/* <Link href={'../department?department=' + feature.id}> */}
            <Link href='/'>
                <Paper
                    elevation={0}
                    sx={{
                        borderRadius: '20px', boxShadow: '4px 14px 28px rgba(0, 0, 0, 0.1)', display: 'flex',
                        height: '100%', position: 'relative', zIndex: '998', overflow: 'hidden',
                        justifyContent: 'center', alignItems: 'center', px: 1, py: 5
                    }}
                    data-aos="fade-up"
                >
                    <Box sx={{ textAlign: 'center' }}>
                        <Box component='img'
                            src={`/icons/${feature.icon}.png`}
                            height='50px'
                        />
                        <Typography
                            variant="h6"
                            sx={{ py: 2 }}
                        >
                            {feature.name}
                        </Typography>

                        <Typography variant="body2" sx={{ px: 2 }}>
                            {feature.description}
                        </Typography>

                    </Box>

                </Paper>
            </Link>

        </Grid>

    )



    return (
        <Box sx={{ backgroundColor: '#ffffff' }}>
            <Container sx={{ py: 15 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            color: "primary.main"
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faHandHoldingHand}
                            color="currentColor"
                            style={{
                                fontSize: "1em",
                                width: "1em",
                                height: "1em",
                            }}
                        />
                        FEATURES
                    </Typography>

                    <Typography
                        variant="h3"
                        data-aos="fade-up"
                    >
                        Why Choose FMTC?
                    </Typography>

                    <Grid container spacing={5} sx={{ pt: 5 }} justifyContent='center'>
                        {colleageFeatures}
                    </Grid>

                </Box>
            </Container>
        </Box>
    )
}