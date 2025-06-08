import {
  Box,
  Typography,
  Grid,
  Avatar,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Stack,
  Rating,
} from "@mui/material";
import { SectionContainer } from "../UI/SectionContainer";
import { CustomButton } from "../UI/CustomButton";
import { Fade, Slide } from "@mui/material";
import { useEffect, useState } from "react";
import { FormatQuote as Quote } from "@mui/icons-material";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Graphic Designer, Kampala",
    content:
      "YoGig has transformed my freelance career. I went from struggling to find clients to having a steady stream of work. The mobile money payments make everything so convenient!",
    avatar: "/avatars/avatar1.jpg",
    rating: 5,
  },
  {
    name: "James M.",
    role: "Small Business Owner, Nairobi",
    content:
      "Finding reliable local talent was always a challenge until I discovered YoGig. The verification system gives me confidence in the freelancers I hire, and the platform is easy to use.",
    avatar: "/avatars/avatar2.jpg",
    rating: 4,
  },
  {
    name: "Amina N.",
    role: "Web Developer, Dar es Salaam",
    content:
      "As a female developer, I appreciate how YoGig creates equal opportunities. I've worked with international clients while staying in Tanzania, all thanks to this platform.",
    avatar: "/avatars/avatar3.jpg",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <SectionContainer
      sx={{
        backgroundColor: theme.palette.background.paper,
        py: { xs: 6, md: 10 },
      }}
    >
      <Fade in={loaded} timeout={800}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 8 },
            fontWeight: 700,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Success{" "}
          <Box component="span" sx={{ color: theme.palette.primary.main }}>
            Stories
          </Box>
        </Typography>
      </Fade>

      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Slide
              in={loaded}
              direction="up"
              timeout={(index + 1) * 300}
              style={{ transitionDelay: loaded ? `${index * 100}ms` : "0ms" }}
            >
              <Card
                sx={{
                  height: "100%",
                  width: "100%",
                  maxWidth: 400,
                  borderRadius: "16px",
                  boxShadow: theme.shadows[4],
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: theme.shadows[8],
                  },
                  position: "relative",
                  overflow: "visible",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "6px",
                    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
                  <Box sx={{ position: "relative", mb: 3 }}>
                    <Quote
                      sx={{
                        fontSize: "4rem",
                        color: theme.palette.divider,
                        position: "absolute",
                        left: -10,
                        top: -30,
                        opacity: 0.3,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        position: "relative",
                        zIndex: 1,
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      {testimonial.content}
                    </Typography>
                  </Box>

                  <Rating
                    value={testimonial.rating}
                    readOnly
                    sx={{ mb: 2, color: theme.palette.secondary.main }}
                  />

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{
                        width: 60,
                        height: 60,
                        border: `2px solid ${theme.palette.primary.main}`,
                        boxShadow: theme.shadows[2],
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Slide>
          </Grid>
        ))}
      </Grid>

      <Fade in={loaded} timeout={1000}>
        <Box sx={{ textAlign: "center", mt: { xs: 6, md: 8 } }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            Ready to join our growing community?
          </Typography>
          <CustomButton
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 6,
              py: 1.5,
              fontSize: "1.1rem",
              borderRadius: "50px",
              boxShadow: `0 4px 20px ${theme.palette.primary.main}40`,
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: `0 6px 24px ${theme.palette.primary.main}60`,
              },
              transition: "all 0.3s ease",
            }}
          >
            Get Started
          </CustomButton>
        </Box>
      </Fade>
    </SectionContainer>
  );
};
