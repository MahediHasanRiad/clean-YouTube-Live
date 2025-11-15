import { Menu, Search } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { Box, TextField, Typography, IconButton } from "@mui/material";
import { Mic } from "lucide-react";
import { Plus } from "lucide-react";
import { Bell } from "lucide-react";
import { UserRoundPen } from "lucide-react";

function Header({ toggleMenu }) {

  return (
    <section
      style={{
        margin: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      {/* left section */}
      <section style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Menu size={30} onClick={() => toggleMenu()} style={{ cursor: "pointer" }}/>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaYoutube color="red" size={40} />
          <Typography variant="h6" sx={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: '-0.06em' }}>
            YouTube
          </Typography>
        </div>
      </section>

      {/* middle section */}
      <section style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Box sx={{ width: "600px", display: "flex", alignItems: "center" }}>
          <TextField
            fullWidth
            placeholder="Input Playlist..."
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px 0px 0px 30px",
              },
            }}
          />
          <IconButton
            sx={{
              backgroundColor: "#f0f0f0",
              borderRadius: "0px 30px 30px 0px",
              padding: "10px 15px",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            <Search size={24} />
          </IconButton>
        </Box>
        <IconButton
          sx={{
            backgroundColor: "#78767648",
            borderRadius: "50%",
            padding: "12px",
            "&:hover": {
              backgroundColor: "#6b6b6b7a",
            },
          }}
        >
          <Mic size={24} />
        </IconButton>
      </section>

      {/* right section */}
      <section style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            backgroundColor: "#cec9c9ff",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          <Plus size={30} />
          <Typography variant="body1" sx={{ fontSize: "1rem" }}>
            Create
          </Typography>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Bell size={30} style={{ cursor: "pointer" }} />
          <UserRoundPen size={30} style={{ cursor: "pointer" }} />
        </div>
      </section>
    </section>
  );
}

export default Header;
