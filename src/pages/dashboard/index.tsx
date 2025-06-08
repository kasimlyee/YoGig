import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  useTheme,
  Typography,
  Button,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  alpha,
  IconButton,
  Divider,
  Badge,
  Avatar,
  Tabs,
  Tab,
  Chip,
} from "@mui/material";
import {
  AttachMoney as MoneyIcon,
  TrendingUp as TrendUpIcon,
  Assignment as ContractsIcon,
  Star as StarIcon,
  Notifications as NotificationsIcon,
  Work as WorkIcon,
  Today as CalendarIcon,
  AccessTime as ClockIcon,
  WbSunny as WeatherIcon,
  MoreVert as MoreIcon,
  Add as AddIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
  LocationOn as LocationIcon,
  AccessTime,
} from "@mui/icons-material";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import MobileNav from "@/components/layout/MobileNav";
import DashboardCard from "@/components/dashboard/DashboardCard";
import ProgressBar from "@/components/dashboard/Progressbar";
import SuccessRateCircle from "@/components/dashboard/SuccessRateCircle";
import greet from "@/utils/greet";

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState({
    temp: 24,
    condition: "Sunny",
    icon: <WeatherIcon color="warning" />,
    location: "Kampala",
  });
  const [activeTab, setActiveTab] = useState(0);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New message",
      description: "Client X sent you a message about your proposal",
      time: "10 min ago",
      read: false,
      icon: <InfoIcon color="info" />,
    },
    {
      id: 2,
      title: "Payment received",
      description: "UGX 350,000 from Client Y",
      time: "2 hours ago",
      read: true,
      icon: <CheckCircleIcon color="success" />,
    },
    {
      id: 3,
      title: "Deadline reminder",
      description: "Project Z deadline is in 3 days",
      time: "1 day ago",
      read: true,
      icon: <WarningIcon color="warning" />,
    },
  ]);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate weather data fetch
  useEffect(() => {
    const fetchWeather = async () => {
      setTimeout(() => {
        const conditions = ["Sunny", "Cloudy", "Rainy", "Partly Cloudy"];
        const random = Math.floor(Math.random() * conditions.length);
        setWeather({
          temp: Math.floor(Math.random() * 10) + 20,
          condition: conditions[random],
          icon: <WeatherIcon color={random % 2 === 0 ? "warning" : "action"} />,
          location: "Kampala",
        });
      }, 1000);
    };
    fetchWeather();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const markNotificationAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Client Meeting",
      time: "10:00 AM",
      date: "Today",
      location: "Zoom",
    },
    {
      id: 2,
      title: "Project Deadline",
      time: "11:59 PM",
      date: "Tomorrow",
      location: "",
    },
    {
      id: 3,
      title: "Team Sync",
      time: "2:30 PM",
      date: "Fri, Jun 10",
      location: "Office",
    },
  ];

  return (
    <>
      <Head>
        <title>YoGig | Freelancer Dashboard</title>
        <meta name="description" content="YoGig Freelancer Dashboard" />
      </Head>

      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          toggleCollapse={toggleSidebar}
          user={{
            name: "Kasim Lyee",
            role: "Creator",
          }}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: {
              md: `calc(100% - ${
                isSidebarCollapsed ? theme.spacing(9) : theme.spacing(30)
              })`,
            },
            ml: {
              md: isSidebarCollapsed ? theme.spacing(9) : theme.spacing(30),
            },
            transition: theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            backgroundColor: "background.default",
          }}
        >
          <Topbar
            toggleMobileSidebar={toggleMobileSidebar}
            toggleTheme={() => {}}
            darkMode={false}
            user={{
              name: "Kasim Lyee",
              email: "kasiimlyee@gmail.com",
              role: "Creator",
            }}
          />
          <Container maxWidth="xl" sx={{ mt: 8, mb: 10 }}>
            {/* Welcome Section with Time and Weather */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h4"
                  fontWeight={600}
                  gutterBottom
                  sx={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {greet("Kasim Lyee")}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Here's what's happening with your freelancing today
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderRadius: 2,
                        bgcolor: "background.paper",
                        height: "100%",
                      }}
                    >
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {formatDate(currentTime)}
                        </Typography>
                        <Typography variant="h5" fontWeight={600}>
                          {formatTime(currentTime)}
                        </Typography>
                      </Box>
                      <ClockIcon color="primary" sx={{ fontSize: 32 }} />
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderRadius: 2,
                        bgcolor: "background.paper",
                        height: "100%",
                      }}
                    >
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {weather.location}
                        </Typography>
                        <Typography variant="h5" fontWeight={600}>
                          {weather.temp}°C
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {weather.condition}
                        </Typography>
                      </Box>
                      {weather.icon}
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Stats Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6} md={3}>
                <DashboardCard
                  title="This Month"
                  value="UGX 1,250,000"
                  icon={<MoneyIcon />}
                  color="primary.main"
                  trend="up"
                  trendValue="12% from last month"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <DashboardCard
                  title="Total Earned"
                  value="UGX 8,750,000"
                  icon={<MoneyIcon />}
                  color="secondary.main"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <DashboardCard
                  title="Active Contracts"
                  value="3"
                  icon={<ContractsIcon />}
                  color="info.main"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <DashboardCard
                  title="Job Success"
                  value="92%"
                  icon={<StarIcon />}
                  color="warning.main"
                  trend="up"
                  trendValue="2% from last month"
                />
              </Grid>
            </Grid>

            {/* Profile Strength & Success Rate */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    height: "100%",
                    bgcolor: "background.paper",
                  }}
                >
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Profile Strength
                  </Typography>
                  <ProgressBar value={75} label="Complete your profile" />
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Add these to complete your profile:
                    </Typography>
                    <List dense sx={{ py: 0 }}>
                      {[
                        "Portfolio items",
                        "Skills verification",
                        "Education history",
                      ].map((item) => (
                        <ListItem key={item} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <TrendUpIcon fontSize="small" color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                              variant: "body2",
                              color: "text.secondary",
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        bgcolor: "primary.main",
                        "&:hover": {
                          bgcolor: "primary.dark",
                        },
                      }}
                    >
                      Complete Profile
                    </Button>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    bgcolor: "background.paper",
                  }}
                >
                  <Typography variant="h6" fontWeight={600} gutterBottom>
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
              </Grid>
            </Grid>

            {/* Calendar Events & Notifications */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: "background.paper",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600}>
                      Upcoming Events
                    </Typography>
                    <Button
                      startIcon={<AddIcon />}
                      variant="outlined"
                      sx={{
                        color: "primary.main",
                        borderColor: "primary.main",
                        "&:hover": {
                          borderColor: "primary.dark",
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.05
                          ),
                        },
                      }}
                    >
                      Add Event
                    </Button>
                  </Box>
                  <List sx={{ py: 0 }}>
                    {upcomingEvents.map((event) => (
                      <React.Fragment key={event.id}>
                        <ListItem
                          sx={{
                            px: 0,
                            py: 2,
                            display: "flex",
                            alignItems: "flex-start",
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 48, mt: 1 }}>
                            <CalendarIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography fontWeight={600}>
                                {event.title}
                              </Typography>
                            }
                            secondary={
                              <>
                                <Box
                                  component="span"
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <AccessTime
                                    fontSize="small"
                                    sx={{
                                      mr: 0.5,
                                      fontSize: 16,
                                      color: "text.secondary",
                                    }}
                                  />
                                  {event.time} • {event.date}
                                  {event.location && (
                                    <>
                                      <LocationIcon
                                        fontSize="small"
                                        sx={{
                                          ml: 1,
                                          mr: 0.5,
                                          fontSize: 16,
                                          color: "text.secondary",
                                        }}
                                      />
                                      {event.location}
                                    </>
                                  )}
                                </Box>
                              </>
                            }
                          />
                          <IconButton edge="end">
                            <MoreIcon />
                          </IconButton>
                        </ListItem>
                        <Divider />
                      </React.Fragment>
                    ))}
                  </List>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: "background.paper",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <NotificationsIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6" fontWeight={600}>
                        Notifications
                      </Typography>
                    </Box>
                    <Chip
                      label={`${
                        notifications.filter((n) => !n.read).length
                      } New`}
                      color="primary"
                      size="small"
                    />
                  </Box>
                  <List sx={{ py: 0 }}>
                    {notifications.map((notification) => (
                      <React.Fragment key={notification.id}>
                        <ListItem
                          sx={{
                            px: 0,
                            py: 1.5,
                            bgcolor: notification.read
                              ? "inherit"
                              : alpha(theme.palette.primary.main, 0.05),
                            borderRadius: 1,
                            cursor: "pointer",
                            "&:hover": {
                              bgcolor: alpha(theme.palette.primary.main, 0.1),
                            },
                          }}
                          onClick={() =>
                            markNotificationAsRead(notification.id)
                          }
                        >
                          <ListItemIcon sx={{ minWidth: 40 }}>
                            {notification.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography fontWeight={600}>
                                {notification.title}
                              </Typography>
                            }
                            secondary={
                              <>
                                {notification.description}
                                <Typography
                                  variant="caption"
                                  display="block"
                                  color="text.secondary"
                                >
                                  {notification.time}
                                </Typography>
                              </>
                            }
                          />
                          {!notification.read && (
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                bgcolor: "primary.main",
                              }}
                            />
                          )}
                        </ListItem>
                        <Divider />
                      </React.Fragment>
                    ))}
                  </List>
                  <Button
                    fullWidth
                    sx={{ mt: 2, textTransform: "none" }}
                    color="primary"
                  >
                    View All Notifications
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <MobileNav />
    </>
  );
};

export default Dashboard;
