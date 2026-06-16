import { useEffect, useRef, useState } from 'react';
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const counters = [
    {
        id: 1,
        label: 'Books in Library',
        start: '5000',
        end: '10000',
        duration: 10000,
        icon: 'books'
    },
    {
        id: 2,
        label: 'Educational Journals',
        start: '0',
        end: '25',
        duration: 2000,
        icon: 'journals'
    },
    {
        id: 3,
        label: 'Sucess Students',
        start: '1000',
        end: '6000',
        duration: 6000,
        icon: 'students'
    },
    {
        id: 4,
        label: 'NCTE & NAAC AWARDS',
        start: '0',
        end: '5',
        duration: 2000,
        icon: 'awards'
    }
]

const Counter = ({ icon, value, label, duration, start }) => {

    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const [count, setCount] = useState(start);

    useEffect(() => {
        if (!inView) return;

        const startTime = performance.now();

        const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            setCount(Math.floor(progress * value));

            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [inView, value]);

    return (

        <Box ref={ref} sx={{ background: 'rgba(0,0,0,0.5)', p: 3, border: '1px solid #fff', borderRadius: 2 }}>
            <Stack direction='column' spacing={3}>
                <Stack direction='row' spacing={3}>
                    <Box
                        component='img'
                        src={`/icons/${icon}.png`}
                        width={50}
                        alt={count.icon}
                    />

                    <Typography
                        component={motion.span} variant="h3" sx={{ color: '#fff' }}
                    >
                        {count}
                    </Typography>
                </Stack>
                <Typography variant="subtitle2" sx={{ color: '#fff' }}>
                    {label}
                </Typography>
            </Stack>
        </Box>
    )
}

export default function StatsCounter() {
    return (

        <Box sx={{ py: 10, background: 'url(/images/books-bg.jpg)', backgroundSize: 'contain' }}>
            <Container>
                <Grid container spacing={5}>

                    {counters.map(count => (
                        <Grid size={{ xs: 12, md: 3 }} key={count.id}>
                            <Counter
                                icon={count.icon}
                                value={count.end}
                                label={count.label}
                                duration={count.duration}
                                start={count.start}
                            />
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </Box>
    )
}