"use client"

import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Paper, Box, Typography, Divider,
    List, ListItem, ListItemIcon, ListItemText,
    Table, TableBody, TableCell, TableContainer, TableRow,
    TableHead,
} from "@mui/material";

import Link from "next/link";

const objectives = [
    "To ensure transparency and uniformity in internal evaluation",
    "To aware the students of the dehumanizing effect of ragging inherent in its perversity.",
    "To keep a continuous watch and vigil over ragging so as to prevent its occurrence and recurrence.",
    "To promptly and stringently deal with the incidents of ragging brought to our notice. ",
    "To generate an atmosphere of discipline by sending a clear message that no act of ragging shall be tolerated and any act of ragging shall not go unnoticed and unpunished.",
]

const management = [
    {
        name: "Dr. Anitha N",
        designation: "Principal",
        position: "Chairperson",
    },
    // {
    //     name: "Dr. Mini K S",
    //     designation: "Vice-Principal",
    //     position: "Academic Co-ordinator",
    // },
    // {
    //     name: "Ms. Ambili R",
    //     designation: "Assistant Professor",
    //     position: "Co-ordinator",
    // },
    // {
    //     name: "Ms. Parathy V Prasad",
    //     designation: "Assistant Professor",
    //     position: "Member",
    // },
    // {
    //     name: "Ms. Remya Sajeev",
    //     designation: "Assistant Professor",
    //     position: "Member",
    // },
]


export default function Home() {

    return (

        <Box sx={{ backgroundColor: '#ffffff' }}>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    Anti Ragging Cell
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify', pt: 2 }}
                >
                    Anti-Ragging Cell is one of the important parts of the Educational Institution’s mechanism. As per the guidelines of UGC under the Act of 1956, which is modified as UGC regulations on curbing the menace of Ragging in higher Educational Institutions, 2009, establishment of Anti-Ragging Cell is compulsory. Anti-Ragging Committee will be the supervisory and advisory committee in preserving a Culture of Ragging Free Environment in the college campus.
                </Typography>
            </Box>

            <Box data-aos="fade-up" sx={{ mb: 3 }}>

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

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography
                    variant="body1"
                    sx={{ mb: 1, fontWeight: 'bold' }}
                >
                    Anti-Ragging Committee
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

            <Box data-aos="fade-up" sx={{ mb: 3 }}>
                <Typography variant="h4">
                    Notifications
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ pt: 2, mb: 1, fontWeight: 'bold' }}
                >
                    1. UGC Notification on Revised Procedure for students to file Online Anti-Ragging {" "}
                    <Link href="https://antiragging.in" target="_blank">
                        Click Here
                    </Link>
                </Typography>


            </Box>

        </Box>
    );
}
