"use client"

import { useState } from "react";

import {
    Box, Button, Divider, Stack, Table, TableBody, TableCell, TableRow, Typography
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faExpand } from "@fortawesome/free-solid-svg-icons";

import ViewPDF from "@/app/components/viewPDF";

const orders = [
    {
        title: "Minority Certificate",
        link: "/docs/minority_certificate.pdf"
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
                    Minority Certificate
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
                        {orders.map((c) => (
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
