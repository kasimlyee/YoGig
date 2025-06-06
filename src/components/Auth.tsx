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
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  ArrowForward,
  Person,
  Email,
  Lock,
} from "@mui/icons-material";
import Link from "next/link";
import { AuthFormData, AuthFormErrors, AuthFormType } from "@/types/auth";

interface AuthFormProps {
  initialFormType?: AuthFormType;
  clientId?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  initialFormType = "login",
  clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
}) => {
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
        return "bg-red-500";
      case 2:
        return "bg-amber-500";
      case 3:
        return "bg-blue-500";
      case 4:
        return "bg-green-500";
      default:
        return "bg-gray-200";
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
      <Box className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white py-8 px-4 sm:px-6 lg:px-8">
        <Slide in={animate} direction="up" timeout={300}>
          <Box className="w-full max-w-md">
            <Box className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <Box className="text-center mb-8">
                <Box className="flex justify-center mb-4">
                  <Box className="bg-indigo-600 p-3 rounded-xl shadow-lg">
                    <Typography
                      variant="h4"
                      className="font-bold text-white"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      YoGig
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  className="text-gray-800 font-medium"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {formType === "login" ? "Welcome back!" : "Join us today"}
                </Typography>
                <Typography variant="body2" className="text-gray-500 mt-2">
                  {formType === "login"
                    ? "Sign in to access your account"
                    : "Create an account to get started"}
                </Typography>
              </Box>

              <GoogleOAuthProvider clientId={clientId}>
                <Box className="mb-6">
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
                className="my-6"
                sx={{
                  "&::before, &::after": { borderColor: "rgba(0, 0, 0, 0.12)" },
                }}
              >
                <Typography
                  variant="body2"
                  className="text-gray-400 px-2 bg-white"
                >
                  or continue with email
                </Typography>
              </Divider>
              <div></div>
              <Box
                component="form"
                className="space-y-5"
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
                          <Person className="text-gray-400" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    size="medium"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        "& fieldset": {
                          borderColor: "#e5e7eb",
                        },
                        "&:hover fieldset": {
                          borderColor: "#818cf8",
                        },
                      },
                    }}
                  />
                )}
                <div></div>
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
                        <Email className="text-gray-400" />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  size="medium"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      "& fieldset": {
                        borderColor: "#e5e7eb",
                      },
                      "&:hover fieldset": {
                        borderColor: "#818cf8",
                      },
                    },
                  }}
                />
                <div></div>
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
                        <Lock className="text-gray-400" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          size="small"
                          sx={{ color: "rgba(0, 0, 0, 0.54)" }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  size="medium"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      "& fieldset": {
                        borderColor: "#e5e7eb",
                      },
                      "&:hover fieldset": {
                        borderColor: "#818cf8",
                      },
                    },
                  }}
                />
                <div></div>
                {formType === "signup" && formData.password && (
                  <Box className="space-y-2">
                    <Box className="flex items-center justify-between">
                      <Typography variant="caption" className="text-gray-600">
                        Password strength:{" "}
                        <span className="font-medium">
                          {getPasswordStrengthLabel()}
                        </span>
                      </Typography>
                      <Typography variant="caption" className="text-gray-400">
                        {formData.password.length}/8
                      </Typography>
                    </Box>
                    <Box className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <Box
                        className={`h-full rounded-full ${getPasswordStrengthColor()} transition-all duration-300`}
                        style={{ width: `${(passwordStrength / 4) * 100}%` }}
                      />
                    </Box>
                  </Box>
                )}
                {formType === "login" && (
                  <Box className="flex items-center justify-between">
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
                        <Typography variant="body2" className="text-gray-600">
                          Remember me
                        </Typography>
                      }
                    />
                    <Link
                      href="/forgot-password"
                      className="text-sm text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
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
                  className={`py-3 rounded-xl text-white font-medium ${
                    loading ? "opacity-90" : ""
                  }`}
                  disabled={loading}
                  endIcon={!loading && <ArrowForward />}
                  sx={{
                    background: "linear-gradient(to right, #6366f1, #8b5cf6)",
                    boxShadow: "0 4px 6px rgba(99, 102, 241, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(to right, #4f46e5, #7c3aed)",
                      boxShadow: "0 6px 8px rgba(79, 70, 229, 0.4)",
                    },
                    "&:disabled": {
                      background: "#e5e7eb",
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

              <Box className="text-center mt-6">
                <Typography variant="body2" className="text-gray-600">
                  {formType === "login"
                    ? "Don't have an account?"
                    : "Already have an account?"}{" "}
                  <Button
                    onClick={toggleFormType}
                    className="text-indigo-600 hover:text-indigo-500 font-medium"
                    size="small"
                    sx={{ textTransform: "none" }}
                  >
                    {formType === "login" ? "Sign up" : "Sign in"}
                  </Button>
                </Typography>
              </Box>
            </Box>

            <Box className="text-center mt-6">
              <Typography variant="body2" className="text-gray-500">
                By continuing, you agree to our{" "}
                <Link
                  href="/terms"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
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
