import { IconButton } from "@mui/material";
import { Bell } from "lucide-react";

function BellIcon() {
  return (
    <IconButton
      sx={{
        transition: "all 0.3s ease",
        "&:hover": {
          background: "rgba(0, 0, 0, 0.08)",
          transform: "scale(1.1)",
        },
      }}
    >
      <Bell size={20} />
    </IconButton>
  );
}

export default BellIcon;
