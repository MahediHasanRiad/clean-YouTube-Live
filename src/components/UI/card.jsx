import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { Check, CircleX, Heart } from "lucide-react";
import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { removePlaylist } from "../features/playlist/playlistSlice";
import { addFavourite } from "../features/favourite/favouriteSlice";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

export default function CardView({
  playlistId,
  img,
  playlistName,
  channelName,
  addItem = '',
  removeItem = ''
}) {
  
  // for Popup
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMsg, setAlertMsg] = useState("");
  const [Icon, setIcon] = useState(Check);


  // Check if this playlist is in favorites (from Redux store)
  const favourite = useSelector((state) => state.Favourite.favourites);
  const isFavourite = favourite.includes(playlistId)
  
  

  const deletePlaylist = () => {
    removeItem() // pass dispatch using props

    setOpen(true);
    setAlertType("warning");
    setAlertMsg("Successfully Deleted !");
    setIcon(CircleX);
  };

  const addFavouriteItem = () => {
    addItem() // pass dispatch using props
    
    setOpen(true);
    setAlertType("success");
    setAlertMsg("Add to Favourite");
    setIcon(Check);
  };

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Card sx={{ maxWidth: "100%", height: "400px"}}>
        <CardMedia sx={{ height: 240 }} image={img} title={playlistName} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {playlistName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            By {channelName}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Box>
            <Button size="small">View Playlist...</Button>
          </Box>
          <Box sx={{ paddingRight: "5px" }}>
            <IconButton size="small" onClick={addFavouriteItem}>
              <Heart
                fill={isFavourite ? "#ca1919a6" : "none"}
                color={isFavourite ? "#ca191996" : "#1976d2"}
              />
            </IconButton>
            <IconButton size="small" onClick={deletePlaylist}>
              <Trash color="#1976d2" />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
      {/* popup notification start */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "buttom", horizontal: "center" }}
      >
        <Alert icon={<Icon fontSize="inherit" />} severity={alertType}>
          {alertMsg}
        </Alert>
      </Snackbar>
      {/* popup notification end */}
    </Grid>
  );
}
