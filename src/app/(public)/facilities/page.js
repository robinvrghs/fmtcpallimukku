"use client"

import Appbar from "@/app/components/appbar";
import {
    Box, Container, Grid, Stack, Toolbar, Typography
} from "@mui/material";

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
                        Facilities
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
                                        COLLEGE LIBRARY
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The YCET Central Library & Resource Center, functioning as an information disseminating centre catering to the needs of students, faculties and staff of YCET community, has a major role in paving the way for better academic excellence.The Central library spreads over with an area of 806sq.mtr with a capacity of 120 persons and specialized collections of Books, Journals & Non-book materials are available in Engineering and Technology, Applied Science, Management, and Humanities. In the year 2022, the library has shifted to an advanced library management open source platform KOHA 20.5 for library automation. The bibliographic records of books, journals and other materials in the library can now be accessed globally through the web OPAC facility.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        There is a collection of 23709 Volumes of Books, 40 Print Journals, magazines and AICTE mandatory subscription of E. journals packages of Under graduate and Post graduate programs.All the books are Barcoded.One PC installed for searching books through Online Public Access Catalogue(OPAC) at the Entrance.To provide the right information at the right time in the right manner, library is looking towards modernizing it and is putting maximum efforts to make the best use of advancements in Information, computer and communication technologies in this regard.
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
                                        CENTRAL COMPUTING FACILITY
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The Central Computing Facility at Younus College of Engineering and Technology (YCET) is a computing facility that serves as a central hub for students to access and utilize cutting-edge technology resources. With a focus on providing a conducive environment for academic and research activities, the facility offers a range of computing services and resources to support students&apos; educational needs.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The facility is managed by knowledgeable staff who provide technical support and guidance to students, ensuring smooth operation and optimal utilization of the computing resources. Additionally, the central computing facility offers internet connectivity, enabling students to access online learning platforms, research materials, and collaborative tools.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        By providing access to advanced computing resources, the central computing facility empowers students to develop technical skills, conduct experiments, and pursue innovative projects. It plays a vital role in promoting a culture of academic excellence and research-oriented learning at YCET.
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
                                        SMART CLASSROOM
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The Smart Classrooms at Younus College of Engineering and Technology (YCET) is a cutting-edge educational space that leverages technology to enhance the learning experience. The smart classroom creates an engaging and immersive environment for students. Equipped with smart boards, projectors, and audiovisual systems, the classroom allows for dynamic presentations, multimedia content, and real-time collaboration. Students can actively participate in discussions, access digital resources, and engage in interactive learning activities. The smart classroom facilitates a blended learning approach, combining traditional teaching methods with innovative technology, fostering critical thinking, creativity, and problem-solving skills. It serves as a hub of educational innovation, enabling students to stay abreast of the latest advancements and effectively adapt to a technology-driven world.

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
                                        LANGUAGE LAB
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The Language Lab at Younus College of Engineering and Technology (YCET) is a modern and well-equipped facility that aims to enhance students&apos; language skills and communication abilities. With its moderate setup, the lab provides a conducive environment for students to improve their proficiency in English language. The lab is equipped with computers, headphones, and language learning software that offer interactive lessons, audio exercises, and multimedia resources to support language learning. Students can practice listening, speaking, reading, and writing skills through various language exercises and activities. The moderate Language Lab at YCET serves as a valuable resource for students to develop their language fluency, build confidence in communication, and prepare for future academic and professional endeavors where strong language skills are essential.
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
                                        SEMINAR HALL
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The Common Seminar Hall, also known as CH Square, at Younus College of Engineering and Technology (YCET) is a versatile and spacious venue designed to accommodate a variety of academic, cultural, and professional events. It serves as a central gathering place where students, faculty, and distinguished guests come together to share knowledge, exchange ideas, and engage in intellectual discussions. CH Square is equipped with modern audiovisual facilities, including high-quality sound systems, projectors, and screens, ensuring a seamless presentation experience for speakers and participants.




                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The seminar hall also plays a crucial role in enhancing the academic and cultural ecosystem of YCET by providing a dedicated space for the exchange of ideas and fostering a sense of community among students and faculty. Apart from the CH Square every department has its own seminar hall that is used for departmental activities.
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
                                        COLLEGE CANTEEN
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The Canteen at Younus College of Engineering and Technology (YCET) is a bustling hub of activity and a favorite spot for students to relax, refuel, and socialize. With a focus on providing delicious and nutritious meals, the canteen offers a wide range of food options to cater to diverse tastes and dietary preferences.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The YCET canteen is known for its hygienic and clean environment, ensuring the health and well-being of the college community. The menu consists of a variety of dishes, including South Indian, North Indian, Chinese cuisines. The canteen staff is friendly and attentive, ensuring prompt service and customer satisfaction.
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
                                        COLLEGE GROUND
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The College Ground at Younus College of Engineering and Technology (YCET) is a sprawling outdoor space that serves as a hub for sports, recreational activities, and various events. It provides a vibrant and dynamic environment where students can engage in physical activities, enhance their skills, and enjoy leisure time.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The College Ground offers ample space for a variety of sports such as cricket, football, volleyball, and athletics. It provides well-maintained fields and courts that cater to the needs of both competitive sports enthusiasts and casual players. The ground is equipped with necessary facilities, including seating areas, and equipment storage, to ensure a comfortable and enjoyable experience for participants.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >

                                        Beyond sports, the College Ground also serves as a venue for cultural events, celebrations, and gatherings. It offers a versatile space that can be adapted to accommodate large audiences for events such as college fests, concerts, and outdoor performances. The open-air setting and spacious layout create a lively atmosphere that adds to the overall vibrancy of the college campus.

                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        the College Ground at YCET is a vital space that caters to the physical, social, and recreational needs of the college community. With its well-maintained facilities, versatile nature, and vibrant ambiance, it serves as a catalyst for sportsmanship, skill development, and community engagement. The College Ground is not just a space; it is a hub of energy, activity, and collective spirit that enriches the college experience at YCET
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
                                        GYMNASIUM
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'justify',
                                            pt: 2,
                                        }}
                                    >
                                        The Gymnasium at Younus College of Engineering and Technology (YCET) is a compact fitness space that provides basic facilities for students to engage in physical exercise and promote a healthy lifestyle. Equipped with essential workout equipment such as treadmills, stationary bikes, and weightlifting machines, the gymnasium offers students an opportunity to engage in cardiovascular exercises, strength training, and overall fitness activities. While modest in size, the gymnasium provides a welcoming and conducive environment for students to work out and improve their physical well-being. It serves as a space where individuals can focus on their fitness goals, relieve stress, and maintain a balanced lifestyle, making it an integral part of the college&apos;s commitment to promoting the holistic development of its students.
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
