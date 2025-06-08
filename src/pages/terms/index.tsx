import { useState } from "react";
import Head from "next/head";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Typography,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { lightTheme, darkTheme } from "@/styles/theme";

export default function TermsAndConditions() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const legalDocuments = [
    {
      title: "Terms & Conditions",
      content: (
        <>
          <Typography variant="h6" gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography paragraph>
            By accessing or using YoGig, you agree to these Terms. If you do not
            agree, do not use the platform.
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. User Eligibility
          </Typography>
          <Typography paragraph>
            You must be at least 18 and able to enter binding contracts under
            Ugandan law to register as a Client or Freelancer.
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Account Registration & Security
          </Typography>
          <Typography paragraph>
            Users must provide accurate, current information when registering
            and safeguard their login credentials. All transactions and activity
            on your account are your responsibility.
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Service Description
          </Typography>
          <Typography paragraph>
            YoGig connects Freelancers ("Creators") and Clients ("Partners") to
            deliver remote or on-site services. Freelancers submit proposals;
            clients hire and pay via our escrow system.
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. Mobile Money & Payments
          </Typography>
          <Typography paragraph>
            Payments are held in escrow until successful delivery. We support
            MTN Mobile Money, Airtel Money, and Flutterwave in local currencies.
            Fees and transaction times are disclosed at checkout.
          </Typography>

          <Typography variant="h6" gutterBottom>
            6. Content & Activity
          </Typography>
          <Typography paragraph>
            You retain ownership of your content but grant YoGig a license to
            display it. Users must not infringe IP rights or post illegal or
            harmful content.
          </Typography>

          <Typography variant="h6" gutterBottom>
            7. Termination & Suspension
          </Typography>
          <Typography paragraph>
            YoGig reserves the right to suspend or terminate accounts for policy
            violations, fraudulent behavior, or at its discretion.
          </Typography>

          <Typography variant="h6" gutterBottom>
            8. Dispute Resolution
          </Typography>
          <Typography paragraph>
            Disputes should be raised via YoGig's Resolution Center. If
            unsolved, both parties agree to mediation under Ugandan law, with
            Kampala courts having jurisdiction.
          </Typography>

          <Typography variant="h6" gutterBottom>
            9. Liability & Warranty
          </Typography>
          <Typography paragraph>
            YoGig provides the platform "as is." We disclaim all implied
            warranties and limit liability to the extent permitted by law.
          </Typography>

          <Typography variant="h6" gutterBottom>
            10. Governing Law
          </Typography>
          <Typography paragraph>
            These Terms are governed by the laws of the Republic of Uganda. East
            African Community laws apply where relevant.
          </Typography>

          <Typography variant="h6" gutterBottom>
            11. Changes to Terms
          </Typography>
          <Typography paragraph>
            YoGig reserves the right to update the Terms. Users will be
            notified, and continued usage implies acceptance.
          </Typography>
        </>
      ),
    },
    {
      title: "Privacy Policy",
      content: (
        <>
          <Typography variant="h6" gutterBottom>
            1. Data Controller
          </Typography>
          <Typography paragraph>
            YoGig Ltd (Uganda) collects and processes personal data. Contact
            details and Data Protection Officer (DPO) are available on the site.
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. Types of Personal Data
          </Typography>
          <Typography paragraph>
            <strong>Basic data:</strong> name, email, phone, location
            <br />
            <strong>Profile data:</strong> bio, skills, portfolio
            <br />
            <strong>Financial data:</strong> Mobile Money IDs, bank account
            details
            <br />
            <strong>System data:</strong> IP, device type, usage logs
            <br />
            <strong>Verification data:</strong> IDs, certificates
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Legal Basis
          </Typography>
          <Typography paragraph>
            Processing is based on:
            <br />
            • Consent
            <br />
            • Contractual necessity
            <br />
            • Legal compliance
            <br />• Legitimate interests, balanced with user rights
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Protection Standards
          </Typography>
          <Typography paragraph>
            We implement encryption, access controls, data minimization, audit
            trails, and regular security reviews.
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. Data Subject Rights
          </Typography>
          <Typography paragraph>
            You have the rights to:
            <br />
            • Access, correct, and update your data
            <br />
            • Request deletion ("Right to be forgotten")
            <br />
            • Withdraw consent
            <br />
            • Object to processing where applicable
            <br />
            <br />
            We respond to requests as required under the Uganda Data Protection
            and Privacy Act (within 7 days for access, 30 days for corrections).
          </Typography>
        </>
      ),
    },
    {
      title: "Cookie Policy",
      content: (
        <>
          <Typography variant="h6" gutterBottom>
            1. What are cookies?
          </Typography>
          <Typography paragraph>
            Small text files used to improve user experience and analytics.
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. Types We Use
          </Typography>
          <Typography paragraph>
            <strong>Essential cookies:</strong> needed for login and site
            functionality
            <br />
            <strong>Analytics cookies:</strong> track site performance (e.g.
            Google Analytics)
            <br />
            <strong>Marketing cookies:</strong> enable personalized ads
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. User Control
          </Typography>
          <Typography paragraph>
            Users can manage cookies in browser settings or via our cookie
            consent banner.
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Third-Party Cookies
          </Typography>
          <Typography paragraph>
            Cookies from external providers for analytics and marketing
            purposes.
          </Typography>
        </>
      ),
    },
    {
      title: "Data Protection & Compliance",
      content: (
        <>
          <Typography variant="h6" gutterBottom>
            1. Accountability & Principles
          </Typography>
          <Typography paragraph>
            YoGig follows core principles of GDPR and Uganda's Data Protection
            Act (lawful, fair, transparent, purpose-limited, data minimization,
            accuracy, storage limitations, integrity, confidentiality).
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. DPIAs & DPO
          </Typography>
          <Typography paragraph>
            We conduct Data Protection Impact Assessments for high-risk
            processing and have appointed a DPO as required under Ugandan
            regulations.
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Breach Notification
          </Typography>
          <Typography paragraph>
            We notify PDPO within 72 hours and affected individuals without
            undue delay.
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. International Transfers
          </Typography>
          <Typography paragraph>
            Transfers occur only to countries recognized for adequate protection
            or with binding contractual frameworks.
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. Subject Access & Rights
          </Typography>
          <Typography paragraph>
            We support DSARs and deletion or portability requests under GDPR and
            Ugandan law.
          </Typography>
        </>
      ),
    },
    {
      title: "Ethical & Professional Code",
      content: (
        <>
          <Typography paragraph>
            <strong>Integrity:</strong> Fair treatment of freelancers and
            clients; transparent pricing
          </Typography>
          <Typography paragraph>
            <strong>Non-discrimination:</strong> Open to users regardless of
            background
          </Typography>
          <Typography paragraph>
            <strong>Professionalism:</strong> Zero tolerance for harassment or
            fraudulent behavior
          </Typography>
          <Typography paragraph>
            <strong>Transparency:</strong> Clear rules, policies, and updates
          </Typography>
          <Typography paragraph>
            <strong>Respectful communication:</strong> Polite and constructive
            interaction enforced
          </Typography>
        </>
      ),
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>YoGig Legal | Terms, Privacy & Policies</title>
        <meta
          name="description"
          content="YoGig's Terms of Service, Privacy Policy, and other legal documents tailored for Uganda and East Africa"
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
              Legal Center
            </Typography>
            <Typography variant="h5">
              Transparency and trust for East Africa's freelance community
            </Typography>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom color="secondary">
              Last Updated: {new Date().toLocaleDateString()}
            </Typography>
            <Typography paragraph>
              These documents govern your use of YoGig's platform and services
              in Uganda and East Africa. By accessing our platform, you agree to
              comply with these terms.
            </Typography>
            <Typography paragraph>
              <strong>For questions:</strong> legal@yogig.ug | +256 700 123456
            </Typography>
          </Paper>

          {/* Legal Documents Accordion */}
          <Box sx={{ mb: 4 }}>
            {legalDocuments.map((doc, index) => (
              <Accordion key={index} elevation={2} sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h5">{doc.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ p: 2 }}>{doc.content}</Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {/* Download Section */}
          <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
            <Typography variant="h5" gutterBottom color="primary">
              Download Full Documents
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}
            >
              <Button
                variant="contained"
                color="primary"
                href="/docs/yogig-terms.pdf"
                download
              >
                Terms (PDF)
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="/docs/yogig-privacy.pdf"
                download
              >
                Privacy Policy (PDF)
              </Button>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Version 1.0 | Effective January 2025
            </Typography>
          </Paper>

          {/* Legal Notice */}
          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} YoGig Ltd. All rights reserved.
              <br />
              Registered in Uganda under Company Number 123456
              <br />
              VAT/TIN: 123456789
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <Link href="/contact" color="secondary">
                Contact our Legal Team
              </Link>
            </Typography>
          </Box>
        </Container>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
