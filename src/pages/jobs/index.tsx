import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Typography,
  useTheme,
  TextField,
  InputAdornment,
  Button,
  Tabs,
  Tab,
  Paper,
  Grid,
  alpha,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
} from "@mui/icons-material";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import MobileNav from "../../components/layout/MobileNav";
import JobCard from "../../components/jobs/JobCard";
import { Job } from "../../interfaces";

const Jobs: React.FC = () => {
  const theme = useTheme();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  // Load jobs data
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/mock_data/jobs.json");
        const data = await response.json();
        setJobs(data.jobs);
        setFilteredJobs(data.jobs);
      } catch (error) {
        console.error("Error loading jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
      setFilteredJobs(filtered);
    }
  }, [searchQuery, jobs]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    // You can add tab-based filtering here
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleApply = (jobId: number) => {
    console.log(`Applying for job ${jobId}`);
    // Would typically open a modal or navigate to application page
  };

  return (
    <>
      <Head>
        <title>YoGig | Jobs</title>
        <meta name="description" content="Browse available jobs on YoGig" />
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
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                fontWeight={600}
                gutterBottom
                sx={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Find Your Next Gig
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {filteredJobs.length} jobs available
              </Typography>
            </Box>

            <Paper
              sx={{
                p: 3,
                mb: 4,
                borderRadius: 2,
                bgcolor: "background.paper",
                boxShadow: theme.shadows[1],
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    placeholder="Search jobs..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon color="action" />
                        </InputAdornment>
                      ),
                      sx: {
                        backgroundColor: "background.default",
                        borderRadius: 1,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<FilterIcon />}
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
                    Filters
                  </Button>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: "primary.main",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    }}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Paper>

            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              sx={{ mb: 3 }}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="All Jobs" />
              <Tab label="Recommended" />
              <Tab label="Saved" />
              <Tab label="Recent" />
            </Tabs>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    title={job.title}
                    description={job.description}
                    budget={job.budget}
                    location={job.location}
                    postedTime={job.postedTime}
                    tags={job.tags}
                    //clientName={job.clientName}
                    onApply={() => handleApply(job.id)}
                  />
                ))
              ) : (
                <Paper
                  sx={{
                    textAlign: "center",
                    p: 4,
                    bgcolor: "background.paper",
                  }}
                >
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    No jobs found matching your search
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Try adjusting your search criteria
                  </Typography>
                </Paper>
              )}
            </Box>
          </Container>
        </Box>
      </Box>
      <MobileNav />
    </>
  );
};

export default Jobs;
