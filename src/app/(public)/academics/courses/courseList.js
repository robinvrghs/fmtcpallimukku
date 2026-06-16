import {
    Card, CardActionArea, CardContent, CardMedia, Grid, Typography
} from "@mui/material";
import Link from "next/link";

const courses = [
    {
        id: 'b_ed',
        name: 'Bachelor of Education',
        description: 'The B.Ed program is designed to prepare aspiring teachers for a successful career in education.',
    },
    {
        id: 'm_ed',
        name: 'Master of Education',
        description: 'The M.Ed program aimed at deepening the knowledge and skills of educators, administrators, and researchers.'
    },
    {
        id: 'd_el_ed',
        name: 'Diploma in Elementary Education',
        description: 'The D.El.Ed program designed to prepare dedicated and skilled teachers for the elementary level (classes I to VIII).'
    }
]

export default function CourseList() {

    return (

        <Grid container spacing={5} sx={{ pt: 5 }} justifyContent='center'>
            {courses.map((bt) => (
                <Grid size={{ xs: 12, md: 4 }} key={bt.id}>
                    <Link href={`/academics/courses/${bt.id}`}>
                        <Card
                            sx={{
                                height: '100%',
                                '&:hover': {
                                    backgroundColor: '#E74C3C',
                                    color: '#ffffff',
                                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                },
                                '&:hover .MuiTypography-root': {
                                    color: '#ffffff',
                                }
                            }}
                            data-aos="fade-up">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={`../images/${bt.id}.jpg`}
                                    alt={bt.name}
                                />
                                <CardContent>
                                    <Typography variant="h5" sx={{ pt: 2, textAlign: 'left' }}>
                                        {bt.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ pb: 2, color: 'text.secondary', textAlign: 'justify' }}>
                                        {bt.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>

                </Grid>
            ))}
        </Grid>
    )
}