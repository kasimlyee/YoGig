import React from "react";
import { Box, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";

interface SuccessRateCircleProps {
  value: number;
  size?: number;
  thickness?: number;
}

const SuccessRateCircle: React.FC<SuccessRateCircleProps> = ({
  value,
  size = 120,
  thickness = 6,
}) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={100}
        size={size}
        thickness={thickness}
        sx={{
          color: "#F3F4F6",
          position: "absolute",
        }}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        thickness={thickness}
        sx={{
          color: "yogig.accent",
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          color="text.primary"
          sx={{ fontWeight: "bold" }}
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default SuccessRateCircle;
