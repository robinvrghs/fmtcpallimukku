"use client"

import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography
} from "@mui/material";

const eligibility = [
    "​Candidates should have passed the BA/B.Sc Degree examination under the 10+2+3 pattern from the university of Kerala or any other university recognized by the university of Kerala",
    "Candidates who have passed their qualifying examination from universities other than the university of Kerala should submit Eligibility /Equivalency certificate specially stating that their qualifying examination is recognized by the university of Kerala for seeking admission to B.Ed course(Not higher studies) In a particular optional subject in screen as applicable ,at the time of admission",
    "Double or Triple main candidate or candidates who passed degree examination in vocational or specialized courses are also eligible for admission .However they have to submit copy of the Equivalency/Eligibility Certificate from the university of Kerala",
    "The minimum requirement of marks for admission to B.Ed courses is 50% for part III / 50% In aggregate(Part I+ II+III together in Bachelor’s Degree (Science/Art Subjects) or 50% Marks in Post Graduation in concerned subjects (If a Candidate does not have 50% marks in part III /In aggregate (Part I+II+III) In the subject concerned, if he have secured 50% marks for PG in the certificate concerned"
];

const subjects = [
    "English",
    "Malayalam",
    "Mathematics",
    "Physical Science",
    "Natural Science",
    "Social Science"
]


export default function Home() {

    return (

        <Box>

            <Box data-aos="fade-up">
                <Typography variant="h4">
                    Bachelor of Education (B.Ed)
                </Typography>
                <Divider sx={{ mt: -2 }} />
                <Typography
                    variant="body1"
                    sx={{
                        pt: 2, mb: 5,
                        textAlign: 'justify',
                    }}
                >
                    Duration: 2 Years
                </Typography>
            </Box>


            <Box data-aos="fade-up">
                <Typography variant="h4">
                    Eligibility Criteria
                </Typography>
                <Divider sx={{ mt: -2 }} />
                <List sx={{ mb: 5 }}>
                    {eligibility.map((e, i) => (
                        <ListItem key={i}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </ListItemIcon>
                            <ListItemText
                                primary={e}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Box data-aos="fade-up">
                <Typography variant="h4">
                    Subjects Offered
                </Typography>
                <Divider sx={{ mt: -2 }} />
                <List sx={{ mb: 5 }}>
                    {subjects.map((e, i) => (
                        <ListItem key={i}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </ListItemIcon>
                            <ListItemText
                                primary={e}
                            />
                        </ListItem>
                    ))}
                </List>

            </Box>

            <Box data-aos="fade-up">
                <Typography variant="h4">
                    Admission Procedure
                </Typography>
                <Divider sx={{ mt: -2 }} />
                <Typography
                    variant="body1"
                    sx={{
                        pt: 5, textAlign: 'justify',
                    }}
                >
                    Total Number of Seats - 100
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        pt: 2, textAlign: 'justify',
                    }}
                >
                    MeritSeats - 50
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        pt: 2, textAlign: 'justify',
                    }}
                >
                    Management Seats - 50
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        pt: 2, mb: 5,
                        textAlign: 'justify',
                    }}
                >
                    Admission is strictly adhered to the rules and regulations of Government of Kerala and University of Kerala Admission to the Merit Quota(50%)is through the Centralized Admission Process of Kerala University .The remaining 50% seats will be filled under Management Quota
                </Typography>
            </Box>

        </Box>
    );
}
