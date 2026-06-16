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
    "To ensure transparency and uniformity in internal evaluation",
    "To provide a supportive platform for SC/ST students to express their concerns, seek guidance and share their experiences.",
    "To foster empathy, understanding and promote unity.",
    "To collaborate with college authorities to advocate for policies that promote equal opportunities, eliminate discrimination and protect the rights of SC/ST students.",
    "To work towards creating a discrimination free campus.",
]

const process = [
    "By sending an email at fathimabed@gmail.com",
    "By lodging a complaint in the register kept with the Principal’s office."
]
const mechanism = [
    "On receiving a complaint, the Committee shall commence a meeting within fifteen days of receipt of complaint.",
    "The committee shall fix a date of hearing the complaint which shall be communicated to the aggrieved person.",
    "The aggrieved party may either appear in person or submit written averments of his/her case before the Committee.",
    "The Committee shall report its findings to the Principal with recommendations if any, within a period of thirty days."
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
        position: "Convener",
    },
    {
        name: "Dr. Sini K S",
        designation: "Assistant Professor",
        position: "Member",
    },
    {
        name: "Dr. Vijayalekshmi N S ",
        designation: "Assistant Professor",
        position: "Member",
    },
    {
        name: "Ms. Parathy V Prasad",
        designation: "Assistant Professor",
        position: "Member",
    },
]


export default function Home() {

    return (

        <Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    SC/ST Grievance Redressal Cell
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify', pt: 2 }}
                >
                    The college has constituted a SC/ST Grievance Redressal Cell to eradicate any kind of caste-based discrimination pertaining to the students/staff belonging to Scheduled Castes, Scheduled Tribes, and Other Backward Class.
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
                    Process of Submitting the complaint
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify', pt: 2 }}
                >
                    Any aggrieved employee / student belonging to the reserved category can reach out to the Committee
                </Typography>

                <List>
                    {process.map((data, index) => (
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
                    Grievance Mechanism
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <List>
                    {mechanism.map((data, index) => (
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
                    Grievance Committee
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
