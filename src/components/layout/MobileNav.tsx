import React from "react";
import { useRouter } from "next/router";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Badge,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Work as WorkIcon,
  Description as ProposalsIcon,
  AccountBalanceWallet as WalletIcon,
  MoreHoriz as MoreIcon,
} from "@mui/icons-material";

const MobileNav: React.FC = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const navItems = [
    { label: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { label: "Jobs", icon: <WorkIcon />, path: "/jobs" },
    { label: "Proposals", icon: <ProposalsIcon />, path: "/proposals" },
    { label: "Wallet", icon: <WalletIcon />, path: "/wallet" },
    { label: "More", icon: <MoreIcon />, path: "/more" },
  ];

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "block", md: "none" },
        zIndex: 100,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          router.push(navItems[newValue].path);
        }}
      >
        {navItems.map((item, index) => (
          <BottomNavigationAction
            key={item.label}
            label={item.label}
            icon={
              item.label === "Proposals" ? (
                <Badge badgeContent={3} color="error">
                  {item.icon}
                </Badge>
              ) : (
                item.icon
              )
            }
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default MobileNav;
