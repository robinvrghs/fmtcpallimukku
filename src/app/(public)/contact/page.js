"use client"


import {
    Box, Container, Grid, Toolbar
} from "@mui/material";

import SubHeader from "@/app/components/subHeader";
import ContactUs from "./contactus";

export default function Contact({ children }) {

    return (
        <Box>

            <SubHeader title="Contact" />

            <Container>
                <Box>
                    <Grid container spacing={5}>
                        <Grid size={{ xs: 12 }}>
                            <ContactUs />
                        </Grid>
                    </Grid>
                </Box>
            </Container>


        </Box>


    );
}
