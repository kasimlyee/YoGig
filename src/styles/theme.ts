import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#4F46E5", // Indigo
    },
    secondary: {
      main: "#10B981", // Emerald
    },
    background: {
      default: "#F3F4F6", // Light Gray
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1F2937", // Midnight
      secondary: "#6B7280",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 20px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366F1", // Lighter Indigo for better visibility
    },
    secondary: {
      main: "#10B981", // Same Emerald
    },
    background: {
      default: "#111827",
      paper: "#1F2937", // Midnight
    },
    text: {
      primary: "#F9FAFB",
      secondary: "#E5E7EB",
    },
  },
  typography: lightTheme.typography,
  components: lightTheme.components,
});
