"use client"

import ViewPDF from "@/app/components/viewPDF";
import { faDownload, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Box, Button, Divider, Stack, Table, TableBody, TableCell, TableRow, Typography
} from "@mui/material";
import { useState } from "react";

const academic_calendar = [
    {
        title: "B.Ed Academic Calendar 2023-2024",
        link: "/docs/academic_calendar/college/b.ed/college_b.ed_academic_calendar_2023-2024.pdf"
    },
    {
        title: "M.Ed Academic Calendar 2023-2024",
        link: "/docs/academic_calendar/college/m.ed/college_m.ed_academic_calendar_2023-2024.pdf"
    },
]

const university_academic_calendar = [
    {
        title: "B.Ed Academic Calendar 2024-2026",
        link: "/docs/academic_calendar/university/b.ed/b.ed_academic_calendar_2024-2026.pdf"
    },
    {
        title: "B.Ed Academic Calendar 2025-2027",
        link: "/docs/academic_calendar/university/b.ed/b.ed_academic_calendar_2025-2027.pdf"
    },
    {
        title: "M.Ed Academic Calendar 2024-2026",
        link: "/docs/academic_calendar/university/m.ed/m.ed_academic_calendar_2024-2026.pdf"
    },
    {
        title: "M.Ed Academic Calendar 2025-2027",
        link: "/docs/academic_calendar/university/m.ed/m.ed_academic_calendar_2025-2027.pdf"
    }
]


export default function Home() {

    const [open, setOpen] = useState(false);
    const [pdfTitle, setPdfTitle] = useState('');
    const [pdfUrl, setPdfUrl] = useState('');

    const handleOpen = (url, title) => {
        setPdfUrl(url);
        setPdfTitle(title);
        setOpen(true);
    };

    return (

        <Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    College Academic Calendar
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Table
                    sx={{
                        mt: 5, width: '100%', tableLayout: 'fixed',
                        '& .MuiTableCell-root': {
                            border: '1px solid #ddd',
                        }
                    }}
                >
                    <TableBody>
                        {academic_calendar.map((c) => (
                            <TableRow key={c.title}>
                                <TableCell sx={{ width: '100%' }}>
                                    <Typography variant="body1">
                                        {c.title}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ width: 300 }}>
                                    <Stack spacing={2} direction='row'>
                                        <Button
                                            variant="outlined"
                                            startIcon={<FontAwesomeIcon icon={faExpand} />}
                                            onClick={() => handleOpen(c.link, c.title)}
                                        >
                                            View
                                        </Button>
                                        <Button
                                            download
                                            variant="contained"
                                            startIcon={<FontAwesomeIcon icon={faDownload} />}
                                            component="a"
                                            href={c.link}
                                        >
                                            Download
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>

            </Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    University Academic Calendar
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Table
                    sx={{
                        mt: 5, width: '100%', tableLayout: 'fixed',
                        '& .MuiTableCell-root': {
                            border: '1px solid #ddd',
                        }
                    }}
                >
                    <TableBody>
                        {university_academic_calendar.map((c) => (
                            <TableRow key={c.title}>
                                <TableCell sx={{ width: '100%' }}>
                                    <Typography variant="body1">
                                        {c.title}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ width: 300 }}>
                                    <Stack spacing={2} direction='row'>
                                        <Button
                                            variant="outlined"
                                            startIcon={<FontAwesomeIcon icon={faExpand} />}
                                            onClick={() => handleOpen(c.link, c.title)}
                                        >
                                            View
                                        </Button>
                                        <Button
                                            download
                                            variant="contained"
                                            startIcon={<FontAwesomeIcon icon={faDownload} />}
                                            component="a"
                                            href={c.link}
                                        >
                                            Download
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>


            </Box>

            {open &&

                <ViewPDF
                    open={open}
                    onClose={() => setOpen(false)}
                    pdfUrl={pdfUrl}
                    title={pdfTitle}
                />
            }

        </Box>


    );
}
