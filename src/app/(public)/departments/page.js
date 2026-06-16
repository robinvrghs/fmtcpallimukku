"use client"

import {
    Box, Toolbar, Typography
} from "@mui/material";

import Appbar from "@/app/components/appbar";
import Courses from "../academics/courses/page";


export default function Home() {

    return (
        <Box sx={{ background: '#fff' }}>

            <Appbar />
            <Toolbar />

            <Box
                sx={{
                    background: "radial-gradient(transparent, black), url(../images/main-bg.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover", backgroundPosition: 'center, bottom',
                    height: "350px",
                }}
            >

                <Box sx={{
                    height: '100%', display: 'flex',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Typography
                        variant="h3"
                        sx={{ color: '#ffffff' }}
                        data-aos="fade-up"
                    >
                        Departments
                    </Typography>

                </Box>



            </Box>



            <Courses />



        </Box>


    );
}
