import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";



export default function HistoryCard() {
  return (
    <Grid>
      <Card sx={{ display: "flex", cursor: "pointer" }} onClick={() => ""}>
        <CardMedia
          component="img"
          sx={{ width: "50%" }}
          image="/static/images/cards/live-from-space.jpg"
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary", marginTop: "5px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              obcaecati voluptatum voluptatibus qui, placeat laboriosam a beatae
              doloremque nulla eveniet.
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
}
