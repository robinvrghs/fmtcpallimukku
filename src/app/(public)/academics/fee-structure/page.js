"use client"

import {
    Box, Divider, Typography
} from "@mui/material";


export default function Home() {

    return (

        <Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    Fees(B.Ed)
                </Typography>
                <Divider sx={{ mt: -2 }} />
                <Typography
                    variant="body1"
                    sx={{
                        pt: 2,
                        textAlign: 'justify',
                    }}
                >
                    The fee structure is fixed by the government of Kerala and directed by the University of
                    Kerala.The present Tuition Fee structure prescribed by the government of Kerala is Rs.
                    45000/- per year for merit seats and Rs.60000/- for management seats. Apart from this,
                    the student has to pay college development fund of Rs.3000/- at the time of admission.
                </Typography>
            </Box>

            <Box data-aos="fade-up">
                <Typography variant="h4">
                    Fees(M.Ed)
                </Typography>
                <Divider sx={{ mt: -2 }} />
                <Typography
                    variant="body1"
                    sx={{
                        pt: 2,
                        textAlign: 'justify',
                    }}
                >
                    The fee structure is fixed by the government of Kerala and directed by the University of
                    Kerala.The present Tuition Fee structure prescribed by the government of Kerala is Rs.
                    40000/- per year for merit seat & management seats. Apart from this, the student has to
                    pay college development fund of Rs.10000/- per year at the time of admission.
                </Typography>
            </Box>

        </Box>

    );
}
