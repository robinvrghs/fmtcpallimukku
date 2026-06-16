"use client"

import {
    Box, Divider, Paper, Typography,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from "@mui/material";
const management = [
    {
        name: "Dr.Anitha N",
        designation: "Principal",
    },
    {
        name: "Dr. Mini K S",
        designation: "Academic Director",
    },
    {
        name: "Ms. Ambili R",
        designation: "NAAC Co-Ordinator",
    },
    {
        name: "Dr. Sini K S",
        designation: "Co-Ordinator, Internal Exam Cell (M.Ed)",
    },
    {
        name: "Ms. Parvathy V Prasad",
        designation: "Co-Ordinator, Internal Exam Cell (B.Ed)",
    },
]



export default function Home() {

    return (


        <Box sx={{ background: '#fff' }}>


            <Box sx={{ backgroundColor: '#ffffff' }}>

                <Box data-aos="fade-up">
                    <Typography variant="h4">
                        Academic Monitoring System
                    </Typography>
                    <Divider sx={{ mt: -2 }} />
                    <Typography
                        variant="body1"
                        sx={{
                            pt: 2,
                            textAlign: 'justify',
                        }}
                    >
                        The Academic Monitoring Cell (AMC) oversees and regulates the internal evaluation process to ensure fairness, transparency, and uniformity. The formative evaluation of the students is done as per university of rules. There is a two tier system of evaluation. External evaluation is conducted by the university at the end of the programme.The dates of the external evaluation are announced very early through the university website. The internal examination are conducted in each semester. Attendance, performance in model examinations, submission of assignments & seminars presentations are important components considered while awarding internal marks to students. A Grievance Redressal Mechanism operates at the institutional level to address any concerns or appeals related to internal assessments and evaluation procedures promptly and impartially.
                    </Typography>
                </Box>

                <TableContainer data-aos="fade-up">
                    <Table
                        sx={{
                            mt: 5, width: '100%', tableLayout: 'fixed',
                            '& .MuiTableCell-root': {
                                border: '1px solid #ddd',
                            }
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ width: 80 }}>No.</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Position</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {management.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{data.name}</TableCell>
                                    <TableCell>{data.designation}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </Box>


        </Box >


    );
}
