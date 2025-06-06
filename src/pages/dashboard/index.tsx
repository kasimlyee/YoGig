import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Avatar,
  Paper,
} from "@mui/material";
import {
  AttachMoney as MoneyIcon,
  TrendingUp as TrendUpIcon,
  Assignment as ContractsIcon,
  Star as StarIcon,
} from "@mui/icons-material";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import MobileNav from "@/components/layout/MobileNav";
import DashboardCard from "@/components/dashboard/DashboardCard";
import ProgressBar from "@/components/dashboard/Progressbar";
import SuccessRateCircle from "@/components/dashboard/SuccessRateCircle";

const Dashboard: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  return (
    <>
      <Head>
        <title>YoGig | Freelancer Dashboard</title>
        <meta name="description" content="YoGig Freelancer Dashboard" />
      </Head>

      <Box sx={{ display: "flex" }}>
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          toggleCollapse={toggleSidebar}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: {
              md: `calc(100% - ${isSidebarCollapsed ? "80px" : "250px"})`,
            },
          }}
        >
          <Topbar toggleMobileSidebar={toggleMobileSidebar} />
          <Container maxWidth="xl" sx={{ mt: 8, mb: 10 }}>
            {/* Welcome Section */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Welcome back, Lyee!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Here's what's happening with your freelancing today
              </Typography>
            </Box>

            {/* Stats Cards */}
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="col-span-1">
                <DashboardCard
                  title="This Month"
                  value="UGX 1,250,000"
                  icon={<MoneyIcon />}
                  color="yogig.primary"
                  trend="up"
                  trendValue="12% from last month"
                />
              </div>
              <div className="col-span-1">
                <DashboardCard
                  title="Total Earned"
                  value="UGX 8,750,000"
                  icon={<MoneyIcon />}
                  color="yogig.accent"
                />
              </div>
              <div className="col-span-1">
                <DashboardCard
                  title="Active Contracts"
                  value="3"
                  icon={<ContractsIcon />}
                  color="info.main"
                />
              </div>
              <div className="col-span-1">
                <DashboardCard
                  title="Job Success"
                  value="92%"
                  icon={<StarIcon />}
                  color="warning.main"
                  trend="up"
                  trendValue="2% from last month"
                />
              </div>
            </div>

            {/* Profile Strength & Success Rate */}
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="col-span-1 w-full md:col-span-6 md:w-1/2">
                <Paper sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Profile Strength
                  </Typography>
                  <ProgressBar value={75} label="Complete your profile" />
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Add these to complete your profile:
                    </Typography>
                    <ul style={{ color: "#6B7280", paddingLeft: 20 }}>
                      <li>
                        <Typography variant="body2" color="text.secondary">
                          Portfolio items
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2" color="text.secondary">
                          Skills verification
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2" color="text.secondary">
                          Education history
                        </Typography>
                      </li>
                    </ul>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        bgcolor: "yogig.primary",
                        "&:hover": { bgcolor: "yogig.primary" },
                      }}
                    >
                      Complete Profile
                    </Button>
                  </Box>
                </Paper>
              </div>
              <div className="col-span-1 w-full md:col-span-6 md:w-1/2">
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Job Success Score
                  </Typography>
                  <SuccessRateCircle value={92} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 2, textAlign: "center" }}
                  >
                    Based on client feedback and job completion rates
                  </Typography>
                </Paper>
              </div>
            </div>

            {/* Recent Jobs & Notifications */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-8">
                <Paper sx={{ p: 3, borderRadius: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      Recommended Jobs
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "yogig.primary",
                        borderColor: "yogig.primary",
                        "&:hover": { borderColor: "yogig.primary" },
                      }}
                    >
                      View All
                    </Button>
                  </Box>
                  {/* Job cards would go here */}
                  <Box sx={{ textAlign: "center", py: 4 }}>
                    <Typography variant="body1" color="text.secondary">
                      No recommended jobs at the moment
                    </Typography>
                  </Box>
                </Paper>
              </div>

              <div className="col-span-12 md:col-span-8">
                <Paper sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Notifications
                  </Typography>
                  {/* Notification items would go here */}
                  <Box sx={{ textAlign: "center", py: 4 }}>
                    <Typography variant="body1" color="text.secondary">
                      No new notifications
                    </Typography>
                  </Box>
                </Paper>
              </div>
            </div>
          </Container>
        </Box>
      </Box>
      <MobileNav />
    </>
  );
};

export default Dashboard;
