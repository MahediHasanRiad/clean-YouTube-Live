import { TextField, IconButton, Box } from "@mui/material";
import { Search } from "lucide-react";

function InputPlaylist({ handleInput, value, savePlaylistid }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        display: "flex",
        alignItems: "center",
      }}
    >
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
  );
}

export default InputPlaylist;
