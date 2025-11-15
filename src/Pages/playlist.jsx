import Grid from "@mui/material/Grid";
import CardView from "../components/UI/card";
import { useEffect } from "react";
import getPlaylist from "../components/API";

function Playlist() {
  useEffect( () => {
    (async () => {
       await getPlaylist("PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS")
    })()
  }, []);

  return (
    <Grid container spacing={2}>
      <CardView />
      <CardView />
      <CardView />
      <CardView />
      <CardView />
    </Grid>
  );
}

export default Playlist;
