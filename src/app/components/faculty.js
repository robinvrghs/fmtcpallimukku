import { Box, Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";



const asFaculty = [
    {
        id: 'ASsheela',
        name: 'Ms. Sheela',
        designation: 'Head & Professor',
        qualification: 'B.Sc., M.Sc.',
    },
    {
        id: 'ASpramod',
        name: 'Mr. Pramod S',
        designation: 'Head & Assistant Professor',
        qualification: 'Physical Education',
    },
    {
        id: 'AShashim',
        name: 'Dr. Hashimudeen A',
        designation: 'Professor',
        qualification: 'B.A., M.A., PhD',
    },
    {
        id: 'ASsaida',
        name: 'Ms. Saida S beegum',
        designation: 'Associate Professor',
        qualification: 'B.Sc., M.Sc.',
    },
    {
        id: 'ASsafeer',
        name: 'Mr. Safeer P A',
        designation: 'Assistant Professor',
        qualification: 'B.Sc., M.Sc.',
    },
    {
        id: 'ASthahira',
        name: 'Ms. Thahira',
        designation: 'Assistant Professor',
        qualification: 'B.Sc., M.Sc.',
    },
    {
        id: 'ASpreethi',
        name: 'Ms. Preethi Kumari',
        designation: 'Assistant Professor',
        qualification: 'B.Sc., M.Sc.',
    },
    {
        id: 'ASbabitha',
        name: 'Ms. Babitha G Babu',
        designation: 'Assistant Professor',
        qualification: 'B.Sc., M.Sc.',
    },
    {
        id: 'ASamina',
        name: 'Ms. Amina',
        designation: 'Assistant Professor',
        qualification: 'B.Sc., M.Sc',
    },
    {
        id: 'ASjitha',
        name: 'Ms. Jitha Sansankan',
        designation: 'Assistant Professor',
        qualification: 'B.A., M.A',
    },
    {
        id: 'ASpriyadha',
        name: 'Ms. Priyadha Raj PG',
        designation: 'Assistant Professor',
        qualification: 'B.Sc., M.Sc.',
    },
]
const ceFaculty = [
    {
        id: 'CEraji',
        name: 'Ms. Raji R',
        designation: 'Head & Associate Professor',
        qualification: 'B.Tech, M.Tech, PhD doing',
    },
    {
        id: 'CEanjali',
        name: 'Ms. Anjali Sudhakar',
        designation: 'Assistant Professor',
        qualification: 'B.E, M.Tech',
    },
    {
        id: 'CEanjitha',
        name: 'Ms.Anjitha A',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'CEmuneera',
        name: 'Ms. Muneera B',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'CEpreeja',
        name: 'Ms. Preeja Prameelan',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'CEsubina',
        name: 'Ms. Subina S',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'CEirfana',
        name: 'Ms. Irfana A',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.E.',
    },
    {
        id: 'CEanju',
        name: 'Ms. Anju George',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'CEarya',
        name: 'Ms. Arya Satyan',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'CEniranjini',
        name: 'Ms. Niranjini Shibu',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
]
const cseFaculty = [
    {
        id: 'CSEkanchana',
        name: 'Dr. Kanchana J',
        designation: 'Head & Professor',
        qualification: 'B.Tech, M.Tech, PhD',
    },
    {
        id: 'CSEkanchi',
        name: 'Ms. Kanchi K Sen',
        designation: 'Associate Professor',
        qualification: 'B.Tech, M.E, PhD doing',
    },
    {
        id: 'CSEabisha',
        name: 'Ms. Abisha A',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'CSEjisha',
        name: 'Ms. Jisha Raju',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'CSEsithara',
        name: 'Ms. Sithara Sasidharan',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'CSEanju',
        name: 'Ms. Anju O',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'CSEdhanya',
        name: 'Ms. Dhanya M',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'CSEnikhil',
        name: 'Mr. Nikhil Jayakumar',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'CSEsilpa',
        name: 'Ms. Silpa S Kumar',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'CSEsoorya',
        name: 'Ms. Soorya Surendran',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'CSEsumi',
        name: 'Ms. Sumi Rahim',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
]
const eceFaculty = [
    {
        id: 'ECErajeev',
        name: 'Mr. S K Rajeev',
        designation: 'Head & Associate Professor',
        qualification: 'B.Tech, M.E, PhD doing',
    },
    {
        id: 'ECEabhilash',
        name: 'Dr. Abhilash S Vasu',
        designation: 'Associate Professor',
        qualification: 'B.Tech, M.Tech, PhD',
    },
    {
        id: 'ECEnisha',
        name: 'Ms. Nisha A V',
        designation: 'Associate Professor',
        qualification: 'B.E, M.E, PhD doing',
    },
    {
        id: 'ECEanju',
        name: 'Ms. Anju Iqubal',
        designation: 'Associate Professor',
        qualification: 'B.Tech, M.Tech, PhD doing',
    },
    {
        id: 'ECEaneesh',
        name: 'Mr. Aneesh P Thankachan',
        designation: 'Associate Professor',
        qualification: 'B.Tech, M.E, PhD doing',
    },
    {
        id: 'ECEriyas',
        name: 'Mr. Riyas A N',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech, PhD doing',
    },
    {
        id: 'ECEdana',
        name: 'Ms. Dana S',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'ECEsarath',
        name: 'Mr. Sarath Gopal',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.E, PhD doing',
    },
    {
        id: 'ECEaswathi',
        name: 'Ms. Aswathi B',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
]

const eeeFaculty = [
    {
        id: 'EEEmaya',
        name: 'Ms. Maya P P',
        designation: 'Head & Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'EEEakhila',
        name: 'Ms. Akhila M Haneef',
        designation: 'Associate Professor',
        qualification: 'B.Tech, M.E.',
    },
    {
        id: 'EEEsoni',
        name: 'Ms. Soni S S',
        designation: 'Associate Professor',
        qualification: 'B.Tech, M.E.',
    },
    {
        id: 'EEEarun',
        name: 'Mr. Arunchand',
        designation: 'Associate Professor',
        qualification: 'B.Tech, M.E.',
    },
    {
        id: 'EEEdhanya',
        name: 'Ms. Dhanya V S',
        designation: 'Associate Professor',
        qualification: 'B.Tech, M.E.',
    },
    {
        id: 'EEEmini',
        name: 'Ms. Mini P M',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.E.',
    },
    {
        id: 'EEEhafsa',
        name: 'Ms. Hafsa S',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },

    {
        id: 'EEEsumitha',
        name: 'Ms. Sumitha Sundaran',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.E.',
    },
    {
        id: 'EEEunni',
        name: 'Mr. Unni M R',
        designation: 'Assistant Professor',
        qualification: 'B.E., M.E.',
    },
]

const meFaculty = [
    {
        id: 'MEshanir',
        name: 'Mr. Shanir S',
        designation: 'Head & Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'MEpethuraj',
        name: 'Dr. Pethuraj M',
        designation: 'Associate Professor',
        qualification: 'B.E, M.E, PhD',
    },
    {
        id: 'MEshihas',
        name: 'Mr. Shihas A K',
        designation: 'Associate Professor',
        qualification: 'B.Tech, M.E',
    },
    {
        id: 'MElekha',
        name: 'Ms. Lekha V',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'MEsohail',
        name: 'Mr. Sohail Khan',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'MEaromal',
        name: 'Mr. Aromal Sudharsanan',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'MEjamshak',
        name: 'Mr. Jamshak S H',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },
    {
        id: 'MEhari',
        name: 'Mr. Harikrishnan R',
        designation: 'Assistant Professor',
        qualification: 'B.Tech, M.Tech',
    },

]

const Faculty = ({ department }) => {
    switch (department) {
        case 'civil':
            return (
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: 'center', pb: 3
                            }}
                        >
                            Faculty
                        </Typography>
                    </Grid>
                    {ceFaculty.map((fac) => (
                        <Grid size={{ xs: 12, sm: 4, md: 3 }} key={fac.id}>
                            <Card sx={{ height: '100%' }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={`../images/faculty/${fac.id}.jpg`}
                                    title={fac.name}
                                />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {fac.name}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                                        {fac.designation}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {fac.qualification}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            );

        case 'cs':
            return (
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: 'center', pb: 3
                            }}
                        >
                            Faculty
                        </Typography>
                    </Grid>
                    {cseFaculty.map((fac) => (
                        <Grid size={{ xs: 1, md: 3 }} key={fac.id}>
                            <Card sx={{ height: '100%' }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={`../images/faculty/${fac.id}.jpg`}
                                    title={fac.name}
                                />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {fac.name}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                                        {fac.designation}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {fac.qualification}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            );

        case 'eee':
            return (
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: 'center', pb: 3
                            }}
                        >
                            Faculty
                        </Typography>
                    </Grid>
                    {eeeFaculty.map((fac) => (
                        <Grid size={{ xs: 1, md: 3 }} key={fac.id}>
                            <Card sx={{ height: '100%' }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={`../images/faculty/${fac.id}.jpg`}
                                    title={fac.name}
                                />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {fac.name}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                                        {fac.designation}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {fac.qualification}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            );

        case 'ec':
            return (
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: 'center', pb: 3
                            }}
                        >
                            Faculty
                        </Typography>
                    </Grid>
                    {eceFaculty.map((fac) => (
                        <Grid size={{ xs: 1, md: 3 }} key={fac.id}>
                            <Card sx={{ height: '100%' }}>
                                <CardMedia
                                    component='img'
                                    sx={{ height: { xs: 250, md: 140 }, objectFit: 'contain' }}
                                    image={`../images/faculty/${fac.id}.jpg`}
                                    title={fac.name}
                                />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {fac.name}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                                        {fac.designation}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {fac.qualification}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            );

        case 'mechanical':
            return (
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: 'center', pb: 3
                            }}
                        >
                            Faculty
                        </Typography>
                    </Grid>
                    {meFaculty.map((fac) => (
                        <Grid size={{ xs: 1, md: 3 }} key={fac.id}>
                            <Card sx={{ height: '100%' }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={`../images/faculty/${fac.id}.jpg`}
                                    title={fac.name}
                                />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {fac.name}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                                        {fac.designation}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {fac.qualification}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            );

        case 'applied':
            return (
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: 'center', pb: 3
                            }}
                        >
                            Faculty
                        </Typography>
                    </Grid>
                    {asFaculty.map((fac) => (
                        <Grid size={{ xs: 1, md: 3 }} key={fac.id}>
                            <Card sx={{ height: '100%' }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={`../images/faculty/${fac.id}.jpg`}
                                    title={fac.name}
                                />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {fac.name}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                                        {fac.designation}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {fac.qualification}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            );

        default:
            return <Box>Loading</Box>
    }
}

export default Faculty;