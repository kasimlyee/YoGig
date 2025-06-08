import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  InputBase,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Tooltip,
  styled,
  alpha,
  useTheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
  Help as HelpIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Apps as AppsIcon,
} from "@mui/icons-material";
import dynamic from "next/dynamic";
import { useThemeContext } from "@/context/ThemeContext";

interface TopbarProps {
  toggleMobileSidebar: () => void;
  toggleTheme: () => void;
  darkMode: boolean;
  user: {
    name: string;
    email: string;
    avatar?: string;
    role: string;
  };
}
const ClientOnlyAvatar = dynamic(
  () => import("../../components/ClientOnlyAvatar"),
  {
    ssr: false,
  }
);

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "24ch",
    },
  },
}));

const Topbar: React.FC<TopbarProps> = ({ toggleMobileSidebar, user }) => {
  const { darkMode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          width: 280,
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.1))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
    >
      <Box sx={{ px: 2, py: 1.5 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </Box>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <PersonIcon fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <MailIcon fontSize="small" />
        </ListItemIcon>
        Messages
        <Badge badgeContent={4} color="primary" sx={{ ml: "auto" }} />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <HelpIcon fontSize="small" />
        </ListItemIcon>
        Help Center
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          toggleTheme;
        }}
      >
        <ListItemIcon>
          {darkMode ? (
            <LightModeIcon fontSize="small" />
          ) : (
            <DarkModeIcon fontSize="small" />
          )}
        </ListItemIcon>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        Sign out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      PaperProps={{
        sx: {
          width: 220,
        },
      }}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
        </IconButton>
        <Typography>Messages</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={17} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Typography>Notifications</Typography>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ClientOnlyAvatar user={user} />
        </IconButton>
        <Typography>Profile</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={toggleTheme}>
        <ListItemIcon>
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </ListItemIcon>
        <Typography>{darkMode ? "Light Mode" : "Dark Mode"}</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${theme.spacing(32)})` },
        ml: { md: theme.spacing(32) },
        bgcolor: "background.paper",
        color: "text.primary",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        zIndex: theme.zIndex.drawer + 1,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleMobileSidebar}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: "none", md: "block" },
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
          }}
        >
          Dashboard
        </Typography>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
          }}
        >
          <Tooltip title="Applications">
            <IconButton size="large" color="inherit">
              <AppsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Messages">
            <IconButton size="large" color="inherit">
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton size="large" color="inherit">
              <Badge badgeContent={17} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Toggle theme">
            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? (
                <LightModeIcon sx={{ color: theme.palette.warning.light }} />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
          </Tooltip>
          <IconButton
            edge="end"
            size="large"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
              src={user.avatar}
              alt={user.name}
            >
              {user.name.charAt(0)}
            </Avatar>
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {renderMobileMenu}
      {renderMenu}
    </AppBar>
  );
};

export default Topbar;
