"use client"

import {
    Paper, Box, Typography, Divider,
    List, ListItem, ListItemIcon, ListItemText,
    Table, TableBody, TableCell, TableContainer, TableRow,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const objectives = [
    "To assist our teacher trainees in career growth and development",
    "To bridge the existing gap between institutions and academic excellence",
    "To support our students in personality development",
]


export default function Home() {

    return (

        <Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    Placement Cell
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify', pt: 2 }}
                >
                    The placement cell makes an endeavor to enhance the employability of the students by providing guidance and all the assistance to them to achieve their career goals. The cell takes relevant steps in identifying the demands of the industry and prepares the students towards this need. Adequate emphasis is given for soft skills development along with the regular academic program. Our institute has access to national and international institutions for campus recruitment and an average of 80-90 % students get placed every year.
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
                    sx={{ textAlign: 'justify' }}
                >
                    Placement is conducted in our college every year during January to May and when there is any urgency on demand. Reputed schools from India and abroad inform and get prior permission and then visit our institution on scheduled time. They discuss with the Principal, Placement Officer and interact with students in an official meeting where they are informed well about the concerned institution and they scrutinize our teacher trainees by conducting a preliminary test on their Teaching Aptitude during which recruiters collect their Bio-data and conduct Interview and Demo Class when required.
                </Typography>
            </Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography
                    variant="body1"
                    sx={{ textAlign: 'justify' }}
                >
                    Our college maintains a close relationship with the alumni for their placement as well. We have an effective mailing system through which it helps the alumni in locating high level jobs. Our alumni also contribute by providing information about additional jobs available through the placement officer by using the same network. Preparation of placement reports, updating the list of schools, students and placement details are well maintained. Follow up with schools and procurement of appointment letters are carried out regularly.
                </Typography>
            </Box>



            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography
                    variant="body1"
                    sx={{ mb: 1, fontWeight: 'bold' }}
                >
                    Placement Officer: Ms. Ambili R Assistant Professor B.Ed. Department
                </Typography>
            </Box>

        </Box>
    );
}
