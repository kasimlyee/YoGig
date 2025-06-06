import React from "react";
import { Box, Typography, Paper, Avatar, Button, Chip } from "@mui/material";
import {
  CheckCircle as AcceptedIcon,
  Cancel as RejectedIcon,
  Visibility as ViewedIcon,
  Send as SentIcon,
  Edit as EditIcon,
} from "@mui/icons-material";

interface ProposalListItemProps {
  jobTitle: string;
  clientName: string;
  submittedDate: string;
  status: "sent" | "viewed" | "accepted" | "rejected";
  budget: string;
  onView: () => void;
  onEdit: () => void;
}

const ProposalListItem: React.FC<ProposalListItemProps> = ({
  jobTitle,
  clientName,
  submittedDate,
  status,
  budget,
  onView,
  onEdit,
}) => {
  const getStatusData = () => {
    switch (status) {
      case "sent":
        return { icon: <SentIcon />, color: "#9CA3AF", label: "Sent" };
      case "viewed":
        return { icon: <ViewedIcon />, color: "#3B82F6", label: "Viewed" };
      case "accepted":
        return {
          icon: <AcceptedIcon />,
          color: "#10B981",
          label: "Accepted",
        };
      case "rejected":
        return {
          icon: <RejectedIcon />,
          color: "#EF4444",
          label: "Rejected",
        };
      default:
        return { icon: <SentIcon />, color: "#9CA3AF", label: "Sent" };
    }
  };

  const statusData = getStatusData();

  return (
    <Paper
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 2,
        "&:hover": {
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: "yogig.primary", mr: 2 }}>C</Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight="medium">
              {jobTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {clientName} • Submitted {submittedDate}
            </Typography>
          </Box>
        </Box>
        <Chip
          icon={statusData.icon}
          label={statusData.label}
          sx={{
            bgcolor: `${statusData.color}20`,
            color: statusData.color,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography variant="body1" fontWeight="medium">
          {budget}
        </Typography>
        <Box>
          <Button
            variant="outlined"
            size="small"
            onClick={onView}
            sx={{
              mr: 1,
              color: "yogig.primary",
              borderColor: "yogig.primary",
              "&:hover": { borderColor: "yogig.primary" },
            }}
          >
            View
          </Button>
          {status !== "accepted" && status !== "rejected" && (
            <Button
              variant="contained"
              size="small"
              startIcon={<EditIcon />}
              onClick={onEdit}
              sx={{
                bgcolor: "yogig.primary",
                "&:hover": { bgcolor: "yogig.primary" },
              }}
            >
              Edit
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default ProposalListItem;
