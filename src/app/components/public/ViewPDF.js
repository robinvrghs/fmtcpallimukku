import { Box, ButtonBase, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';


const ViewPDF = ({ open, onClose, pdfUrl, title }) => {

    return (

        <Dialog
            open={open}
            onClose={onClose}
            scroll='paper' maxWidth='lg' fullWidth
        >
            <DialogTitle
                component={Box}
                sx={{
                    bgcolor: '#091e44', px: 2, py: 0.5,
                    display: 'flex', justifyContent: 'space-between',
                }}>
                <Typography variant="h6" component="h2" sx={{ color: '#fff' }}>
                    {title}
                </Typography>
                <ButtonBase onClick={onClose}>
                    <FontAwesomeIcon icon={faCircleXmark} color="#fff" />
                </ButtonBase>
            </DialogTitle>

            <DialogContent sx={{ p: 0, height: '90vh' }}>

                <iframe
                    src={pdfUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                />


            </DialogContent>
        </Dialog>
    )
}

export default ViewPDF;