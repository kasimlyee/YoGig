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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { lightTheme, darkTheme } from "@/styles/theme";

export default function ContactUs() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const contactMethods = [
    {
      title: "General Inquiries",
      email: "inquiry@yogig.ug",
      whatsapp: "+256701521269",
      hours: "Mon-Fri, 9AM-5PM EAT",
    },
    {
      title: "Safety Concerns",
      email: "trust@yogig.ug",
      whatsapp: "+256784071324",
      hours: "24/7 Emergency Line",
    },
    {
      title: "Business Partnerships",
      email: "partners@yogig.ug",
      whatsapp: "+256744205690",
      hours: "By appointment",
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
              Contact YoGig
            </Typography>
            <Typography variant="h5">
              Uganda-based support for East African freelancers and clients
            </Typography>
          </Container>
        </Box>

        {/* Contact Methods */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {contactMethods.map((method, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h5" color="secondary" gutterBottom>
                    {method.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Email:</strong> {method.email}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>WhatsApp:</strong> {method.whatsapp}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {method.hours}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    href={`https://wa.me/${method.whatsapp.replace("+", "")}`}
                  >
                    WhatsApp Chat
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Contact Form */}
        <Box sx={{ backgroundColor: theme.palette.background.paper, py: 6 }}>
          <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                color="primary"
                textAlign="center"
              >
                Send Us a Message
              </Typography>

              <Box component="form" sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    {/* Name field */}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* Email field */}
                  </Grid>
                  <Grid item xs={12}>
                    {/* Subject field */}
                  </Grid>
                  <Grid item xs={12}>
                    {/* Message field */}
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Container>
        </Box>

        {/* Office Location */}
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            color="primary"
            textAlign="center"
          >
            Our Kampala Office
          </Typography>
          <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
            <Typography paragraph>
              <strong>Address:</strong> Plot 42, Freelance Hub, Kampala Road
            </Typography>
            <Typography paragraph>
              <strong>Visit Hours:</strong> Monday-Friday, 9:00AM - 4:00PM
            </Typography>
            {/* Map component would go here */}
          </Paper>
        </Container>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
