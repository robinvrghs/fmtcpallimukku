'use client'

import {
    AppBar, Box, Container, Toolbar, useScrollTrigger
} from "@mui/material";

import React from "react";
import PropTypes from 'prop-types';

import Link from "next/link";


import Navbar from "./navmenu";
import DrawerMenu from "./drawer";



function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return children
        ? React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        })
        : null;
}

ElevationScroll.PropTypes = {
    children: PropTypes.element,
};


export default function Appbar(props) {

    return (

        <ElevationScroll {...props}>

            <AppBar sx={{ background: '#ffffff', zIndex: 999 }}>
                <Toolbar>
                    <Container
                        maxWidth='xl'
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between', alignItems: 'center'
                        }}>

                        <Box component={Link} href={'/'} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Box
                                component='img' src="/images/logo.jpg" alt='FMTC-Pallimukku'
                                sx={{ width: { xs: '100%', sm: 'auto' }, maxHeight: '100px', verticalAlign: 'bottom', py: 1 }}
                            />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Navbar />
                            <DrawerMenu />
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
        </ElevationScroll>


    );
}