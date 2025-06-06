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
  Add as AddIcon,
} from "@mui/icons-material";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import MobileNav from "../../components/layout/MobileNav";
import ProposalListItem from "../../components/proposals/ProposalistItem";

const Proposals: React.FC = () => {
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

  // Sample proposal data
  const proposals = [
    {
      id: 1,
      jobTitle: "Website Development",
      clientName: "ABC Company",
      submittedDate: "2 days ago",
      status: "viewed",
      budget: "UGX 2,500,000",
    },
    {
      id: 2,
      jobTitle: "Mobile App Design",
      clientName: "XYZ Tech",
      submittedDate: "1 week ago",
      status: "accepted",
      budget: "UGX 1,800,000",
    },
    {
      id: 3,
      jobTitle: "Content Writing",
      clientName: "Media Solutions",
      submittedDate: "3 days ago",
      status: "sent",
      budget: "UGX 800,000",
    },
    {
      id: 4,
      jobTitle: "Social Media Management",
      clientName: "Brand Agency",
      submittedDate: "2 weeks ago",
      status: "rejected",
      budget: "UGX 1,200,000",
    },
  ];

  const handleViewProposal = (proposalId: number) => {
    console.log(`Viewing proposal ${proposalId}`);
    // Would typically open a modal or navigate to proposal details
  };

  const handleEditProposal = (proposalId: number) => {
    console.log(`Editing proposal ${proposalId}`);
    // Would typically open an edit modal
  };

  const handleNewProposal = () => {
    console.log("Creating new proposal");
    // Would typically open a modal or navigate to new proposal page
  };

  return (
    <>
      <Head>
        <title>YoGig | Proposals</title>
        <meta name="description" content="Manage your proposals on YoGig" />
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
                Your Proposals
              </Typography>
              <Typography variant="body1" color="text.secondary">
                View and manage your submitted proposals
              </Typography>
            </Box>

            <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 md:col-span-8">
                  <TextField
                    fullWidth
                    placeholder="Search proposals..."
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
                <div className="col-span-6 md:col-span-2">
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
                <div className="col-span-6 md:col-span-2">
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleNewProposal}
                    sx={{
                      bgcolor: "yogig.primary",
                      "&:hover": { bgcolor: "yogig.primary" },
                    }}
                  >
                    New
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
              <Tab label="All" />
              <Tab label="Sent" />
              <Tab label="Viewed" />
              <Tab label="Accepted" />
              <Tab label="Rejected" />
            </Tabs>

            <Box>
              {proposals.map((proposal) => (
                <ProposalListItem
                  key={proposal.id}
                  jobTitle={proposal.jobTitle}
                  clientName={proposal.clientName}
                  submittedDate={proposal.submittedDate}
                  status={
                    proposal.status as
                      | "sent"
                      | "viewed"
                      | "accepted"
                      | "rejected"
                  }
                  budget={proposal.budget}
                  onView={() => handleViewProposal(proposal.id)}
                  onEdit={() => handleEditProposal(proposal.id)}
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

export default Proposals;
