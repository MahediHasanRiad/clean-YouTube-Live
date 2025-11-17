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
    <Box sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ height: "auto", marginBottom: 3 }}> 
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            letterSpacing: "-0.04em",
            fontSize: { xs: "2rem", sm: "2.5rem" }, 
            marginBottom: "10px",
          }}
        >
          Watch History
        </Typography>
        {/* Wrapper for buttons to ensure they wrap nicely on mobile */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 2 }}>
          <HistoryButton text={"All"} />
          <HistoryButton text={"Videos"} />
          <HistoryButton text={"Sorts"} />
          <HistoryButton text={"Podcast"} />
          <HistoryButton text={"Music"} />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' } }}> {/* Stacks on mobile */}
        <Grid 
          direction={"column"} 
          container 
          spacing={2} 
          sx={{ width: { xs: '100%', md: '60%' } }} // Responsive width
        >
          {getVideo.length === 0 && (
            <Typography sx={{ padding: 3, color: 'text.secondary', width: '100%' }}>
              No watch History
            </Typography>
          )}
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
        {/* right section (was 'left section' in comment) */}
        <Box
          component="form"
          sx={{
            // Responsive layout. Stacks under with margin-top on mobile.
            marginLeft: { xs: 0, md: "10%" },
            marginTop: { xs: 4, md: 0 },
            width: { xs: '100%', md: 'auto' } // Responsive width
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{ display: "flex", alignItems: "center", width: '100%' }}>
            <Search />
            <TextField
              id="standard-textarea"
              placeholder="Search history" // Changed placeholder
              variant="standard"
              sx={{ flex: 1, marginLeft: 1 }} // Simpler styling
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