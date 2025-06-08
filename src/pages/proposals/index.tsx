import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Tooltip,
  alpha,
  Tabs,
  Tab,
  Paper,
  useTheme,
  IconButton,
  Chip,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  Add as AddIcon,
  Sort as SortIcon,
  Refresh as RefreshIcon,
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import MobileNav from "../../components/layout/MobileNav";
import ProposalListItem from "../../components/proposals/ProposalistItem";

const Proposals: React.FC = () => {
  const theme = useTheme();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);

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

  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
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
      isUnread: true,
    },
    {
      id: 2,
      jobTitle: "Mobile App Design",
      clientName: "XYZ Tech",
      submittedDate: "1 week ago",
      status: "accepted",
      budget: "UGX 1,800,000",
      isUnread: false,
    },
    {
      id: 3,
      jobTitle: "Content Writing",
      clientName: "Media Solutions",
      submittedDate: "3 days ago",
      status: "sent",
      budget: "UGX 800,000",
      isUnread: false,
    },
    {
      id: 4,
      jobTitle: "Social Media Management",
      clientName: "Brand Agency",
      submittedDate: "2 weeks ago",
      status: "rejected",
      budget: "UGX 1,200,000",
      isUnread: true,
    },
  ];

  const filteredProposals = proposals.filter((proposal) => {
    if (searchQuery === "") return true;
    return (
      proposal.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proposal.clientName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

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

  const handleRefresh = () => {
    console.log("Refreshing proposals");
    // Would typically refetch data
  };

  return (
    <>
      <Head>
        <title>YoGig | Proposals</title>
        <meta name="description" content="Manage your proposals on YoGig" />
      </Head>

      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          toggleCollapse={toggleSidebar}
          user={{
            name: "Kasim Lyee",
            role: "Creator",
          }}
          sx={{
            display: { xs: "none", md: "block" }, // Hidden on mobile, shown on desktop
            width: isSidebarCollapsed ? theme.spacing(9) : theme.spacing(30),
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
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
                Your Proposals
              </Typography>
              <Typography variant="body1" color="text.secondary">
                View and manage your submitted proposals
              </Typography>
            </Box>

            <Paper
              sx={{
                p: 3,
                mb: 4,
                borderRadius: 2,
                boxShadow: theme.shadows[1],
                backgroundColor: "background.paper",
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid xs={12} md={8} component="div">
                  <TextField
                    fullWidth
                    placeholder="Search proposals..."
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
                <Grid xs={12} md={4} component="div">
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
                <Grid xs={12} md={4} component="div">
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleNewProposal}
                    sx={{
                      backgroundColor: "primary.main",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                      },
                    }}
                  >
                    New
                  </Button>
                </Grid>
              </Grid>
            </Paper>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  "& .MuiTab-root": {
                    textTransform: "none",
                    minWidth: "auto",
                    px: 2,
                    py: 1,
                  },
                  "& .Mui-selected": {
                    color: "primary.main",
                  },
                }}
              >
                <Tab
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      All
                      <Chip
                        label={proposals.length}
                        size="small"
                        sx={{
                          ml: 1,
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.1
                          ),
                          color: "primary.main",
                        }}
                      />
                    </Box>
                  }
                />
                <Tab label="Sent" />
                <Tab label="Viewed" />
                <Tab label="Accepted" />
                <Tab label="Rejected" />
              </Tabs>

              <Box>
                <Tooltip title="Refresh">
                  <IconButton onClick={handleRefresh} sx={{ mr: 1 }}>
                    <RefreshIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Sort">
                  <IconButton onClick={handleSortClick}>
                    <SortIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {filteredProposals.map((proposal) => (
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
                  //isUnread={proposal.isUnread}
                  onView={() => handleViewProposal(proposal.id)}
                  onEdit={() => handleEditProposal(proposal.id)}
                />
              ))}
            </Box>

            {filteredProposals.length === 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  py: 10,
                  textAlign: "center",
                }}
              >
                <SearchIcon
                  sx={{ fontSize: 60, color: "text.disabled", mb: 2 }}
                />
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  No proposals found
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Try adjusting your search or filter criteria
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleNewProposal}
                  sx={{
                    backgroundColor: "primary.main",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Create New Proposal
                </Button>
              </Box>
            )}
          </Container>
        </Box>
      </Box>
      <MobileNav />
    </>
  );
};

export default Proposals;
