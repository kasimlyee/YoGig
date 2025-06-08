import { useState } from "react";
import Head from "next/head";
import {
  ThemeProvider,
  Avatar,
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  CssBaseline,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { lightTheme, darkTheme } from "@/styles/theme";
import {
  Payments as PaymentsIcon,
  Public as PublicIcon,
  Lock as LockIcon,
} from "@mui/icons-material";

export default function SafetyCenter() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const safetyTips = [
    {
      title: "Payment Safety",
      icon: <PaymentsIcon fontSize="large" />,
      tips: [
        "Always use YoGig's escrow system",
        "Never share Mobile Money PINs",
        "Verify client payment methods",
        "Report payment requests outside the platform",
      ],
    },
    {
      title: "Account Security",
      icon: <LockIcon fontSize="large" />,
      tips: [
        "Enable two-factor authentication",
        "Use strong, unique passwords",
        "Never share login credentials",
        "Log out from shared devices",
      ],
    },
    {
      title: "On-site Job Safety",
      icon: <PublicIcon fontSize="large"/>,
      tips: [
        "Verify client addresses beforehand",
        "Meet in public spaces for first meetings",
        "Inform someone about your whereabouts",
        "Use our check-in system for physical jobs",
      ],
    },
  ];

  const reportingProcess = [
    {
      step: 1,
      title: "Submit Report",
      detail: "Use our in-app reporting tool with evidence",
    },
    {
      step: 2,
      title: "Case Review",
      detail: "Uganda-based team investigates within 24hrs",
    },
    {
      step: 3,
      title: "Resolution",
      detail: "We mediate or take appropriate action",
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
              YoGig Safety Center
            </Typography>
            <Typography variant="h5">
              Tools and resources to work safely across East Africa
            </Typography>
          </Container>
        </Box>

        {/* Safety Tips */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            color="primary"
            textAlign="center"
          >
            Safety Guidelines
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {safetyTips.map((category, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h4" textAlign="center" gutterBottom>
                    {category.icon}
                  </Typography>
                  <Typography variant="h5" color="secondary" gutterBottom>
                    {category.title}
                  </Typography>
                  <ul style={{ paddingLeft: "20px" }}>
                    {category.tips.map((tip, i) => (
                      <li key={i} style={{ marginBottom: "8px" }}>
                        <Typography>{tip}</Typography>
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Reporting Process */}
        <Box sx={{ backgroundColor: theme.palette.background.paper, py: 6 }}>
          <Container maxWidth="md">
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              color="primary"
              textAlign="center"
            >
              How Reporting Works
            </Typography>

            <Grid container spacing={4} sx={{ mt: 4 }}>
              {reportingProcess.map((step) => (
                <Grid item xs={12} md={4} key={step.step}>
                  <Box textAlign="center">
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        color: "white",
                        width: 56,
                        height: 56,
                        margin: "0 auto 16px",
                      }}
                    >
                      {step.step}
                    </Avatar>
                    <Typography variant="h5" gutterBottom>
                      {step.title}
                    </Typography>
                    <Typography>{step.detail}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Emergency Contact */}
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              color="primary"
            >
              Need Immediate Help?
            </Typography>
            <Typography variant="h5" color="error" paragraph>
              Call YoGig Safety Line: +256 701 521 269
            </Typography>
            <Typography paragraph>
              Available 24/7 for urgent safety concerns
            </Typography>
            <Button
              variant="contained"
              color="error"
              size="large"
              href="tel:+256701521269"
              sx={{ mt: 2 }}
            >
              Emergency Call
            </Button>
          </Paper>
        </Container>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
