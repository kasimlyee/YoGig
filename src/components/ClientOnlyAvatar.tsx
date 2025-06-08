
import React from "react";
import { Avatar } from "@mui/material";

type ClientOnlyAvatarProps = {
  user: {
    name: string;
    email: string;
    avatar?: string;
    role: string;
  };
};

const ClientOnlyAvatar: React.FC<ClientOnlyAvatarProps> = ({ user }) => {
  return (
    <Avatar sx={{ width: 32, height: 32 }} src={user.avatar}>
      {user.name.charAt(0)}
    </Avatar>
  );
};

export default ClientOnlyAvatar;
