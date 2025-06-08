"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Checkbox,
  FormControlLabel,
  CircularProgress,
  InputAdornment,
  IconButton,
  Fade,
  Slide,
  useTheme,
  Paper,
  LinearProgress,
  Link,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  ArrowForward,
  Person,
  Email,
  Lock,
} from "@mui/icons-material";
import { AuthFormData, AuthFormErrors, AuthFormType } from "@/types/auth";

interface AuthFormProps {
  initialFormType?: AuthFormType;
  clientId?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  initialFormType = "login",
  clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
}) => {
  const theme = useTheme();
  const [formType, setFormType] = useState<AuthFormType>(initialFormType);
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
    name: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<AuthFormErrors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordStrength, setPasswordStrength] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setAnimate(true);
    return () => setAnimate(false);
  }, []);

  useEffect(() => {
    if (formData.password) {
      calculatePasswordStrength(formData.password);
    }
  }, [formData.password]);

  const calculatePasswordStrength = (password: string): void => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: AuthFormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formType === "signup" && !formData.name) {
      newErrors.name = "Full name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const toggleFormType = (): void => {
    setFormType((prev) => (prev === "login" ? "signup" : "login"));
    setErrors({});
  };

  const handleGoogleSuccess = async (
    credentialResponse: any
  ): Promise<void> => {
    setLoading(true);
    try {
      // Handle Google auth here
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleError = (): void => {
    console.error("Google login failed");
  };

  const getPasswordStrengthColor = (): string => {
    switch (passwordStrength) {
      case 1:
        return theme.palette.error.main;
      case 2:
        return theme.palette.warning.main;
      case 3:
        return theme.palette.info.main;
      case 4:
        return theme.palette.success.main;
      default:
        return theme.palette.divider;
    }
  };

  const getPasswordStrengthLabel = (): string => {
    switch (passwordStrength) {
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  return (
    <Fade in={animate} timeout={500}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(to bottom right, ${theme.palette.primary.light}, ${theme.palette.background.default})`,
          py: 8,
          px: 2,
        }}
      >
        <Slide in={animate} direction="up" timeout={300}>
          <Box sx={{ width: "100%", maxWidth: 450 }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                bgcolor: "background.paper",
              }}
            >
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                  <Box
                    sx={{
                      bgcolor: "primary.main",
                      p: 2,
                      borderRadius: 2,
                      boxShadow: 3,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: "primary.contrastText",
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      YoGig
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 500,
                    color: "text.primary",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  {formType === "login" ? "Welcome back!" : "Join us today"}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mt: 1 }}
                >
                  {formType === "login"
                    ? "Sign in to access your account"
                    : "Create an account to get started"}
                </Typography>
              </Box>

              <GoogleOAuthProvider clientId={clientId}>
                <Box sx={{ mb: 3 }}>
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleError}
                    size="large"
                    text={formType === "login" ? "signin_with" : "signup_with"}
                    shape="pill"
                    width="100%"
                    theme="filled_blue"
                    logo_alignment="center"
                  />
                </Box>
              </GoogleOAuthProvider>

              <Divider
                sx={{
                  my: 3,
                  "&::before, &::after": {
                    borderColor: "divider",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    px: 2,
                    bgcolor: "background.paper",
                    color: "text.secondary",
                  }}
                >
                  or continue with email
                </Typography>
              </Divider>

              <Box
                component="form"
                sx={{ mt: 3 }}
                onSubmit={handleSubmit}
                noValidate
              >
                {formType === "signup" && (
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Full Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person color="action" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    size="medium"
                    sx={{ mb: 2 }}
                  />
                )}

                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="action" />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  size="medium"
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          size="small"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  size="medium"
                  sx={{ mb: 1 }}
                />

                {formType === "signup" && formData.password && (
                  <Box sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 0.5,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary" }}
                      >
                        Password strength:{" "}
                        <Typography
                          component="span"
                          variant="caption"
                          sx={{ fontWeight: 500 }}
                        >
                          {getPasswordStrengthLabel()}
                        </Typography>
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary" }}
                      >
                        {formData.password.length}/8
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={(passwordStrength / 4) * 100}
                      sx={{
                        height: 4,
                        borderRadius: 2,
                        backgroundColor: theme.palette.divider,
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: getPasswordStrengthColor(),
                        },
                      }}
                    />
                  </Box>
                )}

                {formType === "login" && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 2,
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                          color="primary"
                          size="small"
                        />
                      }
                      label={
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          Remember me
                        </Typography>
                      }
                    />
                    <Link
                      href="/forgot-password"
                      sx={{
                        typography: "body2",
                        color: "primary.main",
                        fontWeight: 500,
                        "&:hover": {
                          color: "primary.dark",
                        },
                      }}
                    >
                      Forgot password?
                    </Link>
                  </Box>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  endIcon={!loading && <ArrowForward />}
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 500,
                    mt: 1,
                    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    "&:hover": {
                      background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                    },
                  }}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : formType === "login" ? (
                    "Sign In"
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </Box>

              <Box sx={{ textAlign: "center", mt: 3 }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {formType === "login"
                    ? "Don't have an account?"
                    : "Already have an account?"}{" "}
                  <Button
                    onClick={toggleFormType}
                    sx={{
                      color: "primary.main",
                      fontWeight: 500,
                      textTransform: "none",
                      p: 0,
                      minWidth: "auto",
                      "&:hover": {
                        color: "primary.dark",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {formType === "login" ? "Sign up" : "Sign in"}
                  </Button>
                </Typography>
              </Box>
            </Paper>

            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                By continuing, you agree to our{" "}
                <Link
                  href="/terms"
                  sx={{
                    color: "primary.main",
                    fontWeight: 500,
                    "&:hover": {
                      color: "primary.dark",
                    },
                  }}
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  sx={{
                    color: "primary.main",
                    fontWeight: 500,
                    "&:hover": {
                      color: "primary.dark",
                    },
                  }}
                >
                  Privacy Policy
                </Link>
              </Typography>
            </Box>
          </Box>
        </Slide>
      </Box>
    </Fade>
  );
};

export default AuthForm;
