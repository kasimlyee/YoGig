import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Avatar,
} from "@mui/material";
import { LocationOn, AttachMoney, Schedule } from "@mui/icons-material";

interface JobCardProps {
  title: string;
  description: string;
  budget: string;
  location: string;
  postedTime: string;
  tags: string[];
  onApply: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  description,
  budget,
  location,
  postedTime,
  tags,
  onApply,
}) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        mb: 2,
        "&:hover": {
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <Chip
            label={budget}
            icon={<AttachMoney fontSize="small" />}
            sx={{ bgcolor: "#EEF2FF", color: "yogig.primary" }}
          />
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
          <Chip
            label={location}
            icon={<LocationOn fontSize="small" />}
            size="small"
            variant="outlined"
          />
          <Chip
            label={postedTime}
            icon={<Schedule fontSize="small" />}
            size="small"
            variant="outlined"
          />
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{ bgcolor: "#F3F4F6", color: "yogig.dark" }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ width: 32, height: 32, mr: 1 }}>C</Avatar>
            <Typography variant="body2">Client Name</Typography>
          </Box>
          <Button
            variant="contained"
            onClick={onApply}
            sx={{
              bgcolor: "yogig.primary",
              "&:hover": { bgcolor: "yogig.primary" },
            }}
          >
            Apply
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
