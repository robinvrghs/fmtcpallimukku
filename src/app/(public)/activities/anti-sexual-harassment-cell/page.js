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
    "To develop the guidelines and norms for a policy against sexual harassment.",
    "To develop principles and procedures for combating sexual harassment.",
    "To work out details for the implementation of the policy.",
    "To prepare a detailed plan of action, both short and long term."
]

const guidelines = [
    "The complainant will have to submit a written and signed complaint addressed to the convener  of the Cell.",
    "The counselor will call the complainant for a personal meeting, immediately from the submission of the written complaint.",
    "The members of the Cell will discuss the complaint.",
    "If the case comes under the purview of the Cell, an enquiry committee will be set up.",
    "The Committee will submit a report and recommend the nature of action to be taken at the earliest.",
]

const management = [
    {
        name: "Dr. Anitha N",
        designation: "Principal",
        position: "Convener",
    },
    {
        name: "Ms. Shameema L",
        designation: "Assistant Professor",
        position: "Counsellor"
    },
    {
        name: "Ms. Sini K S",
        designation: "Assistant Professor",
        position: "Member"
    },
    {
        name: "Ms. Sangeetha R",
        designation: "Assistant Professor",
        position: "Member"
    },
    {
        name: "Ms. Ambili R",
        designation: "Assistant Professor",
        position: "Member"
    },
]


export default function Home() {

    return (

        <Box sx={{ backgroundColor: '#ffffff' }}>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    Anti-sexual Harassment Cell
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify', pt: 2 }}
                >
                    As per the guidelines of UGC an Anti-Sexual Harassment Cell has been established by the College to provide a healthy and congenial atmosphere to the staff and students of the College.
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
                <Typography variant="h4">
                    Roles and Responsibilities
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify' }}
                >
                    The committee has to ensure enough steps are taken to create awareness on the topic. If in case any person approaches any of the committee members, the member is immediately required to inform others. A written complaint is required to be taken from the aggrieved person, necessary action to be taken, preferably to settle the matter through counselling and conciliation as soon as possible. In case the matter is not so sorted, inquiry to be conducted and matter to be sorted out within 10 days from the date of complaint. The members should be vigilant all the time and ensure that there is no such incident taking place on campus  by creating awareness and having an open dialogue with all the students.
                </Typography>
            </Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography
                    variant="body1"
                    sx={{ fontWeight: 'bold' }}
                >
                    Following are the Guidelines to be strictly followed
                </Typography>

                <List>
                    {guidelines.map((data, index) => (
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
                    variant="h4"
                    sx={{ mb: 1, fontWeight: 'bold' }}
                >
                    Members of  Anti-sexual Harassment  Cell
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

        </Box >
    );
}
