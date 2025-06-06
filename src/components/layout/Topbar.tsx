import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  InputBase,
  Avatar,
  Box,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

interface TopbarProps {
  toggleMobileSidebar: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ toggleMobileSidebar }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: "calc(100% - 250px)" },
        ml: { md: "250px" },
        bgcolor: "white",
        color: "yogig.dark",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
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

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "yogig.light",
            borderRadius: 1,
            px: 2,
            py: 0.5,
            mx: 2,
            flexGrow: 1,
            maxWidth: 500,
          }}
        >
          <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
          <InputBase
            placeholder="Search..."
            sx={{ width: "100%" }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar sx={{ bgcolor: "yogig.primary", ml: 2 }}>JD</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
