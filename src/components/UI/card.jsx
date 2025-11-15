import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { Heart } from "lucide-react";
import { Trash } from "lucide-react";

export default function MediaCard() {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Playlist Name
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            By channel name
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Box>
            <Button size="small">View Playlist...</Button>
          </Box>
          <Box sx={{ paddingRight: '5px' }}>
            <IconButton size="small" onClick={() => ''}>
              <Heart  color='#1976d2'/>
            </IconButton>
            <IconButton size="small" onClick={() => ''}>
              <Trash  color='#1976d2'/>
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}
