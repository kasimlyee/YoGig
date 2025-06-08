import { SetStateAction, useState } from "react";
import Head from "next/head";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  Tabs,
  Tab,
} from "@mui/material";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { lightTheme, darkTheme } from "@/styles/theme";

export default function Billing() {
  const [darkMode, setDarkMode] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const theme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleTabChange = (event: any, newValue: SetStateAction<number>) => {
    setTabValue(newValue);
  };

  const freelancerPlans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Up to 3 active gigs",
        "20 Connects/month",
        "10% service fee",
        "Standard support",
      ],
      cta: "Current Plan",
    },
    {
      name: "Plus",
      price: "UGX 50,000/mo",
      features: [
        "Unlimited gigs",
        "100 Connects/month",
        "8% service fee",
        "Priority ranking",
        "Basic analytics",
      ],
      cta: "Upgrade",
    },
    {
      name: "Pro",
      price: "UGX 100,000/mo",
      features: [
        "Unlimited gigs",
        "200 Connects/month",
        "5% service fee",
        "Premium client access",
        "Advanced analytics",
        "Instant payouts",
      ],
      cta: "Upgrade",
    },
  ];

  const clientPlans = [
    {
      name: "Starter",
      price: "Free",
      features: [
        "3 job posts/month",
        "Basic filters",
        "5% platform fee",
        "Standard support",
      ],
      cta: "Current Plan",
    },
    {
      name: "Business",
      price: "UGX 100,000/mo",
      features: [
        "Unlimited job posts",
        "Verified freelancer pool",
        "3% platform fee",
        "Advanced filters",
        "Priority support",
      ],
      cta: "Upgrade",
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Dedicated account manager",
        "2% platform fee",
        "AI-powered sourcing",
        "SLA agreements",
        "24/7 support",
      ],
      cta: "Contact Sales",
    },
  ];

  const addOns = [
    {
      name: "Extra Connects (20)",
      price: "UGX 10,000",
      description: "Submit more proposals to jobs",
    },
    {
      name: "Gig Highlight (7 days)",
      price: "UGX 15,000",
      description: "Featured in search results",
    },
    {
      name: "AI Proposal Writer",
      price: "UGX 20,000/mo",
      description: "Draft better proposals automatically",
    },
    {
      name: "Priority Support",
      price: "UGX 20,000/mo",
      description: "Faster response times",
    },
  ];

  const paymentMethods = [
    { name: "MTN Mobile Money", fee: "UGX 2,000" },
    { name: "Airtel Money", fee: "UGX 2,000" },
    { name: "Bank Transfer", fee: "UGX 5,000" },
    { name: "Visa/Mastercard", fee: "3.5%" },
    //{ name: "PayPal", fee: "4.5%" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>YoGig Billing | Plans & Subscriptions</title>
        <meta
          name="description"
          content="Manage your YoGig subscription plans, payments, and billing information"
        />
      </Head>

      <Header darkMode={darkMode} toggleTheme={toggleTheme} />

      <main>
        {/* Hero Section */}
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
              Billing & Subscriptions
            </Typography>
            <Typography variant="h5">
              Choose the perfect plan for your freelance needs
            </Typography>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          {/* Tabs */}
          <Paper elevation={2} sx={{ mb: 4 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="inherit"
            >
              <Tab label="For Freelancers" />
              <Tab label="For Clients" />
              <Tab label="Add-ons" />
              <Tab label="Payment Methods" />
            </Tabs>
          </Paper>

          {/* Freelancer Plans */}
          {tabValue === 0 && (
            <Box>
              <Typography variant="h4" gutterBottom color="primary">
                Freelancer Plans
              </Typography>
              <Typography paragraph>
                Choose a plan that matches your freelance business needs.
                Upgrade or downgrade anytime.
              </Typography>

              <Grid container spacing={4} sx={{ mt: 2 }}>
                {freelancerPlans.map((plan, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        height: "100%",
                        border:
                          plan.name === "Basic"
                            ? `2px solid ${theme.palette.primary.main}`
                            : "none",
                      }}
                    >
                      <Typography variant="h5" gutterBottom>
                        {plan.name}
                      </Typography>
                      <Typography variant="h4" color="secondary" gutterBottom>
                        {plan.price}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ minHeight: "180px" }}>
                        <ul style={{ paddingLeft: "20px" }}>
                          {plan.features.map((feature, i) => (
                            <li key={i} style={{ marginBottom: "8px" }}>
                              <Typography>{feature}</Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>
                      <Button
                        variant={
                          plan.name === "Basic" ? "outlined" : "contained"
                        }
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                      >
                        {plan.cta}
                      </Button>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 6 }}>
                <Typography variant="h5" gutterBottom color="primary">
                  What are Connects?
                </Typography>
                <Typography paragraph>
                  Connects are tokens used to submit proposals for jobs. Each
                  job application requires 1-3 Connects depending on the job
                  value.
                </Typography>
              </Box>
            </Box>
          )}

          {/* Client Plans */}
          {tabValue === 1 && (
            <Box>
              <Typography variant="h4" gutterBottom color="primary">
                Client Plans
              </Typography>
              <Typography paragraph>
                Find the right plan for your hiring needs. Scale as your
                business grows.
              </Typography>

              <Grid container spacing={4} sx={{ mt: 2 }}>
                {clientPlans.map((plan, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        height: "100%",
                        border:
                          plan.name === "Starter"
                            ? `2px solid ${theme.palette.primary.main}`
                            : "none",
                      }}
                    >
                      <Typography variant="h5" gutterBottom>
                        {plan.name}
                      </Typography>
                      <Typography variant="h4" color="secondary" gutterBottom>
                        {plan.price}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ minHeight: "180px" }}>
                        <ul style={{ paddingLeft: "20px" }}>
                          {plan.features.map((feature, i) => (
                            <li key={i} style={{ marginBottom: "8px" }}>
                              <Typography>{feature}</Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>
                      <Button
                        variant={
                          plan.name === "Starter" ? "outlined" : "contained"
                        }
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                      >
                        {plan.cta}
                      </Button>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Add-ons */}
          {tabValue === 2 && (
            <Box>
              <Typography variant="h4" gutterBottom color="primary">
                Boost Your Experience
              </Typography>
              <Typography paragraph>
                Additional features to enhance your YoGig experience
              </Typography>

              <Grid container spacing={4} sx={{ mt: 2 }}>
                {addOns.map((addon, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                      <Typography variant="h6" gutterBottom>
                        {addon.name}
                      </Typography>
                      <Typography variant="h5" color="secondary" gutterBottom>
                        {addon.price}
                      </Typography>
                      <Typography paragraph>{addon.description}</Typography>
                      <Button variant="outlined" color="primary" fullWidth>
                        Add to Plan
                      </Button>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Payment Methods */}
          {tabValue === 3 && (
            <Box>
              <Typography variant="h4" gutterBottom color="primary">
                Payment Options
              </Typography>
              <Typography paragraph>
                We support multiple payment methods tailored for East Africa
              </Typography>

              <TableContainer component={Paper} elevation={3} sx={{ mt: 3 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Method</TableCell>
                      <TableCell align="right">Withdrawal Fee</TableCell>
                      <TableCell align="right">Processing Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paymentMethods.map((method, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {method.name}
                        </TableCell>
                        <TableCell align="right">{method.fee}</TableCell>
                        <TableCell align="right">
                          {method.name.includes("Money")
                            ? "Instant"
                            : "1-3 business days"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom color="primary">
                  Important Notes
                </Typography>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>
                    <Typography>
                      All prices are billed in UGX, with USD conversion
                      available
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      VAT (18%) applicable to local services in Uganda
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Subscription plans can be canceled anytime
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Disputed transactions follow our resolution policy
                    </Typography>
                  </li>
                </ul>
              </Box>
            </Box>
          )}

          {/* Subscription Management */}
          <Paper elevation={3} sx={{ p: 4, mt: 6 }}>
            <Typography variant="h4" gutterBottom color="primary">
              Manage Your Subscription
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Current Plan:{" "}
                  <span style={{ color: theme.palette.secondary.main }}>
                    Basic
                  </span>
                </Typography>
                <Typography paragraph>
                  Next billing date:{" "}
                  {new Date(
                    Date.now() + 30 * 24 * 60 * 60 * 1000
                  ).toLocaleDateString()}
                </Typography>
                <Button variant="outlined" color="primary">
                  View Billing History
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Payment Method
                </Typography>
                <Typography paragraph>MTN Mobile Money (•••• 1234)</Typography>
                <Button variant="outlined" color="primary">
                  Update Payment Method
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
