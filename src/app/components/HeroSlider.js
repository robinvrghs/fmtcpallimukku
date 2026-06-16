'use client';

import { Box, Typography, Button, MobileStepper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const SLICE_COUNT = 6;

const slides = [
    {
        image: '/images/hero/slide1.webp',
        title: 'Welcome to',
        subtitle: 'FMTC Pallimukku',
    },
    {
        image: '/images/hero/slide2.webp',
        title: '',
        subtitle: '',
    },
    {
        image: '/images/hero/slide3.webp',
        title: 'Welcome to',
        subtitle: 'FMTC Pallimukku',
    },
    {
        image: '/images/hero/slide4.webp',
        title: '',
        subtitle: '',
    },
];

const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.9, duration: 0.6 },
    },
    exit: { opacity: 0, y: 20 },
};

export default function HeroSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                height: { xs: '75vh', md: 'calc(100vh - 100px)' },
                overflow: 'hidden',
            }}
        >
            {/* Sliced Images */}
            <AnimatePresence>
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 4 }}
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${slides[index].image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                    }}
                />
            </AnimatePresence>

            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(2,6,23,0.45)',
                    zIndex: 1,
                }}
            />

            {/* Text */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    px: { xs: 3, md: 10 },
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: '#ffffff', textShadow: '2px 2px 4px #000000'
                            }}
                        >
                            {slides[index].title}
                        </Typography>

                        <Typography variant="h1" sx={{ color: '#ffffff', textShadow: '2px 2px 4px #000000' }}>
                            {slides[index].subtitle}
                        </Typography>
                    </motion.div>
                </AnimatePresence>
            </Box>
        </Box>
    );
}