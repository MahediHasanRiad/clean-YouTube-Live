import Grid from "@mui/material/Grid";
import CardView from "../components/UI/card";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";
import { removeFavourite } from "../components/features/favourite/favouriteSlice";

function Favourite() {
  const allPlaylist = useSelector((state) => state.Playlist.playlists);
  const favourite = useSelector((state) => state.Favourite.favourites);
  const dispatch = useDispatch();


  // find playlist from the favourite PlaylistId
  const favouritePlaylist = allPlaylist.filter((p) => {
    if(favourite.includes(p.playlistId)){
      return p
    }
    return 
  });


  return (
    <Box sx={{ marginLeft: "7%", marginTop: '2%' }}>
      <Typography variant="h6" sx={{ marginBottom: "10px" }}>
        Favourite:
      </Typography>
      <Grid container spacing={2}>
        {favouritePlaylist.length === 0 && <Box>No Favourite Item Added</Box>}
        {favouritePlaylist.map((item, index) => (
        <CardView
          key={index}
          playlistId={item.playlistId}
          img={item.playlistThumbnail.url}
          channelName={item.channelName}
          playlistName={item.playlistTitle}
          removeItem = {() => dispatch(removeFavourite(item.playlistId))}
        />
      ))}
      </Grid>
    </Box>
  );
}

export default Favourite;
