"use client"

import Appbar from "@/app/components/appbar";

import {
    Box, Container, Grid, Toolbar
} from "@mui/material";

import SubMenu from "@/app/components/subMenu";
import SubHeader from "@/app/components/subHeader";

export default function Academics({ children }) {

    return (
        <Box>

            <Appbar />
            <Toolbar />

            <SubHeader title="Academics" />

            <Container sx={{ py: 10 }}>
                <Box>
                    <Grid container spacing={5}>
                        <Grid size={{ xs: 12, md: 9 }}>
                            {children}
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <SubMenu title="Academics" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>


        </Box>


    );
}
