"use client"

import {
    Avatar, Box, Card, CardContent, Divider, Grid, Typography
} from "@mui/material";


const bed = {
    level1: {
        members: [
            {
                name: "Dr. Sini K S",
                designation: "Asst. Professor in General Education",
                image: "sini.jpg",
            },
            {
                name: "Ms. Jayakumari B S",
                designation: "Asst. Professor in Malayalam",
                image: "jayakumari.jpg",
            },
            {
                name: "Ms. Promod S",
                designation: "Asst. Professor in Physical Education",
                image: "promod.jpg",
            },
            {
                name: "Mr. Sadikk S",
                designation: "Asst. Professor in Physical Science",
                image: "sadikk.jpg",
            },
            {
                name: "Ms. Sangeetha R",
                designation: "Asst. Professor in General Education",
                image: "sangeetha.jpg",
            },
            {
                name: "Ms. Ambili R",
                designation: "Asst. Professor in English",
                image: "ambili_r.jpg",
            },
            {
                name: "Ms. Parvathy V Prasad",
                designation: "Asst. Professor in General Education",
                image: "parvathy.jpg",
            },
            {
                name: "Ms. Shameema S L",
                designation: "Asst. Professor in General Education",
                image: "shameema.jpg",
            },
            {
                name: "Dr. Ambili M",
                designation: "Asst. Professor in Natural Science",
                image: "ambili_m.jpg",
            },
            {
                name: "Ms. Thaslima S",
                designation: "Asst. Professor in Social Science",
                image: "thaslima.jpg",
            },
            {
                name: "Ms. Rumaisa Beevi",
                designation: "Asst. Professor in Natural Science",
                image: "rumaisa.jpg",
            },
            {
                name: "Dr. Divya R Chandran",
                designation: "Asst. Professor in Performing Arts",
                image: "divya.jpg",
            },
            {
                name: "Dr. Aria Mol S",
                designation: "Asst. Professor in Physical Science",
                image: "aria.jpg",
            },
            {
                name: "Ms. Remya Sajeev",
                designation: "Asst. Professor in Mathematics",
                image: "remya.jpg",
            },
            {
                name: "Mr. Aneesh V",
                designation: "Asst. Professor in Visual Arts",
                image: "aneesh.jpg",
            },
        ],
    },
};

export default function Management() {

    return (

        <Box>
            <Box data-aos="fade-up">
                <Typography variant="h4">
                    Faculty - B.Ed
                </Typography>
                <Divider sx={{ mt: -2 }} />
            </Box>

 
            <Box>
                {Object.values(bed).map((level, index) => (
                    <Box key={index} my={6} data-aos="fade-up">
                        <Grid container spacing={3} justifyContent='center'>
                            {level.members.map((person) => (
                                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={person.name}>
                                    <Card
                                        sx={{
                                            boxShadow: 0,
                                            textAlign: "center",
                                            borderRadius: 4,
                                            transition: "0.3s",
                                            "&:hover": {
                                                transform: "translateY(-4px)",
                                            },
                                        }}
                                    >
                                        <CardContent>
                                            <Avatar
                                                src={`/images/staff/${person.image}`}
                                                alt={person.name}
                                                sx={{
                                                    width: 150,
                                                    height: 150,
                                                    mx: "auto",
                                                    mb: 2,
                                                }}
                                            />
                                            <Typography fontWeight={600}>
                                                {person.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                {person.designation}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}
            </Box>


        </Box >


    );
}
