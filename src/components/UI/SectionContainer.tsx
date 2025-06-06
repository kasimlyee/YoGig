import { Box, BoxProps, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface SectionContainerProps extends BoxProps {
  children: ReactNode;
}

/**
 * SectionContainer component renders a responsive section container with
 * consistent padding and a max-width of 1280px.
 *
 * - Automatically adjusts padding based on the screen size, with more padding
 *   on larger screens.
 * - Includes an inner container with a max-width of 1280px, and centered
 *   horizontally.
 *
 * @param {ReactNode} children - The content of the section.
 * @param {BoxProps} [props] - Additional props to pass to the outer Box
 *   component.
 * @returns {JSX.Element} The SectionContainer component.
 */
export const SectionContainer = ({
  children,
  sx,
  ...props
}: SectionContainerProps) => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        px: 2,
        [theme.breakpoints.up("sm")]: {
          py: 12,
          px: 4,
        },
        [theme.breakpoints.up("md")]: {
          py: 15,
        },
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
