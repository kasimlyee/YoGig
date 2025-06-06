import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Fade,
  Grow,
} from "@mui/material";
import { SectionContainer } from "../UI/SectionContainer";
import { useEffect, useState } from "react";
import {
  Payments as PaymentsIcon,
  VerifiedUser as VerifiedUserIcon,
  Public as PublicIcon,
  Lock as LockIcon,
  TrendingUp as TrendingUpIcon,
  Groups as GroupsIcon,
} from "@mui/icons-material";
import Grid from "@mui/material/Grid";

const features = [
  {
    title: "Local Payments",
    description:
      "Mobile money and other local payment options tailored for East Africa.",
    icon: <PaymentsIcon fontSize="large" />,
    color: "#4CAF50", // Green
  },
  {
    title: "Verified Talent",
    description:
      "Find trusted freelancers/Creators with verified skills and portfolios.",
    icon: <VerifiedUserIcon fontSize="large" />,
    color: "#2196F3", // Blue
  },
  {
    title: "Diverse Opportunities",
    description:
      "Remote and on-site jobs across various industries and skill levels.",
    icon: <PublicIcon fontSize="large" />,
    color: "#9C27B0", // Purple
  },
  {
    title: "Secure Platform",
    description: "Protected payments and escrow services for peace of mind.",
    icon: <LockIcon fontSize="large" />,
    color: "#FF5722", // Orange
  },
  {
    title: "Skill Development",
    description:
      "Resources and training to help you grow your freelance career.",
    icon: <TrendingUpIcon fontSize="large" />,
    color: "#009688", // Teal
  },
  {
    title: "Community Support",
    description:
      "Connect with other freelancers and clients in our growing community.",
    icon: <GroupsIcon fontSize="large" />,
    color: "#E91E63", // Pink
  },
];

export const FeaturesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <SectionContainer>
      <Fade in={loaded} timeout={800}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
            fontWeight: 700,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Why Choose{" "}
          <Box
            component="span"
            sx={{
              color: theme.palette.primary.main,
              display: "inline-block",
            }}
          >
            YoGig
          </Box>
          ?
        </Typography>
      </Fade>

      <div className="flex flex-wrap -mx-3 md:-mx-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 px-3 md:px-4 mb-6 flex justify-center"
          >
            <Grow in={loaded} timeout={(index + 1) * 200}>
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  height: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                  backgroundColor: "background.paper",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    fontSize: 40,
                    color: "primary.main",
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    fontFamily: '"Poppins", sans-serif',
                    color: "text.primary",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  {feature.title === "Diverse Opportunities"
                    ? "Remote and on-site jobs across various industries and skill levels."
                    : feature.description}
                </Typography>
              </Box>
            </Grow>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
