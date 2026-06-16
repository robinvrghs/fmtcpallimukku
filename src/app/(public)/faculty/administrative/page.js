"use client"

import {
    Avatar, Box, Card, CardContent, Divider, Grid, Typography
} from "@mui/material";


const bed = {
    level1: {
        members: [

        ],
    },
};

export default function Management() {

    return (

        <Box>
            <Box data-aos="fade-up">
                <Typography variant="h4">
                    Administrative Staff
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
