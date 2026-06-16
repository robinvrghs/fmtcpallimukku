"use client"

import ViewPDF from "@/app/components/viewPDF";
import { faDownload, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Box, Button, Divider, Stack, Table, TableBody, TableCell, TableRow, Typography
} from "@mui/material";
import { useState } from "react";


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
                    Curriculum
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
                        <TableRow>
                            <TableCell sx={{ width: '100%' }}>
                                <Typography variant="body1">
                                    B.Ed
                                </Typography>
                            </TableCell>
                            <TableCell sx={{ width: 300 }}>
                                <Stack spacing={2} direction='row'>
                                    <Button
                                        variant="contained"
                                        startIcon={<FontAwesomeIcon icon={faExpand} />}
                                        onClick={() => handleOpen('/docs/curriculum/B_Ed_curriculum.pdf', "B.Ed Curriculum")}
                                    >
                                        View
                                    </Button>
                                    <Button
                                        download
                                        variant="contained"
                                        startIcon={<FontAwesomeIcon icon={faDownload} />}
                                        component="a"
                                        href="/docs/curriculum/B_Ed_curriculum.pdf"
                                    >
                                        Download
                                    </Button>
                                </Stack>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ width: '100%' }}>
                                <Typography variant="body1">
                                    M.Ed
                                </Typography>
                            </TableCell>
                            <TableCell sx={{ width: 300 }}>
                                <Stack spacing={2} direction='row'>
                                    <Button
                                        variant="contained"
                                        startIcon={<FontAwesomeIcon icon={faExpand} />}
                                        onClick={() => handleOpen('/docs/curriculum/M_Ed_curriculum.pdf', "M.Ed Curriculum")}
                                    >
                                        View
                                    </Button>
                                    <Button
                                        download
                                        variant="contained"
                                        startIcon={<FontAwesomeIcon icon={faDownload} />}
                                        component="a"
                                        href="/docs/curriculum/M_Ed_curriculum.pdf"
                                    >
                                        Download
                                    </Button>
                                </Stack>
                            </TableCell>
                        </TableRow>
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

        </Box >

    );
}
