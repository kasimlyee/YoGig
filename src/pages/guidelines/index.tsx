import { useState } from "react";
import Head from "next/head";
import {
  ThemeProvider,
  CssBaseline,
  Avatar,
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { lightTheme, darkTheme } from "@/styles/theme";

export default function CommunityGuidelines() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const guidelines = [
    {
      category: "Respect",
      rules: [
        "No discrimination based on tribe, gender, or religion",
        "Professional communication at all times",
        "Respect cultural differences in East Africa",
      ],
    },
    {
      category: "Honesty",
      rules: [
        "Accurate representation of skills",
        "Transparent pricing without hidden fees",
        "Genuine reviews without manipulation",
      ],
    },
    {
      category: "Safety",
      rules: [
        "No sharing of personal contact before contracts",
        "Report suspicious behavior immediately",
        "Keep communications on YoGig platform",
      ],
    },
    {
      category: "Quality",
      rules: [
        "Deliver work meeting East African standards",
        "Provide clear timelines and updates",
        "Address client feedback professionally",
      ],
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>YoGig Help Center | East Africa's Freelance Support</title>
        <meta
          name="description"
          content="Get help with your YoGig account, payments, and freelance best practices tailored for Uganda and East Africa."
        />
      </Head>

      <Header darkMode={darkMode} toggleTheme={toggleTheme} />

      <main>
        {/* Hero */}
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
            py: 8,
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom>
              Community Guidelines
            </Typography>
            <Typography variant="h5">
              Building a thriving freelance ecosystem for East Africa
            </Typography>
          </Container>
        </Box>

        {/* Guidelines */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Typography variant="body1" paragraph textAlign="center">
            These guidelines apply to all users across Uganda, Kenya, Tanzania,
            Rwanda and beyond
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {guidelines.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h4" color="secondary" gutterBottom>
                    {item.category}
                  </Typography>
                  <ul style={{ paddingLeft: "20px" }}>
                    {item.rules.map((rule, i) => (
                      <li key={i} style={{ marginBottom: "8px" }}>
                        <Typography>{rule}</Typography>
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Consequences Section */}
        <Box sx={{ backgroundColor: theme.palette.background.paper, py: 6 }}>
          <Container maxWidth="md">
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              color="primary"
              textAlign="center"
            >
              Policy Enforcement
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                mt: 4,
              }}
            >
              {[
                "First violation: Warning and temporary restrictions",
                "Repeat violations: Account suspension",
                "Severe cases: Permanent ban and legal reporting",
              ].map((item, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      color: "white",
                      width: 32,
                      height: 32,
                      mr: 2,
                    }}
                  >
                    {index + 1}
                  </Avatar>
                  <Typography>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Agreement */}
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              All users agree to these guidelines when joining YoGig
            </Typography>
            <Typography paragraph>
              Last updated: {new Date().toLocaleDateString()}
            </Typography>
            <Button variant="outlined" color="primary" href="/terms">
              View Full Terms of Service
            </Button>
          </Paper>
        </Container>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
