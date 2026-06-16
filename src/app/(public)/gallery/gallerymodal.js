"use client"

import {
    Box, ButtonBase, Dialog, DialogContent, DialogTitle, Typography
} from "@mui/material";

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import "react-image-gallery/styles/image-gallery.css";
import ImageGallery from "react-image-gallery";




const GalleryModal = (props) => {

    return (

        <Dialog
            open={props.open}
            onClose={props.handleClose}
            scroll='paper' maxWidth='lg' fullWidth
        >
            <DialogTitle
                component={Box}
                sx={{
                    bgcolor: '#091e44', px: 2, py: 0.5,
                    display: 'flex', justifyContent: 'space-between',
                }}>
                <Typography variant="h6" component="h2" sx={{ color: '#fff' }}>
                    Gallery
                </Typography>
                <ButtonBase onClick={props.handleClose}>
                    <CloseOutlinedIcon sx={{ color: "#fff" }} />
                </ButtonBase>
            </DialogTitle>

            <DialogContent>

                <Box sx={{ pt: 2 }}>
                    <ImageGallery

                        showThumbnails
                        items={props.images}
                    />
                </Box>


            </DialogContent>
        </Dialog>
    );
}

export default GalleryModal;