import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Check, Info, CircleX, Plus } from "lucide-react";
import { Box } from "@mui/material";
import { fetchPlaylist } from "../../features/playlist/playlistSlice";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import Youtube from "../../../utils/header/youtube-button";
import MenuBtn from "../../../utils/header/icon-btn";
import InputPlaylist from "../../../utils/header/input";
import MicIcon from "../../../utils/header/mic-icon";
import CreateText from "../../../utils/header/create";
import BellIcon from "../../../utils/header/bell-icon";
import UserIcon from "../../../utils/header/user-icon";

function Header({ toggleMenu }) {
  const [value, setValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  // for notify
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMsg, setAlertMsg] = useState("");
  const [Icon, setIcon] = useState(Check);

  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.Playlist.playlists);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const savePlaylistid = (e) => {
    e.preventDefault();

    // get (playlistId) from Playlist
    const url = new URL(value);
    const params = new URLSearchParams(url.search);
    const getPlaylistId = params.get("list");

    if (!Array.isArray(playlists)) {
      console.error("playlists is not an array:", playlists);
      return;
    }
    if (value === "") {
      setIcon(CircleX);
      setAlertType("error");
      setAlertMsg("Please enter a playlist ID");
      setOpen(true);
    }
    // playlist exist or not ???
    const exists = playlists.find((p) => p.playlistId === getPlaylistId);

    if (!exists && value.trim() !== "") {
      dispatch(fetchPlaylist(getPlaylistId));
      setValue("");

      setIcon(Check);
      setAlertType("success");
      setAlertMsg("Playlist Added successfully.");
      setOpen(true);
    }
     if (exists) {
      setIcon(Info);
      setAlertType("info");
      setAlertMsg("Playlist Already Exists !!!");
      setOpen(true);
    } 
  };

  return (
    <Box
      sx={{
        margin: "0",
        padding: { xs: "12px 16px", sm: "12px 24px" },
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
        flexWrap: { xs: "wrap", md: "nowrap" }, // Allow wrapping on mobile
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          minWidth: "fit-content",
          order: { xs: 1, md: 1 }, // Flex order
        }}
      >
        <MenuBtn toggleMenu={toggleMenu} />
        <Youtube />
      </Box>

      {/* Middle Section - Search */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: 1 }, // Take full width on mobile
          minWidth: { xs: "auto", md: "300px" }, // Responsive min-width
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          order: { xs: 3, md: 2 }, // Move to 3rd position (new line) on mobile
          marginTop: { xs: "12px", md: 0 }, // Add margin-top when wrapped
        }}
      >
        <InputPlaylist
          handleInput={handleInput}
          value={value}
          savePlaylistid={savePlaylistid}
        />
        <MicIcon />
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          minWidth: "fit-content",
          order: { xs: 2, md: 3 }, // Move to 2nd position on mobile
        }}
      >
        <Box
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            background: "linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            // Responsive padding (icon-only on mobile)
            padding: { xs: "8px", sm: "8px 16px" },
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(135deg, #e8e8e8 0%, #dcdcdc 100%)",
              transform: "scale(1.02)",
            },
          }}
        >
          <Plus size={20} />
          <CreateText />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <BellIcon />
          <UserIcon />
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
