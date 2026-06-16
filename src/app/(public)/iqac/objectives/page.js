"use client"

import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography
} from "@mui/material";

const items = [
    "Students must strictly follow all rules and regulations of the college.",
    "Students should attend all classes regularly and arrive on time.",
    "Students are required to follow the dress code and wear  ID cards on campus.",
    "The usage of mobile phones on the campus is strictly prohibited.",
    "Ragging is banned, and students must treat others with dignity and respect.",
    "Students should maintain proper behaviour and etiquette towards staff and peers.",
    "Smoking, drinking, and other inappropriate habits are not allowed on campus.",
    "Any form of examination malpractice will result in strict disciplinary action.",
    "Students must not damage or misuse any property belonging to the institution.",
    "Students should complete all academic tasks within the deadlines given by teachers.",
    "Academic integrity must be upheld by avoiding cheating, plagiarism, and dishonesty.",
    "Students should respect individual differences and avoid discrimination or harassment.",
    "A clean, neat, and orderly environment should be maintained on the campus.",
    "Students should refrain from actions that may tarnish the reputation of the institution.",
    "Mutual respect should be maintained in all interactions with staff and fellow students.",
    "Any grievances or unethical behaviour should be reported through proper channels.",
]

const items1 = [
    "Maintain professionalism and integrity in all teaching and administrative duties.",
    "Treat all students with care, affection and respect for the sanctity of the institution.",
    "Plan and deliver lessons effectively in line with institutional goals.",
    "Provide timely, fair, and constructive feedback to the students.",
    "Uphold academic integrity by avoiding favoritism, discrimination, or bias.",
    "Serve as role models by demonstrating ethical conduct and institutional values.",
    "Maintain confidentiality of student information and institutional matters.",
    "Engage in professional development to improve teaching skills and knowledge.",
    "Communicate clearly, effectively, and respectfully with all stakeholders.",
    "Ensure fairness and transparency in evaluation and assessment of students ",
    "Avoid any form of misconduct including harassment, exploitation towards students",
    "Build trust with parents and guardians for the holistic development of students.",
    "Adhere to institutional policies, local laws, and professional standards."
]

const items2 = [
    "Show professionalism, integrity, and fairness in all administrative duties.",
    "Ensure transparency and accountability in all decisions.",
    "Follow all institutional policies and legal requirements.",
    "Provide necessary support and resources to teachers, students, and staff.",
    "Communicate clearly and respectfully with all stakeholders.",
    "Keep all sensitive and confidential information secure.",
    "Maintain punctuality, honesty, and commitment in all tasks.",
    "Keep accurate records and share information only when authorized.",
    "Represent the institution responsibly and uphold its reputation."
]


export default function Home() {

    return (

        <Box>

            <Box data-aos="fade-up">
                <Typography variant="h4">
                    IQAC Objectives
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'justify', pt: 2
                    }}
                >
                    The primary aim of the IQAC is
                </Typography>

                <List sx={{ mb: 5 }}>
                    <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </ListItemIcon>
                        <ListItemText
                            primary="To develop a mechanism to promote conscious ,consistent and catalytic action plans to improve the academic and administrative performance of the institution"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </ListItemIcon>
                        <ListItemText
                            primary="To promote institutional quality enhancement and sustenance through the internalization of quality culture and institutionalization of the best practices"
                        />
                    </ListItem>
                </List>
            </Box>

        </Box>


    );
}
