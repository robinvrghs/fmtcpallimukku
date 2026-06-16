"use client"

import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography
} from "@mui/material";

const etiquette = [
    {
        title: "Identity and Dress Code",
        items: [
            "Students must wear their Identity Card properly on the neck at all times while inside the campus.",
            "College Uniform is compulsory on all working days, except Wednesdays."
        ]
    },
    {
        title: "Attendance and Punctuality",
        items: [
            "Students must attend classes regularly and punctually.",
            "Irregular attendance, habitual inattention, or negligence in academic work will invite disciplinary action."
        ]
    },
    {
        title: "Conduct and Behaviour",
        items: [
            "Students must behave courteously and respectfully towards all members of the teaching and non-teaching staff.",
            "When meeting faculty or staff, either inside or outside the campus, it is courteous to greet them politely.",
            "On a teacher's entry into the classroom, students should stand up until directed to sit.",
            "Smoking, chewing pan, or using intoxicants within the campus is strictly prohibited.",
            "Ragging is banned by law; any student found guilty of ragging will face strict disciplinary and legal action."
        ]
    },
    {
        title: "Discipline and Restrictions",
        items: [
            "Collective complaints or representations are not permitted. Students may make individual representations to the Principal.",
            "Acts of insubordination, insolence, or obscenity in word or deed will result in disciplinary action.",
            "A suspended student must not enter the college premises during the period of suspension.",
            "Political activities of any kind are strictly prohibited within the campus.",
            "Students are not allowed to organize or attend meetings other than those officially approved by the college."
        ]
    },
    {
        title: "Notices and Communication",
        items: [
            "Students should regularly check the notice boards for updates and announcements before leaving the campus each day.",
            "Ignorance of notices will not be accepted as an excuse for non-compliance."
        ]
    },
    {
        title: "Property and Cleanliness",
        items: [
            "Students must not deface walls, furniture, or property of the college.",
            "Any damage caused to college property must be made good by the responsible student(s).",
            "No posters, appeals, or notices shall be circulated or pasted anywhere in the campus without prior permission."
        ]
    },
    {
        title: "Use of Mobile Phones",
        items: [
            "Mobile phones are strictly prohibited within the college premises."
        ]
    },
    {
        title: "Disciplinary Authority",
        items: [
            "The Principal has the authority to suspend or expel any student for misconduct, after recording reasons in writing and informing the parent or guardian.",
            "An adverse entry regarding conduct in the confidential register may disqualify a student from receiving a certificate of good conduct and character."
        ]
    }
]


export default function Home() {

    return (

        <Box>

            <Box data-aos="fade-up">
                <Typography variant="h4">
                    Campus Etiquette
                </Typography>
                <Divider sx={{ mt: -2 }} />
                <Typography
                    variant="body1"
                    sx={{
                        pt: 2, mb: 5,
                        textAlign: 'justify',
                    }}
                >
                    All students are expected to maintain high standards of manners, discipline, and conduct within and outside the college premises. The following rules shall be strictly observed:
                </Typography>
            </Box>

            {etiquette.map((e, i) => (
                <Box data-aos="fade-up" key={i}>
                    <Typography variant="h4">
                        {e.title}
                    </Typography>
                    <Divider sx={{ mt: -2 }} />
                    <List sx={{ mb: 5 }}>
                        {e.items.map((ev, i) => (
                            <ListItem key={i}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={ev}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            ))}
        </Box>
    );
}
