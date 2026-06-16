"use client"

import ViewPDF from "@/app/components/viewPDF";
import { faDownload, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Box, Button, Divider, Stack, Table, TableBody, TableCell, TableRow, Typography
} from "@mui/material";
import { useState } from "react";

const policy = [
    {
        title: "Energy Conservation Policy Document",
        link: "/docs/iqac/policy_documents/energy_policy.pdf"
    },
    {
        title: "Waste Management Policy Document",
        link: "/docs/iqac/policy_documents/waste_management_policy.pdf"
    },
    {
        title: "Digital Policy Document",
        link: "/docs/iqac/policy_documents/digital_policy.pdf"
    },
    {
        title: "Equity Policy Document",
        link: "/docs/iqac/policy_documents/equity_policy.pdf"
    },
    {
        title: "Assessment & Feedback Policy Document",
        link: "/docs/iqac/policy_documents/assessment_policy.pdf"
    },
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
                    Policy Documents
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
                        {policy.map((c) => (
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
