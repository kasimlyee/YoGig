import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import {
  AttachMoney as MoneyIcon,
  History as HistoryIcon,
  Add as AddIcon,
} from "@mui/icons-material";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import MobileNav from "@/components/layout/MobileNav";
import MobileMoneyCard from "@/components/shared/MobileMoneyCard";

const Wallet: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Sample transaction data
  const transactions = [
    {
      id: 1,
      date: "2023-05-15",
      description: "Payment for Website Development",
      amount: "UGX 1,250,000",
      status: "Completed",
    },
    {
      id: 2,
      date: "2023-05-10",
      description: "Withdrawal to MTN Mobile Money",
      amount: "UGX 800,000",
      status: "Completed",
    },
    {
      id: 3,
      date: "2023-05-05",
      description: "Payment for Mobile App Design",
      amount: "UGX 1,800,000",
      status: "Completed",
    },
  ];

  return (
    <>
      <Head>
        <title>YoGig | Wallet</title>
        <meta name="description" content="Manage your YoGig wallet" />
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
                Wallet
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage your earnings and withdrawals
              </Typography>
            </Box>

            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              sx={{ mb: 3 }}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Overview" />
              <Tab label="Withdraw" />
              <Tab label="Transaction History" />
            </Tabs>

            {tabValue === 0 && (
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-8">
                  <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Current Balance
                    </Typography>
                    <Typography variant="h3" sx={{ mb: 2 }}>
                      UGX 3,450,000
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<MoneyIcon />}
                      sx={{
                        bgcolor: "yogig.primary",
                        "&:hover": { bgcolor: "yogig.primary" },
                      }}
                    >
                      Withdraw Funds
                    </Button>
                  </Paper>

                  <Paper sx={{ p: 3, borderRadius: 2 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Earnings Overview
                    </Typography>
                    {/* Chart would go here */}
                    <Box
                      sx={{
                        height: 300,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "#F3F4F6",
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="body1" color="text.secondary">
                        Earnings Chart Placeholder
                      </Typography>
                    </Box>
                  </Paper>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Payout Method
                    </Typography>
                    <MobileMoneyCard
                      provider="MTN"
                      number="0784 071 324"
                      isDefault
                    />
                    <MobileMoneyCard
                      provider="Airtel"
                      number="0701 521 269"
                      isDefault={false}
                    />
                    <Button
                      variant="outlined"
                      startIcon={<AddIcon />}
                      fullWidth
                      sx={{
                        mt: 2,
                        color: "yogig.primary",
                        borderColor: "yogig.primary",
                        "&:hover": { borderColor: "yogig.primary" },
                      }}
                    >
                      Add Payout Method
                    </Button>
                  </Paper>

                  <Paper sx={{ p: 3, borderRadius: 2 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Quick Stats
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        This Month
                      </Typography>
                      <Typography variant="h6">UGX 1,250,000</Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Last Month
                      </Typography>
                      <Typography variant="h6">UGX 950,000</Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Total Earnings
                      </Typography>
                      <Typography variant="h6">UGX 8,750,000</Typography>
                    </Box>
                  </Paper>
                </div>
              </div>
            )}

            {tabValue === 2 && (
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
                    Transaction History
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<HistoryIcon />}
                    sx={{
                      color: "yogig.primary",
                      borderColor: "yogig.primary",
                      "&:hover": { borderColor: "yogig.primary" },
                    }}
                  >
                    Export History
                  </Button>
                </Box>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>{transaction.description}</TableCell>
                          <TableCell align="right">
                            {transaction.amount}
                          </TableCell>
                          <TableCell>
                            <Box
                              sx={{
                                display: "inline-block",
                                bgcolor:
                                  transaction.status === "Completed"
                                    ? "#D1FAE5"
                                    : "#FEE2E2",
                                color:
                                  transaction.status === "Completed"
                                    ? "#065F46"
                                    : "#B91C1C",
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 1,
                                fontSize: "0.75rem",
                              }}
                            >
                              {transaction.status}
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            )}
          </Container>
        </Box>
      </Box>
      <MobileNav />
    </>
  );
};

export default Wallet;
