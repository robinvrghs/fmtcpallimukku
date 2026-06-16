"use client"

import {
    Paper, Box, Typography, Divider,
    List, ListItem, ListItemIcon, ListItemText,
    Table, TableBody, TableCell, TableContainer, TableRow,
    TableHead,
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
        position: "9496378789",
    },
    {
        name: "Mr. Promod S",
        designation: "Assistant Professor",
        position: "",
    },
    {
        name: "Ms. Rumaisa Beevi",
        designation: "Assistant Professor",
        position: "",
    },
    {
        name: "Dr. Ambili M",
        designation: "Assistant Professor",
        position: "",
    },
]


export default function Home() {

    return (

        <Box sx={{ backgroundColor: '#ffffff' }}>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    Caste Based Discrimination
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify', pt: 2 }}
                >
                    In pursuance to the new regulation of the University Grants Commission, New Delhi (UGC) to install an online system to lodge Complaints against the instances of Caste Based Discrimination, an online portal has been developed for the use of students of the college. They may register their grievances and concerns regarding caste discrimination and any kind of caste related injustice online, to avail proper solutions for the inconveniences they had experienced. Caste Based Discrimination Complaints system provides a platform for the authorities to curb caste-based discrimination at the college, hence maintain an environment of social equality.
                </Typography>
            </Box>


            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography
                    variant="body1"
                    sx={{ mb: 1, fontWeight: 'bold' }}
                >
                    Contact Details
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
