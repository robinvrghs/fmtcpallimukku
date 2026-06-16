import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Container, Typography } from "@mui/material"
import CourseList from "./courseList"

const CourseMainPage = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5' }}>
            <Container sx={{ py: 15 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            color: "primary.main"
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faLeanpub}
                            color="currentColor"
                            style={{
                                fontSize: "1em",
                                width: "1em",
                                height: "1em",
                            }}
                        />
                        OUR COURSES
                    </Typography>

                    <Typography
                        variant="h3"
                        data-aos="fade-up"
                    >
                        Courses That Shape Future Teachers
                    </Typography>
                    <CourseList />
                </Box>
            </Container>
        </Box>
    )
}

export default CourseMainPage;