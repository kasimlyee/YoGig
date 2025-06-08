import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Avatar,
  useTheme,
  alpha,
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
  clientName?: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  description,
  budget,
  location,
  postedTime,
  tags,
  onApply,
  clientName = "Client",
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: theme.shadows[1],
        mb: 2,
        transition: theme.transitions.create("box-shadow"),
        "&:hover": {
          boxShadow: theme.shadows[4],
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ fontFamily: '"Poppins", sans-serif' }}
          >
            {title}
          </Typography>
          <Chip
            label={budget}
            icon={<AttachMoney fontSize="small" />}
            sx={{
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              color: "primary.main",
              fontWeight: 500,
            }}
          />
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: 1.6 }}
        >
          {description}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
          <Chip
            label={location}
            icon={<LocationOn fontSize="small" />}
            size="small"
            variant="outlined"
            sx={{ color: "text.secondary" }}
          />
          <Chip
            label={postedTime}
            icon={<Schedule fontSize="small" />}
            size="small"
            variant="outlined"
            sx={{ color: "text.secondary" }}
          />
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                bgcolor: "action.hover",
                color: "text.secondary",
              }}
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
            <Avatar
              sx={{
                width: 32,
                height: 32,
                mr: 1,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                fontSize: "0.875rem",
              }}
            >
              {clientName.charAt(0)}
            </Avatar>
            <Typography variant="body2" color="text.secondary">
              {clientName}
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={onApply}
            sx={{
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.dark",
              },
              textTransform: "none",
              fontWeight: 600,
              px: 3,
            }}
          >
            Apply Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
