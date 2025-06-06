import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useTheme,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { CustomButton } from "../UI/CustomButton";
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

/**
 * The Header component renders the main navigation bar of the website.
 * It contains the logo, navigation links, and a theme toggle button.
 * Now with responsive design and mobile-friendly features.
 *
 * @param {Object} props - The props of the component.
 * @param {Function} props.toggleTheme - Function to toggle the application theme.
 * @param {Boolean} props.darkMode - The current state of the application theme.
 * @returns {React.ReactElement} The Header component.
 */
export const Header = ({ toggleTheme, darkMode }: HeaderProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const drawerContent = (
    <Box sx={{ width: 250, padding: 2 }}>
      <List>
        <ListItem component={Link} href="/login">
          <ListItemText primary="Sign In" />
        </ListItem>
        <Divider />
        <ListItem component={Link} href="/signup">
          <ListItemText primary="Sign Up" />
        </ListItem>
      </List>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <IconButton onClick={toggleTheme} color="inherit">
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        borderBottom: `1px solid ${theme.palette.divider}`,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        <Link href="/" passHref legacyBehavior>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              flexGrow: isMobile ? 1 : 0,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                color: "primary.main",
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
              }}
            >
              YoGig
            </Typography>
            {!isMobile && (
              <Typography
                variant="subtitle2"
                sx={{
                  ml: 1,
                  color: "secondary.main",
                  fontFamily: '"Poppins", sans-serif',
                  display: { xs: "none", sm: "block" },
                }}
              >
                Your Skill. Your Terms.
              </Typography>
            )}
          </Box>
        </Link>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                "& .MuiDrawer-paper": {
                  backgroundColor: theme.palette.background.paper,
                },
              }}
            >
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 2 },
            }}
          >
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{
                "&:hover": {
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <Link href="/login" passHref legacyBehavior>
              <CustomButton
                variant="outlined"
                color="primary"
                sx={{
                  px: { xs: 1, md: 2 },
                  fontSize: { xs: "0.75rem", md: "0.875rem" },
                }}
              >
                Sign In
              </CustomButton>
            </Link>
            <Link href="/signup" passHref legacyBehavior>
              <CustomButton
                variant="contained"
                color="primary"
                sx={{
                  px: { xs: 1, md: 2 },
                  fontSize: { xs: "0.75rem", md: "0.875rem" },
                  "&:hover": {
                    boxShadow: `0 4px 8px ${theme.palette.primary.main}40`,
                  },
                }}
              >
                Sign Up
              </CustomButton>
            </Link>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
