"use client"

import ViewPDF from "@/app/components/viewPDF";
import { faDownload, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Box, Button, Divider, Stack, Table, TableBody, TableCell, TableRow, Typography
} from "@mui/material";
import { useState } from "react";

const collaborations = [
    {
        title: "Sreenarayanaguru Open University (State University for Education and Training in Blended Format, Kerala)",
        description: "Fathima Memorial Training College maintains an active academic linkage with Sreenarayanaguru Open University, the State University for Education and Training in Blended Format, Kerala. The college regularly hosts the conduct of UG and PG examinations of the University, providing its campus, facilities, and administrative support for smooth examination management. Faculty members of the institution also participate in the valuation of answer scripts for various programmes, contributing to the University’s assessment process."
    },
    {
        title: "Teaching Practice Schools",
        description: "The college maintains strong institutional linkage with a network of 14 Teaching Practice Schools to facilitate school internship programmes for prospective teachers. The college collaborates with government and private-aided schools for conducting two spells of internship as mandated by the B.Ed. curriculum. Through this partnership, student-teachers are placed in selected schools for supervised teaching, classroom observation, lesson practice, and school-based activities. School heads and mentor teachers provide guidance, feedback, and evaluation, ensuring meaningful professional learning. This sustained collaboration strengthens practical training, enhances teaching competencies, and supports effective school-college partnership."
    },
    {
        title: "Block Resource Centre, Kollam",
        description: "The college has an active linkage with Block Resource Centres (BRCs) to support the academic and field-based requirements of M.Ed. students. Through this collaboration, students undertake visits, data collection, and field studies related to school administration, teacher support systems, and educational interventions coordinated by the BRCs. Resource persons at the centres provide orientation, training inputs, and insights into planning, monitoring, and implementation of educational programmes. This linkage enriches the professional understanding of M.Ed. students and strengthens the college's engagement with local educational governance structures."
    },
    {
        title: "Samagra Shiksha Kerala",
        description: "The college maintains an effective academic linkage with Samagra Shiksha Kerala (SSK), Kollam, to enrich the learning experiences of M.Ed. students. Through this collaboration, students gain exposure to various educational initiatives, inclusive education programmes, teacher training modules, and school quality enhancement projects implemented under SSK. Officials provide orientation sessions, field insights, and data support for project work, internships, and dissertations. This partnership helps M.Ed. students understand contemporary educational planning, implementation, and monitoring practices, strengthening their professional competence and research skills."
    },
    {
        title: "Palliative Care Unit, Primary Health Centre, Palathara, Kollam",
        description: "The college maintains an active linkage with the Palliative Care Unit of the Primary Health Centre, Palathara, to promote community-oriented learning among prospective teachers. Through this collaboration, student-teachers participate in outreach visits, awareness campaigns, and support activities for patients under palliative care. The initiative helps them develop empathy, social commitment, and an understanding of community health needs. This partnership strengthens value-based education and enhances the civic and humanitarian outlook of future teachers."
    },
    {
        title: "Centre For Adult And Continuing Education & Extension, University of Kerala (Cacee)",
        description: "The college has an active linkage with the Centre for Adult and Continuing Education & Extension for offering a Certificate Course in Yoga to prospective teachers. Through this collaboration, expert trainers and resource persons provide structured sessions in yoga practice, theory, and wellness education. The course equips student-teachers with skills in physical well-being, stress management, and holistic development, enabling them to integrate yoga-based practices into school settings. This linkage enhances professional preparation and promotes a healthy, balanced lifestyle among future educators."
    },
    {
        title: "District Institute of Education & Training (DIET, Kollam)",
        description: "The college maintains an active linkage with the District Institute of Education and Training (DIET), Kollam, to provide meaningful institutional exposure for M.Ed students through structured institutional visits. This collaboration enables postgraduate teacher-educators to observe the functioning of a premier teacher-training institute, understand its academic practices, and interact with faculty and trainees. Through these visits, M.Ed students gain practical insights into curriculum implementation, educational administration, training methodologies, and community-oriented programmes carried out by DIET. This linkage enriches their professional competencies, deepens their understanding of the teacher-education system, and supports their development as reflective and informed educators."
    },
    {
        title: "National Institute Of Speech & Hearing (NISH, Thiruvananthapuram)",
        description: "The college maintains a meaningful linkage with the National Institute of Speech and Hearing (NISH), Thiruvananthapuram, to support the twinning programme for M.Ed students. Through this collaboration, M.Ed trainees receive opportunities to engage directly with speech- and hearing-impaired learners and to observe specialized instructional practices. As part of the programme, NISH faculty provide expert sessions, and M.Ed students participate in classroom interactions where teaching is facilitated using sign language and inclusive strategies. This experience strengthens their understanding of special education, enhances competency in inclusive pedagogies, and equips them with the sensitivity and skills required to effectively support learners with communication disabilities. The partnership enriches the professional preparation of future teacher-educators and promotes a deeper commitment to inclusive education."
    },
    {
        title: "Teacher Training Institute",
        description: "The college maintains a strong linkage with nearby IHM Teacher Training Institute(TTI) to facilitate internship opportunities for M.Ed students. Through this collaboration, postgraduate teacher-educators engage in supervised field experiences, observe classroom practices, participate in training sessions, and assist in academic and administrative activities within the institute. The internship provides them with practical exposure to pre-service teacher education, curriculum transaction, mentoring processes, and institutional functioning at the foundational level. This linkage enhances the professional competence of M.Ed students, strengthens their understanding of teacher preparation systems, and helps them develop the skills required to become effective teacher-educators and academic leaders."
    },
    {
        title: "Kerala Knowledge Economy Mission, Government of Kerala",
        description: "The college maintains an active linkage with the Kerala Knowledge Economy Mission (KKEM) to enhance the professional readiness of prospective teachers. Through this collaboration, student-teachers gain access to career guidance, skill-development programmes, and digital learning opportunities that align with emerging educational and technological trends. KKEM initiatives help them build competencies in ICT integration, innovative pedagogy, communication skills, and employability-oriented training. This linkage supports the holistic development of future teachers, enabling them to meet the demands of a knowledge-driven society and contribute effectively to Kerala’s evolving educational ecosystem."
    },
    {
        title: "Young Innovators Programme, Kerala",
        description: "The college maintains an active linkage with the Young Innovators Programme (YIP) of Kerala Development and Innovation Strategic Council (K-DISC) to nurture creativity and problem-solving skills among prospective teachers. Through this collaboration, students participate in innovation workshops, mentoring sessions, and project-based learning activities that encourage them to identify real-life educational and social challenges and develop sustainable solutions. The programme helps student-teachers build competencies in research, design thinking, teamwork, and entrepreneurial thinking. This linkage promotes an innovation-oriented mindset and empowers future educators to become change-makers capable of contributing to transformative practices in schools and communities."
    },
    {
        title: "Fevicryl",
        description: "The college maintains a creative linkage with Fevicryl to nurture and enhance the artistic skills of prospective teachers. Through this collaboration, student-teachers participate in hands-on workshops, craft-training sessions, and demonstrations led by certified Fevicryl experts. These activities help them explore a variety of art mediums, develop classroom-friendly creative skills, and integrate art-based learning into their teaching practice. The linkage supports the holistic development of student-teachers by fostering imagination, aesthetic appreciation, and innovative expression, enabling them to confidently incorporate creativity into future classroom environments."
    },
    {
        title: "Securities & Exchange Board of India (SEBI)",
        description: "The college maintains a purposeful linkage with the Securities and Exchange Board of India (SEBI) to promote financial literacy and responsible economic awareness among prospective teachers. Through this collaboration, student-teachers participate in workshops, awareness programmes, and interactive sessions conducted by SEBI resource persons on topics such as investment basics, savings habits, financial planning, and protection from fraudulent schemes. This exposure equips future teachers with essential knowledge of financial management and empowers them to guide school students and communities towards informed financial behaviour. The linkage strengthens life-skill education and contributes to developing financially responsible and socially aware educators."
    },
    {
        title: "Azeezia Medical College, Meyyannoor, Kollam",
        description: "The college maintains a supportive linkage with Azeezia Medical College to ensure regular health check-ups and dental care for both faculty and students. Through this collaboration, medical professionals from Azeezia provide periodic health screening, dental consultations, awareness sessions, and timely medical guidance on campus or through scheduled visits to the hospital. The initiative promotes a healthy academic environment, encourages preventive healthcare practices, and ensures early identification of health concerns. This partnership strengthens the college’s commitment to the well-being of its community and fosters a culture of health awareness and care among all members."
    },
    {
        title: "ESIC Medical College Hospital Parippally, Kollam",
        description: "The college maintains a beneficial linkage with ESIC Medical College Hospital, Parippally, to support the health and well-being of faculty and students. Through this collaboration, the hospital offers regular medical check-ups,  specialist consultations, and health-awareness programmes on campus through scheduled  visits. The initiative ensures timely healthcare access, promotes preventive medical practices, and encourages a healthy lifestyle within the academic community. This partnership reflects the college's commitment to safeguarding the physical well-being of its members and fostering a supportive, health-conscious campus environment."
    },
    {
        title: "Kerala State Aids Control Society (KSACS)",
        description: "The college maintains an active linkage with the Kerala State AIDS Control Society (KSACS) to promote health awareness and social responsibility among student-teachers. Through this collaboration, KSACS resource persons conduct sessions on HIV/AIDS prevention, stigma reduction, adolescent health, and safe practices. Student-teachers also participate in awareness campaigns, observance of World AIDS Day, and community outreach activities supported by the society. This linkage strengthens their understanding of public health concerns, fosters empathy and responsible citizenship, and equips future educators to effectively disseminate health awareness within schools and the wider community."
    },
    {
        title: "Art Of Living Ashram, Kollam",
        description: "The college maintains a constructive linkage with the Art of Living Ashram, Kollam, to support the emotional well-being and holistic development of student-teachers. Through this collaboration, certified Art of Living faculty conduct sessions on stress management, breathing techniques, mindfulness practices, and personality development. These classes help students cultivate inner calm, resilience, positive thinking, and self-awareness—skills essential for effective teaching and classroom management. The linkage enriches the overall training environment by promoting mental wellness, enhancing emotional intelligence, and fostering a balanced, healthy outlook among future educators."
    },
    {
        title: "Kudumbashree (Department of Local Self Government, Government of Kerala)",
        description: "The college maintains an active linkage with Kudumbashree, under the Department of Local Self Government, Government of Kerala, to promote community engagement and social responsibility among M.Ed students. Through this collaboration, postgraduate teacher-educators conduct awareness programmes on topics such as gender equity, health and hygiene, financial literacy, and community empowerment for Kudumbashree neighbourhood groups. The partnership offers M.Ed students valuable opportunities to interact with local communities, understand grassroots development initiatives, and apply their pedagogical skills in real-life contexts. This linkage strengthens their social outreach competencies and prepares them to become educators who are sensitive to community needs and participatory development."
    },
    {
        title: "Vimukthi Mission - Excise Department",
        description: "The college maintains an active linkage with the Vimukthi Mission of the Excise Department, Government of Kerala, to promote substance-abuse awareness and preventive education among student-teachers. Through this collaboration, Vimukthi resource persons conduct sessions on the dangers of drug and alcohol abuse, legal implications, and strategies for building drug-free campuses and communities. M.Ed and B.Ed students participate in awareness drives, poster campaigns, rallies, flash mobs and interactive workshops organized in association with the mission. This linkage equips future teachers with the knowledge and skills to identify early signs of addiction, guide students towards healthy choices, and contribute to creating safe, responsible, and substance-free learning environments."
    },
    {
        title: "Devi Vilasom L P School, Kollam",
        description: "The college maintains a supportive linkage with Devi Vilasom LP School,Kollam as part of its commitment to school-based community engagement. Through this collaboration, student-teachers regularly visit the school to provide learning materials, assist in classroom activities, clean and maintain the school premises, and create graffiti art based on themes from the school textbooks. These initiatives help enhance the learning environment and support the holistic development of young learners. The linkage also offers student-teachers valuable hands-on experience in primary education settings, strengthening their pedagogical skills, sense of social responsibility, and community-oriented outlook."
    },
    {
        title: "Kerala Kalamandalam (University for Art & Culture, under Department of Cultural Affairs, Govt. of Kerala)",
        description: "The college maintains a cultural linkage with Kerala Kalamandalam (University for Art & Culture, under the Department of Cultural Affairs, Government of Kerala) to enrich the artistic exposure of prospective teachers. Through this collaboration, renowned artists and faculty from Kalamandalam conduct demonstration sessions on Kathakali, showcasing its distinctive mudras, facial expressions, costumes, and traditional musical elements. These sessions provide student-teachers with firsthand experience of Kerala's classical performing arts, deepen their appreciation of cultural heritage, and equip them to integrate art and culture meaningfully into the school curriculum. This linkage strengthens aesthetic education and fosters a deeper cultural sensitivity among future educators."
    },
    {
        title: "Fathima Memorial Training College Mylapore, Kollam",
        description: "The college maintains an academic linkage with Fathima Memorial Training College, Mylapore, for the collaborative conduct of international seminars and scholarly events. Through this partnership, both institutions jointly organize conferences, expert lectures, and research-oriented sessions featuring national and international resource persons. The collaboration provides a platform for M.Ed and B.Ed students, faculty, and researchers to share ideas, present papers, and engage in meaningful academic dialogue. This linkage strengthens the research culture of the college, enhances professional networking opportunities, and promotes global perspectives in teacher education."
    },
    {
        title: "Agadhi Mandiram Poor Home, Kollam",
        description: "The college maintains a compassionate linkage with Agathi Mandiram Poor Home, Kollam, to foster social responsibility and community engagement among student-teachers. Through this collaboration, students visit the institution to interact with residents, provide essential materials, organize recreational and support activities, and extend emotional companionship to the elderly and destitute. These experiences help student-teachers develop empathy, compassion, and a deeper understanding of societal needs. The linkage strengthens the college’s commitment to value-based education and encourages future educators to contribute meaningfully to humanitarian and community welfare initiatives."
    }
]


export default function Home() {

    const [open, setOpen] = useState(false);
    const [pdfTitle, setPdfTitle] = useState('');
    const [pdfUrl, setPdfUrl] = useState('');

    const handleOpen = (url, title) => {
        setPdfUrl(url);
        setPdfTitle(title);
        setOpen(true);
    };

    return (

        <Box>

            <Box data-aos="fade-up" sx={{ mb: 5 }}>
                <Typography variant="h4">
                    Collaboration With Premier Instutions
                </Typography>
                <Divider sx={{ mt: -2 }} />

                <Typography
                    variant="body1"
                    sx={{
                        pt: 2, textAlign: 'justify',
                    }}
                >
                    The college has linkages with various premier institutions in Kerala, facilitating community services, internships, institutional twinning, visits, conduct of awareness programmes and collaborative events. In the current year, the college further strengthened these partnerships by organizing institutional visits, skill-development programmes, health and wellness camps, innovation-oriented workshops, and inclusive education activities through its collaborations. These initiatives provided student-teachers with valuable practical exposure, enhanced their professional competencies, and broadened their engagement with the community and allied institutions.
                </Typography>
            </Box>

            {collaborations.map((c, i) => (
                <Box data-aos="fade-up" sx={{ mb: 5 }}>
                    <Typography variant="h4">
                        {c.title}
                    </Typography>
                    <Divider sx={{ mt: -2 }} />

                    <Typography
                        variant="body1"
                        sx={{
                            pt: 2, textAlign: 'justify',
                        }}
                    >
                        {c.description}
                    </Typography>
                </Box>
            ))}

        </Box>


    );
}
