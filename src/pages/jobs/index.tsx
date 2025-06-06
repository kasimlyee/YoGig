import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Button,
  Tabs,
  Tab,
  Paper,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
} from "@mui/icons-material";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import MobileNav from "../../components/layout/MobileNav";
import JobCard from "../../components/jobs/JobCard";

const Jobs: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Website Development",
      description:
        "Looking for a skilled web developer to build a responsive e-commerce website with React and Node.js.",
      budget: "UGX 2,500,000",
      location: "Remote",
      postedTime: "2 days ago",
      tags: ["React", "Node.js", "MongoDB", "E-commerce"],
    },
    {
      id: 2,
      title: "Mobile App Design",
      description:
        "Need a UI/UX designer to create wireframes and prototypes for a fitness mobile application.",
      budget: "UGX 1,800,000",
      location: "Kampala",
      postedTime: "1 week ago",
      tags: ["UI/UX", "Figma", "Mobile Design"],
    },
    {
      id: 3,
      title: "Content Writing",
      description:
        "Looking for a content writer to create blog posts about technology trends in Africa.",
      budget: "UGX 800,000",
      location: "Remote",
      postedTime: "3 days ago",
      tags: ["Content Writing", "Blogging", "Technology"],
    },
  ];

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
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Find Your Next Gig
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Browse available jobs that match your skills
              </Typography>
            </Box>

            <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 md:col-span-6">
                  <TextField
                    fullWidth
                    placeholder="Search jobs..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="col-span-6 md:col-span-3">
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<FilterIcon />}
                    sx={{
                      color: "yogig.primary",
                      borderColor: "yogig.primary",
                      "&:hover": { borderColor: "yogig.primary" },
                    }}
                  >
                    Filters
                  </Button>
                </div>
                <div className="col-span-6 md:col-span-3">
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: "yogig.primary",
                      "&:hover": { bgcolor: "yogig.primary" },
                    }}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </Paper>

            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              sx={{ mb: 3 }}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="All Jobs" />
              <Tab label="Recommended" />
              <Tab label="Saved" />
              <Tab label="Recent" />
            </Tabs>

            <Box>
              {jobs.map((job) => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  description={job.description}
                  budget={job.budget}
                  location={job.location}
                  postedTime={job.postedTime}
                  tags={job.tags}
                  onApply={() => handleApply(job.id)}
                />
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
      <MobileNav />
    </>
  );
};

export default Jobs;
