"use client"

import {
    Avatar, Box, Card, CardContent, Divider, Grid, Typography
} from "@mui/material";

const management = {
    level1: {
        members: [
            {
                name: "Noushad Younus",
                designation: "Chairman",
                image: "noushad.jpg",
            },
            {
                name: "Shajahan Younus",
                designation: "Secretary",
                image: "shajahan.jpg",
            },
        ],
    },
    level2: {
        members: [
            {
                name: "Adv. Anzar Younus",
                designation: "Treasurer",
                image: "anzar.jpg",
            },
            {
                name: "Hashim Younus",
                designation: "Vice Chairman",
                image: "hashim.jpg",
            },
        ],
    },
    level3: {
        members: [
            {
                name: "Y Noorjahan Younus",
                designation: "Member",
                image: "noorjahan.jpg",
            },
            {
                name: "Y Mumthaz Sharaf",
                designation: "Member",
                image: "mumthaz.jpg",
            },
            {
                name: "Y Raziya Nesmal",
                designation: "Member",
                image: "raziya.jpg",
            },
        ],
    },
    level4: {
        members: [

            {
                name: "Zayyan Mohammed",
                designation: "Executive Director",
                image: "zayyan.jpg",
            },
        ],
    },
};

export default function Management() {

    return (

        <Box>

            <Box data-aos="fade-up">
                <Typography variant="h4">
                    The College Management
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'justify',
                        mb: 5, pt: 2
                    }}
                >
                    The Trust was established on 26-10-1991 with Reg.No. 292 in accordance with Section 2 of the Charitable Societies Act. The Head Quarters of the Trust is at Pallimukku, Kollam-10.
                </Typography>
            </Box>

            {Object.values(management).map((level, index) => (
                <Box key={index} mb={6} data-aos="fade-up">
                    {/* People Grid */}
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
                                            src={`/images/management/${person.image}`}
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


        </Box >


    );
}
