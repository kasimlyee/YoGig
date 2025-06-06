import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  useTheme,
  Link,
} from "@mui/material";
import { CustomButton } from "./UI/CustomButton";
import { useRouter } from "next/router";

/**
 * A form component for signing up as a creator or client.
 *
 * Renders a form with the following fields:
 * - User type (creator or client, as a dropdown)
 * - Email address
 * - Password
 * - Confirm password
 *
 * Handles the submission of the form by checking if passwords match,
 * simulating an API call by setting `loading` to true and redirecting
 * to the onboarding page after a 1.5 second delay.
 *
 * @returns {JSX.Element} The signup form component.*/
export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("creator");
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const router = useRouter();

  /**
   * Handles the submission of the signup form.
   *
   * Prevents default form submission, checks if passwords match,
   * and simulates an API call by setting `loading` to true and
   * redirecting to the onboarding page after a 1.5 second delay.
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      router.push("/onboarding");
    }, 1500);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <FormControl fullWidth margin="normal">
        <InputLabel id="user-type-label">I want to join as a</InputLabel>
        <Select
          labelId="user-type-label"
          id="user-type"
          value={userType}
          label="I want to join as a"
          onChange={(e) => setUserType(e.target.value)}
        >
          <MenuItem value="creator">Creator</MenuItem>
          <MenuItem value="client">Client</MenuItem>
        </Select>
      </FormControl>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="confirm-password"
        label="Confirm Password"
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        By signing up, you agree to our{" "}
        <Link href="/terms" color="primary">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" color="primary">
          Privacy Policy
        </Link>
        .
      </Typography>
      <CustomButton
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        loading={loading}
        sx={{ mt: 3, mb: 2 }}
      >
        Create Account
      </CustomButton>
      <Divider sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          OR
        </Typography>
      </Divider>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <CustomButton variant="outlined" color="primary" fullWidth>
          Continue with Google
        </CustomButton>
      </Box>
    </Box>
  );
};
