import { useState, useRef, useEffect } from "react";
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
  IconButton,
  TextField,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { lightTheme, darkTheme } from "@/styles/theme";

export default function HelpCenter() {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm YoGig AI Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const theme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Click 'Sign Up' and choose either Freelancer or Client role. You'll need a valid email and phone number for verification.",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "We support MTN Mobile Money, Airtel Money, bank transfers, and (soon) Safaricom M-Pesa for Kenyan users.",
    },
    {
      question: "How are disputes resolved?",
      answer:
        "Our local mediation team reviews cases within 48 hours. Both parties must provide evidence of work/milestones.",
    },
    {
      question: "What fees does YoGig charge?",
      answer:
        "Freelancers pay 10% service fee (lower than international platforms). No hidden charges for clients.",
    },
    {
      question: "Can I work offline/on-site jobs?",
      answer:
        "Yes! Filter jobs by 'Remote' or 'On-site' location. We verify physical addresses for safety.",
    },
  ];

  const resourceCategories = [
    {
      title: "For Freelancers",
      items: [
        "Creating a winning profile",
        "Setting competitive rates",
        "Writing effective proposals",
        "Managing client communications",
        "Tax guidance for Ugandan freelancers",
      ],
    },
    {
      title: "For Clients",
      items: [
        "Writing clear job posts",
        "Setting realistic budgets",
        "Evaluating freelancer profiles",
        "Milestone payment best practices",
        "Local employment law considerations",
      ],
    },
  ];

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user" as const,
      content: input,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
        }),
      });

      const data = await response.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant" as const,
            content: data.reply,
            timestamp: new Date().toISOString(),
          },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant" as const,
          content:
            "Sorry, I'm having trouble connecting. Please try again later or contact our support team at +256 701 521 269.",
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);

      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyPress = (e: {
    key: string;
    shiftKey: any;
    preventDefault: () => void;
  }) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    //messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
              YoGig Help Center
            </Typography>
            <Typography variant="h5">
              Find answers or contact our Uganda-based support team
            </Typography>
          </Container>
        </Box>

        {/* Search Section */}
        <Container maxWidth="md" sx={{ py: 4, mt: -4 }}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom color="primary">
              What can we help you with?
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setChatOpen(true)}
              sx={{ mt: 2, mr: 2 }}
            >
              Chat with YoGig AI
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href="#contact"
              sx={{ mt: 2 }}
            >
              Contact Human Support
            </Button>
          </Paper>
        </Container>

        {/* FAQ Section */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            color="primary"
            textAlign="center"
          >
            Frequently Asked Questions
          </Typography>

          <Box sx={{ mt: 4 }}>
            {faqs.map((faq, index) => (
              <Accordion key={index} elevation={2}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={600}>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>

        {/* Resources */}
        <Box sx={{ backgroundColor: theme.palette.background.paper, py: 6 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              color="primary"
              textAlign="center"
            >
              Learning Resources
            </Typography>

            <Grid container spacing={4} sx={{ mt: 2 }}>
              {resourceCategories.map((category, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                    <Typography variant="h5" color="secondary" gutterBottom>
                      {category.title}
                    </Typography>
                    <ul style={{ paddingLeft: "20px" }}>
                      {category.items.map((item, i) => (
                        <li key={i} style={{ marginBottom: "8px" }}>
                          <Typography>{item}</Typography>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                      View Guides
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Contact Section */}
        <Container id="contact" maxWidth="md" sx={{ py: 6 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              color="primary"
              textAlign="center"
            >
              Contact Support
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Uganda Office
                </Typography>
                <Typography paragraph>
                  Kampala, Uganda
                  <br />
                  Email: support@yogig.ug
                  <br />
                  Phone: +256 744 205 690
                  <br />
                  WhatsApp: +256 701 521 269
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Available Monday-Friday, 9AM-5PM EAT
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Quick Help
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mb: 2 }}
                  href="https://wa.me/256701521269"
                >
                  WhatsApp Chat
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  sx={{ mb: 2 }}
                  href="tel:+256701521269"
                >
                  Call Now
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  href="mailto:support@yogig.ug"
                >
                  Email Us
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </main>

      {/* AI Chatbot */}
      {chatOpen && (
        <Paper
          elevation={10}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            width: 350,
            maxHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "white",
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              <SmartToyIcon sx={{ mr: 1 }} />
              YoGig AI Assistant
            </Typography>
            <IconButton
              size="small"
              color="inherit"
              onClick={() => setChatOpen(false)}
            >
              ✕
            </IconButton>
          </Box>

          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              p: 2,
              bgcolor: theme.palette.background.default,
            }}
          >
            <List>
              {messages.map((message, index) => (
                <Box key={index}>
                  <ListItem
                    alignItems="flex-start"
                    sx={{
                      flexDirection:
                        message.role === "user" ? "row-reverse" : "row",
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          bgcolor:
                            message.role === "user"
                              ? theme.palette.secondary.main
                              : theme.palette.primary.main,
                        }}
                      >
                        {message.role === "user" ? (
                          <PersonIcon />
                        ) : (
                          <SmartToyIcon />
                        )}
                      </Avatar>
                      <div ref={messagesEndRef} />;
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Paper
                          elevation={1}
                          sx={{
                            p: 2,
                            bgcolor:
                              message.role === "user"
                                ? theme.palette.secondary.light
                                : theme.palette.background.paper,
                            color:
                              message.role === "user"
                                ? theme.palette.secondary.contrastText
                                : theme.palette.text.primary,
                            borderRadius: 4,
                          }}
                        >
                          {message.content}
                        </Paper>
                      }
                    />
                  </ListItem>
                  {index < messages.length - 1 && (
                    <Divider variant="inset" component="li" />
                  )}
                </Box>
              ))}
              {loading && (
                <ListItem>
                  <CircularProgress size={24} />
                </ListItem>
              )}
              <div ref={messagesEndRef} />
            </List>
          </Box>

          <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
              InputProps={{
                endAdornment: (
                  <IconButton
                    color="primary"
                    onClick={handleSendMessage}
                    disabled={loading || !input.trim()}
                  >
                    <SendIcon />
                  </IconButton>
                ),
              }}
            />
          </Box>
        </Paper>
      )}

      {/* Chatbot toggle button when closed */}
      {!chatOpen && (
        <Button
          variant="contained"
          color="primary"
          startIcon={<SmartToyIcon />}
          onClick={() => setChatOpen(true)}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 9998,
          }}
        >
          AI Assistant
        </Button>
      )}

      <Footer />
    </ThemeProvider>
  );
}
