"use client"

import { useEffect, useRef } from "react";

import {
  Box, Container, Grid, Stack, Toolbar, Typography
} from "@mui/material";

import Appbar from "../components/appbar";
import Notifications from "../components/notifications";
import Features from "../components/features";
import HeroSlider from "../components/HeroSlider";
import StatsCounter from "../components/counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import CourseMainPage from "./academics/courses/courseMainPage";
import ContactUs from "./contact/contactus";

export default function Home() {

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    if (window.location.href.lastIndexOf('#') > 0) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  });


  return (

    <Box sx={{ background: '#fff' }}>

      <Appbar onClick={handleClick} />
      <Toolbar />

      <HeroSlider />

      <Container sx={{ py: 15 }}>

        <Grid container spacing={5}>
          <Grid
            size={{ xs: 12, md: 8 }}
          >
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
                icon={faGraduationCap}
                color="currentColor"
                style={{
                  fontSize: "1em",
                  width: "1em",
                  height: "1em",
                }}
              />
              About FMTC
            </Typography>

            <Typography variant="h2" data-aos="fade-up">
              A Few Words About FMTC
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: 'justify',
                color: 'text.secondary'
              }}
              data-aos="fade-up"
            >
              Fathima Memorial Training college, Pallimukku Kollam is a self financing Training College under the chairmanship of Dr A Younus Kunju Ex.MLA, headed by the principal Ms.Anitha N. The Institution is affiliated to the University of Kerala. The Institution has been accredited by NAAC with &apos;A&apos; grade on July 5th 2012
            </Typography>
            <Typography
              variant="body1"
              sx={{
                pt: 2,
                textAlign: 'justify',
              }}
              data-aos="fade-up"
            >
              The Institution offers B.Ed & M.Ed Courses with an intake of 200 & 35 respectively. In addition to this , Learners&apos; Support Centre with 2 regular courses (BA English & B.Com) and 5 Distance Education Courses - MA English, MA Malayalam, MA History, MA Economics and M.Com is running in the Institution and to our credit, this is the only Self - Financing Institution with an intake of 200 (for B.Ed) & 35 (for M.Ed)
            </Typography>
            <Typography
              variant="body1"
              sx={{
                pt: 2,
                textAlign: 'justify',
              }}
              data-aos="fade-up"
            >
              The Institution is engaged in extension & outreach activities for the welfare of the society. In the teacher education scenario the institution has successfully marched forward through its academic excellence fetched by the students of the college. The curricular co-curricular activities of the Institution are growing in leaps and bounds .The Institution has undertaken 3 National Seminar and 1 International Seminar so far.
            </Typography>
          </Grid>


          <Grid size={{ xs: 12, md: 4 }}>

            <Notifications />

          </Grid>
        </Grid>
      </Container>

      <Box sx={{ background: 'url(../images/gray-bg.jpg)' }}>
        <Container sx={{ py: 15 }}>
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component='img' src="../images/founder.jpeg" width='100%'
                sx={{
                  borderRadius: '20px', boxShadow: '4px 14px 28px rgba(0, 0, 0, 0.1)', height: '100%',
                  position: 'relative', overflow: 'hidden', height: 'auto'
                }}
                data-aos="fade-up"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} sx={{ textAlign: 'center' }}>
              <Stack direction='column' alignItems='center' justifyContent='center' sx={{ height: '100%' }}>
                <Typography variant="h3" sx={{ color: '#ffffff', mb: 2 }} data-aos="fade-up">
                  Dr. A Younus Kunju (Ex-MLA)
                </Typography>
                <Typography variant="h5" sx={{ color: '#ffffff', mb: 5 }} data-aos="fade-up">
                  Founder Chairman
                </Typography>
                <Typography variant="h4" sx={{ color: '#ffffff', mb: 5, fontStyle: 'italic' }} data-aos="fade-up">
                  &quot;Magic Doesn&apos;t make a dream come true, It requires passion, determination, hardwork and sacrifices&quot;
                </Typography>
              </Stack>
            </Grid>
          </Grid>

        </Container>
      </Box>


      <Box sx={{ background: '#FFFFFF' }}>
        <Container sx={{ py: 15 }}>

          <Grid container columnSpacing={5} rowSpacing={2}>
            <Grid size={{ xs: 12 }}>

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
                  icon={faCrosshairs}
                  color="currentColor"
                  style={{
                    fontSize: "1em",
                    width: "1em",
                    height: "1em",
                  }}
                />
                VISION & MISSION
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography
                  variant="h3"
                  data-aos="fade-up"
                >
                  Our Mission
                </Typography>
                <Box sx={{ textAlign: 'justify', pt: 2, mb: 2 }}>
                  <Typography
                    variant="body1"
                    data-aos="fade-up"
                  >
                    Our mission is to provide quality education and skill development through committed teaching, cutting-edge resources, and a student-centered approach, fostering intellectual growth, social responsibility, and lifelong learning.
                  </Typography>
                </Box>

              </Box>

            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box>

                <Typography
                  variant="h3"
                  data-aos="fade-up"
                >
                  Our Vision
                </Typography>
                <Box sx={{ textAlign: 'justify', pt: 2, mb: 2 }}>
                  <Typography
                    variant="body1"
                    data-aos="fade-up"
                  >
                    To be a center of excellence that inspires and empowers students to reach their fullest potential through holistic education, innovation, and ethical values.
                  </Typography>
                </Box>

              </Box>
            </Grid>
          </Grid>


        </Container>
      </Box >

      <CourseMainPage />


      <Features />


      <StatsCounter />

      <Box ref={ref}>
        <ContactUs />
      </Box>


    </Box >


  );
}
