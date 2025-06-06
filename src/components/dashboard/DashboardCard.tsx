import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color?: string;
  trend?: "up" | "down";
  trendValue?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
  color = "yogig.primary",
  trend,
  trendValue,
}) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        height: "100%",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textTransform: "uppercase", fontWeight: "medium" }}
            >
              {title}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
              {value}
            </Typography>
            {trend && trendValue && (
              <Typography
                variant="caption"
                sx={{
                  color: trend === "up" ? "yogig.accent" : "error.main",
                  display: "flex",
                  alignItems: "center",
                  mt: 0.5,
                }}
              >
                {trend === "up" ? "↑" : "↓"} {trendValue}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              bgcolor: `${color}20`,
              color: color,
              p: 1.5,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
