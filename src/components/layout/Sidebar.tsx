import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
  Avatar,
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

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleCollapse }) => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

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
        width: isCollapsed ? 80 : 250,
        height: "100vh",
        bgcolor: "white",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        transition: "width 0.3s ease",
        position: "fixed",
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: isCollapsed ? "center" : "space-between",
          p: 2,
          height: 64,
          borderBottom: "1px solid #F3F4F6",
        }}
      >
        {!isCollapsed && (
          <Typography variant="h6" color="yogig.primary" fontWeight="bold">
            YoGig
          </Typography>
        )}
        <Box
          onClick={toggleCollapse}
          sx={{
            cursor: "pointer",
            color: "yogig.dark",
            "&:hover": { color: "yogig.primary" },
          }}
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Box>
      </Box>

      <Box sx={{ p: 2, display: isCollapsed ? "none" : "block" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar sx={{ bgcolor: "yogig.primary", mr: 2 }}>JD</Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight="medium">
              John Doe
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Freelancer
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider />

      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => router.push(item.path)}
            sx={{
              "&:hover": { backgroundColor: "#F3F4F6" },
              borderRadius: 1,
              mx: 1,
              my: 0.5,
              backgroundColor:
                router.pathname === item.path ? "#EEF2FF" : "transparent",
              color:
                router.pathname === item.path ? "yogig.primary" : "yogig.dark",
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
            {!isCollapsed && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
