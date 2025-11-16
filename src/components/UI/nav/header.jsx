import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Check, Menu, Search, Info, CircleX, Mic, Plus, Bell, UserRoundPen } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { Box, TextField, Typography, IconButton } from "@mui/material";
import { fetchPlaylist } from "../../features/playlist/playlistSlice";
import Alert from "@mui/material/Alert";
import {Snackbar} from "@mui/material";


function Header({ toggleMenu }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  // for Popup
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMsg, setAlertMsg] = useState("");
  const [Icon, setIcon] = useState(Check);

  // get playlist from Store
  const playlists = useSelector((state) => state.Playlist.playlists);


  // handler Input
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  // submit playlist
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

      setIcon(Check)
      setAlertType("success");
      setAlertMsg(
        "Playlist Added successfully."
      );
      setOpen(true);
    } else if (exists) {
      setIcon(Info)
      setAlertType("info");
      setAlertMsg("Playlist Already Exists !!!");
      setOpen(true);
    } else {
      setIcon(CircleX)
      setAlertType("error");
      setAlertMsg("Please enter a playlist ID");
      setOpen(true);
    }
  };

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
        <Menu
          size={30}
          onClick={() => toggleMenu()}
          style={{ cursor: "pointer" }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaYoutube color="red" size={40} />
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.5rem",
              fontWeight: 600,
              letterSpacing: "-0.06em",
            }}
          >
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
            onChange={handleInput}
            value={value}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px 0px 0px 30px",
              },
            }}
          />
          <IconButton
            onClick={savePlaylistid}
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

      {/* popup notification start */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "button", horizontal: "center" }}
      >
        <Alert icon={<Icon fontSize="inherit" />} severity={alertType}>
          {alertMsg}
        </Alert>
      </Snackbar>
      {/* popup notification end */}
    </section>
  );
}

export default Header;
