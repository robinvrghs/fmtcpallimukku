const { Box, Card, CardMedia, CardContent, Typography, Grid } = require("@mui/material")



const asFaculty = [
    {
        id: 'ASsebinu',
        name: 'Mr. Sebinu',
        designation: 'Tradesman',
        qualification: 'ITI',
    },
    {
        id: 'ASvijayan',
        name: 'Mr. Vijayan',
        designation: 'Tradesman',
        qualification: 'ITI',
    },
]
const ceFaculty = [
    {
        id: 'CEshajira',
        name: 'Ms. Shajira A',
        designation: 'Instructor',
        qualification: 'Diploma',
    },
    {
        id: 'CEsabitha',
        name: 'Ms. Sabitha S',
        designation: 'Instructor',
        qualification: 'Diploma',
    },
    {
        id: 'CEsajeela',
        name: 'Ms. Sajeela A',
        designation: 'Instructor',
        qualification: 'Diploma',
    },
    {
        id: 'CEirfan',
        name: 'Mr. Irfan S R',
        designation: 'Instructor',
        qualification: 'Diploma',
    },
]
const cseFaculty = [
    {
        id: 'CSEshyju',
        name: 'Mr. Shyju T Pillai',
        designation: 'System Analyst',
        qualification: 'Diploma, MCA',
    },
    {
        id: 'CSEvidhya',
        name: 'Ms. Vidhya',
        designation: 'Tradesman',
        qualification: 'ITI',
    },
    {
        id: 'CSEshijan',
        name: 'Mr. Shijan S',
        designation: 'Tradesman',
        qualification: 'ITI',
    },
    {
        id: 'CSEadarsh',
        name: 'Mr. Adarsh N Suresh',
        designation: 'Instructor',
        qualification: 'Diploma',
    },
]
const eceFaculty = [
    {
        id: 'ECEsanthosh',
        name: 'Mr. Santhosh Kumar T V',
        designation: 'Lab Instructor',
        qualification: '',
    },
    {
        id: 'ECEdeepa',
        name: 'Ms. Deepa S R',
        designation: 'Lab Instructor',
        qualification: '',
    },
]

const eeeFaculty = [
    {
        id: 'EEEvahid',
        name: 'Mr. Abdul Vahid S',
        designation: 'Trade Instructor',
        qualification: '',
    },
    {
        id: 'EEEshaji',
        name: 'Mr. Shaji A',
        designation: 'Instructor',
        qualification: '',
    },
    {
        id: 'EEEsajeev',
        name: 'Mr. Sajeev A',
        designation: 'Tradesman',
        qualification: '',
    },
    {
        id: 'EEEretheesh',
        name: 'Mr. Ratheesh Kumar G',
        designation: 'Tradesman',
        qualification: '',
    },
]

const meFaculty = [
    {
        id: 'MEabhilash',
        name: 'Mr. Abhilash George',
        designation: 'Instructor',
        qualification: 'Diploma',
    },
    {
        id: 'MEnaseer',
        name: 'Mr. Naseer S',
        designation: 'Instructor',
        qualification: 'ITI',
    },
    {
        id: 'MEsanthosh',
        name: 'Mr. Santhosh Kumar H',
        designation: 'Tradesman',
        qualification: 'ITI',
    },
    {
        id: 'MEnoushad',
        name: 'Mr. Noushad',
        designation: 'Tradesman',
        qualification: 'ITI',
    },
    {
        id: 'MEbiju',
        name: 'Mr. Biju G',
        designation: 'Tradesman',
        qualification: 'ITI',
    },
    {
        id: 'MEshihab',
        name: 'Mr. Shihabudeen',
        designation: 'Tradesman',
        qualification: 'ITI',
    },
    {
        id: 'MEarun',
        name: 'Mr. Arundas V S',
        designation: 'Tradesman',
        qualification: 'ITI',
    },
    {
        id: 'MEaneesh',
        name: 'Mr. Aneesh G Nair',
        designation: 'Tradesman',
        qualification: 'ITI',
    },

]

const NonTeaching = ({ department }) => {
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
                            Non Teaching Staff
                        </Typography>
                    </Grid>
                    {ceFaculty.map((fac) => (
                        <Grid size={{ xs: 12, sm: 4, lg: 3 }} key={fac.id}>
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

        default:
            return <Box>Loading</Box>
    }
}

export default NonTeaching;