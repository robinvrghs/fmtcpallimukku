"use client"

import {
    Box, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography
} from "@mui/material";


const composition = [
    {
        name: "Dr.Anitha N",
        designation: "Principal",
        position: "Chairperson",
    },
    {
        name: "Sri Noushad Younus",
        designation: "Secretary",
        position: "Management Representative",
    },
    {
        name: "Dr. Mini K S",
        designation: "Vice Principal, HOD M.Ed Dept.",
        position: "Coordinator",
    },
    {
        name: "Dr. Vijayalekshmi N S",
        designation: "Asst.professor, M.Ed Dept",
        position: "Member"
    },
    {
        name: "Dr. Sini K S",
        designation: "Asst.professor, M.Ed Dept",
        position: "Member"
    },
    {
        name: "Ms. Jayakumari BS",
        designation: "Asst.professor, B.Ed Dept",
        position: "Member"
    },
    {
        name: "Mr. Pramod S",
        designation: "Asst.professor, B.Ed Dept",
        position: "Member"
    },
    {
        name: "Mrs. Sangeetha R",
        designation: "Asst.professor, B.Ed Dept",
        position: "Member"
    },
    {
        name: "Mrs. Parvathy V Prasad",
        designation: "Asst.professor, B.Ed Dept",
        position: "Member"
    },
    {
        name: "Mrs. Shameema S L",
        designation: "Asst.professor, B.Ed Dept",
        position: "Member"
    },
    {
        name: "Mrs. Rumaisa Beevi",
        designation: "Asst.professor, B.Ed Dept",
        position: "Member"
    },
    {
        name: "Mrs. Naseera Beevi",
        designation: "Office Superintendent",
        position: "Senior Administrative Officer",
    },
    {
        name: "Mrs.Noorjahan Younus",
        designation: "Director, FMET",
        position: "Nominee From Trust",
    },
    {
        name: "Mr.Rithwick B R",
        designation: "Student Representative, B.Ed 2022-24 Batch",
        position: "Nominee Student",
    },
    {
        name: "Mr.Sangeeth O",
        designation: "Former Student, 2021-23 Batch",
        position: "Nominee Alumini"
    },
    {
        name: "Sri. Shajahan Younus",
        designation: "Chairman, FMET",
        position: "Nominee From Employee",
    },
    {
        name: "Sri. Hashim Younus",
        designation: "Director, FMET",
        position: "Industrialist",
    },
    {
        name: "Sri. C Sunil Kumar",
        designation: "PTA President",
        position: "Stakeholder",
    },
]

export default function Home() {

    return (

        <Box data-aos="fade-up">
            <Typography variant="h4">
                IQAC Composition
            </Typography>
            <Divider sx={{ mt: -2 }} />
            <Typography
                variant="body1"
                sx={{
                    pt: 2, textAlign: 'justify',
                }}
            >
                Composition of IQAC as per the latest notification of NAAC regarding the Composition of IQAC
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    pt: 2, textAlign: 'justify'
                }}
            >
                The Following Members are selected under Seven heads
            </Typography>

            <TableContainer>
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
                            <TableCell sx={{ fontWeight: 600, width: 80 }}>Sl. No.</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Position</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Designation</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {composition.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{data.position}</TableCell>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.designation}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>


    );
}
