"use client"

import Appbar from "@/app/components/appbar";

import {
    Box, Container, Grid, Tab, Tabs, Toolbar, Typography
} from "@mui/material";

import SubMenu from "@/app/components/subMenu";
import SubHeader from "@/app/components/subHeader";
import ContactUs from "./contactus";

export default function Contact({ children }) {

    return (
        <Box>

            <Appbar />
            <Toolbar />

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
