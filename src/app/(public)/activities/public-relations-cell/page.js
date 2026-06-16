"use client"

import {
    Paper, Box, Typography, Divider,
    List, ListItem, ListItemIcon, ListItemText,
    Table, TableBody, TableCell, TableContainer, TableRow,
    TableHead,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const roles = [
    "Liaisoning with various Government and other organizations",
    "Information to press and media on the events to be conducted and events conducted",
    "Preparation of information for press coverage",
    "Collection of video clippings and press coverage clippings",
    "Identification of guests, eminent personalities to visit the campus",
    "Program design for various events",
    "Preparation of invitation letters and thanks letters for guests",
    "Facilitate networking programs by means of organizing guest lectures, workshops and other such interactive events.",
    "Maintenance of records",
]

const management = [
    {
        name: "Dr. Anitha N",
        designation: "Principal",
        position: "Coordinator",
    },
    {
        name: "Ms. Jayakumari B S",
        designation: "Assistant Professor",
        position: "Member",
    },
    {
        name: "Ms. Ambili R",
        designation: "Assistant Professor",
        position: "Member",
    },
    {
        name: "Dr. Rejani R",
        designation: "Assistant Professor",
        position: "Member",
    },
    {
        name: "Ms. Diya S Nazreen",
        designation: "B.Ed Student",
        position: "Member",
    },
]


export default function Home() {

    return (

        <Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    Public Relations Cell
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify', pt: 2 }}
                >
                    The Public Relations Cell (PR Cell) acts as a liaison between the institution and the outer world. PR Cell also works towards building the brand for the college through engagement with media houses, promotions on social media, and helping aspirants take a wise decision with regards to admissions.
                </Typography>
            </Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>

                <Typography variant="h4">
                    Objectives
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify' }}
                >
                    The main objective of this PR Cell is to provide a robust interface for the institution and its various functions and programs with all stakeholders, and the dissemination of information to the media / public as and when required. The PR Cell is committed to informing about the quality and diversity of the learning environment at the institution, the level of education, and the dedication to finding practical solutions to meet the challenges students face today.
                </Typography>
            </Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>

                <Typography variant="h4">
                    Roles and Responsibilities
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <List>
                    {roles.map((data, index) => (
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
                    Composition of Public Relation Cell
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
