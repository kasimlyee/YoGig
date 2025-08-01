import {
  Box,
  Typography,
  useTheme,
  Stack,
  useMediaQuery,
  Container,
  Fade,
  Grow,
  Slide,
} from "@mui/material";
import { CustomButton } from "../UI/CustomButton";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import hero from "@/images/hero-dashboard.png";

/**
 * HeroSection component renders a visually appealing section on the homepage
 * showcasing the platform's value proposition with modern animations and
 * responsive design.
 *
 * Features:
 * - Gradient background with animated elements
 * - Responsive typography and layout
 * - Animated call-to-action buttons
 * - Optimized image loading with Next.js Image component
 * - Subtle animations for better user engagement
 *
 * @returns {JSX.Element} The HeroSection component
 */
export const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, sm: 12, md: 15 },
        px: 2,
        textAlign: "center",
        background: `
          linear-gradient(
            135deg,
            ${theme.palette.background.default} 0%,
            ${theme.palette.background.paper} 100%
          )`,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-50%",
          right: "-50%",
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at 70% 30%, ${theme.palette.primary.light}20 0%, transparent 50%)`,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box position="relative" zIndex={1}>
          <Fade in={loaded} timeout={800}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 800,
                mb: { xs: 2, sm: 3 },
                fontSize: {
                  xs: "2.2rem",
                  sm: "3rem",
                  md: "4rem",
                  lg: "4.5rem",
                },
                lineHeight: 1.2,
                letterSpacing: "-0.5px",
              }}
            >
              Empower Your{" "}
              <Box
                component="span"
                sx={{
                  color: theme.palette.primary.main,
                  display: "inline-block",
                }}
              >
                Skills
              </Box>{" "}
              <br />
              On{" "}
              <Box
                component="span"
                sx={{
                  color: theme.palette.secondary.main,
                  display: "inline-block",
                }}
              >
                Your Terms
              </Box>
            </Typography>
          </Fade>

          <Slide in={loaded} direction="up" timeout={600}>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                mb: { xs: 4, sm: 6 },
                color: "text.secondary",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                lineHeight: 1.6,
              }}
            >
              YoGig is a next-generation freelance and work platform
              purpose-built for Uganda and East Africa, inspired by global
              giants like Upwork but carefully tailored to reflect the economic,
              cultural, and technological realities of our region. At its core,
              YoGig is a digital bridge—connecting skilled freelancers,
              creatives, and specialists with businesses, NGOs, startups, and
              individuals looking for professional, affordable, and verified
              services. Whether it’s graphic design, software development,
              writing, translation, admin support, or local on-site jobs like
              installation or repairs, YoGig empowers both remote and physical
              collaboration through a platform that’s fast, fair, and
              financially inclusive.
            </Typography>
          </Slide>

          <Grow in={loaded} timeout={1000}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                justifyContent: "center",
                mb: { xs: 6, sm: 8, md: 10 },
                "& .MuiButton-root": {
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: `0 10px 20px ${theme.palette.primary.main}30`,
                  },
                },
              }}
            >
              <Link href="/signup?type=creator" passHref legacyBehavior>
                <CustomButton
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    px: { xs: 3, sm: 4 },
                    py: 1.5,
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    borderRadius: "50px",
                  }}
                >
                  Join as a Creator
                </CustomButton>
              </Link>
              <Link href="/signup?type=client" passHref legacyBehavior>
                <CustomButton
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{
                    px: { xs: 3, sm: 4 },
                    py: 1.5,
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    borderRadius: "50px",
                    borderWidth: "2px",
                    "&:hover": {
                      borderWidth: "2px",
                    },
                  }}
                >
                  Hire Talent
                </CustomButton>
              </Link>
            </Stack>
          </Grow>
        </Box>
      </Container>
    </Box>
  );
};
