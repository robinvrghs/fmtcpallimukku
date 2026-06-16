"use client"
import {
    Box, Button, Container, Grid, Stack, Toolbar, Typography
} from "@mui/material";

import Link from "next/link";
import Appbar from "@/app/components/appbar";


export default function Home() {

    return (

        <Box sx={{ background: '#fff' }}>

            <Appbar />
            <Toolbar />

            <Box
                sx={{
                    background: "radial-gradient(transparent, black), url(../images/main-bg.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover", backgroundPosition: 'center, bottom',
                    height: "350px",
                }}
            >



                <Box sx={{
                    height: '100%', display: 'flex',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Typography
                        variant="h3"
                        sx={{ color: '#ffffff' }}
                        data-aos="fade-up"
                    >
                        Student Support
                    </Typography>

                </Box>



            </Box>



            <Box sx={{ backgroundColor: '#ffffff' }}>
                <Container sx={{ py: 10 }}>

                    <Box>
                        <Grid container spacing={5}>
                            <Grid
                                size={{ xs: 12 }} sx={{ display: 'flex', alignItems: 'center' }}
                                data-aos="fade-up"
                            >
                                <Stack direction='column' spacing={1.5}>

                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: 'center',
                                            pt: 2,
                                        }}
                                    >
                                        National Service Scheme
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The National Service Scheme (NSS) is an Indian government-sponsored public service program conducted by the Department of Youth Affairs and Sports of the Government of India. Popularly known as NSS, the scheme was launched in Gandhiji&apos;s Centenary year, 1969 with the primary objective of developing the personality and character of the student youth through voluntary community service. &apos;Education through Service&apos; is the purpose of the NSS. The ideological orientation of the NSS is inspired by the ideals of Mahatma Gandhi. Very appropriately, the motto of NSS is &quot;NOT ME, BUT YOU&quot;. An NSS volunteer places the &apos;community&apos; before &apos;self&apos;.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >

                                        The National Service Scheme (NSS) at Younus College of Engineering and Technology (YCET) is a youth-led organization that promotes social service, community engagement, and the overall development of students. The NSS is a voluntary program that aims to instill a sense of social responsibility and civic consciousness among students, encouraging them to actively contribute to the betterment of society.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >

                                        The NSS at YCET organizes a wide range of activities and initiatives that address various social issues and promote sustainable development. Students participate in community service projects, such as cleanliness drives, blood donation camps, tree plantation, and awareness campaigns on topics like health, hygiene, and education.



                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        Through active involvement in NSS, students have the opportunity to develop leadership skills, teamwork, and empathy towards the marginalized sections of society. They engage in activities that promote inclusivity, environmental conservation, and social justice. The NSS also provides students with opportunities for personal growth and self-discovery. It fosters a spirit of volunteerism and encourages students to go beyond their academic pursuits, actively engaging in community service and making a positive impact on the lives of others.
                                    </Typography>


                                </Stack>
                            </Grid>



                        </Grid>
                    </Box>


                </Container>
            </Box>


            <Box sx={{ backgroundColor: '#ffffff' }}>
                <Container sx={{ pb: 10 }}>

                    <Box>
                        <Grid container spacing={5}>
                            <Grid
                                size={{ xs: 12 }} sx={{ display: 'flex', alignItems: 'center' }}
                                data-aos="fade-up"
                            >
                                <Stack direction='column' spacing={1.5}>

                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: 'center',
                                            pt: 2,
                                        }}
                                    >
                                        CLUBS & CELLS
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        A club or a society enables the students to connect to peer groups who share similar interests. The associations that the students foster in a club can also possibly lead to life-long relationships. Being a part of a club or a society helps the students to gain knowledge, skills and experience in leadership, communication, problem-solving, group development and management, finance, presentation and public speaking. Students undoubtedly learn new skills and experience personal growth, thereby, they can discover their passion and skills.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        YCET has many clubs & cells in different areas such as music club, eco club, sports club, photography club, robotics club, coding club etc.....
                                    </Typography>


                                </Stack>
                            </Grid>



                        </Grid>
                    </Box>


                </Container>
            </Box>

            <Box sx={{ backgroundColor: '#ffffff' }}>
                <Container sx={{ pb: 10 }}>

                    <Box>
                        <Grid container spacing={5}>
                            <Grid
                                size={{ xs: 12 }} sx={{ display: 'flex', alignItems: 'center' }}
                                data-aos="fade-up"
                            >
                                <Stack direction='column' spacing={1.5}>

                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: 'center',
                                            pt: 2,
                                        }}
                                    >
                                        Additional Skill Acquisition Program
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        Additional Skill Acquisition Programme is a part of the State Skill Development Programme, a Joint venture of Department of Higher Education, General Education, Labour and Local Self Government, to increase the skilled manpower in the state. ASAP has embarked on a journey To impart training with the objective of building a platform for the skilled personnel with Appropriate skills, in line with the requirements of the industry. Being aware of the sweeping Changes in the labour market, ASAP aims at creating a new generation of educated and skilled.

                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        YCET functions as the one and only ASAP centre in the entire kollam district in association with IIT Madras to provide certificate courses and training for our studnets in Artificial Intelligence, Machine learning and future technologies
                                    </Typography>


                                </Stack>
                            </Grid>



                        </Grid>
                    </Box>


                </Container>
            </Box>

            <Box sx={{ backgroundColor: '#ffffff' }}>
                <Container sx={{ pb: 10 }}>

                    <Box>
                        <Grid container spacing={5}>
                            <Grid
                                size={{ xs: 12 }} sx={{ display: 'flex', alignItems: 'center' }}
                                data-aos="fade-up"
                            >
                                <Stack direction='column' spacing={1.5}>

                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: 'center',
                                            pt: 2,
                                        }}
                                    >
                                        INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT CENTRE
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        IEDC (INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT CENTRE) Innovation and Entrepreneurship Development Centre (IEDC) cell &apos;Younus Centre for Innovations & Entrepreneurship&apos; started functioning in our campus from 27th January 2014. IEDC is being promoted in educational institutional mechanism to create entrepreneurial culture in Science and Technology academic institutions and to foster techno-enterpreneurship for generation of wealth and employment by Science & Technology persons. IEDC established in academic institution having requisite expertise and infrastructure YCIE is affiliated by Technopark TBI. Several entrepreneurship awareness camp, faculty development programmes and innovation related programmes have been conducted by the cell.

                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The Innovation and Entrepreneurship Development Cell (IEDC) at Younus College of Engineering and Technology (YCET) is a dedicated initiative that fosters an entrepreneurial mindset among students and supports them in transforming innovative ideas into successful ventures. The IEDC serves as a platform for students to explore their creative potential, develop critical thinking skills, and nurture an entrepreneurial spirit.

                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The IEDC at YCET offers a wide range of programs, workshops, and mentoring sessions to inspire and guide students in the field of innovation and entrepreneurship. It provides valuable resources, networks, and guidance to help students identify market opportunities, validate ideas, and develop business plans. Through interactive sessions with industry experts and successful entrepreneurs, students gain insights into the intricacies of starting and running a business.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The IEDC also organizes innovation challenges, hackathons, and startup competitions to encourage students to showcase their innovative projects and entrepreneurial ventures. It provides a supportive ecosystem that nurtures creativity, collaboration, and risk-taking, empowering students to turn their ideas into reality. By promoting innovation and entrepreneurship, the IEDC at YCET prepares students to become job creators rather than job seekers. It instills essential skills such as problem-solving, leadership, and resilience, enabling students to thrive in an ever-evolving business landscape.
                                    </Typography>

                                </Stack>
                            </Grid>



                        </Grid>
                    </Box>


                </Container>
            </Box>

            <Box sx={{ backgroundColor: '#ffffff' }}>
                <Container sx={{ pb: 10 }}>

                    <Box>
                        <Grid container spacing={5}>
                            <Grid
                                size={{ xs: 12 }} sx={{ display: 'flex', alignItems: 'center' }}
                                data-aos="fade-up"
                            >
                                <Stack direction='column' spacing={1.5}>

                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: 'center',
                                            pt: 2,
                                        }}
                                    >
                                        IEEE Student Branch
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The Institute of Electrical and Electronics Engineers (IEEE) Student Branch at Younus College of Engineering and Technology (YCET) is a dynamic student organization dedicated to promoting the fields of electrical engineering, electronics, and related disciplines. As a part of the global IEEE community, the student branch provides a platform for students to enhance their technical knowledge, develop leadership skills, and engage in professional networking opportunities.

                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The IEEE Student Branch at YCET organizes a wide range of activities, including technical workshops, seminars, expert lectures, and hands-on sessions. These events cover various aspects of electrical and electronics engineering, emerging technologies, and industry trends. By participating in these activities, students have the opportunity to deepen their understanding of their field of study and gain exposure to the latest advancements.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >

                                        The student branch also encourages research and innovation among its members. It supports student projects, research publications, and participation in technical competitions at national and international levels. This fosters a spirit of inquiry, creativity, and problem-solving skills among students, preparing them for future academic pursuits and careers in the field. Additionally, the IEEE Student Branch promotes collaboration and knowledge sharing among students by providing a platform for networking and peer-to-peer learning. It encourages students to form study groups, organize technical events, and collaborate on projects that further enrich their learning experience.



                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        Being a part of the IEEE Student Branch at YCET not only enhances students&apos; technical competence but also provides them with opportunities for personal and professional growth. Membership in IEEE opens doors to a vast network of professionals, industry experts, and researchers in the field, creating opportunities for internships, industrial visits, and mentorship programs.
                                    </Typography>


                                </Stack>
                            </Grid>



                        </Grid>
                    </Box>


                </Container>
            </Box>

            <Box sx={{ backgroundColor: '#ffffff' }}>
                <Container sx={{ pb: 10 }}>

                    <Box>
                        <Grid container spacing={5}>
                            <Grid
                                size={{ xs: 12 }} sx={{ display: 'flex', alignItems: 'center' }}
                                data-aos="fade-up"
                            >
                                <Stack direction='column' spacing={1.5}>

                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: 'center',
                                            pt: 2,
                                        }}
                                    >
                                        Indian Society for Technical Education
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The Indian Society for Technical Education (ISTE) is a national professional society focused on promoting excellence in technical education in India. The society aims to enhance the quality of technical education by providing a platform for educators, students, and industry professionals to exchange knowledge, share best practices, and collaborate on educational initiatives.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        ISTE at Younus College of Engineering and Technology (YCET) serves as a vibrant community that supports the professional growth and development of faculty and students. It organizes seminars, workshops, and conferences on emerging trends in engineering and technology, providing a platform for participants to learn from experts and stay updated with the latest developments in their respective fields.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        Through its various chapters and student chapters, ISTE encourages research, innovation, and entrepreneurship among students. It provides opportunities for students to participate in technical competitions, paper presentations, and project exhibitions, fostering their skills and confidence in applying theoretical knowledge to practical applications. ISTE also plays a crucial role in bridging the gap between academia and industry. It facilitates industry-academia collaborations, internships, and guest lectures by industry experts, ensuring that students receive real-world exposure and are prepared for the demands of the professional world.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        Membership in ISTE provides access to valuable resources, publications, and networking opportunities, allowing members to continuously enhance their teaching methodologies and keep abreast of advancements in their respective fields.

                                    </Typography>


                                </Stack>
                            </Grid>



                        </Grid>
                    </Box>


                </Container>
            </Box>


            <Box sx={{ backgroundColor: '#ffffff' }}>
                <Container sx={{ pb: 10 }}>

                    <Box>
                        <Grid container spacing={5}>
                            <Grid
                                size={{ xs: 12 }} sx={{ display: 'flex', alignItems: 'center' }}
                                data-aos="fade-up"
                            >
                                <Stack direction='column' spacing={1.5}>

                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: 'center',
                                            pt: 2,
                                        }}
                                    >
                                        Antiragging Cell
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        Younus College of Engineering and Technology has a well-functioning Antiragging Cell for many years. Anti -Ragging Committee is constituted in this college to prevent ragging and to take anti ragging measures as per the guidelines issued by the Supreme Court of India & UGC. As per the direction of the Honourable Supreme Court of India and the UGC New Delhi, students who indulge in ragging of any kind will be seriously dealt with. If any student is found guilty on enquiry he or she will be expelled from the college and a criminal case will be charged. Our college maintains a healthy and congenial academic environment for the student. The Anti-ragging Cell is for the entire students of the college and starts its activities from the time of admission and the help desk offers a five minutes counseling to the newly admitted students in the presence of their parents. The help desk issues a leaflet to make them aware of not indulging in any kind of activities which comes under the purview of ragging and also an anti-ragging form has to be filled by each student. The Anti-ragging Cell is responsible for taking strong action on the basis of the complaint in case of any kind of difficulties. The Anti-ragging Squad is thus coordinated. The cell has the power to suspend, not issuing a good certificate of character, or freeze benefits such as scholarships, grants …etc.
                                    </Typography>

                                    <Stack
                                        direction={{
                                            xs: 'row-reverse',
                                            sm: 'row',
                                        }}
                                        sx={{
                                            gap: 2,
                                            flexShrink: 0,
                                            alignSelf: { xs: 'flex-end', sm: 'center' },
                                        }}
                                    >

                                        <Button
                                            size="large"
                                            component={Link}
                                            href="https://www.antiragging.in/index.html"
                                            target="_blank"
                                            variant="contained"
                                        >
                                            Register Complaint
                                        </Button>
                                        <Button size="large" component={Link} href="https://www.ugc.ac.in/page/Ragging-Related-Circulars.aspx" target="_blank" variant="outlined">
                                            Discover More
                                        </Button>
                                    </Stack>

                                </Stack>
                            </Grid>



                        </Grid>
                    </Box>


                </Container>
            </Box>


            <Box sx={{ backgroundColor: '#ffffff' }}>
                <Container sx={{ pb: 10 }}>

                    <Box>
                        <Grid container spacing={5}>
                            <Grid
                                size={{ xs: 12 }} sx={{ display: 'flex', alignItems: 'center' }}
                                data-aos="fade-up"
                            >
                                <Stack direction='column' spacing={1.5}>

                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: 'center',
                                            pt: 2,
                                        }}
                                    >
                                        Student&apos;s Union
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The Students&apos; Union at Younus College of Engineering and Technology (YCET) is a representative body that serves as the voice of the student community. Comprising elected student representatives, the Students&apos; Union plays a vital role in advocating for student rights, addressing concerns, and fostering a vibrant and inclusive campus culture. The Students&apos; Union acts as a liaison between students, faculty, and the administration, facilitating effective communication and ensuring that student perspectives are taken into consideration in decision-making processes. It provides a platform for students to express their opinions, discuss issues, and propose initiatives for the betterment of the college community.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        One of the key functions of the Students&apos; Union is organizing and coordinating various extracurricular activities, cultural events, and sports competitions. These activities promote talent, teamwork, and a spirit of healthy competition among students. The Students&apos; Union actively encourages student involvement and participation, creating opportunities for personal growth, leadership development, and the exploration of diverse interests. Moreover, the Students&apos; Union at YCET actively engages in social welfare activities and community outreach programs. It organizes initiatives such as blood donation drives, environmental campaigns, and charity events to contribute to the welfare of society. By actively participating in such activities, students learn the value of social responsibility and develop a sense of empathy and compassion towards others.
                                    </Typography>


                                </Stack>
                            </Grid>



                        </Grid>
                    </Box>


                </Container>
            </Box>


            <Box sx={{ backgroundColor: '#ffffff' }}>
                <Container sx={{ pb: 10 }}>

                    <Box>
                        <Grid container spacing={5}>
                            <Grid
                                size={{ xs: 12 }} sx={{ display: 'flex', alignItems: 'center' }}
                                data-aos="fade-up"
                            >
                                <Stack direction='column' spacing={1.5}>

                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: 'center',
                                            pt: 2,
                                        }}
                                    >
                                        PARENT TEACHER ASSOCIATION
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The Parent-Teacher Association (PTA) at Younus College of Engineering and Technology (YCET) is a collaborative platform that brings together parents, teachers, and the administration to support and enhance the educational experience of students. The PTA serves as a bridge between the college and parents, fostering open communication, understanding, and cooperation.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The PTA at YCET plays a crucial role in promoting a strong partnership between parents and the college. It provides a forum for parents to voice their concerns, provide feedback, and actively contribute to the improvement of the educational environment. Through regular meetings and discussions, parents have the opportunity to engage with faculty members, administrators, and other parents to address issues, share ideas, and seek solutions.
                                    </Typography>


                                </Stack>
                            </Grid>



                        </Grid>
                    </Box>


                </Container>
            </Box>

            <Box sx={{ backgroundColor: '#ffffff' }}>
                <Container sx={{ pb: 10 }}>

                    <Box>
                        <Grid container spacing={5}>
                            <Grid
                                size={{ xs: 12 }} sx={{ display: 'flex', alignItems: 'center' }}
                                data-aos="fade-up"
                            >
                                <Stack direction='column' spacing={1.5}>

                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: 'center',
                                            pt: 2,
                                        }}
                                    >
                                        PLACEMENT CELL
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        Placement training plays a major role in shaping up the career goals of students. It is the dream of every engineering student to get placed in a top organization visiting their campus for recruitment. The Training and Placement cell at YCET assists the students in getting recruited by top companies across various Industries. Under the guidance a dedicated team of Placement Officer, Staff Coordinators and Student Coordinators, the placement cell ensures that the students undergo the training required to transform them to Industry ready professionals.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The objective of the Training and Placement Cell is to help the students identify their career goals and provide an edge into the present day competitive job market. The scope of work of Placement Cell extends from organizing workshops to providing internships to students in various organizations during summer breaks and preparing students for the final placements.
                                    </Typography>


                                </Stack>
                            </Grid>



                        </Grid>
                    </Box>


                </Container>
            </Box>



        </Box>


    );
}
