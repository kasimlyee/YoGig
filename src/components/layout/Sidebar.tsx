import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Box,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  useTheme,
  alpha,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Work as WorkIcon,
  Description as ProposalsIcon,
  Assignment as ContractsIcon,
  AccountBalanceWallet as WalletIcon,
  Gavel as DisputesIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { SxProps, Theme } from "@mui/material";

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  user: {
    name: string;
    role: string;
    avatar?: string;
  };
  sx?: SxProps<Theme>;
}

const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  toggleCollapse,
  user,
  sx = {},
}) => {
  const router = useRouter();
  const theme = useTheme();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Jobs", icon: <WorkIcon />, path: "/jobs" },
    { text: "Proposals", icon: <ProposalsIcon />, path: "/proposals" },
    { text: "Contracts", icon: <ContractsIcon />, path: "/contracts" },
    { text: "Wallet", icon: <WalletIcon />, path: "/wallet" },
    { text: "Disputes", icon: <DisputesIcon />, path: "/disputes" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
    { text: "Logout", icon: <LogoutIcon />, path: "/logout" },
  ];

  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        width: isCollapsed ? theme.spacing(9) : theme.spacing(30),
        ...sx,
        height: "100vh",
        bgcolor: "background.paper",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: theme.zIndex.drawer,

        flexDirection: "column",
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: isCollapsed ? "center" : "space-between",
          p: 2,
          height: 64,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        {!isCollapsed && (
          <Typography
            variant="h6"
            color="primary.main"
            fontWeight={600}
            sx={{ fontFamily: '"Poppins", sans-serif' }}
          >
            YoGig
          </Typography>
        )}
        <Tooltip title={isCollapsed ? "Expand" : "Collapse"} arrow>
          <IconButton
            onClick={toggleCollapse}
            size="small"
            sx={{
              color: "text.secondary",
              "&:hover": {
                color: "primary.main",
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              },
            }}
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </Tooltip>
      </Box>

      {/* User Profile */}
      {!isCollapsed && (
        <>
          <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                width: 40,
                height: 40,
                mr: 2,
                fontSize: "1rem",
              }}
              src={user.avatar}
            >
              {user.name.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="subtitle1" fontWeight={500}>
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.role}
              </Typography>
            </Box>
          </Box>
          <Divider />
        </>
      )}

      {/* Menu Items */}
      <List sx={{ flexGrow: 1, overflow: "auto", py: 0 }}>
        {menuItems.map((item) => {
          const isActive = router.pathname === item.path;
          return (
            <Tooltip
              key={item.text}
              title={isCollapsed ? item.text : ""}
              placement="right"
              arrow
            >
              <ListItem>
                <ListItemButton
                  onClick={() => router.push(item.path)}
                  sx={{
                    px: isCollapsed ? 2.5 : 3,
                    py: 1.25,
                    mx: 1,
                    my: 0.5,
                    borderRadius: 1,
                    backgroundColor: isActive
                      ? alpha(theme.palette.primary.main, 0.1)
                      : "transparent",
                    color: isActive ? "primary.main" : "text.secondary",
                    "&:hover": {
                      backgroundColor: isActive
                        ? alpha(theme.palette.primary.main, 0.15)
                        : alpha(theme.palette.action.hover, 0.05),
                    },
                    "& .MuiListItemIcon-root": {
                      minWidth: isCollapsed ? "auto" : 36,
                      color: "inherit",
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {!isCollapsed && (
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 500 : 400,
                        fontSize: "0.875rem",
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            </Tooltip>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;
