import { IconButton } from "@mui/material";
import { UserRoundPen } from "lucide-react";

function UserIcon() {
  return (
    <IconButton
      sx={{
        transition: "all 0.3s ease",
        background: "linear-gradient(135deg, #ff0000 0%, #cc0000 100%)",
        color: "#fff",
        borderRadius: "50%",
        padding: "8px",
        "&:hover": {
          background: "linear-gradient(135deg, #cc0000 0%, #990000 100%)",
          transform: "scale(1.05)",
        },
      }}
    >
      <UserRoundPen size={20} />
    </IconButton>
  );
}

export default UserIcon;
