'use client'

import { Avatar, Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
    return (
        <Box sx={{
            backgroundColor: '#1a1a1a',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>

            <Container sx={{ py: 10 }}>

                <Grid container spacing={5}>
                    <Grid size={{ xs: 12, md: 3 }}>

                        <Box component='img' src="/images/logo-footer.jpg"
                            sx={{
                                height: '100px',
                                width: 'auto',
                            }}
                        />
                        <Typography variant='h6' sx={{ color: '#ffffff', mb: 3 }}>
                            Fathima Memorial Training College
                        </Typography>
                        {/* <Typography variant='subtitle1' sx={{ opacity: 0.6, mb: 2 }} color='text.white'>
            Sit amet consectetur adipisc elit sed do eiusmod temporse incididunt labore dolore
        </Typography> */}

                        <Stack direction='row' spacing={2}>
                            <Box component={Link} href='/' sx={{ textDecoration: 'none' }}>

                                <Avatar sx={{ bgcolor: '#E74C3C' }}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Avatar>

                            </Box>
                            <Box component={Link} href='/' sx={{ textDecoration: 'none' }}>

                                <Avatar sx={{ bgcolor: '#E74C3C' }}>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Avatar>

                            </Box>

                            <Box component={Link} href='/' sx={{ textDecoration: 'none' }}>

                                <Avatar sx={{ bgcolor: '#E74C3C' }}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Avatar>

                            </Box>
                        </Stack>

                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box>
                            <Typography variant='h5' color='#ffffff' sx={{ mb: 2 }}>
                                Useful Links
                            </Typography>
                            {/* <Box component={Link} href='http://www.dtekerala.gov.in/' sx={{ textDecoration: 'none' }}>
                                <Typography variant='body1' color='#ffffff'>
                                    DTE
                                </Typography>
                            </Box>
                            <Box component={Link} href='https://ktu.edu.in/' sx={{ textDecoration: 'none' }}>
                                <Typography variant='body1' color='#ffffff'>
                                    Kerala Technological University
                                </Typography>
                            </Box>
                            <Box component={Link} href='https://www.ugc.ac.in/' sx={{ textDecoration: 'none' }}>
                                <Typography variant='body1' color='#ffffff'>
                                    UGC
                                </Typography>
                            </Box>
                            <Box component={Link} href='https://dst.gov.in/' sx={{ textDecoration: 'none' }}>
                                <Typography variant='body1' color='#ffffff'>
                                    DST
                                </Typography>
                            </Box>
                            <Box component={Link} href='https://dbtindia.gov.in/' sx={{ textDecoration: 'none' }}>
                                <Typography variant='body1' color='#ffffff'>
                                    DBT
                                </Typography>
                            </Box>
                            <Box component={Link} href='https://epgp.inflibnet.ac.in/' sx={{ textDecoration: 'none' }}>
                                <Typography variant='body1' color='#ffffff'>
                                    Open Educational Sources
                                </Typography>
                            </Box> */}
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box>
                            <Typography variant='h5' color='#ffffff' sx={{ mb: 2 }}>
                                Quicklinks
                            </Typography>
                            {/* <Box component={Link} href='downloads/mandatory_disclosure.pdf' sx={{ textDecoration: 'none' }}>
                                <Typography variant='body1' color='#ffffff'>
                                    Mandatory Disclosure
                                </Typography>
                            </Box> */}
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box>
                            <Typography variant='h5' sx={{ color: '#ffffff', mb: 3 }}>
                                Get in Touch
                            </Typography>
                            <Stack direction='row' spacing={1} sx={{ mb: 2 }}>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <Box>
                                    <Typography variant='body1' color='#ffffff'>
                                        Pallimukku
                                    </Typography>
                                    <Typography variant='body1' color='#ffffff'>
                                        Kollam
                                    </Typography>
                                    <Typography variant='body1' color='#ffffff'>
                                        Kerala - 691010
                                    </Typography>
                                </Box>
                            </Stack>
                            <Stack direction='row' spacing={1} sx={{ mb: 2 }}>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <Box>
                                    <Typography variant='body1' color='#ffffff'>
                                        fathimabed@gmail.com
                                    </Typography>
                                </Box>
                            </Stack>
                            <Stack direction='row' spacing={1}>
                                <FontAwesomeIcon icon={faPhone} />
                                <Box>
                                    <Typography variant='body1' color='#ffffff'>
                                        0474-2727368
                                    </Typography>

                                </Box>
                            </Stack>

                        </Box>
                    </Grid>
                </Grid>

            </Container>


            <Divider sx={{ backgroundColor: '#fff', opacity: 0.2 }} />
            <Container maxWidth="lg" sx={{ py: 3 }}>
                <Grid container>
                    <Grid size={{ xs: 12, md: 4 }}></Grid>
                    <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
                        <Typography variant="body2" sx={{ color: '#fff' }}>
                            &copy;Copyright 2025. All Rights Reserved
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                        <Typography variant="body2" sx={{ color: '#fff' }}>
                            Terms & Condition | Privacy Policy
                        </Typography>
                    </Grid>
                </Grid>


            </Container>

        </Box >
    )
}