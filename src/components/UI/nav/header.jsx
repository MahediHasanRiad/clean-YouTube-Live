import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Check, Menu, Search, Info, CircleX, Mic, Plus, Bell, UserRoundPen } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { Box, TextField, Typography, IconButton } from "@mui/material";
import { fetchPlaylist } from "../../features/playlist/playlistSlice";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import { Link } from "react-router-dom";

function Header({ toggleMenu }) {
  const [value, setValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMsg, setAlertMsg] = useState("");
  const [Icon, setIcon] = useState(Check);

  const playlists = useSelector((state) => state.Playlist.playlists);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const savePlaylistid = (e) => {
    e.preventDefault();

    if (!Array.isArray(playlists)) {
      console.error("playlists is not an array:", playlists);
      return;
    }
    const exists = playlists.find((p) => p.playlistId === value);

    if (!exists && value.trim() !== "") {
      dispatch(fetchPlaylist(value));
      setValue("");

      setIcon(Check);
      setAlertType("success");
      setAlertMsg("Playlist Added successfully.");
      setOpen(true);
    } else if (exists) {
      setIcon(Info);
      setAlertType("info");
      setAlertMsg("Playlist Already Exists !!!");
      setOpen(true);
    } else {
      setIcon(CircleX);
      setAlertType("error");
      setAlertMsg("Please enter a playlist ID");
      setOpen(true);
    }
  };

  return (
    <Box
      sx={{
        margin: "0",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {/* Left Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "16px", minWidth: "fit-content" }}>
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

        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaYoutube color="#ff0000" size={32} />
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.3rem",
              fontWeight: 700,
              letterSpacing: "-0.05em",
              color: "#030303",
            }}
          >
            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>YouTube</Link>
          </Typography>
        </Box>
      </Box>

      {/* Middle Section - Search */}
      <Box sx={{ flex: 1, minWidth: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box sx={{ width: "100%", maxWidth: "600px", display: "flex", alignItems: "center" }}>
          <TextField
            fullWidth
            placeholder="Input Playlist ID..."
            size="small"
            onChange={handleInput}
            value={value}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "24px 0 0 24px",
                background: "#f0f0f0",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "#ececec",
                },
                "&.Mui-focused": {
                  background: "#fff",
                  "& fieldset": {
                    borderColor: "#1976d2 !important",
                  },
                },
              },
              "& .MuiOutlinedInput-input::placeholder": {
                opacity: 0.6,
              },
            }}
          />
          <IconButton
            onClick={savePlaylistid}
            sx={{
              backgroundColor: "#f0f0f0",
              borderRadius: "0 24px 24px 0",
              padding: "10px 16px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#1976d2",
                "& svg": {
                  color: "#fff",
                },
              },
            }}
          >
            <Search size={20} />
          </IconButton>
        </Box>

        <IconButton
          sx={{
            marginLeft: "12px",
            background: "linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)",
            borderRadius: "50%",
            padding: "10px",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(135deg, #e8e8e8 0%, #dcdcdc 100%)",
              transform: "scale(1.05)",
            },
          }}
        >
          <Mic size={20} />
        </IconButton>
      </Box>

      {/* Right Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px", minWidth: "fit-content" }}>
        <Box
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            background: "linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(135deg, #e8e8e8 0%, #dcdcdc 100%)",
              transform: "scale(1.02)",
            },
          }}
        >
          <Plus size={20} />
          <Typography 
            variant="body2" 
            sx={{ 
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#030303",
            }}
          >
            Create
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
        </Box>
      </Box>

      {/* Snackbar Notification */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert icon={<Icon fontSize="inherit" />} severity={alertType}>
          {alertMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Header;