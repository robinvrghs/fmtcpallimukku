"use client"

import {
    Paper, Box, Typography, Divider,
    List, ListItem, ListItemIcon, ListItemText,
    Table, TableBody, TableCell, TableContainer, TableRow,
    TableHead,
} from "@mui/material";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const management = [
    {
        name: "Dr. Anitha N",
        designation: "Principal",
        position: "Convenor",
    },
    {
        name: "Dr. Mini K S",
        designation: "Vice-Principal",
        position: "Co-ordinator",
    },
    {
        name: "Dr. Vijayalekshmi N S",
        designation: "Assistant Professor",
        position: "Staff Representative",
    },
    {
        name: "Ms. Ambili R",
        designation: "Assistant Professor",
        position: "Staff Representative",
    },
]

const objectives = [
    "To assess and resolve complaints received from the students.",
    "To provide students with an easy and trustworthy forum for raising any kind of grievance.",
    "To cultivate a proactive and responsible approach in managing student grievances.",
    "To maintain a harmonious educational atmosphere in the institution.",
]


export default function Home() {

    return (

        <Box sx={{ background: '#fff' }}>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    Grievance Redressal Cell
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify', pt: 2 }}
                >
                    The college  has initiated Student&apos;s Grievances Redressal Cell  as per the guidelines set by the University Grants Commission to redress the grievances of the students relating to academic and non-academic matters. The committee aims to make the institution student-friendly and to provide them access to immediate resources to have their grievances redressed. The students  have open and equal access to raise their concerns which falls under the scope of the college through suggestion box/complaint box or directly approach the committee members. The college values the opinions and feedback of students and strives to address their concerns in a timely and effective manner.
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
                <Typography variant="h4">
                    Mechanisms for Student&apos;s Grievance Redressal Cell
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify', pt: 2 }}
                >
                    The students who are dissatisfied or have any kind of grievance can choose to submit a complaint through a designated form and drop them in a Complaint Box that is installed near the Principal&apos;s room or the aggrieved student/students can directly meet with the relevant committee. The Complaint box is opened bimonthly in the presence of the chairman and committee members. The  grievances received   will be addressed based on their level of seriousness.
                </Typography>
            </Box>

            <Box sx={{ mb: 3 }} data-aos="fade-up">
                <Typography
                    variant="body1"
                    sx={{ mb: 1, fontWeight: 'bold' }}
                >
                    The following faculty members are appointed to address the complaints and suggestions received from the students.
                </Typography>

                <TableContainer>
                    <Table
                        sx={{
                            mt: 3, width: '100%', tableLayout: 'fixed',
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
