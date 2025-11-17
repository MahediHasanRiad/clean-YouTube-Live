import Grid from "@mui/material/Grid";
import CardView from "../components/UI/card";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";
import { removePlaylist } from "../components/features/playlist/playlistSlice";
import { addFavourite } from "../components/features/favourite/favouriteSlice";

function Playlist() {
  const allPlaylist = useSelector((state) => state.Playlist.playlists);
  const dispatch = useDispatch()

  return (
    <Box sx={{ marginLeft: "7%", marginTop: '2%' }}>
      <Typography variant="h6" sx={{ marginBottom: "10px" }}>
        Playlist:
      </Typography>
      <Grid container spacing={2}>
        {allPlaylist.length === 0 && <Box>No Playlist Added</Box>}
        {allPlaylist.map((item, index) => (
          <CardView
            key={index}
            playlistId={item.playlistId}
            img={item.playlistThumbnail.url}
            channelName={item.channelName}
            playlistName={item.playlistTitle}
            addItem = {() => dispatch(addFavourite(item.playlistId))}
            removeItem={() => dispatch(removePlaylist(item.playlistId))}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Playlist;
