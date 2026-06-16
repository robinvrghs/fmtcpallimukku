"use client"

import {
    Paper, Box, Typography, Divider,
    List, ListItem, ListItemIcon, ListItemText,
    Table, TableBody, TableCell, TableContainer, TableRow,
    TableHead,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const objectives = [
    "To ensure total ban on drugs, alcohol and other narcotics in the campus.",
    "To make students aware of the health issues of narcotics.",
    "To ensure support for any addicted students (if any) to overcome the addiction and return to his/her normal life.",
    "Organize awareness programmes in the campus.",
]

const management = [
    {
        name: "Mr. Promod S",
        designation: "Assistant Professor",
        position: "Malayalam Dept.",
    },
    {
        name: "Dr. Mini K S",
        designation: "HOD",
        position: "M.Ed",
    },
    {
        name: "Ms. Jayakumari B S ",
        designation: "Assistant Professor",
        position: "Malayalam Dept.",
    },
    {
        name: "Dheeraj M Pradeep",
        designation: "Student",
        position: "B.Ed",
    },
    {
        name: "Anantadutt V",
        designation: "Student",
        position: "B.Ed",
    },
    {
        name: "Athul Murali",
        designation: "Student",
        position: "B.Ed",
    },
]


export default function Home() {

    return (

        <Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    Anti Narcotic Cell
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify', pt: 2 }}
                >
                    The Anti-narcotic cell of the college has been constituted to ensure a drug- free campus by imposing a total ban on the possession or consumption or use of drugs and alcohol by students of the college, within or outside the campus. The duties of the anti-drugs cell include organizing awareness programmes in the college  with the help of government authorized agencies/ organizations and also educating the students about the ill-effects of drugs and alcohol.
                </Typography>
            </Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>

                <Typography variant="h4">
                    Objectives
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <List>
                    {objectives.map((data, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </ListItemIcon>
                            <ListItemText primary={data} />
                        </ListItem>
                    ))}
                </List>
            </Box>



            <Box data-aos="fade-up" sx={{ mb: 3 }}>
                <Typography
                    variant="body1"
                    sx={{ mb: 1, fontWeight: 'bold' }}
                >
                    Institutional academic monitoring cell is functioning in the institution with the following members
                </Typography>

                <TableContainer>
                    <Table
                        sx={{
                            mt: 2, width: '100%', tableLayout: 'fixed',
                            '& .MuiTableCell-root': {
                                border: '1px solid #ddd',
                            }
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ width: 80 }}>No.</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Designation</TableCell>
                                <TableCell>Position</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {management.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{data.name}</TableCell>
                                    <TableCell>{data.designation}</TableCell>
                                    <TableCell>{data.position}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </Box>
    );
}
