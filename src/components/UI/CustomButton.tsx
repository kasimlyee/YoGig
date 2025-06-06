import { Button, ButtonProps, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
}

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontWeight: 600,
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
  },
  "&.MuiButton-containedPrimary": {
    backgroundColor: theme.palette.primary.main,
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  "&.MuiButton-outlinedPrimary": {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "rgba(79, 70, 229, 0.04)",
    },
  },
}));

/**
 * CustomButton component renders a styled MUI Button with additional features.
 *
 * @param {React.ReactNode} children - The content of the button.
 * @param {boolean} [loading=false] - If true, a loading spinner is displayed and the button is disabled.
 * @param {boolean} [disabled] - If true, the button is disabled.
 * @param {React.ReactNode} [startIcon] - Element placed before the children if not in loading state.
 * @param {...ButtonProps} props - Additional props to pass to the MUI Button.
 * @returns {JSX.Element} A styled button component with optional loading state.
 */

export const CustomButton = ({
  children,
  loading = false,
  disabled,
  startIcon,
  ...props
}: CustomButtonProps) => {
  return (
    <StyledButton
      disabled={disabled || loading}
      startIcon={!loading ? startIcon : undefined}
      {...props}
    >
      {loading ? (
        <>
          <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
          {children}
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
};
