"use client"

import {
    Paper, Box, Typography, Divider,
    List, ListItem, ListItemIcon, ListItemText,
    Table, TableBody, TableCell, TableContainer, TableRow,
} from "@mui/material";


const objectives = [
    "To ensure transparency and uniformity in internal evaluation",
    "To monitor attendance and continuous assessment practices",
    "To standardize the awarding of internal marks",
    "To promote fairness and accountability in evaluation",
    "To address grievances related to internal assessment effectively",
    "To enhance the overall quality of academic assessment practices",
]

const management = [
    {
        name: "Dr. Anitha N",
        designation: "Principal",
        position: "Chairperson",
    },
    {
        name: "Dr. Mini K S",
        designation: "Vice-Principal",
        position: "Academic Co-ordinator",
    },
    {
        name: "Ms. Ambili R",
        designation: "Assistant Professor",
        position: "Co-ordinator",
    },
    {
        name: "Ms. Parathy V Prasad",
        designation: "Assistant Professor",
        position: "Member",
    },
    {
        name: "Ms. Remya Sajeev",
        designation: "Assistant Professor",
        position: "Member",
    },
]


export default function Home() {

    return (

        <Box sx={{ backgroundColor: '#ffffff' }}>

            <Box data-aos="fade-up" sx={{ mb: 3 }}>
                <Typography variant="h4">
                    National Service Scheme
                </Typography>
                <Divider sx={{ mt: -2 }} />

                {/* <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify' }}
                >
                    The Academic Monitoring Cell (AMC) oversees and regulates the internal evaluation process to ensure fairness, transparency, and uniformity in assessment. It monitors student attendance, performance in assignments, and participation in seminars while awarding internal marks. A Grievance Redressal Mechanism functions at the institutional level to address students' concerns and appeals related to internal assessment promptly and impartially.
                </Typography> */}
            </Box>

            {/* <Box data-aos="fade-up" sx={{ mb: 3 }}>

                <Typography variant="h5">
                    Objectives
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <List>
                    {objectives.map((data, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <TaskAltOutlinedIcon color="secondary" />
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

                <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: 3 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="grievance-redressal">
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
            </Box> */}

        </Box>
    );
}
