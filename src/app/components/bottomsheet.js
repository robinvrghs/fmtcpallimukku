import { useState } from "react";
import Link from "next/link";

import { Unstable_TrapFocus, Fade, Paper, Stack, Box, Typography, Button } from "@mui/material";

const BottomSheet = () => {

    const [bannerOpen, setBannerOpen] = useState(true);

    const closeBanner = () => {
        setBannerOpen(false);
    };

    return (
        <Unstable_TrapFocus open disableAutoFocus disableEnforceFocus>
            <Fade appear={false} in={bannerOpen}>
                <Paper
                    role="dialog"
                    aria-modal="false"
                    aria-label="Cookie banner"
                    square
                    variant="outlined"
                    tabIndex={-1}
                    sx={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        m: 0,
                        p: 2,
                        borderWidth: 0,
                        borderTopWidth: 1,
                        zIndex: 9999
                    }}
                >
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        sx={{ justifyContent: 'space-between', gap: 2 }}
                    >
                        <Box
                            sx={{ flexShrink: 1, alignSelf: { xs: 'flex-start', sm: 'center' } }}
                        >
                            <Typography sx={{ fontWeight: 'bold' }}>
                                Apply Now
                            </Typography>
                            <Typography variant="body2">
                                Submit your application for admission!
                            </Typography>
                        </Box>
                        <Stack
                            direction={{
                                xs: 'row-reverse',
                                sm: 'row',
                            }}
                            sx={{
                                gap: 2,
                                flexShrink: 0,
                                alignSelf: { xs: 'flex-end', sm: 'center' },
                            }}
                        >
                            <Button size="large" component={Link} href="/apply-now" variant="contained">
                                Apply Now
                            </Button>
                            <Button size="large" onClick={closeBanner}>
                                Cancel
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Fade>
        </Unstable_TrapFocus>
    )
}

export default BottomSheet;