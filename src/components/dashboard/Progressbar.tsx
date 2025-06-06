import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

interface ProgressBarProps {
  value: number;
  label: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  color = "primary",
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        color={color}
        sx={{
          height: 8,
          borderRadius: 4,
        }}
      />
    </Box>
  );
};

export default ProgressBar;
