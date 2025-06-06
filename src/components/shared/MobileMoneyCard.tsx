import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";

interface MobileMoneyCardProps {
  provider: string;
  number: string;
  isDefault: boolean;
}

const MobileMoneyCard: React.FC<MobileMoneyCardProps> = ({
  provider,
  number,
  isDefault,
}) => {
  const getProviderColor = () => {
    switch (provider.toLowerCase()) {
      case "mtn":
        return "#FFC107"; // Yellow for MTN
      case "airtel":
        return "#E53935"; // Red for Airtel
      default:
        return "#4F46E5"; // Default YoGig primary
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        mb: 2,
        bgcolor: "#F3F4F6",
        borderRadius: 1,
        border: isDefault ? "2px solid #4F46E5" : "none",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          sx={{
            bgcolor: getProviderColor(),
            mr: 2,
            width: 40,
            height: 40,
          }}
        >
          {provider.charAt(0)}
        </Avatar>
        <Box>
          <Typography variant="subtitle1" fontWeight="medium">
            {provider} Mobile Money
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {number}
          </Typography>
          {isDefault && (
            <Typography
              variant="caption"
              sx={{
                display: "inline-block",
                bgcolor: "#E0E7FF",
                color: "yogig.primary",
                px: 1,
                py: 0.5,
                borderRadius: 1,
                mt: 0.5,
              }}
            >
              Default
            </Typography>
          )}
        </Box>
      </Box>
      <IconButton>
        <EditIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default MobileMoneyCard;
