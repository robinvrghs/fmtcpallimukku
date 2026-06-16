"use client"

import * as React from 'react';

import {
    Box, Container, Grid, Toolbar, Typography, ButtonBase
} from "@mui/material";
import { styled } from '@mui/material/styles';

import Appbar from "@/app/components/appbar";
import GalleryModal from "./gallerymodal";


const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function Home() {

    const [galleryData, setGalleryData] = React.useState([]);


    const fetchCookie = async () => {
        await fetch('https://fmtcpallimukku.ac.in/api/gallery_get_data_sorted.php')
            .then((res) => res.json())
            .then((data) => {
                const groupedData = Object.groupBy(data, cat => cat.year);
                setGalleryData(groupedData)
            })
    }

    React.useEffect(() => {
        fetchCookie();
    }, [])

    const [selectedGallery, setSelectedGallery] = React.useState([]);

    const openImageGallery = (values) => {
        console.log(values.files)
        const imageArray = [];
        JSON.parse(values.files).forEach((item, index) => {
            imageArray.push({
                original: '/images/gallery/' + values.year + '/' + values.department_path + '/' + values.event_path + '/' + item,
                thumbnail: '/images/gallery/' + values.year + '/' + values.department_path + '/' + values.event_path + '/' + item,
            })
        });
        setSelectedGallery(imageArray)
        setOpenGallery(true)
    }


    const [openGallery, setOpenGallery] = React.useState(false)

    const handleGalleryClose = () => {
        setOpenGallery(false);
    };




    return (

        <Box sx={{ background: '#fff' }}>

            <Appbar />
            <Toolbar />

            <Box
                sx={{
                    background: "radial-gradient(transparent, black), url(/images/hero/slide1.webp)",
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
                        Gallery
                    </Typography>

                </Box>



            </Box>


            <Box sx={{ background: '#FFFFFF' }}>

                <Container sx={{ py: 10 }}>


                    {galleryData && Object.keys(galleryData).map((galleryItem) => (
                        <Grid container spacing={5} sx={{ mb: 5 }} key={galleryItem}>
                            <Grid size={12}>
                                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                                    {galleryItem === '2020' ? 'Legacy Collection' : galleryItem}
                                </Typography>
                            </Grid>
                            {galleryItem.length > 0 && Object.entries(galleryData[galleryItem]).map(([key, value]) => (

                                <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }} key={key}>
                                    <ImageButton
                                        focusRipple
                                        style={{
                                            width: '100%'
                                        }}
                                        onClick={() => openImageGallery(value)}
                                    >
                                        <ImageSrc style={{ backgroundImage: `url(/images/gallery/${value.year}/${value.department_path}/${value.event_path}/${value.files && JSON.parse(value.files).at(0)})` }} />
                                        <ImageBackdrop className="MuiImageBackdrop-root" />
                                        <Image>
                                            <Typography
                                                component="span"
                                                variant="h6"
                                                color="inherit"
                                                sx={(theme) => ({
                                                    position: 'relative',
                                                    p: 4,
                                                    pt: 2,
                                                    pb: `calc(${theme.spacing(1)} + 6px)`,
                                                })}
                                            >
                                                {value.event}
                                                <ImageMarked className="MuiImageMarked-root" />
                                            </Typography>
                                        </Image>
                                    </ImageButton>
                                </Grid>
                            ))}
                        </Grid>
                    ))}


                </Container>
            </Box>

            {openGallery &&
                <GalleryModal
                    images={selectedGallery}
                    open={openGallery}
                    handleClose={handleGalleryClose}
                />
            }







        </Box >


    );
}
