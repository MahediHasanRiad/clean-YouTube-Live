import Box from "@mui/material/Box";
import HistoryCard from "../components/UI/history/history-card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HistoryButton from "../utils/button";
import TextField from "@mui/material/TextField";
import { Trash } from "lucide-react";
import { Pause } from "lucide-react";
import { Settings } from "lucide-react";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import HistoryMenuItem from "../components/UI/history/history-menu";
import { removeAllHistory } from "../components/features/history/HistorySlice";

function History() {
  const dispatch = useDispatch();

  const playlists = useSelector((state) => state.Playlist.playlists);
  const allHistory = useSelector((state) => state.History.history);
  const { playlistId, videoId, index } = allHistory;

  // allHistory is an object with playlistId and videoId arrays
  const getVideoPlaylist = playlists.filter((item) =>
    playlistId.includes(item.playlistId)
  );

  const getVideo =
    getVideoPlaylist[0]?.playlistItems.filter((item) =>
      videoId.includes(item.videoId)
    ) || [];

  // confirm to delete
  const handleClearHistory = () => {
    if (window.confirm("Are you sure you want to clear all history?")) {
      dispatch(removeAllHistory());
    }
  };

  return (
    <Box sx={{ marginLeft: "7%" }}>
      <Box sx={{ height: "150px" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            letterSpacing: "-0.04em",
            fontSize: "2.5rem",
            marginBottom: "10px",
          }}
        >
          Watch History
        </Typography>
        <HistoryButton text={"All"} />
        <HistoryButton text={"Videos"} />
        <HistoryButton text={"Sorts"} />
        <HistoryButton text={"Podcast"} />
        <HistoryButton text={"Music"} />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Grid direction={"column"} container spacing={2} sx={{ width: "60%" }}>
          {getVideo.length === 0 && <Box>No watch History</Box>}
          {getVideo.length > 0 &&
            getVideo.map((item, index) => (
              // show history
              <HistoryCard
                key={index}
                img={item.thumbnail.url}
                title={item.title}
                playlistId={playlistId}
                videoId={videoId}
                index={index}
              />
            ))}
        </Grid>
        {/* left section  */}
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            marginLeft: "10%",
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Search />
            <TextField
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="standard"
            />
          </Box>
          <br />
          <HistoryMenuItem
            icon={Trash}
            text={"Clear All watch history"}
            disabled={false}
            onClick={handleClearHistory}
          />
          <HistoryMenuItem icon={Pause} text={"Pause watch history"} />
          <HistoryMenuItem icon={Settings} text={"Manage All history"} />
        </Box>
      </Box>
    </Box>
  );
}

export default History;
