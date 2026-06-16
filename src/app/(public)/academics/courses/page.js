import { Box, Divider, Typography } from "@mui/material"
import CourseList from "./courseList"

const Courses = () => {
    return (
        <Box data-aos="fade-up" sx={{ mb: 5 }}>
            <Typography variant="h4">
                Courses
            </Typography>
            <Divider sx={{ mt: -2 }} />
            <CourseList />
        </Box>
    )
}

export default Courses;