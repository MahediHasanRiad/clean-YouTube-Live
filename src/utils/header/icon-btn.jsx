import { IconButton } from "@mui/material";
import { Menu } from "lucide-react";

function MenuBtn({ toggleMenu }) {
  return (
    <IconButton
      onClick={() => toggleMenu()}
      sx={{
        transition: "all 0.3s ease",
        "&:hover": {
          background: "rgba(0, 0, 0, 0.08)",
        },
      }}
    >
      <Menu size={24} />
    </IconButton>
  );
}

export default MenuBtn;
