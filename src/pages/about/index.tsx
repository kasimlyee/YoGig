import { useState } from "react";
import Head from "next/head";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Avatar,
  Button,
} from "@mui/material";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/layout/HeroSection2";
import { lightTheme, darkTheme } from "@/styles/theme";

export default function AboutUs() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const teamMembers = [
    {
      name: "Ssekindi Kasim",
      role: "Founder & Fullstack Developer",
      bio: "Building YoGig to solve East Africa's freelance challenges. Fullstack developer specializing in Next.js, NestJS, and AI/ML solutions.",
      avatar: "/team/kasim.jpg",
      skills: ["Next.js/React", "NestJS/Node.js", "PostgreSQL", "AI/ML"],
    },
    {
      name: "Nalubega Kevin",
      role: "CEO & Data analyst",
      bio: "Building YoGig to solve East Africa's freelance challenges. Data analyst specializing in Python,R, SQL, Databases and Power B1.",
      avatar: "/team/kevin.jpg",
      skills: ["Databases", "Python", "SQL", "Power B1", "R"],
    },
  ];

  const milestones = [
    {
      year: "2023",
      event: "Concept Born",
      detail:
        "Identified the gap in Uganda's freelance market while working as a freelancer",
    },
    {
      year: "2024 Q1",
      event: "Platform Development",
      detail: "Built MVP as a solo developer",
    },
    {
      year: "2024 Q3",
      event: "Beta Launch",
      detail: "Initial users onboarded",
    },
    {
      year: "2025",
      event: "Mobile Money Integration",
      detail: "Implemented MTN/Airtel Money support",
    },
    {
      year: "Future",
      event: "Regional Expansion",
      detail: "Plans to expand to Kenya & Tanzania",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>About YoGig | East Africa's Freelance Platform</title>
        <meta
          name="description"
          content="Learn about YoGig's mission to empower Ugandan and East African freelancers through technology and financial inclusion."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header darkMode={darkMode} toggleTheme={toggleTheme} />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Our Story */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              color="primary"
            >
              Our Story
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              How developers are building a solution for East Africa
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph>
                YoGig began when I, as a freelance developer in Uganda,
                experienced firsthand the challenges of finding work and getting
                paid through international platforms.
              </Typography>
              <Typography variant="body1" paragraph>
                The existing solutions didn't understand our local context:
              </Typography>
              <ul>
                <li>No seamless mobile money integration</li>
                <li>Currency conversion losses</li>
                <li>Cultural mismatch in job expectations</li>
                <li>Limited support for on-site gigs</li>
              </ul>
              <Typography variant="body1" paragraph>
                So I decided to build something better - a platform designed
                specifically for our region's needs.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                <Typography variant="h6" gutterBottom color="secondary">
                  Why YoGig Stands Out
                </Typography>
                <Typography variant="body1" paragraph>
                  Built by an East African developer who understands the local
                  challenges:
                </Typography>
                <Typography variant="body1">
                  ✓ Optimized for our internet infrastructure
                  <br />
                  ✓ Mobile-first approach for widespread access
                  <br />
                  ✓ Local payment rails as first-class citizens
                  <br />
                  ✓ Cultural alignment in job postings
                  <br />✓ Community-focused dispute resolution
                </Typography>
                <Box mt={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="/contact"
                    fullWidth
                  >
                    Share Your Feedback
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        {/* Mission Section */}
        <Box sx={{ backgroundColor: theme.palette.background.paper, py: 6 }}>
          <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              color="primary"
            >
              The Mission
            </Typography>
            <Typography variant="h5" paragraph>
              To create 50,000 freelance opportunities in East Africa by 2030
            </Typography>
            <Typography variant="body1" paragraph>
              Success metrics that matter to our community:
            </Typography>

            <Grid container spacing={4} mt={4}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h2" color="secondary">
                  100%
                </Typography>
                <Typography variant="h6">Local payment support</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h2" color="secondary">
                  5x
                </Typography>
                <Typography variant="h6">
                  Faster than international alternatives
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h2" color="secondary">
                  0%
                </Typography>
                <Typography variant="h6">Currency conversion fees</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Team Section - Adjusted for Solo Developer */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              color="primary"
            >
              The Founder
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              One developer with a vision for East Africa's gig economy
            </Typography>
          </Box>

          <Grid container justifyContent="center">
            {teamMembers.map((member) => (
              <Grid item xs={12} sm={8} md={6} key={member.name}>
                <Paper elevation={2} sx={{ p: 4, textAlign: "center" }}>
                  <Avatar
                    alt={member.name}
                    src={member.avatar}
                    sx={{
                      width: 150,
                      height: 150,
                      margin: "0 auto 16px",
                      border: `4px solid ${theme.palette.primary.main}`,
                    }}
                  />
                  <Typography variant="h4" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="h6" color="secondary" paragraph>
                    {member.role}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {member.bio}
                  </Typography>
                  <Box mt={2}>
                    <Typography variant="subtitle2">
                      Technical Skills:
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 1,
                        mt: 1,
                      }}
                    >
                      {member.skills.map((skill, index) => (
                        <Paper
                          key={index}
                          elevation={0}
                          sx={{
                            px: 2,
                            py: 1,
                            bgcolor: theme.palette.primary.light,
                            color: "white",
                            borderRadius: 4,
                          }}
                        >
                          {skill}
                        </Paper>
                      ))}
                    </Box>
                  </Box>
                  <Box mt={3}>
                    <Button
                      variant="outlined"
                      color="primary"
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      sx={{ mr: 2 }}
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      href="https://github.com/yourprofile"
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Milestones */}
        <Box sx={{ backgroundColor: theme.palette.background.paper, py: 6 }}>
          <Container maxWidth="md">
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              color="primary"
              textAlign="center"
            >
              Development Journey
            </Typography>

            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  height: "100%",
                  width: "2px",
                  bgcolor: theme.palette.primary.main,
                  left: "50%",
                  transform: "translateX(-50%)",
                  [theme.breakpoints.down("sm")]: {
                    left: "31px",
                  },
                },
              }}
            >
              {milestones.map((milestone, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: index % 2 === 0 ? "flex-start" : "flex-end",
                    },
                    mb: 4,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "45%" },
                      p: 3,
                      bgcolor: theme.palette.background.default,
                      borderRadius: 2,
                      boxShadow: 1,
                    }}
                  >
                    <Typography variant="h6" color="secondary">
                      {milestone.year}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      {milestone.event}
                    </Typography>
                    <Typography>{milestone.detail}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Values Section */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              color="primary"
            >
              Core Principles
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              What guides every decision in building YoGig
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                title: "Local First",
                content:
                  "Prioritizing East African talent and payment systems above all else",
              },
              {
                title: "Developer-Led",
                content:
                  "Built by someone who understands freelancers' technical needs",
              },
              {
                title: "Transparency",
                content: "Clear pricing, no hidden fees, open communication",
              },
              {
                title: "Community",
                content:
                  "Growing together through user feedback and collaboration",
              },
              {
                title: "Agility",
                content: "Ability to adapt quickly to local market needs",
              },
              {
                title: "Sustainability",
                content: "Building for long-term impact, not quick profits",
              },
            ].map((value, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h5" color="primary" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography>{value.content}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Call to Action */}
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
            py: 8,
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" gutterBottom>
              Want to Contribute?
            </Typography>
            <Typography variant="h5" paragraph>
              I'm open to collaborations and feedback from the community
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/contact"
              sx={{ mt: 3 }}
            >
              Get In Touch
            </Button>
          </Container>
        </Box>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
