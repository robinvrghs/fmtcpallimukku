const { Box, Typography } = require("@mui/material")

const SubHeader = ({ title }) => {
    return (
        <Box
            sx={{
                background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/hero/slide1.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", backgroundPosition: 'center, center',
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
                    {title}
                </Typography>

            </Box>



        </Box>
    )
}

export default SubHeader;