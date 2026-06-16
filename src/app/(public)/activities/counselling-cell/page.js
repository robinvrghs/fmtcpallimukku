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
    "To support student community to cope with academic and social pressures",
    "To help students to overcome their personal and psychological problems",
    "To create awareness about mental health and motivate students towards attainment of their set goals",
    "Conduct personal counselling sessions for the student community",
    "Identify students with learning difficulty and offer help",
]

const management = [
    {
        name: "Ms. Ambili R",
        designation: "Assistant Professor",
        position: "B.Ed Department",
    },
    {
        name: "Ms.Shameema S L",
        designation: "Assistant Professor",
        position: "B.Ed Department",
    },
    {
        name: "Ms. Jayakumari B S",
        designation: "Assistant Professor",
        position: "B.Ed Department",
    },
    {
        name: "Dr. Ambili M",
        designation: "Assistant Professor",
        position: "M.Ed Department",
    },
]


export default function Home() {

    return (

        <Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    Counselling Cell
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify', pt: 2 }}
                >
                    The Counselling Cell has been initiated by the College so as to  provide a platform to address the psychological/emotional  issues of the student community and help resolve them.  It functions in the College premises with a team of faculty members. The Cell offers personal counselling, peer counselling and academic orientation through teacher coordinators and trained counsellors. The service of a professional counsellor is offered as per the requirement.
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



            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography
                    variant="body1"
                    sx={{ mb: 1, fontWeight: 'bold' }}
                >
                    Teacher coordinators
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
