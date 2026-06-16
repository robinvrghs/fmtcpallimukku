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
    "Handles issues related to women’s welfare",
    "Generate awareness of social issues for ensuring holistic education of students.",
    "Educate, empower and devise preventive measures for the prevention of gender bias and sexual harassment",
]

const management = [
    {
        name: "Dr. Anitha N",
        designation: "Principal",
        position: "Chairperson",
    },
    {
        name: "Ms. Jayakumari B S",
        designation: "Assistant Professor",
        position: "Co-ordinator",
    },
    {
        name: "Ms. Thasleema",
        designation: "Assistant Professor",
        position: "Asst. Co-ordinator",
    },
    {
        name: "Dr. Ariamol",
        designation: "Assistant Professor",
        position: "Member",
    },
    {
        name: "Ms. Remya Sajeev",
        designation: "Assistant Professor",
        position: "Member",
    },
]

const activities = [
    {
        date: "08/03/2024",
        event: "Celebration of Women's Day"
    }
]


export default function Home() {

    return (

        <Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    Women Cell
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify', pt: 2 }}
                >
                    The Women cell of the College was started with the objective of molding the women force in the campus to attain thriving milestones of success in their life. The cell also aims to encourage female students to be self-reliant and economically independent and instill positive self-esteem and confidence so that they can take the right decision in their lives. It also helps in empowering and orienting women to recognize their true potential and to help them to attain their own stand in a competing world. The Cell has both the faculty and students of the College as its members and works with an aim to create a gender-sensitized community within the campus as well as in society. Cell concentrates on providing legal, social, psychological, and constitutional awareness to the students and staff by providing different classes. It also concentrates on organizing various events and activities for women empowerment. It has been organizing varied academic, technical, medical, and cultural events for the upliftment of women and spreading the real importance of gender equality in society through College students.
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
                    Composition of Women Cell
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify', pt: 2 }}
                >
                    The Women empowerment Cell of our college was founded to support female students and staff to improve their knowledge of issues affecting women in society and prepare them to meet obstacles head-on. The cell&apos;s mission is to promote the development, advancement and empowerment of women. This cell gives them an impression that our college campus is a safe sanctuary and a second home for female students
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

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    Activities and Events 2023-24
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <List>
                    {activities.map((data, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </ListItemIcon>
                            <ListItemText primary={`${data.date} : ${data.event}`} />
                        </ListItem>
                    ))}
                </List>


            </Box>

        </Box>
    );
}
