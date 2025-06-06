import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  useTheme,
  Grid,
  IconButton,
  Stack,
} from "@mui/material";
import { CustomButton } from "../UI/CustomButton";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  ArrowOutward,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const footerLinks = [
  {
    title: "For Creators/Freelancers",
    links: [
      {
        text: "How It Works",
        href: "/creators",
        icon: <ArrowOutward fontSize="small" />,
      },
      {
        text: "Find Work",
        href: "/jobs",
        icon: <ArrowOutward fontSize="small" />,
      },
      {
        text: "Pricing",
        href: "/pricing",
        icon: <ArrowOutward fontSize="small" />,
      },
      {
        text: "Resources",
        href: "/resources",
        icon: <ArrowOutward fontSize="small" />,
      },
    ],
  },
  {
    title: "For Clients",
    links: [
      {
        text: "How It Works",
        href: "/clients",
        icon: <ArrowOutward fontSize="small" />,
      },
      {
        text: "Post a Job",
        href: "/post-job",
        icon: <ArrowOutward fontSize="small" />,
      },
      {
        text: "Browse Talent",
        href: "/talent",
        icon: <ArrowOutward fontSize="small" />,
      },
      {
        text: "Enterprise",
        href: "/enterprise",
        icon: <ArrowOutward fontSize="small" />,
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        text: "About Us",
        href: "/about",
        icon: <ArrowOutward fontSize="small" />,
      },
      {
        text: "Careers",
        href: "/careers",
        icon: <ArrowOutward fontSize="small" />,
      },
      { text: "Blog", href: "/blog", icon: <ArrowOutward fontSize="small" /> },
      {
        text: "Press",
        href: "/press",
        icon: <ArrowOutward fontSize="small" />,
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        text: "Help Center",
        href: "/help",
        icon: <ArrowOutward fontSize="small" />,
      },
      {
        text: "Safety Center",
        href: "/safety",
        icon: <ArrowOutward fontSize="small" />,
      },
      {
        text: "Community Guidelines",
        href: "/guidelines",
        icon: <ArrowOutward fontSize="small" />,
      },
      {
        text: "Contact Us",
        href: "/contact",
        icon: <ArrowOutward fontSize="small" />,
      },
    ],
  },
];

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.mode === "light" ? "#1F2937" : "#111827",
        color: "#FFFFFF",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: theme.palette.secondary.main,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              YoGig
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, opacity: 0.8 }}>
              Empowering your freelance journey. Discover, connect, and grow
              with a community that understands your hustle.
            </Typography>
            <CustomButton
              variant="outlined"
              sx={{
                color: "#FFFFFF",
                borderColor: "#FFFFFF",
                "&:hover": {
                  backgroundColor: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
                  color: theme.palette.getContrastText(
                    theme.palette.secondary.main
                  ),
                },
              }}
            >
              Join Our Community
            </CustomButton>
          </div>

          {footerLinks.map((column, index) => (
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  color: theme.palette.secondary.light,
                }}
              >
                {column.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1.5,
                        "&:hover": {
                          color: theme.palette.secondary.main,
                          "& .MuiSvgIcon-root": {
                            transform: "translateX(3px)",
                          },
                        },
                      }}
                    >
                      {link.text}
                      <Box
                        sx={{
                          display: "inline-flex",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        {link.icon}
                      </Box>
                    </Link>
                  </li>
                ))}
              </Box>
            </div>
          ))}
        </div>

        <Divider
          sx={{
            borderColor: "rgba(255, 255, 255, 0.1)",
            my: 4,
            borderWidth: 1,
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            © {new Date().getFullYear()} YoGig. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="/terms"
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  color: theme.palette.secondary.main,
                  textDecoration: "none",
                },
              }}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  color: theme.palette.secondary.main,
                  textDecoration: "none",
                },
              }}
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  color: theme.palette.secondary.main,
                  textDecoration: "none",
                },
              }}
            >
              Cookies
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
